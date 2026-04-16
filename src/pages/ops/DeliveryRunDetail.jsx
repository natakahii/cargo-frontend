import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { 
  ArrowLeft, 
  Truck, 
  MapPin, 
  Package, 
  CheckCircle, 
  XCircle,
  Phone,
  User,
  ExternalLink
} from 'lucide-react';
import api from '../../services/api';

export function DeliveryRunDetail() {
  const { id } = useParams();
  const [run, setRun] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    fetchRunDetail();
  }, [id]);

  const fetchRunDetail = async () => {
    try {
      const response = await api.get(`/delivery-runs/${id}`);
      setRun(response.data);
    } catch (error) {
      console.error('Error fetching delivery run details', error);
    } finally {
      setLoading(false);
    }
  };

  const startRun = async () => {
    try {
      await api.post(`/delivery-runs/${id}/start`);
      fetchRunDetail();
    } catch (error) {
      alert('Failed to start run');
    }
  };

  const completeShipment = async (shipmentId, status) => {
    setUpdatingId(shipmentId);
    try {
      await api.post(`/delivery-runs/${id}/shipments/${shipmentId}/complete`, {
        status: status,
        notes: status === 'delivered' ? 'Successfully delivered to recipient.' : 'Recipient not available after multiple attempts.'
      });
      fetchRunDetail();
    } catch (error) {
      alert('Failed to update shipment status');
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) return <DashboardLayout><div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cargo-primary"></div></div></DashboardLayout>;
  if (!run) return <DashboardLayout><div className="text-center py-20"><h2 className="text-xl font-bold">Run Not Found</h2></div></DashboardLayout>;

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8 animate-[popIn_0.4s_ease-out]">
        
        {/* Navigation & Actions */}
        <div className="flex flex-col gap-4">
          <Link to="/delivery-runs" className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-400 hover:text-cargo-primary transition-colors font-headline uppercase tracking-widest">
            <ArrowLeft size={16} /> Hub Dispatch
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-cargo-primary/10 text-cargo-primary text-[10px] font-extrabold rounded-full tracking-widest border border-cargo-primary/20">
                  DISPATCH #{run.id}
                </span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${
                  run.status === 'in_progress' ? 'bg-cyan-100 text-cyan-800 border-cyan-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}>
                  {run.status.replace('_', ' ')}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 font-headline tracking-tight">Driver Route Sheet</h1>
            </div>
            {run.status === 'pending' && (
              <button 
                onClick={startRun}
                className="btn btn-primary !h-14 !px-10 gap-2 shadow-xl shadow-cargo-primary/30"
              >
                <Truck size={20} /> START DELIVERY RUN
              </button>
            )}
          </div>
        </div>

        {/* Driver Info Overlay */}
        <div className="tracking-card !bg-white !p-8 flex items-center gap-8 shadow-xl border-l-8 border-cargo-primary">
           <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-cargo-primary shadow-inner border border-slate-100">
             <User size={32} />
           </div>
           <div>
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">On-Duty Driver</p>
              <h2 className="text-2xl font-bold text-slate-900 font-headline">{run.driver?.name}</h2>
              <div className="flex items-center gap-4 mt-2">
                 <span className="text-xs font-bold text-slate-500 font-body flex items-center gap-1">
                   <Phone size={12} className="text-cargo-primary" /> {run.driver?.phone || '+255 (Hub Contact)'}
                 </span>
                 <span className="text-xs font-bold text-slate-500 font-body flex items-center gap-1">
                   <MapPin size={12} className="text-cargo-primary" /> {run.fulfillment_center?.city}
                 </span>
              </div>
           </div>
        </div>

        {/* Shipment Checklist */}
        <div className="space-y-4">
           <h2 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest font-headline">Assigned Deliveries ({run.shipments?.length})</h2>
           
           <div className="grid grid-cols-1 gap-4">
              {run.shipments?.map((shipment) => (
                <div key={shipment.id} className="tracking-card !p-0 !bg-white overflow-hidden border border-slate-100 group transition-all">
                  <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                     <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 font-bold text-xs font-mono group-hover:bg-cargo-primary/5 transition-colors">
                        {shipment.tracking_number.slice(-3)}
                     </div>
                     <div className="flex-1 text-center md:text-left">
                        <p className="text-[10px] font-extrabold text-slate-400 tracking-widest uppercase">{shipment.tracking_number}</p>
                        <h4 className="text-lg font-bold text-slate-900 font-headline mt-1">{shipment.recipient_name}</h4>
                        <p className="text-sm font-medium text-slate-500 font-body mt-1 flex items-center gap-1 justify-center md:justify-start">
                          <MapPin size={14} className="text-cargo-secondary" /> {shipment.recipient_address}, {shipment.recipient_city}
                        </p>
                     </div>
                     
                     <div className="flex gap-3">
                        {shipment.status === 'delivered' ? (
                           <div className="flex items-center gap-2 text-green-600 font-bold font-headline text-sm bg-green-50 px-6 py-3 rounded-xl border border-green-100">
                             <CheckCircle size={18} /> DELIVERED
                           </div>
                        ) : shipment.status === 'failed_delivery' ? (
                           <div className="flex items-center gap-2 text-red-600 font-bold font-headline text-sm bg-red-50 px-6 py-3 rounded-xl border border-red-100">
                             <XCircle size={18} /> FAILED
                           </div>
                        ) : (
                           <div className="flex gap-2">
                              {run.status === 'in_progress' ? (
                                <>
                                  <button 
                                     disabled={updatingId === shipment.id}
                                     onClick={() => completeShipment(shipment.id, 'failed_delivery')}
                                     className="btn btn-soft !bg-red-50 !text-red-600 hover:!bg-red-100 !min-h-[48px] !px-4"
                                  >
                                     Fail
                                  </button>
                                  <button 
                                     disabled={updatingId === shipment.id}
                                     onClick={() => completeShipment(shipment.id, 'delivered')}
                                     className="btn btn-primary !min-h-[48px] !px-8"
                                  >
                                     Deliver
                                  </button>
                                </>
                              ) : (
                                <span className="text-xs font-bold text-slate-400 uppercase italic">Pending Dispatch</span>
                              )}
                           </div>
                        )}
                        <Link 
                           to={`/shipments/${shipment.id}`}
                           className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-cargo-primary transition-colors border border-slate-100"
                        >
                           <ExternalLink size={20} />
                        </Link>
                     </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
