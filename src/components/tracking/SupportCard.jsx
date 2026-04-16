import React from 'react';
import { HelpCircle, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SupportCard() {
  const navigate = useNavigate();
  
  return (
    <article className="bg-[#000d6b] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative Blur */}
      <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-[#fe6431]/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 transition-transform">
           <HelpCircle className="text-[#fe6431]" size={32} />
        </div>

        <h3 className="text-2xl font-[800] font-headline tracking-tighter mb-4 leading-none">Need Live Help?</h3>
        <p className="text-indigo-100/60 font-medium text-xs leading-relaxed mb-8 max-w-[200px]">
           Our kinetic support hub is available 24/7 for operational inquiries.
        </p>

        <div className="w-full space-y-3">
           <button 
              onClick={() => navigate('/support')}
              className="w-full bg-[#fe6431] text-white py-4 rounded-2xl font-[900] text-[10px] uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
           >
              Open Support Hub <ChevronRight size={14} />
           </button>
           
           <div className="flex gap-2">
              <a href="tel:+255000000000" className="flex-1 bg-white/5 border border-white/10 py-3 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 transition-all">
                 <Phone size={14} />
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
