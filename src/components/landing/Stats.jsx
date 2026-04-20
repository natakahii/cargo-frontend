export function Stats() {
  return (
    <section className="py-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">50+</p>
          <p className="text-on-surface-variant font-medium text-sm md:text-base">Cities Covered</p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">10k+</p>
          <p className="text-on-surface-variant font-medium text-sm md:text-base">Monthly Deliveries</p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">99.8%</p>
          <p className="text-on-surface-variant font-medium text-sm md:text-base">Safe Rate</p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">24/7</p>
          <p className="text-on-surface-variant font-medium text-sm md:text-base">Support</p>
        </div>
      </div>
    </section>
  );
}
