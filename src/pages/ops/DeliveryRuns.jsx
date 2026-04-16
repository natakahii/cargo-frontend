import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Truck, MapPin, ChevronRight, Plus, User, Clock } from 'lucide-react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export function DeliveryRuns() {
  const [runs, setRuns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRuns();
  }, []);

  const fetchRuns = async () => {
    try {
      const response = await api.get('/delivery-runs');
      setRuns(response.data.data || []);
    } catch (error) {
      console.error('Error fetching delivery runs', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const configs = {
      pending: "bg-slate-100 text-slate-600 border-slate-200",
      in_progress: "bg-cyan-100 text-cyan-800 border-cyan-200",
      completed: "bg-green-100 text-green-800 border-green-200",
    };
    const config = configs[status] || "bg-slate-100 text-slate-800 border-slate-200";
    return (
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${config} uppercase tracking-wider`}>
        {status.replace(/_/g, ' ')}
      </span>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-[popIn_0.4s_ease-out]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 font-headline tracking-tight">Delivery Operations</h1>
            <p className="text-slate-500 font-body mt-1 uppercase text-xs font-bold tracking-[0.1em]">Last-Mile Dispatch Control</p>
          </div>
          <button className="btn btn-primary !min-h-[46px] gap-2 shadow-lg shadow-cargo-primary/20">
            <Plus size={18} /> New Delivery Run
          </button>
        </div>

        {/* Runs List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
             <div className="col-span-2 py-20 text-center text-slate-400 font-body uppercase tracking-widest text-sm italic">Loading dispatch logs...</div>
          ) : runs.length === 0 ? (
            <div className="col-span-2 tracking-card !bg-transparent border-2 border-dashed border-slate-200 !p-12 text-center opacity-60">
               <Truck className="mx-auto text-slate-300 mb-4" size={48} />
               <h3 className="text-lg font-bold text-slate-400 font-headline">No Active Runs</h3>
               <p className="text-sm text-slate-400 font-body">Create a new delivery run to start dispatching shipments.</p>
            </div>
          ) : (
            runs.map((run) => (
              <div key={run.id} className="tracking-card !p-0 !bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="p-6 border-b border-slate-50 flex justify-between items-start">
                   <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">RUN #{run.id}</span>
                        {getStatusBadge(run.status)}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 font-headline transition-colors group-hover:text-cargo-primary">
                        {run.fulfillment_center?.name} Dispatch
                      </h3>
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-cargo-primary/5 text-cargo-primary flex items-center justify-center">
                     <Truck size={24} />
                   </div>
                </div>
                
                <div className="p-6 bg-slate-50/30 grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400">
                        <User size={14} />
                      </div>
                      <div className="min-w-0">
                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Driver Assigned</p>
                         <p className="text-xs font-bold text-slate-800 truncate">{run.driver?.name || 'Unassigned'}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400">
                        <Clock size={14} />
                      </div>
                      <div className="min-w-0">
                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Load Count</p>
                         <p className="text-xs font-bold text-slate-800">{run.shipments?.length || 0} Shipments</p>
                      </div>
                   </div>
                </div>

                <div className="p-6 flex justify-between items-center text-sm">
                   <span className="text-slate-400 font-body italic text-xs">Assigned: {new Date(run.assigned_at).toLocaleDateString()}</span>
                   <Link 
                      to={`/delivery-runs/${run.id}`}
                      className="inline-flex items-center gap-2 font-bold text-cargo-primary font-headline text-xs group/btn"
                   >
                      Manage Run <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </DashboardLayout>
  );
}
