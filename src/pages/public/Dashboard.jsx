import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { KpiCards } from '../../components/dashboard/KpiCards';
import { ShipmentTable } from '../../components/dashboard/ShipmentTable';
import { ActiveRuns } from '../../components/dashboard/ActiveRuns';
import { RecentFeed } from '../../components/dashboard/Feed';
import api from '../../services/api';

export function Dashboard() {
  const [data, setData] = useState({
    stats: null,
    recent_shipments: [],
    active_runs: [],
    recent_feed: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get('/dashboard/stats');
        setData({
          stats: response.data.stats,
          recent_shipments: response.data.recent_shipments,
          active_runs: response.data.active_runs,
          recent_feed: response.data.recent_feed
        });
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[60vh]">
          <div className="relative w-16 h-16">
             <div className="absolute inset-0 border-4 border-[#000d6b]/10 rounded-full" />
             <div className="absolute inset-0 border-4 border-t-[#fe6431] rounded-full animate-spin" />
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-12 animate-[pageEnter_0.6s_ease-out]">
        
        {/* Main Hub Header */}
        <div className="mb-10">
          <h1 className="text-6xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-4 leading-tight">
             Operations Hub
          </h1>
          <p className="text-xl text-slate-400 font-medium font-body leading-relaxed max-w-2xl">
             Real-time logistics monitoring: <span className="text-slate-800 font-bold">Dar-Mwanza Corridor.</span>
          </p>
        </div>

        {/* Global Stats Grid */}
        <KpiCards stats={data.stats} />

        {/* Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (65%) */}
          <div className="lg:col-span-8 space-y-10">
             <ShipmentTable shipments={data.recent_shipments} />

             {/* Bottom Operational Widgets */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                <div className="bg-white rounded-[28px] p-8 border border-slate-100 flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all">
                   <div>
                      <h4 className="text-lg font-[800] text-[#000d6b] font-headline tracking-tight mb-1">Live Map Monitor</h4>
                      <p className="text-xs text-slate-400 font-bold mb-4">18 vehicles active in Northern Circuit.</p>
                      <button className="text-xs font-black text-indigo-600 hover:underline">Open Monitor →</button>
                   </div>
                   <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all opacity-40">
                      <svg viewBox="0 0 100 100" className="w-full h-full p-2 opacity-20">
                         <path d="M20,50 Q30,20 50,50 T80,50" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                   </div>
                </div>

                <div className="bg-[#fe6431] rounded-[28px] p-8 text-white shadow-xl shadow-orange-500/20">
                   <h4 className="text-lg font-[800] font-headline tracking-tight mb-2">Capacity Alert</h4>
                   <p className="text-xs text-white/80 font-bold mb-6">Dar-Arusha route at 95% capacity.</p>
                   <button className="bg-white text-[#fe6431] px-6 py-2.5 rounded-full text-[11px] font-[900] uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all">
                      Re-route Shipments
                   </button>
                </div>
             </div>
          </div>

          {/* Right Column (35%) */}
          <div className="lg:col-span-4 space-y-10">
             <ActiveRuns runs={data.active_runs} />
             <RecentFeed feed={data.recent_feed} />
          </div>

        </div>

        {/* Dashboard Footer */}
        <footer className="pt-20 pb-12 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="col-span-1">
              <h5 className="text-sm font-[900] text-[#000d6b] font-headline mb-4 tracking-tighter">NatakaHii Cargo</h5>
              <p className="text-[11px] font-bold text-slate-400 leading-relaxed max-w-xs">
                 Kinetic authority and real-time logistics precision across East Africa.
              </p>
           </div>
           <div>
              <h6 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Routes</h6>
              <div className="space-y-2 text-[11px] font-bold text-slate-500">
                 <p>Dar es Salaam to Mwanza</p>
                 <p>Arusha to Dodoma</p>
              </div>
           </div>
           <div className="text-right flex flex-col justify-end">
              <p className="text-[11px] font-bold text-slate-400">© 2026 NatakaHii Cargo. All rights reserved.</p>
           </div>
        </footer>

      </div>
    </DashboardLayout>
  );
}
