export function Steps() {
  return (
    <section className="steps-section">
      <div className="container">
        <h2 className="steps-title">Simplicity in Motion</h2>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h4>Book &amp; Print</h4>
            <p>Simple online portal to generate labels and schedule your pickup in seconds.</p>
          </div>

          <div className="step-card">
            <div className="step-number step-number--accent">02</div>
            <h4>Sort &amp; Move</h4>
            <p>Your cargo is processed in our regional sorting hubs with clear operational flow.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h4>Final Delivery</h4>
            <p>Door-to-door completion with real-time tracking until the final mile is done.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
