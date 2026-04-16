import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { ClipboardCheck, Package, Truck, AlertCircle, Search, ArrowRight } from 'lucide-react';
import api from '../../services/api';

export function QCInspection() {
  const [dropoffs, setDropoffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);
  const [qcNote, setQcNote] = useState('');

  useEffect(() => {
    fetchDropoffs();
  }, []);

  const fetchDropoffs = async () => {
    try {
      const response = await api.get('/qc/dropoffs');
      setDropoffs(response.data.data || []);
    } catch (error) {
      console.error('Error fetching dropoffs', error);
    } finally {
      setLoading(false);
    }
  };

  const receiveDropoff = async (id) => {
    try {
      await api.post(`/qc/dropoffs/${id}/receive`);
      fetchDropoffs();
    } catch (error) {
      alert('Failed to receive dropoff');
    }
  };

  const processQC = async (id, passed) => {
    try {
      await api.post(`/qc/dropoffs/${id}/process`, {
        passed: passed,
        notes: qcNote
      });
      setProcessingId(null);
      setQcNote('');
      fetchDropoffs();
    } catch (error) {
      alert('Failed to process QC');
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-[popIn_0.4s_ease-out]">
        
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 font-headline tracking-tight">Quality Control</h1>
            <p className="text-slate-500 font-body uppercase text-xs font-bold tracking-widest mt-1">Cargo Intake & Inspection Workflow</p>
          </div>
          <div className="flex gap-3">
             <button className="btn btn-soft !min-h-[46px]">Scan QR Code</button>
             <button className="btn btn-primary !min-h-[46px]">Manual Intake</button>
          </div>
        </div>

        {/* Global Stats or Search */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <QCStat label="Pending Intake" value={dropoffs.filter(d => d.status === 'pending').length} variant="warning" />
           <QCStat label="Ready for QC" value={dropoffs.filter(d => d.status === 'received').length} variant="info" />
           <QCStat label="Daily Capacity" value="85%" variant="success" />
        </div>

        {/* Main List */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
           
           {/* Column: Pending Action */}
           <div className="space-y-4">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-1">Active Queue</h2>
              {loading ? (
                <div className="p-12 text-center bg-white rounded-3xl border border-slate-100 italic text-slate-400">Loading queue...</div>
              ) : dropoffs.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-3xl border border-slate-100 italic text-slate-400 font-body">No pending dropoffs at this hub.</div>
              ) : (
                dropoffs.map((dropoff) => (
                  <div key={dropoff.id} className={`tracking-card !p-6 flex flex-col md:flex-row items-center gap-6 transition-all ${processingId === dropoff.id ? 'ring-2 ring-cargo-primary border-transparent' : '!bg-white'}`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${dropoff.status === 'pending' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                       {dropoff.status === 'pending' ? <Truck size={24} /> : <Search size={24} />}
                    </div>
                    <div className="flex-1 min-w-0 text-center md:text-left">
                       <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">{dropoff.external_order_id}</p>
                       <h3 className="text-lg font-bold text-slate-900 font-headline truncate">{dropoff.external_vendor_name}</h3>
                       <div className="flex items-center gap-2 justify-center md:justify-start mt-2">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${dropoff.status === 'pending' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                             {dropoff.status}
                          </span>
                       </div>
                    </div>
                    
                    <div className="flex gap-2">
                       {dropoff.status === 'pending' ? (
                          <button 
                             onClick={() => receiveDropoff(dropoff.id)}
                             className="btn btn-primary !h-12 !px-6 !text-xs"
                          >
                             Receive
                          </button>
                       ) : (
                          <button 
                             onClick={() => setProcessingId(dropoff.id)}
                             className="btn btn-accent !h-12 !px-6 !text-xs"
                          >
                             Start QC
                          </button>
                       )}
                    </div>
                  </div>
                ))
              )}
           </div>

           {/* Column: QC Form (Contextual) */}
           <div className="space-y-4">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-1">Inspection Panel</h2>
              {processingId ? (
                <div className="tracking-card !p-8 !bg-white animate-[popIn_0.3s_ease-out]">
                   <div className="flex justify-between items-start mb-8">
                      <div>
                         <h3 className="text-2xl font-bold text-slate-900 font-headline">QC Inspection</h3>
                         <p className="text-sm text-slate-500 font-body">Inspecting order for {dropoffs.find(d => d.id === processingId)?.external_vendor_name}</p>
                      </div>
                      <button onClick={() => setProcessingId(null)} className="text-slate-400 hover:text-slate-600">Cancel</button>
                   </div>

                   <div className="space-y-6">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                         <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-widest">Expected Inventory</h4>
                         <ul className="space-y-2">
                            {dropoffs.find(d => d.id === processingId)?.expected_items?.map((item, i) => (
                               <li key={i} className="flex justify-between text-sm">
                                  <span className="font-bold text-slate-700">{item.name}</span>
                                  <span className="font-mono text-slate-500">x{item.qty}</span>
                               </li>
                            ))}
                         </ul>
                      </div>

                      <div className="space-y-3">
                         <label className="text-sm font-bold text-slate-800 font-headline">Inspection Notes</label>
                         <textarea 
                            className="w-full p-4 rounded-2xl border-2 border-slate-50 focus:border-cargo-primary outline-none transition-all font-body text-sm bg-slate-50/50"
                            placeholder="Describe condition, missing items, or packaging issues..."
                            rows="4"
                            value={qcNote}
                            onChange={(e) => setQcNote(e.target.value)}
                         ></textarea>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                         <button 
                            onClick={() => processQC(processingId, false)}
                            className="btn btn-soft !bg-red-50 !text-red-600 hover:!bg-red-100 !h-14 font-bold"
                         >
                            QC FAILED
                         </button>
                         <button 
                            onClick={() => processQC(processingId, true)}
                            className="btn btn-primary !h-14 font-bold"
                         >
                            PASS QC & SHIP
                         </button>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="tracking-card !bg-transparent border-2 border-dashed border-slate-200 !p-12 text-center opacity-60">
                   <ClipboardCheck className="mx-auto text-slate-300 mb-4" size={48} />
                   <h3 className="text-lg font-bold text-slate-400 font-headline">No Dropoff Selected</h3>
                   <p className="text-sm text-slate-400 font-body">Select a ready dropoff from the queue to start Quality Control.</p>
                </div>
              )}
           </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

function QCStat({ label, value, variant }) {
  const colors = {
    warning: "bg-orange-600",
    info: "bg-blue-600",
    success: "bg-green-600"
  };
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 border-b-4 flex items-center gap-5" style={{borderBottomColor: variant === 'warning' ? '#ae3100' : variant === 'info' ? '#000d6b' : '#16a34a'}}>
       <div className={`w-3 h-3 rounded-full ${colors[variant]}`} />
       <div>
          <p className="text-2xl font-extrabold text-slate-900 font-headline leading-none">{value}</p>
          <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mt-1">{label}</p>
       </div>
    </div>
  );
}
