import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AuthLayout } from '../../components/layout/AuthLayout';

export default function Signup() {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Logic for registration would normally go here
      console.log('Registering:', formData);
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(Object.values(err.response.data.errors)[0][0]);
      } else {
        setError('Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full relative transition-all duration-500">
        {/* Form Glow Underlay */}
        <div className="absolute -inset-10 bg-orange-500/5 rounded-full blur-[80px] -z-10" />

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#fe6431] rounded-full" />
            <span className="text-[10px] font-extrabold text-[#fe6431] uppercase tracking-[0.3em]">Network expansion</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-4 leading-none">
            Scale Your <br />
            <span className="text-[#fe6431]">Fleet Network.</span>
          </h2>
          <p className="text-slate-400 font-medium font-body text-base leading-relaxed max-w-xs">
            Join the elite network of carriers powering the future of supply chain.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-white border border-red-100 shadow-sm text-red-600 rounded-2xl text-[11px] font-bold font-body animate-[shake_0.4s_ease-in-out] flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] font-headline">Business Entity</label>
              <input 
                type="text" 
                required
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                className="w-full px-6 py-4 rounded-[20px] border border-slate-200 bg-white focus:border-[#000d6b] focus:ring-4 focus:ring-[#000d6b]/5 text-slate-800 font-bold transition-all outline-none font-body text-sm placeholder:text-slate-300" 
                placeholder="Mwanza LTD"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] font-headline">Contact Phone</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-6 py-4 rounded-[20px] border border-slate-200 bg-white focus:border-[#000d6b] focus:ring-4 focus:ring-[#000d6b]/5 text-slate-800 font-bold transition-all outline-none font-body text-sm placeholder:text-slate-300" 
                placeholder="+255..."
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] font-headline">Work Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-6 py-4 rounded-[20px] border border-slate-200 bg-white focus:border-[#000d6b] focus:ring-4 focus:ring-[#000d6b]/5 text-slate-800 font-bold transition-all outline-none font-body text-sm placeholder:text-slate-300" 
              placeholder="logistics@company.com"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] font-headline">Access Key</label>
            <input 
              type="password" 
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-6 py-4 rounded-[20px] border border-slate-200 bg-white focus:border-[#000d6b] focus:ring-4 focus:ring-[#000d6b]/5 text-slate-800 font-bold transition-all outline-none font-body text-sm placeholder:text-slate-300" 
              placeholder="••••••••"
            />
          </div>

          <div className="pt-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-indigo-500 rounded-[22px] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <button 
              type="submit" 
              disabled={loading}
              className="relative w-full !h-16 bg-[#000d6b] rounded-[20px] text-white flex items-center justify-center gap-4 group overflow-hidden transition-all duration-500"
            >
              <span className="text-xs font-[800] uppercase tracking-[0.2em]">
                {loading ? 'Processing...' : 'Request Hub Access'}
              </span>
              {!loading && <div className="w-6 h-[1px] bg-white/30 group-hover:w-10 transition-all duration-500" />}
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-xs font-bold text-slate-400 font-body flex items-center justify-center gap-4">
            Already verified?
            <Link to="/login" className="h-10 px-6 rounded-full border border-slate-200 flex items-center text-[#000d6b] font-extrabold hover:border-orange-500 hover:text-orange-500 transition-all">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
