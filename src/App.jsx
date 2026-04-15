import { useEffect, useState } from 'react'
import './App.css'

const landingServices = [
  {
    title: 'Express Courier',
    copy: 'Priority delivery between Dar es Salaam, Arusha, and Mwanza within 24 hours.',
    cta: 'Explore Express',
    icon: 'bolt',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCTD2iKmF8NBu9sX7E1cYUnovQBJ2-5Ep1EPbdkok-peyn43-612ex3TFkESkM3_wVXpLUiVrZQDOnpHPm8cGsy6FiMDwk_pO0DUoVkeiyyg00_iYRXlsqMsCUuseDDNSOxH6X2R1zOe_0dY_4zKLpKfxa0ZC1bnPgY2_m6T08YEAPjtYH3QiPbKTpIWHPVNENF1eyb2ahtOHXnRWAYjf8agiFqt0vsnJ26TdYunCMlyyUWm87oAY8iMjzRC3yPp9F8J6qsnGfcn0',
  },
  {
    title: 'Bulk Cargo',
    copy: 'Heavy machinery, manufacturing materials, and agricultural goods across key trade corridors.',
    icon: 'inventory_2',
    capacity: 'Up to 40 Tons',
  },
  {
    title: 'Business Logistics',
    copy: 'Customized supply chain support for Tanzanian enterprises and retail operators.',
    icon: 'business_center',
    points: ['Scheduled Pickups', 'Monthly Invoicing', 'Dedicated Manager'],
  },
  {
    title: 'Coverage Map',
    copy: 'Connecting all 31 regions of Tanzania with hubs in Tanga, Dodoma, Mbeya, and Kigoma.',
    chips: ['Coastal', 'Lake Zone', 'Northern', 'Highlands'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwRl3G9O1LTJQ-5w2kIf_VoTqNClrV9ZuPmLQV7HIMRrJv3LBxbzbFBGwBydq19Rs3t2AlB14iCf2vAMuykK_mGDKiGotbB9ZQ8Xh9o2iUkjk-rIe70VjO6ORzApiwSIkWFi1HXl-KN3tUqzUc9ddaEDdyjS1HIlRdKQot4eaTFfha700YQYLR0ilOujhkCWRPqrFnXO12WhP6kquPQTMg21zmA0OXFImFEGbnX-d2i3U2M9aNGkagkZoGSaALLs05tVFF-xU7jTs',
  },
]

const landingStats = [
  { value: '50+', label: 'Cities Covered' },
  { value: '10k+', label: 'Monthly Deliveries' },
  { value: '99.8%', label: 'Safe Rate' },
  { value: '24/7', label: 'Support' },
]

const landingSteps = [
  {
    number: '1',
    title: 'Book & Print',
    copy: 'Simple online portal to generate labels and schedule your pickup in seconds.',
  },
  {
    number: '2',
    title: 'Sort & Move',
    copy: 'Your cargo is processed in our regional sorting hubs with clear operational flow.',
  },
  {
    number: '3',
    title: 'Final Delivery',
    copy: 'Door-to-door completion with real-time tracking until the final mile is done.',
  },
]

const footerRoutes = ['Dar to Mwanza', 'Arusha to Dodoma', 'Mbeya to Tanga']
const footerLinks = ['Tracking', 'Services', 'About Us', 'Contact']

const shippingTimeline = [
  {
    type: 'future',
    kicker: 'Estimated Delivery',
    title: 'Arriving in Mwanza',
    meta: 'Oct 24, 2023 • 10:00 AM',
  },
  {
    type: 'active',
    kicker: 'Current Status',
    title: 'Departed Dodoma Hub',
    meta: 'Oct 22, 2023 • 02:45 PM',
  },
  {
    type: 'done',
    kicker: 'Oct 21, 2023',
    title: 'Arrived at Dodoma Hub',
    meta: '09:12 AM',
  },
  {
    type: 'done',
    kicker: 'Oct 20, 2023',
    title: 'Picked up from Warehouse',
    meta: 'Dar es Salaam • 04:30 PM',
  },
]

const shippingNav = [
  { label: 'Tracking', href: '/#/track', key: 'tracking' },
  { label: 'Services', href: '/#services', key: 'services' },
  { label: 'Partners', href: '/#contact', key: 'partners' },
  { label: 'Dashboard', href: '/#/dashboard', key: 'dashboard' },
]

const dashboardKpis = [
  {
    label: 'Active Shipments',
    value: '1,248',
    note: '+12%',
    icon: 'package_2',
    tone: 'primary',
  },
  {
    label: "Today's Deliveries",
    value: '42',
    note: '18 in transit',
    icon: 'local_shipping',
    tone: 'secondary',
  },
  {
    label: 'Pending Quotes',
    value: '156',
    note: 'Needs review',
    icon: 'request_quote',
    tone: 'tertiary',
  },
]

const dashboardShipments = [
  {
    id: '#NKH-9283',
    route: 'Dar es Salaam → Mwanza',
    shortRoute: 'Dar → Mwanza',
    customer: 'Bakhresa Group',
    status: 'In Transit',
    eta: 'Oct 24, 14:00',
    tone: 'transit',
  },
  {
    id: '#NKH-8472',
    route: 'Arusha → Dodoma',
    shortRoute: 'Arusha → Dodoma',
    customer: 'Kilimanjaro Fresh',
    status: 'Delivered',
    eta: 'Completed',
    tone: 'delivered',
  },
]

const dashboardRuns = [
  {
    code: 'TZ-992-AC',
    driver: 'Hamis Juma',
    status: 'Running',
    progress: 75,
    stops: '4 stops left',
  },
]

const dashboardFeed = [
  {
    tone: 'alert',
    label: 'System Alert:',
    text: 'Delay on A7 Highway. Weather affected.',
    time: '10m ago',
  },
  {
    tone: 'primary',
    label: 'Delivered:',
    text: '#NKH-8472 at Arusha Hub.',
    time: '1h ago',
  },
]

const dashboardSidebarLinks = [
  { label: 'Overview', icon: 'dashboard', active: true },
  { label: 'Shipments', icon: 'local_shipping' },
  { label: 'Inventory', icon: 'inventory_2' },
  { label: 'Quotes', icon: 'description' },
]

const dashboardMobileNav = [
  { label: 'Home', icon: 'dashboard', active: true },
  { label: 'Shipments', icon: 'local_shipping' },
  { label: 'Fleet', icon: 'inventory_2' },
  { label: 'Account', icon: 'person' },
]

function getCurrentRoute() {
  if (typeof window === 'undefined') {
    return 'landing'
  }

  if (window.location.hash === '#/track') {
    return 'track'
  }

  if (window.location.hash === '#/dashboard') {
    return 'dashboard'
  }

  return 'landing'
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [route, setRoute] = useState(getCurrentRoute)
  const isTrackingPage = route === 'track'
  const isDashboardPage = route === 'dashboard'

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getCurrentRoute())
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  useEffect(() => {
    document.title = isTrackingPage
      ? 'NatakaHii Cargo | Track Your Shipment'
      : isDashboardPage
        ? 'Operations Hub | NatakaHii Cargo'
      : 'NatakaHii Cargo | Reliable City-to-City Delivery'
  }, [isDashboardPage, isTrackingPage])

  if (isDashboardPage) {
    return <DashboardPage />
  }

  return isTrackingPage ? (
    <ShippingPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  ) : (
    <LandingPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  )
}

function LandingPage({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={`cargo-app ${isMenuOpen ? 'menu-open' : ''}`}>
      <TopNavigation
        activeKey=""
        bookHref="/#contact"
        isMenuOpen={isMenuOpen}
        menuItems={shippingNav}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <section className="hero">
          <div className="hero-media">
            <img
              alt="Modern logistics background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCTD2iKmF8NBu9sX7E1cYUnovQBJ2-5Ep1EPbdkok-peyn43-612ex3TFkESkM3_wVXpLUiVrZQDOnpHPm8cGsy6FiMDwk_pO0DUoVkeiyyg00_iYRXlsqMsCUuseDDNSOxH6X2R1zOe_0dY_4zKLpKfxa0ZC1bnPgY2_m6T08YEAPjtYH3QiPbKTpIWHPVNENF1eyb2ahtOHXnRWAYjf8agiFqt0vsnJ26TdYunCMlyyUWm87oAY8iMjzRC3yPp9F8J6qsnGfcn0"
            />
            <div className="hero-media__overlay" />
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Reliable City-to-City Delivery Across Tanzania</h1>
              <p>
                Seamlessly connecting Dar es Salaam, Mwanza, Arusha, and every hub in
                between with premium operational authority for Tanzanian trade.
              </p>

              <div className="hero-actions">
                <a className="btn btn-accent" href="/#contact">
                  Start Shipping
                </a>
                <a className="btn btn-soft" href="/#/track">
                  <span className="material-symbols-outlined">track_changes</span>
                  Track Package
                </a>
              </div>
            </div>

            <div className="hero-card-wrap">
              <article className="tracking-card" id="tracking">
                <div className="tracking-card__top">
                  <span className="status-pill">In Transit</span>
                  <span className="tracking-id">#NK-8829-TZ</span>
                </div>

                <div className="tracking-flow">
                  <div className="tracking-point">
                    <div className="tracking-point__icon tracking-point__icon--origin">
                      <span />
                    </div>
                    <div>
                      <p>Origin</p>
                      <strong>Dar es Salaam Port</strong>
                    </div>
                  </div>

                  <div className="tracking-flow__line" />

                  <div className="tracking-point">
                    <div className="tracking-point__icon tracking-point__icon--destination">
                      <span className="material-symbols-outlined">local_shipping</span>
                    </div>
                    <div>
                      <p>Destination</p>
                      <strong>Mwanza Central</strong>
                    </div>
                  </div>
                </div>

                <div className="tracking-card__footer">
                  <p>ETA: Tomorrow, 14:00</p>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </article>
              <div className="hero-card-glow" />
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="container stats-grid">
            {landingStats.map((stat) => (
              <article className="stat" key={stat.label}>
                <p>{stat.value}</p>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-intro">
              <h2>Logistics Tailored for Tanzania</h2>
              <p>
                Every shipment is treated with kinetic authority, ensuring precision from
                pickup to last-mile delivery.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card service-card--express">
                <div className="service-card__content">
                  <span className="material-symbols-outlined service-icon">
                    {landingServices[0].icon}
                  </span>
                  <h3>{landingServices[0].title}</h3>
                  <p>{landingServices[0].copy}</p>
                </div>
                <a className="service-link" href="/#contact">
                  {landingServices[0].cta}
                  <span className="material-symbols-outlined">east</span>
                </a>
                <img
                  alt="Express delivery truck"
                  className="service-card__image"
                  src={landingServices[0].image}
                />
              </article>

              <article className="service-card service-card--bulk">
                <div>
                  <span className="material-symbols-outlined service-icon service-icon--accent">
                    {landingServices[1].icon}
                  </span>
                  <h3>{landingServices[1].title}</h3>
                  <p>{landingServices[1].copy}</p>
                </div>
                <div className="capacity-box">
                  <p>Capacity</p>
                  <strong>{landingServices[1].capacity}</strong>
                </div>
              </article>

              <article className="service-card service-card--business">
                <div>
                  <span className="material-symbols-outlined service-icon">
                    {landingServices[2].icon}
                  </span>
                  <h3>{landingServices[2].title}</h3>
                  <p>{landingServices[2].copy}</p>
                </div>
                <ul className="feature-list">
                  {landingServices[2].points.map((point) => (
                    <li key={point}>
                      <span className="material-symbols-outlined">check_circle</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="service-card service-card--map">
                <div className="map-card__copy">
                  <h3>{landingServices[3].title}</h3>
                  <p>{landingServices[3].copy}</p>
                  <div className="map-chips">
                    {landingServices[3].chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                </div>
                <div className="map-card__visual">
                  <img
                    alt="Simplified map design of Tanzania"
                    src={landingServices[3].image}
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="steps-section">
          <div className="container">
            <h2 className="steps-title">Simplicity in Motion</h2>
            <div className="steps-grid">
              {landingSteps.map((step, index) => (
                <article className="step-card" key={step.number}>
                  <div className={`step-number ${index === 1 ? 'step-number--accent' : ''}`}>
                    {step.number}
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-copy">
                <h2>Ready to streamline your Tanzanian logistics?</h2>
                <p>
                  Join businesses relying on NatakaHii Cargo for authoritative, kinetic
                  city-to-city delivery.
                </p>
                <div className="cta-actions">
                  <a className="btn btn-accent" href="mailto:cargo@natakahii.co.tz">
                    Get a Quote
                  </a>
                  <a className="btn btn-glass" href="mailto:cargo@natakahii.co.tz">
                    Talk to Sales
                  </a>
                </div>
              </div>

              <div className="cta-visual">
                <img
                  alt="Professional shipping container"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-vyNIDjyx8hld8ihJ2js2sxdONq-oA9kcR_B9-dKiFsGW9l88yemyfgFzShyLS_2V5MYsP-dOHNB6NMndSjZ3MRGvoJzYbF1Ix_rC4AZDUn2hCe2uvhMStkITygmk6ifXake9wmZdZrTLMYhWxAvc0oTKoji6qfetrTCO72ZvF8hq3DQAXyENNma7wecDC9Np8tn4q0mHrH1b-IzTyose9vHyycvBKqsopmoi4mOOVRJg-2O0ajW33_l1ab3hqFY1r_eKNsCPkkI"
                />
              </div>

              <div className="cta-glow" />
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}

function ShippingPage({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={`cargo-app shipping-page ${isMenuOpen ? 'menu-open' : ''}`}>
      <TopNavigation
        activeKey="tracking"
        bookHref="/#contact"
        isMenuOpen={isMenuOpen}
        menuItems={shippingNav}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="shipping-main">
        <section className="shipping-search">
          <h1>Track Your Shipment</h1>
          <div className="shipping-search__bar">
            <div className="shipping-search__icon">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <input placeholder="Enter Tracking ID (e.g., NH-992384-TZ)" type="text" />
            <button className="shipping-search__button" type="button">
              Track
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        <div className="shipping-grid">
          <div className="shipping-main-column">
            <section className="shipping-summary-card">
              <div>
                <p className="shipping-label">Waybill Number</p>
                <h2>NH-992384-TZ</h2>
                <div className="shipping-summary-pills">
                  <span className="shipping-state-chip">
                    <span className="material-symbols-outlined">package_2</span>
                    In Transit
                  </span>
                  <span className="shipping-date-chip">Estimated Delivery: Oct 24, 2023</span>
                </div>
              </div>

              <div className="shipping-summary-location">
                <p className="shipping-label">Current Location</p>
                <strong>Dodoma Logistics Hub</strong>
                <span>Updated 14 mins ago</span>
              </div>
            </section>

            <section className="shipping-map-card">
              <img
                alt="Stylized logistics route map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFPLA2r2BBj764p9G5YkOBcOG3brekITu5IQ6u7eIr2e_dW1Gdofn7b_B6yUgg02LVvzE5XtTvjuEmQ-2DVWRBFw78xCgoeBudD_N6vaQfxiJulPTnrKDmhZpujDVavteTYaqZ7bkDtXI9zIX_ePQfT0dTos1r0JzWYvbp2h11IQel5Dr8AA6DfSHVsQPH3f1yq1pIeBvuHVlgE-UnZkD6Yx4mfn2E4n0275KrnmyLLKW80NZwjauR053ZGfERoWgRbMtoDzMotM8"
              />

              <div className="shipping-map-overlay">
                <div className="shipping-map-route">
                  <div className="shipping-map-tag">
                    <p>Origin</p>
                    <strong>Dar es Salaam</strong>
                  </div>
                  <div className="shipping-map-line" />
                  <div className="shipping-map-tag shipping-map-tag--active">
                    <p>Current</p>
                    <strong>Dodoma</strong>
                  </div>
                  <div className="shipping-map-tag shipping-map-tag--muted">
                    <p>Destination</p>
                    <strong>Mwanza</strong>
                  </div>
                </div>

                <div className="shipping-map-badge">Live Route Feedback Enabled</div>
              </div>
            </section>

            <section className="shipping-info-grid">
              <article className="shipping-info-card">
                <div className="shipping-info-card__title">
                  <span className="material-symbols-outlined">person_pin_circle</span>
                  <h3>Receiver Details</h3>
                </div>
                <div className="shipping-info-card__body">
                  <strong>Juma Rashid</strong>
                  <p>
                    Plot 45, Nyerere Road
                    <br />
                    Ilemela District, Mwanza
                    <br />
                    TZ-33101
                  </p>
                </div>
              </article>

              <article className="shipping-info-card">
                <div className="shipping-info-card__title">
                  <span className="material-symbols-outlined">inventory_2</span>
                  <h3>Package Manifest</h3>
                </div>
                <div className="shipping-manifest-grid">
                  <div>
                    <p>Weight</p>
                    <strong>12.5 kg</strong>
                  </div>
                  <div>
                    <p>Type</p>
                    <strong>Express Air</strong>
                  </div>
                  <div className="shipping-manifest-full">
                    <p>Content Description</p>
                    <strong>Electronic Components (Fragile)</strong>
                  </div>
                </div>
              </article>
            </section>
          </div>

          <aside className="shipping-sidebar">
            <section className="shipping-timeline-card">
              <h3>Shipment Journey</h3>
              <div className="shipping-timeline">
                {shippingTimeline.map((item) => (
                  <article className={`shipping-timeline-item shipping-timeline-item--${item.type}`} key={`${item.kicker}-${item.title}`}>
                    <div className="shipping-timeline-item__dot">
                      {item.type === 'done' ? (
                        <span className="material-symbols-outlined">check</span>
                      ) : item.type === 'active' ? (
                        <span className="shipping-timeline-item__pulse" />
                      ) : null}
                    </div>
                    <div className="shipping-timeline-item__content">
                      <p>{item.kicker}</p>
                      <strong>{item.title}</strong>
                      <span>{item.meta}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="shipping-support-card">
              <div className="shipping-support-card__icon">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h3>Need Assistance?</h3>
              <p>
                Our logistics specialists are available 24/7 to help with your
                NH-992384-TZ tracking.
              </p>
              <a className="shipping-support-card__button" href="mailto:cargo@natakahii.co.tz">
                <span className="material-symbols-outlined">chat</span>
                Live Support
              </a>
            </section>

            <section className="shipping-proof-card">
              <span className="material-symbols-outlined">photo_camera</span>
              <p>Proof of Delivery</p>
              <strong>Pending delivery to Mwanza</strong>
            </section>
          </aside>
        </div>
      </main>

      <ShippingFooter />
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <nav className="dashboard-topbar">
        <a className="dashboard-topbar__brand" href="/">
          NatakaHii
        </a>
        <div className="dashboard-topbar__actions">
          <button aria-label="Search dashboard" className="dashboard-icon-button" type="button">
            <span className="material-symbols-outlined">search</span>
          </button>
          <a className="dashboard-book-button" href="/#contact">
            Book
          </a>
        </div>
      </nav>

      <div className="dashboard-shell">
        <aside className="dashboard-sidebar">
          <a className="dashboard-sidebar__brand" href="/">
            NatakaHii Cargo
          </a>

          <nav className="dashboard-sidebar__nav">
            {dashboardSidebarLinks.map((link) => (
              <a className={link.active ? 'active' : ''} href="/#/dashboard" key={link.label}>
                <span className="material-symbols-outlined">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="dashboard-sidebar__bottom">
            <div className="fleet-load-card">
              <p>Fleet Load</p>
              <div className="fleet-load-card__track">
                <span />
              </div>
              <strong>82% Capacity</strong>
            </div>
            <a className="dashboard-sidebar__settings" href="/#/dashboard">
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </a>
          </div>
        </aside>

        <main className="dashboard-main">
          <header className="dashboard-header">
            <h1>Operations Hub</h1>
            <p>Real-time logistics monitoring: Dar-Mwanza Corridor.</p>
          </header>

          <section className="dashboard-kpis">
            {dashboardKpis.map((item) => (
              <article className="dashboard-kpi-card" key={item.label}>
                <div>
                  <span>{item.label}</span>
                  <h2>{item.value}</h2>
                  <p className={`dashboard-kpi-card__note dashboard-kpi-card__note--${item.tone}`}>
                    <span className="material-symbols-outlined">
                      {item.tone === 'primary' ? 'trending_up' : item.tone === 'secondary' ? 'schedule' : 'mail'}
                    </span>
                    {item.note}
                  </p>
                </div>
                <div className={`dashboard-kpi-card__icon dashboard-kpi-card__icon--${item.tone}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
              </article>
            ))}
          </section>

          <div className="dashboard-grid">
            <section className="dashboard-shipments-section">
              <div className="dashboard-section-header">
                <h3>Recent Shipments</h3>
                <div className="dashboard-filter-pills">
                  <button className="active" type="button">
                    All
                  </button>
                  <button type="button">In Transit</button>
                </div>
              </div>

              <div className="dashboard-mobile-shipments">
                {dashboardShipments.map((shipment) => (
                  <article className="dashboard-shipment-card" key={shipment.id}>
                    <div className="dashboard-shipment-card__top">
                      <div>
                        <span>{shipment.id}</span>
                        <h4>{shipment.shortRoute}</h4>
                        <p>{shipment.customer}</p>
                      </div>
                      <strong className={`dashboard-status dashboard-status--${shipment.tone}`}>
                        {shipment.status}
                      </strong>
                    </div>
                    <div className="dashboard-shipment-card__bottom">
                      <span>{shipment.eta === 'Completed' ? 'Completed' : `ETA: ${shipment.eta}`}</span>
                      <button type="button">Details →</button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="dashboard-table-card">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Route</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>ETA</th>
                      <th aria-label="Actions" />
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardShipments.map((shipment) => (
                      <tr key={shipment.id}>
                        <td>{shipment.id}</td>
                        <td>{shipment.route}</td>
                        <td>{shipment.customer}</td>
                        <td>
                          <span className={`dashboard-status dashboard-status--${shipment.tone}`}>
                            {shipment.status}
                          </span>
                        </td>
                        <td>{shipment.eta}</td>
                        <td>
                          <span className="material-symbols-outlined">more_vert</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="dashboard-action-grid">
                <article className="dashboard-monitor-card">
                  <div>
                    <h4>Live Map Monitor</h4>
                    <p>18 vehicles active in Northern Circuit.</p>
                    <button type="button">Open Monitor →</button>
                  </div>
                  <img
                    alt="Live route monitor preview"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEh_9qcDmSwqtp8-rW_jN7aNGRCnJ5n9Hp86jCqYJtYYy2Zne4RQ-ai4b29Tyy3tH1GjKeJQUIsU4XuHpTZ8YHaCTxxivK4rpFVu329Ss11XudKEElquLZiW-7Czo3ZIyBEAcbzgPfKEeV-agM0JrMZvrYRUUlo5gNKjDttlUqiKMXkjp7-_dC5dbIXZeFkn65k77TiOVoXUONjS4AQ8G76FLBtA9-WjpBL8cZwAnS1hmP2zrCm5QRwHZiGHhJqqEe_ZQHemsZpfw"
                  />
                </article>

                <article className="dashboard-alert-card">
                  <h4>Capacity Alert</h4>
                  <p>Dar-Arusha route at 95% capacity.</p>
                  <button type="button">Re-route Shipments</button>
                </article>
              </div>
            </section>

            <aside className="dashboard-side-panel">
              <section>
                <h3>Active Runs</h3>
                <div className="dashboard-runs-list">
                  {dashboardRuns.map((run) => (
                    <article className="dashboard-run-card" key={run.code}>
                      <div className="dashboard-run-card__icon">
                        <span className="material-symbols-outlined">local_shipping</span>
                      </div>
                      <div className="dashboard-run-card__body">
                        <div className="dashboard-run-card__top">
                          <h5>{run.code}</h5>
                          <span>{run.status}</span>
                        </div>
                        <p>{run.driver}</p>
                        <div className="dashboard-run-card__meta">
                          <strong>{run.progress}%</strong>
                          <span>{run.stops}</span>
                        </div>
                        <div className="dashboard-run-card__progress">
                          <span style={{ width: `${run.progress}%` }} />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h3>Recent Feed</h3>
                <div className="dashboard-feed">
                  {dashboardFeed.map((item) => (
                    <article className={`dashboard-feed-item dashboard-feed-item--${item.tone}`} key={`${item.label}-${item.time}`}>
                      <span />
                      <div>
                        <p>
                          <strong>{item.label}</strong> {item.text}
                        </p>
                        <small>{item.time}</small>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>

      <footer className="dashboard-footer">
        <div>
          <span>NatakaHii Cargo</span>
          <p>Kinetic authority and real-time logistics precision across East Africa.</p>
        </div>
        <div>
          <h6>Routes</h6>
          <p>Dar es Salaam to Mwanza</p>
          <p>Arusha to Dodoma</p>
        </div>
        <p>© 2026 NatakaHii Cargo. All rights reserved.</p>
      </footer>

      <nav className="dashboard-bottom-nav">
        {dashboardMobileNav.map((item) => (
          <button className={item.active ? 'active' : ''} key={item.label} type="button">
            <span className="material-symbols-outlined">{item.icon}</span>
            <small>{item.label}</small>
          </button>
        ))}
      </nav>
    </div>
  )
}

function TopNavigation({ activeKey, bookHref, isMenuOpen, menuItems, setIsMenuOpen }) {
  return (
    <>
      <header className={`topbar ${activeKey ? 'topbar--shipping' : ''}`}>
        <a className="brand" href="/">
          NatakaHii Cargo
        </a>

        <nav className="topbar-links">
          {menuItems.map((item) => (
            <a className={item.key === activeKey ? 'is-active' : ''} href={item.href} key={item.key}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="btn btn-primary topbar-book-btn desktop-only" href={bookHref}>
            Book Now
          </a>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            className="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <aside className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu__header">
          <a className="brand" href="/">
            NatakaHii Cargo
          </a>
          <button
            aria-label="Close menu"
            className="menu-toggle"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mobile-menu__content">
          {menuItems.map((item) => (
            <a
              className={item.key === activeKey ? 'is-active' : ''}
              href={item.href}
              key={item.key}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-primary topbar-book-btn mobile-menu__cta"
            href={bookHref}
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </aside>
    </>
  )
}

function MarketingFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand brand--footer">NatakaHii Cargo</div>
          <p>
            Premium logistics authority connecting the heart of Tanzania. Delivering
            reliability at every mile.
          </p>
          <div className="footer-icons">
            <span className="material-symbols-outlined">public</span>
            <span className="material-symbols-outlined">mail</span>
            <span className="material-symbols-outlined">phone_in_talk</span>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <p>Quick Links</p>
            <ul>
              {footerLinks.map((item) => (
                <li key={item}>
                  <a href={item === 'Tracking' ? '/#/track' : '/#services'}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Major Routes</p>
            <ul>
              {footerRoutes.map((item) => (
                <li key={item}>
                  <a href="/#services">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <p>Newsletter</p>
          <div className="newsletter-box">
            <input placeholder="Email Address" type="email" />
            <button aria-label="Send email" type="button">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <span className="copyright">© 2026 NatakaHii Cargo.</span>
        </div>
      </div>
    </footer>
  )
}

function ShippingFooter() {
  return (
    <footer className="shipping-footer">
      <div className="container shipping-footer__grid">
        <div className="shipping-footer__brand">
          <a className="brand" href="/">
            NatakaHii Cargo
          </a>
          <p>
            Revolutionizing East African logistics through precision, technology, and
            unwavering commitment.
          </p>
        </div>

        <div className="shipping-footer__routes">
          <h4>Popular Routes</h4>
          {footerRoutes.map((item) => (
            <a href="/#services" key={item}>
              {item}
            </a>
          ))}
        </div>

        <div className="shipping-footer__legal">
          <div className="shipping-footer__legal-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
          <p>© 2024 NatakaHii Cargo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default App
