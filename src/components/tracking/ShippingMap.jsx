import React from 'react';
import { Radar, Navigation, Compass } from 'lucide-react';

export function ShippingMap({ shipment }) {
  return (
    <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm overflow-hidden relative group">
      <div className="flex justify-between items-center mb-8 relative z-10 px-2">
         <div>
            <h3 className="text-xl font-[800] text-[#000d6b] font-headline tracking-tighter">Geometric Position</h3>
            <p className="text-[10px] font-black text-[#fe6431] uppercase tracking-[0.2em]">{shipment.origin} corridor stream</p>
         </div>
         <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
            <Compass className="animate-[spin_10s_linear_infinite]" size={20} />
         </div>
      </div>

      <div className="relative aspect-video rounded-[32px] bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center">
         {/* Map Placeholder Content */}
         <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full scale-150">
               <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
               <path d="M0,70 Q25,45 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
               <circle cx="20" cy="50" r="1" fill="currentColor" />
               <circle cx="80" cy="50" r="1" fill="currentColor" />
            </svg>
         </div>

         <div className="relative z-10 flex flex-col items-center animate-[pulse_3s_ease-in-out_infinite]">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
               <div className="w-10 h-10 rounded-full bg-[#fe6431] shadow-[0_0_20px_rgba(254,100,49,0.5)] flex items-center justify-center text-white">
                  <Radar size={20} />
               </div>
            </div>
            <span className="mt-4 text-[9px] font-black text-[#000d6b] uppercase tracking-widest text-center">
               Active Signal: {shipment.status === 'delivered' ? 'Location Confirmed' : 'In Transit Movement'}
            </span>
         </div>

         {/* Kinetic Floating Points */}
         <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-500 rounded-full blur-[1px] animate-ping" />
         <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#fe6431] rounded-full blur-[1px] animate-ping" />
      </div>

      <div className="mt-8 flex justify-between items-center px-2">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Telemetry On</span>
         </div>
         <span className="text-[9px] font-black text-slate-300 uppercase tracking-tighter italic">Refreshed: Real Time</span>
      </div>
    </div>
  );
}
