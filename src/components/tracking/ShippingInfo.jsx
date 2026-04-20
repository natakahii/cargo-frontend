export function ShippingInfo({ shipment }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Route Authority */}
      <div className="bg-surface-container-lowest rounded-[40px] p-8 md:p-10 border border-outline-variant/15 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined text-primary text-[120px]">public</span>
        </div>

        <h3 className="text-xl font-extrabold text-primary font-headline mb-8 tracking-tighter relative z-10 flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary-container">location_on</span>
          Route Authority
        </h3>

        <div className="space-y-6 relative z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Origin Terminal</span>
            <p className="text-lg font-black text-on-surface font-headline uppercase leading-none">{shipment.origin}</p>
          </div>

          <div className="w-fit py-1 px-3 bg-primary-fixed rounded-full flex items-center gap-2 border border-primary-fixed">
            <span className="material-symbols-outlined text-on-primary-container text-sm">verified</span>
            <span className="text-[9px] font-black uppercase text-on-primary-container">Verifying Corridor...</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Destination Hub</span>
            <p className="text-lg font-black text-on-surface font-headline uppercase leading-none">{shipment.destination}</p>
          </div>
        </div>
      </div>

      {/* Support Verification */}
      <div className="bg-surface-container-lowest rounded-[40px] p-8 md:p-10 border border-outline-variant/15 shadow-sm flex flex-col justify-between group">
        <div>
          <h3 className="text-xl font-extrabold text-primary font-headline mb-8 tracking-tighter flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-500">verified</span>
            Verification Hub
          </h3>
          <p className="text-sm font-bold text-on-surface-variant leading-relaxed mb-8">
            Need live status verification? Use our authorized kinetic inquiry channels for immediate response.
          </p>
        </div>

        <div className="space-y-4">
          <a href="mailto:support@natakahii.co.tz" className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/15 hover:border-secondary-container group transition-all">
            <div className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/15 flex items-center justify-center text-on-surface-variant group-hover:text-secondary-container transition-colors">
              <span className="material-symbols-outlined text-lg">mail</span>
            </div>
            <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest">Email Support</span>
          </a>
          <a href="tel:+255000000000" className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/15 hover:border-secondary-container group transition-all">
            <div className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/15 flex items-center justify-center text-on-surface-variant group-hover:text-secondary-container transition-colors">
              <span className="material-symbols-outlined text-lg">phone</span>
            </div>
            <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest">Direct Hotline</span>
          </a>
        </div>
      </div>
    </div>
  );
}
