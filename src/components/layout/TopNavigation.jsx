import React from 'react';
import { Link } from 'react-router-dom';

const shippingNav = [
  { label: 'Tracking', to: '/track', key: 'tracking' },
  { label: 'Services', to: '/#services', key: 'services' },
  { label: 'Partners', to: '/#contact', key: 'partners' },
  { label: 'Dashboard', to: '/dashboard', key: 'dashboard' },
];

export function TopNavigation({ activeKey, isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <header className="topbar">
        <Link className="brand" to="/">NatakaHii Cargo</Link>

        <nav className="topbar-links">
          {shippingNav.map((item) =>
            item.to.startsWith('/#') ? (
              <a
                key={item.key}
                href={item.to}
                className={activeKey === item.key ? 'is-active' : ''}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.key}
                to={item.to}
                className={activeKey === item.key ? 'is-active' : ''}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="topbar-actions">
          <Link className="btn btn-primary desktop-only topbar-book-btn" to="/book">
            Book Now
          </Link>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            className="menu-toggle"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`}>
        <div className="mobile-menu__header">
          <Link className="brand" to="/" onClick={() => setIsMenuOpen(false)}>
            NatakaHii Cargo
          </Link>
          <button
            aria-label="Close menu"
            className="menu-toggle"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="mobile-menu__content">
          {shippingNav.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={activeKey === item.key ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="btn btn-accent mobile-menu__cta"
            to="/book"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
