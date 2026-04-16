import { MapPin, User, Phone, Globe, Shield, Mail } from 'lucide-react';

export function ShippingInfo({ shipment }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Route Authority */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-110">
            <Globe size={120} className="text-[#000d6b]" />
         </div>

         <h3 className="text-xl font-[800] text-[#000d6b] font-headline mb-8 tracking-tighter relative z-10 flex items-center gap-3">
           <MapPin size={24} className="text-[#fe6431]" />
           Route Authority
         </h3>

         <div className="space-y-6 relative z-10">
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Origin Terminal</span>
               <p className="text-lg font-black text-slate-800 font-headline uppercase leading-none">{shipment.origin}</p>
            </div>
            
            <div className="w-fit py-1 px-3 bg-indigo-50 rounded-full flex items-center gap-2 border border-indigo-100">
               <Shield size={12} className="text-indigo-400" />
               <span className="text-[9px] font-black uppercase text-indigo-400">Verifying Corridor...</span>
            </div>

            <div className="flex flex-col">
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Destination Hub</span>
               <p className="text-lg font-black text-slate-800 font-headline uppercase leading-none">{shipment.destination}</p>
            </div>
         </div>
      </div>

      {/* Support Verification */}
      <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-between group">
         <div>
            <h3 className="text-xl font-[800] text-[#000d6b] font-headline mb-8 tracking-tighter flex items-center gap-3">
               <Shield size={24} className="text-emerald-500" />
               Verification Hub
            </h3>
            <p className="text-sm font-bold text-slate-400 leading-relaxed mb-8">
               Need live status verification? Use our authorized kinetic inquiry channels for immediate response.
            </p>
         </div>

         <div className="space-y-4">
            <a href="mailto:support@natakahii.co.tz" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#fe6431] group transition-all">
               <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-[#fe6431] transition-colors">
                  <Mail size={18} />
               </div>
               <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Support</span>
            </a>
            <a href="tel:+255000000000" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#fe6431] group transition-all">
               <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-[#fe6431] transition-colors">
                  <Phone size={18} />
               </div>
               <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Direct Hotline</span>
            </a>
         </div>
      </div>
    </div>
  );
}
