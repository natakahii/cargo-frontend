import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SupportCard() {
  const navigate = useNavigate();

  return (
    <article className="bg-primary rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative Blur */}
      <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-secondary-container/20 rounded-full blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-secondary-container text-3xl">help</span>
        </div>

        <h3 className="text-2xl font-extrabold font-headline tracking-tighter mb-4 leading-none">Need Live Help?</h3>
        <p className="text-on-primary/60 font-medium text-xs leading-relaxed mb-8 max-w-[200px]">
          Our kinetic support hub is available 24/7 for operational inquiries.
        </p>

        <div className="w-full space-y-3">
          <button
            onClick={() => navigate('/support')}
            className="w-full bg-secondary-container text-on-secondary py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-secondary-container/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Open Support Hub <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>

          <div className="flex gap-2">
            <a href="tel:+255000000000" className="flex-1 bg-white/5 border border-white/10 py-3 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-sm">phone</span>
            </a>
            <a href="mailto:support@natakahii.co.tz" className="flex-1 bg-white/5 border border-white/10 py-3 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 transition-all text-[10px] font-black uppercase">
              Chat
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
