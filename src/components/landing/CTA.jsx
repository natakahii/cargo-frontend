export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-glow" />

          <div className="cta-copy">
            <h2>Streamline Your Tanzanian Trade.</h2>
            <p>
              Join the businesses relying on NatakaHii Cargo for authoritative,
              kinetic city-to-city delivery across East Africa.
            </p>
            <div className="cta-actions">
              <a
                className="btn btn-accent"
                href="mailto:cargo@natakahii.co.tz"
              >
                Get a Quote
              </a>
              <a
                className="btn btn-glass"
                href="mailto:cargo@natakahii.co.tz"
              >
                Talk to Sales
              </a>
            </div>
          </div>

          <div className="cta-visual">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
              alt="Cargo operations"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
