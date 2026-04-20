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
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 h-20 bg-surface-container-low border-b border-outline-variant/10">
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-tighter text-primary-container"
        >
          NatakaHii Cargo
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {shippingNav.map((item) =>
            item.to.startsWith('/#') ? (
              <a
                key={item.key}
                href={item.to}
                className={`text-slate-500 font-medium hover:text-secondary-container transition-colors duration-300 ${activeKey === item.key ? 'text-primary-container font-bold' : ''}`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.key}
                to={item.to}
                className={`text-slate-500 font-medium hover:text-secondary-container transition-colors duration-300 ${activeKey === item.key ? 'text-primary-container font-bold' : ''}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/book"
            className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-xl font-bold tracking-tight transform hover:scale-95 duration-200"
          >
            Book Now
          </Link>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            className="md:hidden text-primary p-2"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-surface md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center justify-between px-6 border-b border-outline-variant/10">
            <Link
              to="/"
              className="text-xl font-extrabold tracking-tighter text-primary-container"
              onClick={() => setIsMenuOpen(false)}
            >
              NatakaHii Cargo
            </Link>
            <button
              aria-label="Close menu"
              className="p-2"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex flex-col p-8 gap-8">
            {shippingNav.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-bold text-primary ${activeKey === item.key ? 'text-primary-container' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-8">
              <Link
                to="/book"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
