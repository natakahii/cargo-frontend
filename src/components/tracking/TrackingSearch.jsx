import React, { useState } from 'react';
import { Truck, ArrowRight, Search, Zap } from 'lucide-react';

export function TrackingSearch({ onSearch }) {
  const [tid, setTid] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (tid.trim()) onSearch(tid.trim());
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#000d6b]">
      {/* Background Decor */}
      <div className="absolute inset-0">
         <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#fe6431]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-4xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
           <Zap size={14} className="text-[#fe6431]" />
           <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Operational Stream Active</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-[800] text-white font-headline tracking-tighter mb-12 leading-tight">
           Track Your <br /> <span className="text-[#fe6431]">Cargo Stream.</span>
        </h1>

        <form onSubmit={handleSearch} className="relative group max-w-2xl mx-auto">
           <div className="absolute -inset-1 bg-gradient-to-r from-[#fe6431] to-indigo-500 rounded-[30px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
           
           <div className="relative bg-[#000b5e]/80 backdrop-blur-3xl border border-white/10 rounded-[28px] p-2 flex items-center shadow-2xl">
              <div className="pl-6 text-indigo-300">
                 <Search size={24} />
              </div>
              <input 
                 value={tid}
                 onChange={(e) => setTid(e.target.value)}
                 placeholder="Enter Tracking ID (e.g. NH-9B28A1-TZ)" 
                 className="flex-1 bg-transparent border-none text-white text-lg font-bold placeholder:text-indigo-200/20 px-6 focus:ring-0"
                 type="text" 
              />
              <button className="bg-[#fe6431] text-white px-8 md:px-12 py-4 rounded-[22px] font-[900] text-xs uppercase tracking-[0.1em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-orange-500/20 flex items-center gap-3">
                 Trace <ArrowRight size={18} />
              </button>
           </div>
        </form>

        <p className="mt-8 text-indigo-100/30 text-[10px] font-black uppercase tracking-[0.3em]">
           Precision City-to-City Delivery Monitoring
        </p>
      </div>
    </section>
  );
}
