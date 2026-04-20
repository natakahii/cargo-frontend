export function Services() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-surface" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
            Logistics Tailored for Tanzania
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto md:mx-0">
            Every shipment is treated with kinetic authority, ensuring precision from pickup to last-mile delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Express Card */}
          <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[400px] overflow-hidden relative group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">bolt</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Express Courier</h3>
              <p className="text-on-surface-variant max-w-md mb-6">
                Priority delivery between Dar es Salaam, Arusha, and Mwanza within 24 hours. Our premium kinetic service.
              </p>
            </div>
            <img
              className="absolute bottom-0 right-0 w-3/4 md:w-1/2 h-full object-cover rounded-3xl opacity-10 md:opacity-20 group-hover:opacity-40 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCTD2iKmF8NBu9sX7E1cYUnovQBJ2-5Ep1EPbdkok-peyn43-612ex3TFkESkM3_wVXpLUiVrZQDOnpHPm8cGsy6FiMDwk_pO0DUoVkeiyyg00_iYRXlsqMsCUuseDDNSOxH6X2R1zOe_0dY_4zKLpKfxa0ZC1bnPgY2_m6T08YEAPjtYH3QiPbKTpIWHPVNENF1eyb2ahtOHXnRWAYjf8agiFqt0vsnJ26TdYunCMlyyUWm87oAY8iMjzRC3yPp9F8J6qsnGfcn0"
              alt="fast delivery truck driving on a smooth Tanzanian highway"
            />
            <div className="relative z-10 mt-auto">
              <a
                href="#contact"
                className="text-primary font-bold flex items-center gap-2 group"
              >
                Explore Express{' '}
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </a>
            </div>
          </div>

          {/* Bulk Cargo Card */}
          <div className="md:col-span-4 bg-primary-container rounded-3xl p-8 md:p-10 flex flex-col justify-between text-on-primary min-h-[350px] md:min-h-[400px]">
            <div>
              <span className="material-symbols-outlined text-4xl text-secondary-container mb-6">
                inventory_2
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Bulk Cargo</h3>
              <p className="opacity-80 mb-6">
                Heavy machinery, manufacturing materials, and agricultural goods across the SADC corridor.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Capacity</p>
              <p className="text-xl md:text-2xl font-bold">Up to 40 Tons</p>
            </div>
          </div>

          {/* Business Logistics Card */}
          <div className="md:col-span-4 bg-surface-container-highest rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[400px]">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6">
                business_center
              </span>
              <h3 className="text-2xl font-bold text-primary mb-4">Business Logistics</h3>
              <p className="text-on-surface-variant mb-6">
                Customized supply chain solutions for Tanzanian enterprises and retail giants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Scheduled Pickups
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Monthly Invoicing
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Dedicated Manager
                </li>
              </ul>
            </div>
          </div>

          {/* Map Card */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-8 md:p-10 border border-outline-variant/15 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-primary mb-4">Coverage Map</h3>
              <p className="text-on-surface-variant mb-6">
                Connecting all 31 regions of Tanzania with hubs in Tanga, Dodoma, Mbeya, and Kigoma.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] md:text-xs font-bold text-primary uppercase">
                  Coastal
                </span>
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] md:text-xs font-bold text-primary uppercase">
                  Lake Zone
                </span>
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] md:text-xs font-bold text-primary uppercase">
                  Northern
                </span>
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] md:text-xs font-bold text-primary uppercase">
                  Highlands
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-surface-container-low rounded-2xl relative overflow-hidden order-1 md:order-2">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwRl3G9O1LTJQ-5w2kIf_VoTqNClrV9ZuPmLQV7HIMRrJv3LBxbzbFBGwBydq19Rs3t2AlB14iCf2vAMuykK_mGDKiGotbB9ZQ8Xh9o2iUkjk-rIe70VjO6ORzApiwSIkWFi1HXl-KN3tUqzUc9ddaEDdyjS1HIlRdKQot4eaTFfha700YQYLR0ilOujhkCWRPqrFnXO12WhP6kquPQTMg21zmA0OXFImFEGbnX-d2i3U2M9aNGkagkZoGSaALLs05tVFF-xU7jTs"
                alt="simplified map design of Tanzania"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
