import { Link } from 'react-router-dom';

export function MarketingFooter() {
  return (
    <footer className="w-full py-12 md:py-16 px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 bg-surface-container-low">
      <div className="md:col-span-4 space-y-6">
        <Link to="/" className="text-2xl font-bold text-primary-container block">
          NatakaHii Cargo
        </Link>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
          Premium logistics authority connecting the heart of Tanzania. Delivering reliability at every mile.
        </p>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary-container transition-colors">
            public
          </span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary-container transition-colors">
            mail
          </span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary-container transition-colors">
            phone_in_talk
          </span>
        </div>
      </div>

      <div className="md:col-span-5 grid grid-cols-2 gap-8">
        <div>
          <p className="font-bold text-primary mb-6">Quick Links</p>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>
              <Link to="/track" className="hover:underline hover:text-primary transition-all">
                Tracking
              </Link>
            </li>
            <li>
              <a href="/#services" className="hover:underline hover:text-primary transition-all">
                Services
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline hover:text-primary transition-all">
                About Us
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline hover:text-primary transition-all">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-primary mb-6">Major Routes</p>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>
              <a href="/#contact" className="hover:underline hover:text-primary transition-all">
                Dar to Mwanza
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline hover:text-primary transition-all">
                Arusha to Dodoma
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline hover:text-primary transition-all">
                Mbeya to Tanga
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:col-span-3 space-y-6">
        <p className="font-bold text-primary">Newsletter</p>
        <div className="flex bg-white rounded-xl p-1 ambient-shadow">
          <input
            className="border-none bg-transparent flex-1 text-sm focus:ring-0 px-4 outline-none"
            placeholder="Email Address"
            type="email"
          />
          <button className="bg-primary text-white p-2 rounded-lg">
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-8">
          © {new Date().getFullYear()} NatakaHii Cargo.
        </p>
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
