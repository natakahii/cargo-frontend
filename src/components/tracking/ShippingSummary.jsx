import React from 'react';

export function ShippingSummary({ shipment }) {
  const isDelivered = shipment.status === 'delivered';

  return (
    <div className="bg-primary rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
      {/* Dynamic Background Glow */}
      <div className={`absolute top-[-20%] right-[-10%] w-[60%] h-[120%] rounded-full blur-[100px] transition-all duration-1000
        ${isDelivered ? 'bg-emerald-500/20' : 'bg-secondary-container/20'}`}
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-[10px] font-black text-secondary-container uppercase tracking-[0.3em] block mb-2">Live Shipment Status</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter mb-4 leading-none uppercase">
            {shipment.status.replace(/_/g, ' ')}
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-primary/60 text-base">location_on</span>
              <span className="text-xs font-black uppercase tracking-tighter text-on-primary/80">{shipment.origin} → {shipment.destination}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-primary/60 text-base">inventory_2</span>
              <span className="text-xs font-black uppercase tracking-tighter text-on-primary/80">{shipment.weight_kg}kg Capacity</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 min-w-[200px] text-center">
          <span className="material-symbols-outlined mx-auto mb-3 text-secondary-container text-2xl block">calendar_month</span>
          <p className="text-[9px] font-black text-on-primary/60 uppercase tracking-widest mb-1">Estimated Arrival</p>
          <h4 className="text-xl font-black font-headline tracking-tight text-white">{shipment.estimated_delivery || 'Oct 24, 2026'}</h4>
        </div>
      </div>

      {/* Kinetic Progress Bar */}
      <div className="relative mt-12 bg-white/10 h-2 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${isDelivered ? 'bg-emerald-400 w-full' : 'bg-secondary-container w-2/3 shadow-[0_0_15px_rgba(254,100,49,0.5)]'}`}
        />
      </div>
    </div>
  );
}
