# Natakahii Cargo Interconnection Draft

## Goal

Build `cargo-frontend` and `cargo-backend` as a real cargo product that can:

1. receive shipment work from the existing Natakahii marketplace,
2. operate as a standalone cargo service for third-party clients,
3. keep branding consistent with the main Natakahii experience.

## Recommended system boundary

Use `cargo-backend` as the cargo operations service, not only a UI-specific backend.

- `natakahii-backend` remains the commerce system for marketplace users, checkout, orders, and product-side workflows.
- `cargo-backend` should become the cargo system of record for:
  - shipment intake,
  - fulfillment centers,
  - route planning,
  - tracking events,
  - delivery runs,
  - proof of delivery,
  - direct cargo customers outside the marketplace.

This keeps cargo independent enough to serve non-marketplace business later.

## How the two systems should connect

### For marketplace-driven shipments

1. Customer checks out on Natakahii and selects Natakahii Cargo.
2. `natakahii-backend` creates the order and calls an internal cargo endpoint in `cargo-backend`.
3. `cargo-backend` creates a shipment using source metadata such as:
   - `source_system = natakahii`
   - `external_order_id`
   - `external_customer_id`
   - recipient details
   - delivery address
   - item summary
   - weight and service level
4. `cargo-backend` runs the shipment lifecycle.
5. `cargo-backend` sends status updates back to `natakahii-backend` so the marketplace customer still sees the shipment inside the main order experience.

### For standalone cargo jobs

1. A direct cargo customer creates a booking in `cargo-frontend`.
2. `cargo-backend` creates the shipment without any dependency on `natakahii-backend`.
3. Tracking, invoicing, delivery runs, and delivery proof stay fully inside the cargo stack.

## Current project context already available

The current `natakahii-backend` already has cargo-related logic that can guide the first integration:

- shipping quotes:
  - `POST /api/v1/shipping/quotes`
- vendor dropoffs:
  - `POST /api/v1/vendor/dropoffs`
  - `GET /api/v1/vendor/dropoffs`
- cargo operations:
  - `GET /api/v1/cargo/fulfillment-centers`
  - `GET /api/v1/cargo/dropoffs`
  - `POST /api/v1/cargo/dropoffs/{dropoff}/receive`
  - `POST /api/v1/cargo/dropoffs/{dropoff}/qc/start`
  - `POST /api/v1/cargo/dropoffs/{dropoff}/qc/complete`
  - `POST /api/v1/cargo/shipments`
  - `POST /api/v1/cargo/shipments/{shipment}/tracking-events`
  - `POST /api/v1/cargo/shipments/{shipment}/mark-delivered`
  - `GET /api/v1/shipments/{shipment}/tracking`

That means the data model direction is already visible: `dropoffs`, `cargo_shipments`, `tracking_events`, `delivery_runs`, and `fulfillment_centers`.

## Recommended first implementation phases

### Phase 1: public cargo presence

- landing page
- route coverage messaging
- shipment inquiry capture
- contact and partnership funnel
- public tracking entry point

### Phase 2: shared shipment handoff

- add internal authenticated API between `natakahii-backend` and `cargo-backend`
- create cargo shipment records from marketplace orders
- sync tracking status back to Natakahii order history
- define shared shipment status mapping

Suggested status mapping:

- `pending`
- `received`
- `qc_in_progress`
- `qc_passed`
- `scheduled`
- `in_transit`
- `out_for_delivery`
- `delivered`
- `failed_delivery`
- `returned`

### Phase 3: standalone cargo operations

- direct quote requests in `cargo-frontend`
- direct booking flow
- standalone customer accounts
- partner and fleet management
- regional route pricing
- proof of delivery and invoice history

## Data fields cargo-backend should own early

For connected and standalone modes, add these fields near the shipment boundary:

- `source_system`
- `source_channel`
- `external_order_id`
- `external_reference`
- `sender_name`
- `sender_phone`
- `recipient_name`
- `recipient_phone`
- `pickup_address`
- `destination_address`
- `service_level`
- `weight_kg`
- `declared_value`
- `current_status`
- `last_status_synced_at`

## Frontend direction after the landing page

After this landing page, the next cargo frontend screens should be:

1. public tracking page,
2. shipment quote request page,
3. direct booking page,
4. partner or business onboarding page,
5. operations dashboard for cargo staff.

## Important product rule

Do not make `cargo-frontend` depend on Natakahii page flows to function.

Shared branding is correct.
Shared cargo data contracts are correct.
Hard dependency on marketplace UI is not.

The cargo product should be able to continue operating even if the main marketplace is only one order source among many.
