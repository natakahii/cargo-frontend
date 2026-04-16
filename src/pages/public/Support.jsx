import React, { useState } from 'react';
import { 
  TopNavigation 
} from '../../components/layout/TopNavigation';
import { 
  MarketingFooter 
} from '../../components/layout/Footer';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  ChevronDown, 
  Send,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const faqItems = [
  {
    q: "How can I track my shipment without an account?",
    a: "Every shipment is assigned a unique tracking number (e.g., NH-XXXX-TZ). You can use our public 'Track Cargo' page to get real-time operational stream updates instantly."
  },
  {
    q: "What is the difference between Standard and Express?",
    a: "Standard delivery follows our kinetic hub-to-hub schedule (2-3 days). Express is our priority velocity service, ensuring next-day completion for critical trade cargo."
  },
  {
    q: "Which cities do you cover in Tanzania?",
    a: "We currently operate major corridors connecting Dar es Salaam, Mwanza, Arusha, Dodoma, Mbeya, and Tanga. We are rapidly expanding our geometric network."
  }
];

export function Support() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={`cargo-app bg-slate-50 min-h-screen ${isMenuOpen ? 'menu-open' : ''}`}>
      <TopNavigation activeKey="support" isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="pt-32 pb-20">
        
        {/* Support Hero */}
        <section className="container max-w-6xl px-6 mb-20 text-center animate-[fadeIn_0.5s_ease-out]">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
              <Zap size={14} className="text-[#000d6b]" />
              <span className="text-[10px] font-black text-[#000d6b] uppercase tracking-[0.2em]">Operational Support Active</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-6 leading-tight">
              How Can We <br /> <span className="text-[#fe6431]">Help Today?</span>
           </h1>
           <p className="text-xl text-slate-400 font-medium font-body leading-relaxed max-w-2xl mx-auto">
              Access the NatakaHii operational network support. From tracking inquiries to enterprise logistics solutions.
           </p>
        </section>

        <div className="container max-w-6xl px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* LEFT: Contact Channels & FAQ */}
              <div className="lg:col-span-7 space-y-16">
                 
                 {/* Channel Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center group hover:shadow-xl transition-all">
                       <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#000d6b] mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Phone size={20} />
                       </div>
                       <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Call Us</h4>
                       <p className="text-sm font-black text-[#000d6b] font-headline">+255 (0) 000 000</p>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center group hover:shadow-xl transition-all">
                       <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#fe6431] mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Mail size={20} />
                       </div>
                       <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</h4>
                       <p className="text-sm font-black text-[#000d6b] font-headline">cargo@natakahii.co.tz</p>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center group hover:shadow-xl transition-all">
                       <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <MessageCircle size={20} />
                       </div>
                       <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Chat</h4>
                       <p className="text-sm font-black text-[#000d6b] font-headline">Open Stream</p>
                    </div>
                 </div>

                 {/* FAQ Section */}
                 <div className="space-y-8">
                    <h3 className="text-2xl font-[800] text-[#000d6b] font-headline tracking-tighter">Frequent Inquiries</h3>
                    <div className="space-y-4">
                       {faqItems.map((item, i) => (
                         <div key={i} className="bg-white rounded-[28px] border border-slate-100 overflow-hidden shadow-sm">
                            <button 
                              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                              className="w-full px-8 py-6 flex justify-between items-center text-left"
                            >
                               <span className="text-sm font-black text-[#000d6b] font-headline tracking-tight">{item.q}</span>
                               <ChevronDown className={`text-slate-300 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                            </button>
                            <div className={`px-8 transition-all duration-500 overflow-hidden ${openFaq === i ? 'pb-8 opacity-100 max-h-[200px]' : 'max-h-0 opacity-0'}`}>
                               <p className="text-xs font-bold text-slate-400 leading-relaxed max-w-xl">
                                  {item.a}
                               </p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

              </div>

              {/* RIGHT: High-Gloss Contact Form */}
              <div className="lg:col-span-5">
                 <div className="bg-[#000d6b] rounded-[40px] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden group">
                    {/* Decorative Blooms */}
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-[#fe6431]/10 rounded-full blur-[100px]" />
                    
                    <div className="relative z-10 space-y-10">
                       <div>
                          <h3 className="text-3xl font-[800] font-headline tracking-tighter mb-2">Send Inquiry</h3>
                          <p className="text-xs text-indigo-200 font-bold opacity-60">Kinetic operational support queue.</p>
                       </div>

                       <div className="space-y-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-indigo-300 uppercase tracking-widest ml-2">Full Name</label>
                             <input className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold text-white focus:bg-white/10 focus:ring-0 outline-none transition-all placeholder:text-white/10" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-indigo-300 uppercase tracking-widest ml-2">Email Identity</label>
                             <input className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold text-white focus:bg-white/10 focus:ring-0 outline-none transition-all placeholder:text-white/10" placeholder="name@company.com" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-indigo-300 uppercase tracking-widest ml-2">Operational Message</label>
                             <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold text-white focus:bg-white/10 focus:ring-0 outline-none transition-all placeholder:text-white/10 resize-none" placeholder="Describe your inquiry..." />
                          </div>
                       </div>

                       <button className="w-full bg-[#fe6431] text-white py-5 rounded-3xl font-[900] text-xs uppercase tracking-[0.2em] shadow-2xl shadow-orange-500/20 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all">
                          Finalize Submission <Send size={18} />
                       </button>

                       <div className="flex items-center gap-3 pt-6 opacity-40">
                          <Shield size={16} className="text-[#fe6431]" />
                          <span className="text-[9px] font-black uppercase tracking-widest">Authorized Transmission Path</span>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* Global Markers */}
        <section className="container max-w-6xl px-6 mt-32 border-t border-slate-100 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-3">
              <Globe size={24} className="text-[#000d6b]" />
              <span className="text-xl font-[800] text-[#000d6b] font-headline tracking-tighter">EA Logistics Verified</span>
           </div>
           <div className="flex gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              <span>Privacy Authority</span>
              <span>Terms of Trade</span>
           </div>
        </section>

      </main>

      <MarketingFooter />
    </div>
  );
}
