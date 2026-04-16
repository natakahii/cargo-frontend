import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { 
  ArrowLeft, 
  Package, 
  MapPin, 
  Clock, 
  User, 
  Phone, 
  CheckCircle, 
  Truck,
  AlertCircle
} from 'lucide-react';
import api from '../../services/api';

export function ShipmentDetail() {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await api.get(`/shipments/${id}`);
        setShipment(response.data);
      } catch (error) {
        console.error('Error fetching shipment details', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  const getStatusDisplay = (status) => {
    const icons = {
      delivered: <CheckCircle className="text-green-500" />,
      in_transit: <Truck className="text-cyan-500" />,
      received: <Package className="text-blue-500" />,
      pending: <Clock className="text-yellow-500" />
    };
    return (
      <div className="flex items-center gap-2">
        {icons[status] || <AlertCircle className="text-slate-400" />}
        <span className="font-bold uppercase tracking-[0.1em] text-sm">{status.replace(/_/g, ' ')}</span>
      </div>
    );
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cargo-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (!shipment) {
    return (
       <DashboardLayout>
         <div className="text-center py-20">
           <h2 className="text-2xl font-bold text-slate-800">Shipment Not Found</h2>
           <Link to="/shipments" className="text-cargo-primary font-bold mt-4 inline-block">Back to List</Link>
         </div>
       </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8 animate-[popIn_0.4s_ease-out]">
        
        {/* Navigation & Header */}
        <div className="flex flex-col gap-4">
          <Link 
            to="/shipments" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-cargo-primary transition-colors font-headline"
          >
            <ArrowLeft size={16} /> BACK TO SHIPMENTS
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-cargo-primary/10 text-cargo-primary text-[10px] font-extrabold rounded-full tracking-widest border border-cargo-primary/20">
                  REF: {shipment.id}
                </span>
                {getStatusDisplay(shipment.status)}
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 font-headline tracking-tight">
                {shipment.tracking_number}
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="btn btn-soft !min-h-[46px]">Modify Details</button>
              <button className="btn btn-primary !min-h-[46px]">Generate Manifest</button>
            </div>
          </div>
        </div>

        {/* Global Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Route & Contacts */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Route Summary */}
            <div className="tracking-card !p-8 !bg-white">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 font-body">Logistics Corridor</h3>
              <div className="flex flex-col md:flex-row items-center gap-12 relative">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cargo-primary mb-2 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase font-body">Origin Hub</p>
                  <strong className="text-xl text-slate-900 font-headline">{shipment.origin_fulfillment_center?.name || shipment.sender_city}</strong>
                  <span className="text-sm text-slate-500 font-body">{shipment.origin_fulfillment_center?.city || 'Region Pending'}</span>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-center relative">
                   <div className="w-full h-[2px] bg-slate-100 dashed-border"></div>
                   <Truck className="absolute text-slate-200" size={24} />
                </div>

                <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-cargo-primary/5 border border-cargo-primary/20 flex items-center justify-center text-cargo-primary mb-2 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase font-body">Destination Hub</p>
                  <strong className="text-xl text-slate-900 font-headline">{shipment.destination_fulfillment_center?.name || shipment.recipient_city}</strong>
                  <span className="text-sm text-slate-500 font-body">{shipment.destination_fulfillment_center?.city || 'Region Pending'}</span>
                </div>
              </div>
            </div>

            {/* Entity Details (Sender & Recipient) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <ContactSection title="Sender Information" name={shipment.sender_name} phone={shipment.sender_phone} address={shipment.sender_address} type="sender" />
               <ContactSection title="Recipient Information" name={shipment.recipient_name} phone={shipment.recipient_phone} address={shipment.recipient_address} type="recipient" />
            </div>

            {/* Item Manifest */}
            <div className="tracking-card !bg-white !p-0 overflow-hidden">
               <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/30">
                 <h3 className="text-sm font-bold text-slate-800 font-headline">Cargo Manifest</h3>
               </div>
               <div className="p-8">
                  <table className="w-full">
                    <thead>
                      <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-widest border-b border-slate-100 pb-4">
                        <th className="text-left pb-4">Item Name</th>
                        <th className="text-center pb-4">Qty</th>
                        <th className="text-right pb-4">Weight</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {shipment.items?.map((item) => (
                        <tr key={item.id}>
                          <td className="py-4 text-sm font-bold text-slate-800 font-headline">{item.name}</td>
                          <td className="py-4 text-center text-sm font-body text-slate-500 font-mono">{item.quantity}</td>
                          <td className="py-4 text-right text-sm font-body text-slate-500 font-mono">{item.weight_kg}kg</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* Right Column: Timeline & Meta */}
          <div className="space-y-8">
            <div className="tracking-card !p-8 !bg-white">
              <h3 className="text-sm font-bold text-slate-900 font-headline mb-8 border-b border-slate-50 pb-4">Tracking History</h3>
              <div className="space-y-8 relative">
                {/* Visual Line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100" />
                
                {shipment.tracking_events?.map((event, idx) => (
                  <div key={event.id} className="relative flex gap-6">
                    <div className={`w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center relative z-10 ${idx === 0 ? 'bg-cargo-primary' : 'bg-slate-200'}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <div className="flex-1">
                       <p className={`text-sm font-bold font-headline ${idx === 0 ? 'text-slate-900' : 'text-slate-500'}`}>{event.event.replace(/_/g, ' ')}</p>
                       <p className="text-xs text-slate-400 font-body mt-1">{event.description}</p>
                       <div className="flex items-center gap-4 mt-3">
                         <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                           <MapPin size={10} /> {event.location}
                         </span>
                         <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                           <Clock size={10} /> {new Date(event.occurred_at).toLocaleDateString()}
                         </span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tracking-card !bg-cargo-primary !text-white !p-8 relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-xs font-extrabold uppercase tracking-widest opacity-60 mb-4">Internal Assignment</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                       <span className="opacity-60">Handled By:</span>
                       <span className="font-bold">DAR-001 CENTRAL Hub</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="opacity-60">Verified By:</span>
                       <span className="font-bold underline">Admin S.Void</span>
                    </div>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function ContactSection({ title, name, phone, address, type }) {
  return (
    <div className="tracking-card !p-8 !bg-white">
      <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-6 font-body border-b border-slate-50 pb-3">{title}</h3>
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shadow-inner">
             <User size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-tight font-body">Contact Person</p>
            <p className="text-sm font-extrabold text-slate-800 font-headline">{name}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shadow-inner">
             <Phone size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-tight font-body">Mobile Line</p>
            <p className="text-sm font-extrabold text-slate-800 font-headline">{phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shadow-inner flex-shrink-0">
             <MapPin size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-tight font-body">Official Address</p>
            <p className="text-sm font-extrabold text-slate-800 font-headline leading-tight">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
