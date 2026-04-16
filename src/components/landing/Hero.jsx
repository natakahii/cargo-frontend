import { Link } from 'react-router-dom';
import { Truck, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero">
      {/* Background Media */}
      <div className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
          alt="NatakaHii Cargo trucks on the road"
        />
        <div className="hero-media__overlay" />
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left: Copy */}
          <div className="hero-copy">
            <h1>Reliable City-to-City Delivery Across Tanzania</h1>
            <p>
              Seamlessly connecting Dar es Salaam, Mwanza, Arusha, and every hub in between
              with premium operational authority for Tanzanian trade.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-accent" to="/book">
                Start Shipping
              </Link>
              <Link className="btn btn-glass" to="/track">
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                  Track Package
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Tracking Card */}
          <div className="hero-card-wrap">
            <div className="hero-card-glow" />
            <div className="tracking-card">
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
                    <Truck size={16} />
                  </div>
                  <div>
                    <p>Destination</p>
                    <strong>Mwanza Central</strong>
                  </div>
                </div>
              </div>

              <div className="tracking-card__footer">
                <p>ETA: <span>Tomorrow, 14:00</span></p>
                <ArrowRight size={20} style={{ color: 'var(--primary)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
