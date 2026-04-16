import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-intro">
          <h2>Logistics Tailored for Tanzania</h2>
          <p>
            Every shipment is treated with kinetic authority, ensuring precision from
            pickup to last-mile delivery across the Lake Zone and Coastal regions.
          </p>
        </div>

        <div className="services-grid">
          {/* Express Courier */}
          <div className="service-card service-card--express">
            <div className="service-card__content">
              <div className="service-icon">⚡</div>
              <h3>Express Courier</h3>
              <p>Priority delivery between Dar es Salaam, Arusha, and Mwanza within 24 hours.</p>
            </div>
            <a
              href="#contact"
              className="service-link"
              style={{ color: 'var(--primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'auto' }}
            >
              Explore Express <ArrowRight size={16} />
            </a>
            <img
              className="service-card__image"
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
              alt="Express truck"
            />
          </div>

          {/* Bulk Cargo */}
          <div className="service-card service-card--bulk">
            <div className="service-card__content">
              <div className="service-icon service-icon--accent">📦</div>
              <h3>Bulk Cargo</h3>
              <p>Heavy machinery, manufacturing materials, and agricultural goods across key trade corridors.</p>
            </div>
            <div className="capacity-box">
              <p>Capacity</p>
              <strong>Up to 40 Tons</strong>
            </div>
          </div>

          {/* Business Logistics */}
          <div className="service-card service-card--business">
            <div className="service-card__content">
              <div className="service-icon">💼</div>
              <h3>Business Logistics</h3>
              <p>Customized supply chain support for Tanzanian enterprises and retail operators.</p>
            </div>
            <ul className="feature-list">
              <li><span>✓</span> Scheduled Pickups</li>
              <li><span>✓</span> Monthly Invoicing</li>
              <li><span>✓</span> Premium Support</li>
            </ul>
          </div>

          {/* Map Coverage Card */}
          <div className="service-card service-card--map">
            <div className="map-card__copy">
              <h3>Total Territory Dominance</h3>
              <p>Connecting all hubs with kinetic authority. From the Port of Dar to the heights of Arusha.</p>
              <div className="map-chips">
                {['Coastal', 'Lake Zone', 'Northern', 'Highlands'].map(chip => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
            <div className="map-card__visual">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                alt="Tanzania map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
