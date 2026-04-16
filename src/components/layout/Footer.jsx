import { Link } from 'react-router-dom';

const footerNavLinks = [
  { label: 'Tracking', to: '/track' },
  { label: 'Services', to: '/#services' },
  { label: 'Partners', to: '/#contact' },
  { label: 'Book Shipment', to: '/book' },
];

const footerRoutes = [
  'Dar es Salaam to Mwanza',
  'Arusha to Dodoma',
  'Mbeya to Tanga',
  'Dar es Salaam to Arusha',
];

export function MarketingFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link className="brand brand--footer" to="/">NatakaHii Cargo</Link>
            <p>
              Premium city-to-city cargo logistics connecting Tanzania's key trade
              hubs with precision and authority.
            </p>
            <div className="footer-icons">
              <span aria-label="Twitter">𝕏</span>
              <span aria-label="LinkedIn">in</span>
              <span aria-label="WhatsApp">💬</span>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div>
              <p>Main Corridors</p>
              <ul>
                {footerRoutes.map(route => (
                  <li key={route}><a href="/#contact">{route}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p>Platform</p>
              <ul>
                {footerNavLinks.map(link => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <p>Stay Updated</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Your email address" />
              <button type="button" aria-label="Subscribe">→</button>
            </div>
          </div>

        </div>

        <span className="copyright">
          © {new Date().getFullYear()} NatakaHii Cargo. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export function ShippingFooter() {
  return (
    <footer
      style={{
        padding: '32px 0',
        borderTop: '1px solid #e7e8eb',
        background: 'var(--surface-container-low)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <Link className="brand" to="/" style={{ opacity: 0.4 }}>
          NatakaHii Cargo
        </Link>
        <span
          style={{
            fontSize: '0.625rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#64748b',
          }}
        >
          © {new Date().getFullYear()} NatakaHii Cargo
        </span>
        <nav style={{ display: 'flex', gap: 32 }}>
          <Link to="/" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Home</Link>
          <a href="/#contact" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
