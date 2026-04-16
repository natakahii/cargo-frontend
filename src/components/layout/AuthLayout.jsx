import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Shield, Globe, Zap } from 'lucide-react';

export function AuthLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cargo-app flex flex-row min-h-screen w-full bg-[#f8f9fc] font-sans selection:bg-cargo-primary selection:text-white overflow-hidden perspective-1000">
      
      {/* Dynamic Cinematic Section (Left) */}
      <div className="hidden lg:flex w-[42%] bg-[#000d6b] relative flex-col justify-between p-16 overflow-hidden">
        
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
          style={{ transform: `scale(1.1) translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        >
          <img 
            src="/premium_cargo_login_bg_1776344465667.png"
            alt="NatakaHii Logistics Hub"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000d6b] via-[#000d6b]/80 to-transparent" />
        </div>

        {/* Brand Overlay */}
        <div className="relative z-10 animate-[fadeInDown_1s_ease-out]">
          <Link className="brand !text-white !text-2xl !tracking-tighter flex items-center gap-2" to="/">
            <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
              <div className="w-3.5 h-3.5 bg-[#fe6431] rounded-full animate-pulse shadow-[0_0_15px_rgba(254,100,49,0.8)]" />
            </div>
            NatakaHii Cargo
          </Link>
        </div>

        {/* Narrative Copy with Staggered Animation */}
        <div className="relative z-10 max-w-sm space-y-8">
          <div className="space-y-4">
             <div className="h-1 w-12 bg-[#fe6431] rounded-full animate-[expand_1.5s_ease-in-out_infinite]" />
             <h1 className="text-5xl font-extrabold text-white leading-[1.1] font-headline tracking-tight animate-[fadeInLeft_0.8s_ease-out]">
                Unified <br />Logistics <span className="text-[#fe6431]">Precision.</span>
             </h1>
          </div>
          <p className="text-lg text-blue-100/60 font-body leading-relaxed animate-[fadeIn_1.2s_ease-out]">
            Experience the most advanced operational hub in East Africa. Powering trade through technology.
          </p>
          
          {/* Dynamic Trust Badges */}
          <div className="flex gap-4 pt-4 animate-[fadeInUp_1.5s_ease-out]">
             <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <Shield className="text-[#fe6431]" size={20} />
             </div>
             <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <Globe className="text-blue-400" size={20} />
             </div>
             <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <Zap className="text-yellow-400" size={20} />
             </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="relative z-10 flex items-center gap-6 text-[10px] font-extrabold text-white/30 uppercase tracking-[0.3em] font-body">
          <span>&copy; {new Date().getFullYear()} NatakaHii</span>
          <span className="w-1.5 h-1.5 bg-white/15 rounded-full" />
          <span>Operational Hub v2.4</span>
        </div>

        {/* Dynamic Glows that follow mouse subtly */}
        <div 
          className="absolute w-[600px] h-[600px] bg-[#fe6431]/20 rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
          style={{ 
            left: `calc(-100px + ${mousePosition.x * 2}px)`, 
            bottom: `calc(-100px + ${mousePosition.y * 2}px)` 
          }}
        />
      </div>

      {/* Interactive Main Content Pane */}
      <div className="flex-1 relative flex flex-col bg-[#f8f9fc] overflow-hidden">
        
        {/* Persistent Floating Header */}
        <header className="absolute top-0 left-0 right-0 z-40 p-6 lg:px-12 flex justify-between items-center bg-white/50 backdrop-blur-md border-b border-white/20">
          <Link to="/" className="lg:hidden brand !text-[#000d6b]">NatakaHii</Link>
          <div className="flex items-center gap-8 ml-auto">
             <Link to="/" className="text-xs font-[800] text-slate-400 hover:text-cargo-primary transition-all font-headline uppercase tracking-widest flex items-center gap-2 group decoration-2 underline-offset-8 hover:underline">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
             </Link>
          </div>
        </header>

        {/* Centered Form Area with Page Transitions */}
        <main 
          key={location.pathname}
          className="flex-1 flex items-center justify-center p-6 relative z-10 animate-[pageEnter_0.5s_ease-out]"
        >
           {/* Abstract Decorative Layers */}
           <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-30 pointer-events-none" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-100 rounded-full blur-[100px] opacity-20 pointer-events-none" />

           <div className="w-full max-w-md relative">
              {children}
           </div>
        </main>
      </div>

    </div>
  );
}
