import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 relative overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCTD2iKmF8NBu9sX7E1cYUnovQBJ2-5Ep1EPbdkok-peyn43-612ex3TFkESkM3_wVXpLUiVrZQDOnpHPm8cGsy6FiMDwk_pO0DUoVkeiyyg00_iYRXlsqMsCUuseDDNSOxH6X2R1zOe_0dY_4zKLpKfxa0ZC1bnPgY2_m6T08YEAPjtYH3QiPbKTpIWHPVNENF1eyb2ahtOHXnRWAYjf8agiFqt0vsnJ26TdYunCMlyyUWm87oAY8iMjzRC3yPp9F8J6qsnGfcn0"
          alt="Modern logistics background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50 md:bg-primary/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left: Copy */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 md:mb-8 text-white">
            Reliable City-to-City Delivery Across Tanzania
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 text-white/90">
            Seamlessly connecting Dar es Salaam, Mwanza, Arusha, and every hub in between. Premium operational authority for Tanzanian trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/book"
              className="bg-secondary-container text-on-secondary px-8 md:px-10 py-4 md:py-5 rounded-3xl font-bold text-lg shadow-lg hover:brightness-110 transition-all text-center"
            >
              Start Shipping
            </Link>
            <Link
              to="/track"
              className="bg-surface-container-low text-primary-container px-8 md:px-10 py-4 md:py-5 rounded-3xl font-bold text-lg hover:bg-surface-container-high transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">track_changes</span>
              Track Package
            </Link>
          </div>
        </div>

        {/* Right: Tracking Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 ambient-shadow relative z-10 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                In Transit
              </div>
              <span className="text-primary font-bold text-sm md:text-base">#NK-8829-TZ</span>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-primary-fixed flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Origin</p>
                  <p className="font-bold text-base md:text-lg">Dar es Salaam Port</p>
                </div>
              </div>

              <div className="ml-[15px] h-10 border-l-2 border-dashed border-outline-variant" />

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-sm">local_shipping</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Destination</p>
                  <p className="font-bold text-base md:text-lg">Mwanza Central</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-container-high flex justify-between items-center">
              <p className="text-sm italic text-slate-500">ETA: Tomorrow, 14:00</p>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-64 h-64 kinetic-gradient rounded-full opacity-10 blur-3xl -z-10 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
