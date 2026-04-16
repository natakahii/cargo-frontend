import React from 'react';
import { CheckCircle, Package, MapPin, Truck, Shield } from 'lucide-react';

export function Timeline({ events }) {
  if (!events || events.length === 0) {
    return (
      <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm text-center">
         <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">No timeline stream detected.</p>
      </div>
    );
  }

  const getEventIcon = (type) => {
    switch (type) {
      case 'BOOKED': return Package;
      case 'RECEIVED': return MapPin;
      case 'IN_TRANSIT': return Truck;
      case 'DELIVERED': return CheckCircle;
      default: return Shield;
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm">
      <h3 className="text-xl font-[800] text-[#000d6b] font-headline mb-10 tracking-tighter">Operational Stream</h3>
      
      <div className="space-y-10">
        {events.map((event, i) => {
          const Icon = getEventIcon(event.event);
          const isLatest = i === 0;

          return (
            <div key={i} className="flex gap-6 group relative">
              {/* Kinetic Line */}
              {i !== events.length - 1 && (
                <div className="absolute left-[23px] top-[46px] bottom-[-40px] w-[2px] bg-slate-50 group-hover:bg-[#fe6431]/10 transition-colors" />
              )}

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10
                ${isLatest ? 'bg-[#fe6431] text-white shadow-xl shadow-orange-500/20' : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-[#000d6b]'}
              `}>
                <Icon size={20} />
              </div>

              <div className="flex-1 pt-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`text-sm font-[800] font-headline tracking-tight uppercase leading-none
                     ${isLatest ? 'text-[#000d6b]' : 'text-slate-400'}
                  `}>
                    {event.event.replace(/_/g, ' ')}
                  </h4>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">{event.time}</span>
                </div>
                <p className="text-xs font-bold text-slate-400 leading-relaxed font-body">
                   {event.description} at <span className="text-slate-800">{event.location}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
