export function Stats() {
  return (
    <section className="stats-band">
      <div className="container">
        <div className="stats-grid">
          <div className="stat">
            <p>50+</p>
            <span>Cities Covered</span>
          </div>
          <div className="stat">
            <p style={{ color: 'var(--secondary-container)' }}>10k+</p>
            <span>Monthly Deliveries</span>
          </div>
          <div className="stat">
            <p>99.8%</p>
            <span>Safe Rate</span>
          </div>
          <div className="stat">
            <p>24/7</p>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
