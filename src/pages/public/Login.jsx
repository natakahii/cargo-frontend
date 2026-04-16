import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AuthLayout } from '../../components/layout/AuthLayout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(Object.values(err.response.data.errors)[0][0]);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
<AuthLayout>
  <div className="w-full relative transition-all duration-500">
    {/* Form Glow Underlay */}
    <div className="absolute -inset-10 bg-indigo-500/5 rounded-full blur-[80px] -z-10" />

    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-[2px] w-8 bg-[#fe6431] rounded-full" />
        <span className="text-[10px] font-extrabold text-[#fe6431] uppercase tracking-[0.3em]">Access Dashboard</span>
      </div>
      <h2 className="text-4xl lg:text-5xl font-[800] text-[#000d6b] font-headline tracking-tighter mb-4 leading-none">
        Welcome <span className="text-slate-300">/</span> <br />
        <span className="text-[#fe6431]">Precision Hub.</span>
      </h2>
      <p className="text-slate-400 font-medium font-body text-base leading-relaxed max-w-xs">
        Secure entry into the NatakaHii operational network.
      </p>
    </div>

    {error && (
      <div className="mb-8 p-4 bg-white border border-red-100 shadow-sm text-red-600 rounded-2xl text-[11px] font-bold font-body animate-[shake_0.4s_ease-in-out] flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
        {error}
      </div>
    )}

    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] font-headline transition-colors group-focus-within:text-cargo-primary">System Email</label>
        <div className="relative group">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-7 py-5 rounded-[24px] border border-slate-200 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] focus:border-[#000d6b] focus:ring-4 focus:ring-[#000d6b]/5 text-slate-800 font-bold transition-all outline-none font-body text-[16px] placeholder:text-slate-300 placeholder:font-medium" 
            placeholder="admin@natakahii.com"
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] font-headline">Access Key</label>
          <button type="button" className="text-[10px] font-bold text-cargo-primary hover:underline uppercase tracking-tighter">Lost Access?</button>
        </div>
        <div className="relative group">
          <input 
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-7 py-5 rounded-[24px] border border-slate-200 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] focus:border-[#000d6b] focus:ring-4 focus:ring-[#000d6b]/5 text-slate-800 font-bold transition-all outline-none font-body text-[16px] placeholder:text-slate-300 placeholder:font-medium" 
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="pt-6 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-indigo-500 rounded-[26px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        <button 
          type="submit" 
          disabled={loading}
          className="relative w-full !h-20 bg-[#000d6b] rounded-[24px] text-white flex items-center justify-center gap-4 group overflow-hidden transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="text-sm font-[800] uppercase tracking-[0.2em]">
            {loading ? 'Authenticating...' : 'Enter Hub'}
          </span>
          {!loading && <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all duration-500" />}
        </button>
      </div>
    </form>

    <div className="mt-16 text-center">
      <p className="text-sm font-bold text-slate-400 font-body flex items-center justify-center gap-4">
        New Fleet Account?
        <Link to="/signup" className="h-10 px-6 rounded-full border border-slate-200 flex items-center text-[#000d6b] font-extrabold hover:border-orange-500 hover:text-orange-500 transition-all">
          Register Key
        </Link>
      </p>
    </div>
  </div>
</AuthLayout>
  );
}
