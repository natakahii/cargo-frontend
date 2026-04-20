export function CTA() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-8 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto kinetic-gradient rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to streamline your Tanzanian logistics?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10">
            Join 1,000+ businesses relying on NatakaHii Cargo for authoritative, kinetic city-to-city delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="mailto:cargo@natakahii.co.tz"
              className="bg-secondary-container text-on-secondary px-10 md:px-12 py-4 md:py-5 rounded-3xl font-bold text-lg md:text-xl hover:brightness-110 text-center"
            >
              Get a Quote
            </a>
            <a
              href="mailto:cargo@natakahii.co.tz"
              className="bg-white/10 backdrop-blur-lg text-white border border-white/20 px-10 md:px-12 py-4 md:py-5 rounded-3xl font-bold text-lg md:text-xl hover:bg-white/20 text-center"
            >
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <img
            className="w-96 rounded-2xl ambient-shadow rotate-3"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-vyNIDjyx8hld8ihJ2js2sxdONq-oA9kcR_B9-dKiFsGW9l88yemyfgFzShyLS_2V5MYsP-dOHNB6NMndSjZ3MRGvoJzYbF1Ix_rC4AZDUn2hCe2uvhMStkITygmk6ifXake9wmZdZrTLMYhWxAvc0oTKoji6qfetrTCO72ZvF8hq3DQAXyENNma7wecDC9Np8tn4q0mHrH1b-IzTyose9vHyycvBKqsopmoi4mOOVRJg-2O0ajW33_l1ab3hqFY1r_eKNsCPkkI"
            alt="professional shipping container"
          />
        </div>

        {/* Decorative circle */}
        <div className="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-secondary opacity-20 blur-[100px]" />
      </div>
    </section>
  );
}
