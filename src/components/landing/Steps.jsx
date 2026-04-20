export function Steps() {
  return (
    <section className="py-20 md:py-24 bg-surface-container-low px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 md:mb-16 text-center">
          Simplicity in Motion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/20 -z-10 -translate-y-8" />

          <div className="bg-surface-container-lowest p-8 rounded-3xl ambient-shadow text-center relative z-10">
            <div className="w-16 h-16 bg-primary-container text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Book &amp; Print</h4>
            <p className="text-on-surface-variant">
              Simple online portal to generate labels and schedule your pickup in seconds.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-3xl ambient-shadow text-center relative z-10">
            <div className="w-16 h-16 bg-secondary-container text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Sort &amp; Move</h4>
            <p className="text-on-surface-variant">
              Your cargo is processed in our state-of-the-art regional sorting hubs.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-3xl ambient-shadow text-center relative z-10">
            <div className="w-16 h-16 bg-primary-container text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Final Delivery</h4>
            <p className="text-on-surface-variant">
              Door-to-door completion with real-time tracking until the very last mile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
