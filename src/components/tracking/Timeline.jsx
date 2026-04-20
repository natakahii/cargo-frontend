import React from 'react';

const getEventIcon = (type) => {
  switch (type) {
    case 'BOOKED': return 'package_2';
    case 'RECEIVED': return 'location_on';
    case 'IN_TRANSIT': return 'local_shipping';
    case 'DELIVERED': return 'check_circle';
    default: return 'verified';
  }
};

export function Timeline({ events }) {
  if (!events || events.length === 0) {
    return (
      <div className="bg-surface-container-lowest rounded-[40px] p-10 border border-outline-variant/15 shadow-sm text-center">
        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">No timeline stream detected.</p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest rounded-[40px] p-10 border border-outline-variant/15 shadow-sm">
      <h3 className="text-xl font-extrabold text-primary font-headline mb-10 tracking-tighter">Operational Stream</h3>

      <div className="space-y-10">
        {events.map((event, i) => {
          const iconName = getEventIcon(event.event);
          const isLatest = i === 0;

          return (
            <div key={i} className="flex gap-6 group relative">
              {/* Kinetic Line */}
              {i !== events.length - 1 && (
                <div className="absolute left-[23px] top-[46px] bottom-[-40px] w-[2px] bg-surface-container-high group-hover:bg-secondary-container/10 transition-colors" />
              )}

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10
                ${isLatest ? 'bg-secondary-container text-white shadow-xl shadow-secondary-container/20' : 'bg-surface-container-high text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary'}
              `}>
                <span className="material-symbols-outlined text-xl">{iconName}</span>
              </div>

              <div className="flex-1 pt-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`text-sm font-extrabold font-headline tracking-tight uppercase leading-none
                    ${isLatest ? 'text-primary' : 'text-on-surface-variant'}
                  `}>
                    {event.event.replace(/_/g, ' ')}
                  </h4>
                  <span className="text-[10px] font-black text-on-surface-variant/50 uppercase tracking-tighter">{event.time}</span>
                </div>
                <p className="text-xs font-bold text-on-surface-variant leading-relaxed font-body">
                  {event.description} at <span className="text-on-surface">{event.location}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
