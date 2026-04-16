import React from 'react';
import { Truck } from 'lucide-react';

export function ActiveRuns({ runs }) {
  return (
    <div className="space-y-4 text-left">
      <h3 className="text-xl font-[800] text-[#000d6b] font-headline mb-6 tracking-tight">Active Runs</h3>
      {runs.length === 0 ? (
        <div className="p-8 text-center bg-slate-50/50 rounded-[28px] border border-dashed border-slate-200">
           <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">No active runs dispatching</p>
        </div>
      ) : (
        runs.map((run) => (
          <article key={run.id} className="bg-white rounded-[28px] p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-5">
               <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <Truck className="text-[#fe6431]" size={24} />
               </div>
               <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                     <h4 className="text-sm font-[800] text-slate-800 font-headline uppercase tracking-tight">
                       {run.vehicle_plate || `RUN-${run.id}`}
                     </h4>
                     <span className="text-[9px] font-black bg-orange-100 text-[#fe6431] px-2 py-0.5 rounded-full tracking-tighter uppercase">
                       {run.status}
                     </span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold mb-3">{run.assigned_to?.name || 'Unassigned'}</p>
                  
                  {/* Basic Progress for now, can be calculated from completed vs total stops in future */}
                  <div className="flex justify-between items-center text-[10px] font-bold mb-1.5">
                     <span className="text-slate-800">{run.status === 'in_progress' ? '50%' : '0%'}</span>
                     <span className="text-slate-400">{run.vehicle_type}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                     <div className={`h-full bg-[#fe6431] rounded-full ${run.status === 'in_progress' ? 'w-1/2' : 'w-0'}`} />
                  </div>
               </div>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
