import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Truck, 
  MapPin, 
  Box, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  AlertCircle,
  Zap,
  Shield,
  CreditCard
} from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ShippingFooter } from '../../components/layout/Footer';
import api from '../../services/api';

export function BookShipment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [hubs, setHubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    origin_fulfillment_center_id: '',
    destination_fulfillment_center_id: '',
    weight_kg: 1,
    service_level: 'standard',
    sender_name: '',
    sender_phone: '',
    sender_email: '',
    recipient_name: '',
    recipient_phone: '',
    recipient_address: '',
    recipient_city: '',
    special_instructions: ''
  });

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const res = await api.get('/hubs');
        setHubs(res.data);
      } catch (err) {
        console.error("Failed to fetch hubs", err);
      }
    };
    fetchHubs();
  }, []);

  const handleNext = async () => {
    if (step === 1) {
      if (!formData.origin_fulfillment_center_id || !formData.destination_fulfillment_center_id) {
        alert("Please select both origin and destination hubs.");
        return;
      }
      // Fetch Quote
      setLoading(true);
      try {
        const res = await api.post('/shipments/quote', {
          origin_hub_id: formData.origin_fulfillment_center_id,
          destination_hub_id: formData.destination_fulfillment_center_id,
          weight: formData.weight_kg,
          service_level: formData.service_level
        });
        setQuote(res.data);
        setStep(2);
      } catch (err) {
        alert("Failed to calculate price. Please check inputs.");
      } finally {
        setLoading(false);
      }
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Basic validation
      if (!formData.sender_name || !formData.recipient_name || !formData.recipient_phone) {
        alert("Please fill in required contact details.");
        return;
      }
      setStep(4);
    }
  };

  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await api.post('/shipments/guest', formData);
      // Success - Redirect to high-fidelity success page
      navigate('/booking-success', { state: { trackingNumber: res.data.tracking_number } });
    } catch (err) {
      alert("Booking failed. Please check all fields.");
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <div className={`cargo-app bg-slate-50 min-h-screen ${isMenuOpen ? 'menu-open' : ''}`}>
      <TopNavigation 
        activeKey="" 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      <main className="container max-w-4xl pt-32 pb-20 px-6">
        
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-12">
           {[1, 2, 3, 4].map(s => (
             <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs transition-all duration-500
                   ${step >= s ? 'bg-[#000d6b] text-white' : 'bg-white text-slate-300 border border-slate-200'}
                `}>
                   {step > s ? <CheckCircle size={16} /> : s}
                </div>
                {s < 4 && <div className={`h-1 flex-1 mx-4 rounded-full ${step > s ? 'bg-[#000d6b]' : 'bg-slate-200'}`} />}
             </div>
           ))}
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl shadow-indigo-900/5 p-8 md:p-12 border border-slate-100 overflow-hidden relative">
          
          {/* STEP 1: ROUTE & WEIGHT */}
          {step === 1 && (
            <div className="space-y-10 animate-[fadeIn_0.5s_ease-out]">
               <div>
                  <h2 className="text-4xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-2">Route & Weight</h2>
                  <p className="text-slate-400 font-bold text-sm">Select your logistics path across Tanzania.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <label className="text-[11px] font-[900] text-slate-500 uppercase tracking-widest pl-2">Origin Hub</label>
                     <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <select 
                           className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100 appearance-none"
                           value={formData.origin_fulfillment_center_id}
                           onChange={(e) => updateForm('origin_fulfillment_center_id', e.target.value)}
                        >
                           <option value="">Select Pickup Hub</option>
                           {hubs.map(h => <option key={h.id} value={h.id}>{h.name} ({h.code})</option>)}
                        </select>
                     </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[11px] font-[900] text-slate-500 uppercase tracking-widest pl-2">Destination Hub</label>
                     <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fe6431]" size={18} />
                        <select 
                           className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100 appearance-none"
                           value={formData.destination_fulfillment_center_id}
                           onChange={(e) => updateForm('destination_fulfillment_center_id', e.target.value)}
                        >
                           <option value="">Select Delivery Hub</option>
                           {hubs.map(h => <option key={h.id} value={h.id}>{h.name} ({h.code})</option>)}
                        </select>
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="flex justify-between items-center">
                     <label className="text-[11px] font-[900] text-slate-500 uppercase tracking-widest pl-2">Approx. Weight (kg)</label>
                     <span className="text-2xl font-[900] text-[#000d6b] font-headline">{formData.weight_kg}kg</span>
                  </div>
                  <input 
                     type="range" min="1" max="100" 
                     className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#fe6431]"
                     value={formData.weight_kg}
                     onChange={(e) => updateForm('weight_kg', e.target.value)}
                  />
                  <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase">
                     <span>Document (1kg)</span>
                     <span>Heavy Cargo (100kg)</span>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div 
                    onClick={() => updateForm('service_level', 'standard')}
                    className={`flex-1 p-6 rounded-3xl border-2 transition-all cursor-pointer ${formData.service_level === 'standard' ? 'border-[#000d6b] bg-indigo-50/30' : 'border-slate-100 hover:border-indigo-100'}`}>
                     <Box size={24} className="mb-4 text-[#000d6b]" />
                     <h4 className="font-black text-sm uppercase tracking-tight">Standard</h4>
                     <p className="text-[10px] text-slate-400 font-bold">2-3 Business Days</p>
                  </div>
                  <div 
                    onClick={() => updateForm('service_level', 'express')}
                    className={`flex-1 p-6 rounded-3xl border-2 transition-all cursor-pointer ${formData.service_level === 'express' ? 'border-[#fe6431] bg-orange-50/30' : 'border-slate-100 hover:border-orange-100'}`}>
                     <Zap size={24} className="mb-4 text-[#fe6431]" />
                     <h4 className="font-black text-sm uppercase tracking-tight">Express</h4>
                     <p className="text-[10px] text-slate-400 font-bold">Next Day Delivery</p>
                  </div>
               </div>
            </div>
          )}

          {/* STEP 2: PRICE CALCULATION */}
          {step === 2 && quote && (
            <div className="space-y-10 animate-[fadeIn_0.5s_ease-out] text-center py-10">
               <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 mb-6">
                  <CheckCircle size={48} />
               </div>
               <div>
                  <h2 className="text-5xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-2">
                    {quote.currency} {quote.estimate.toLocaleString()}
                  </h2>
                  <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Instant Price Estimate</p>
               </div>
               
               <div className="grid grid-cols-2 gap-8 max-w-md mx-auto py-8">
                  <div className="text-left bg-slate-50 p-6 rounded-3xl border border-slate-100">
                     <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Timeline</span>
                     <strong className="text-lg font-black text-[#000d6b] font-headline">{quote.estimated_days}</strong>
                  </div>
                  <div className="text-left bg-slate-50 p-6 rounded-3xl border border-slate-100">
                     <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Service</span>
                     <strong className="text-lg font-black text-[#fe6431] font-headline uppercase leading-none">
                        {formData.service_level}
                     </strong>
                  </div>
               </div>

               <div className="flex items-center justify-center gap-3 text-emerald-500 bg-emerald-50 py-3 px-6 rounded-full w-fit mx-auto border border-emerald-100">
                  <Shield size={18} />
                  <span className="text-xs font-black uppercase tracking-widest">Precise East Africa Rate</span>
               </div>
            </div>
          )}

          {/* STEP 3: CONTACT DETAILS */}
          {step === 3 && (
            <div className="space-y-10 animate-[fadeIn_0.5s_ease-out]">
               <div>
                  <h2 className="text-4xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-2">Contact Details</h2>
                  <p className="text-slate-400 font-bold text-sm">Guest Checkout: No password required yet.</p>
               </div>

               <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <h4 className="text-[11px] font-[900] text-[#fe6431] uppercase tracking-[0.2em] mb-2 px-2">Sender Information</h4>
                        <input 
                           placeholder="Your Full Name" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100"
                           value={formData.sender_name} onChange={e => updateForm('sender_name', e.target.value)}
                        />
                        <input 
                           placeholder="Phone Number" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100"
                           value={formData.sender_phone} onChange={e => updateForm('sender_phone', e.target.value)}
                        />
                     </div>
                     <div className="space-y-4">
                        <h4 className="text-[11px] font-[900] text-indigo-400 uppercase tracking-[0.2em] mb-2 px-2">Recipient Information</h4>
                        <input 
                           placeholder="Recipient Full Name" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100"
                           value={formData.recipient_name} onChange={e => updateForm('recipient_name', e.target.value)}
                        />
                        <input 
                           placeholder="Recipient Phone" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100"
                           value={formData.recipient_phone} onChange={e => updateForm('recipient_phone', e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-[11px] font-[900] text-indigo-400 uppercase tracking-[0.2em] mb-2 px-2">Delivery Address</h4>
                     <input 
                        placeholder="Street Address / Dropoff Point" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100"
                        value={formData.recipient_address} onChange={e => updateForm('recipient_address', e.target.value)}
                     />
                     <input 
                        placeholder="City" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-indigo-100"
                        value={formData.recipient_city} onChange={e => updateForm('recipient_city', e.target.value)}
                     />
                  </div>
               </div>
            </div>
          )}

          {/* STEP 4: CONFIRMATION */}
          {step === 4 && (
            <div className="space-y-10 animate-[fadeIn_0.5s_ease-out]">
               <div>
                  <h2 className="text-4xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-2">Final Confirmation</h2>
                  <p className="text-slate-400 font-bold text-sm">Review your logistics precision.</p>
               </div>

               <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100">
                  <div className="grid grid-cols-2 gap-12">
                     <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase block mb-4">Shipment Details</span>
                        <div className="space-y-4">
                           <div className="flex justify-between border-b border-slate-200 pb-2">
                              <span className="text-xs font-bold text-slate-500">Service</span>
                              <span className="text-xs font-black text-[#fe6431] uppercase tracking-widest">{formData.service_level}</span>
                           </div>
                           <div className="flex justify-between border-b border-slate-200 pb-2">
                              <span className="text-xs font-bold text-slate-500">Total Weight</span>
                              <span className="text-xs font-black text-[#000d6b]">{formData.weight_kg}kg</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase block mb-4">Total Amount</span>
                        <div className="text-3xl font-[900] text-[#000d6b] font-headline tracking-tighter leading-none">
                           {quote?.currency} {quote?.estimate.toLocaleString()}
                        </div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase mt-4">Includes taxes & hub handling</p>
                     </div>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-4 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl">
                     <AlertCircle size={20} className="text-[#000d6b]" />
                     <p className="text-[11px] font-bold text-indigo-900 leading-relaxed">
                        By confirming, you agree to our kinetic operational terms and Tanzanian freight regulations.
                     </p>
                  </div>
               </div>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="mt-12 pt-8 border-t border-slate-50 flex justify-between items-center">
             {step > 1 ? (
                <button onClick={handleBack} className="flex items-center gap-2 text-sm font-[900] text-slate-400 uppercase tracking-widest hover:text-[#000d6b] transition-all">
                   <ChevronLeft size={20} /> Back
                </button>
             ) : (
                <div />
             )}

             <button 
               onClick={step === 4 ? handleSubmit : handleNext} 
               disabled={loading}
               className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-[900] text-sm uppercase tracking-widest transition-all shadow-xl
                  ${loading ? 'bg-slate-200 text-slate-400' : 'bg-[#fe6431] text-white shadow-orange-500/20 hover:scale-105 active:scale-95'}
               `}
             >
                {loading ? 'Processing...' : (
                  <>
                    {step === 4 ? <CreditCard size={18} /> : null}
                    {step === 4 ? 'Confirm & Book' : 'Continue' } 
                    {step < 4 ? <ChevronRight size={20} /> : null}
                  </>
                )}
             </button>
          </div>

        </div>

        {/* Support Link */}
        <p className="text-center mt-12 text-sm font-bold text-slate-300">
           Need help? Contact our Hub Support at <span className="text-[#000d6b] hover:underline cursor-pointer">support@natakahii.co.tz</span>
        </p>
      </main>

      <ShippingFooter />
    </div>
  );
}
