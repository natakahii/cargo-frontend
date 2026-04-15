import { useState } from 'react'
import './App.css'

const navLinks = ['Tracking', 'Services', 'Partners', 'Dashboard']

const stats = [
  { value: '50+', label: 'Cities Covered' },
  { value: '10k+', label: 'Monthly Deliveries' },
  { value: '99.8%', label: 'Safe Rate' },
  { value: '24/7', label: 'Support' },
]

const services = [
  {
    kind: 'express',
    title: 'Express Courier',
    copy: 'Priority delivery between Dar es Salaam, Arusha, and Mwanza within 24 hours.',
    cta: 'Explore Express',
    icon: 'bolt',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCTD2iKmF8NBu9sX7E1cYUnovQBJ2-5Ep1EPbdkok-peyn43-612ex3TFkESkM3_wVXpLUiVrZQDOnpHPm8cGsy6FiMDwk_pO0DUoVkeiyyg00_iYRXlsqMsCUuseDDNSOxH6X2R1zOe_0dY_4zKLpKfxa0ZC1bnPgY2_m6T08YEAPjtYH3QiPbKTpIWHPVNENF1eyb2ahtOHXnRWAYjf8agiFqt0vsnJ26TdYunCMlyyUWm87oAY8iMjzRC3yPp9F8J6qsnGfcn0',
  },
  {
    kind: 'bulk',
    title: 'Bulk Cargo',
    copy: 'Heavy machinery, manufacturing materials, and agricultural goods across key trade corridors.',
    icon: 'inventory_2',
    capacity: 'Up to 40 Tons',
  },
  {
    kind: 'business',
    title: 'Business Logistics',
    copy: 'Customized supply chain support for Tanzanian enterprises and retail operators.',
    icon: 'business_center',
    points: ['Scheduled Pickups', 'Monthly Invoicing', 'Dedicated Manager'],
  },
  {
    kind: 'map',
    title: 'Coverage Map',
    copy: 'Connecting all 31 regions of Tanzania with hubs in Tanga, Dodoma, Mbeya, and Kigoma.',
    chips: ['Coastal', 'Lake Zone', 'Northern', 'Highlands'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwRl3G9O1LTJQ-5w2kIf_VoTqNClrV9ZuPmLQV7HIMRrJv3LBxbzbFBGwBydq19Rs3t2AlB14iCf2vAMuykK_mGDKiGotbB9ZQ8Xh9o2iUkjk-rIe70VjO6ORzApiwSIkWFi1HXl-KN3tUqzUc9ddaEDdyjS1HIlRdKQot4eaTFfha700YQYLR0ilOujhkCWRPqrFnXO12WhP6kquPQTMg21zmA0OXFImFEGbnX-d2i3U2M9aNGkagkZoGSaALLs05tVFF-xU7jTs',
  },
]

const steps = [
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

const quickLinks = ['Tracking', 'Services', 'About Us', 'Contact']
const routes = ['Dar to Mwanza', 'Arusha to Dodoma', 'Mbeya to Tanga']

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`cargo-app ${isMenuOpen ? 'menu-open' : ''}`}>
      <nav className="topbar">
        <div className="brand">NatakaHii Cargo</div>

        <div className="topbar-links">
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div className="topbar-actions">
          <a className="btn btn-primary desktop-only" href="#contact">
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
      </nav>

      <aside className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu__header">
          <div className="brand">NatakaHii Cargo</div>
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
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link} onClick={() => setIsMenuOpen(false)}>
              {link}
            </a>
          ))}
          <a className="btn btn-primary mobile-menu__cta" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Book Now
          </a>
        </div>
      </aside>

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
                <a className="btn btn-accent" href="#contact">
                  Start Shipping
                </a>
                <a className="btn btn-soft" href="#tracking">
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
            {stats.map((stat) => (
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
                  <span className="material-symbols-outlined service-icon">{services[0].icon}</span>
                  <h3>{services[0].title}</h3>
                  <p>{services[0].copy}</p>
                </div>
                <a className="service-link" href="#contact">
                  {services[0].cta}
                  <span className="material-symbols-outlined">east</span>
                </a>
                <img alt="Express delivery truck" className="service-card__image" src={services[0].image} />
              </article>

              <article className="service-card service-card--bulk">
                <div>
                  <span className="material-symbols-outlined service-icon service-icon--accent">
                    {services[1].icon}
                  </span>
                  <h3>{services[1].title}</h3>
                  <p>{services[1].copy}</p>
                </div>
                <div className="capacity-box">
                  <p>Capacity</p>
                  <strong>{services[1].capacity}</strong>
                </div>
              </article>

              <article className="service-card service-card--business">
                <div>
                  <span className="material-symbols-outlined service-icon">{services[2].icon}</span>
                  <h3>{services[2].title}</h3>
                  <p>{services[2].copy}</p>
                </div>
                <ul className="feature-list">
                  {services[2].points.map((point) => (
                    <li key={point}>
                      <span className="material-symbols-outlined">check_circle</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="service-card service-card--map">
                <div className="map-card__copy">
                  <h3>{services[3].title}</h3>
                  <p>{services[3].copy}</p>
                  <div className="map-chips">
                    {services[3].chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                </div>
                <div className="map-card__visual">
                  <img alt="Simplified map design of Tanzania" src={services[3].image} />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="steps-section">
          <div className="container">
            <h2 className="steps-title">Simplicity in Motion</h2>
            <div className="steps-grid">
              {steps.map((step, index) => (
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
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a href="#top">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>Major Routes</p>
              <ul>
                {routes.map((item) => (
                  <li key={item}>
                    <a href="#services">{item}</a>
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
            <span className="copyright">© 2024 NatakaHii Cargo.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
