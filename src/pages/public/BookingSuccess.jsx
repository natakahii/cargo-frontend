import React, { useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Printer, 
  ArrowRight, 
  Share2, 
  Home,
  Download,
  Shield,
  Truck
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ShippingFooter } from '../../components/layout/Footer';

export function BookingSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const trackingNumber = state?.trackingNumber || 'NH-XXXXXX-TZ';
  const printRef = useRef();

  useEffect(() => {
    if (!state?.trackingNumber) {
      // If someone lands here without booking, redirect home
      const timer = setTimeout(() => navigate('/'), 5000);
      return () => clearTimeout(timer);
    }
  }, [state, navigate]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cargo-app bg-slate-50 min-h-screen">
      <TopNavigation activeKey="" bookHref="/book" isMenuOpen={false} setIsMenuOpen={() => {}} />

      <main className="container max-w-4xl pt-32 pb-20 px-6">
        
        <div className="text-center mb-12 animate-[fadeIn_0.5s_ease-out]">
           <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 mb-6 shadow-xl shadow-emerald-500/10 border border-emerald-100">
              <CheckCircle size={48} />
           </div>
           <h1 className="text-5xl md:text-6xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-4 leading-tight">
              Booking Confirmed.
           </h1>
           <p className="text-xl text-slate-400 font-medium font-body leading-relaxed max-w-2xl mx-auto">
              Your shipment is now registered in our operational network. Kinetic authority initialized.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
           
           {/* LEFT: Tracking Card */}
           <div className="md:col-span-7">
              <div className="bg-white rounded-[40px] shadow-2xl shadow-indigo-900/5 p-10 border border-slate-100 relative overflow-hidden group">
                 <div className="flex justify-between items-start mb-10">
                    <div>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Tracking ID</span>
                       <h3 className="text-3xl font-[900] text-[#000d6b] font-headline tracking-tighter">{trackingNumber}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#000d6b]">
                       <Truck size={24} />
                    </div>
                 </div>

                 <div className="space-y-8 py-6 border-y border-slate-50 mb-10">
                    <div className="flex items-center gap-4">
                       <Shield className="text-emerald-500" size={20} />
                       <p className="text-xs font-bold text-slate-500 leading-relaxed">
                          Secure digital record generated. Agent verification active.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <Link to={`/track/${trackingNumber}`} className="flex-1 bg-[#000d6b] text-white py-4 rounded-2xl font-[900] text-xs uppercase tracking-widest text-center hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                       Track Stream <ArrowRight size={16} />
                    </Link>
                    <button onClick={handlePrint} className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#000d6b] hover:bg-slate-100 transition-all">
                       <Printer size={20} />
                    </button>
                 </div>
              </div>
           </div>

           {/* RIGHT: QR Label Panel */}
           <div className="md:col-span-5">
              <div id="printable-label" className="bg-[#000d6b] rounded-[40px] p-10 text-white shadow-2xl shadow-indigo-900/40 sticky top-32">
                 <div className="text-center mb-8">
                    <span className="text-[10px] font-black text-[#fe6431] uppercase tracking-[0.3em] block mb-6">Package Label</span>
                    <div className="inline-block p-4 bg-white rounded-3xl shadow-2xl">
                       <QRCodeSVG 
                          value={`https://natakahii.co.tz/track/${trackingNumber}`} 
                          size={160}
                          level={"H"}
                          includeMargin={true}
                       />
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                       <p className="text-[9px] font-black text-indigo-300 uppercase tracking-widest mb-1 leading-none">Scanning Instructions</p>
                       <p className="text-[11px] font-bold text-indigo-100 leading-tight">
                          Stick this label on your cargo box. Agents will scan this to update the kinetic stream.
                       </p>
                    </div>
                    
                    <button onClick={handlePrint} className="w-full bg-white text-[#000d6b] py-4 rounded-2xl font-[900] text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#fe6431] hover:text-white transition-all transition-duration-500">
                       <Printer size={18} /> Print Label
                    </button>
                 </div>
              </div>
           </div>

        </div>

        {/* Global Footer Actions */}
        <div className="mt-20 flex flex-col items-center gap-8">
           <div className="flex gap-12">
              <Link to="/" className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-[#000d6b] transition-all uppercase tracking-widest">
                 <Home size={16} /> Dashboard Home
              </Link>
              <button className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-[#000d6b] transition-all uppercase tracking-widest">
                 <Share2 size={16} /> Share Details
              </button>
           </div>
           
           <div className="flex items-center gap-4 py-4 px-8 rounded-full bg-white border border-slate-100 italic text-[11px] font-medium text-slate-400">
              <Shield size={14} className="text-emerald-500 not-italic" />
              This tracking session is encrypted and verified by NatakaHii Cargo Hub.
           </div>
        </div>

      </main>

      <ShippingFooter />
    </div>
  );
}
