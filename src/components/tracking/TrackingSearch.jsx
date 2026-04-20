import React, { useState } from 'react';

export function TrackingSearch({ onSearch }) {
  const [tid, setTid] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (tid.trim()) onSearch(tid.trim());
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline tracking-tighter mb-12 leading-tight">
          Track Your <br /> <span className="text-secondary-container">Cargo Stream.</span>
        </h1>

        <form onSubmit={handleSearch} className="relative group max-w-2xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary-container to-primary-container rounded-[30px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

          <div className="relative bg-primary-container/80 backdrop-blur-3xl border border-white/10 rounded-[28px] p-2 flex items-center shadow-2xl">
            <div className="pl-6 text-on-primary/40">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <input
              value={tid}
              onChange={(e) => setTid(e.target.value)}
              placeholder="Enter Tracking ID (e.g. NH-9B28A1-TZ)"
              className="flex-1 bg-transparent border-none text-white text-lg font-bold placeholder:text-on-primary/20 px-6 focus:ring-0 outline-none"
              type="text"
            />
            <button className="bg-secondary-container text-on-secondary px-8 md:px-12 py-4 rounded-[22px] font-black text-xs uppercase tracking-[0.1em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-secondary-container/20 flex items-center gap-3">
              Trace <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>

        <p className="mt-8 text-on-primary/30 text-[10px] font-black uppercase tracking-[0.3em]">
          Precision City-to-City Delivery Monitoring
        </p>
      </div>
    </section>
  );
}
