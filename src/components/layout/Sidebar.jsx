import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  Settings, 
  LogOut, 
  Users, 
  BarChart3,
  MapPin,
  ClipboardCheck,
  Zap
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', to: '/dashboard', roles: ['super_admin', 'admin', 'cargo_agent', 'delivery_agent'] },
  { icon: Package, label: 'Shipments', to: '/shipments', roles: ['super_admin', 'admin', 'cargo_agent'] },
  { icon: ClipboardCheck, label: 'QC Inspection', to: '/qc', roles: ['super_admin', 'admin', 'cargo_agent'] },
  { icon: Truck, label: 'Delivery Runs', to: '/delivery-runs', roles: ['super_admin', 'admin', 'delivery_agent'] },
  { icon: Users, label: 'Staff Hub', to: '/staff', roles: ['super_admin', 'admin'] },
  { icon: MapPin, label: 'Hubs', to: '/hubs', roles: ['super_admin', 'admin'] },
  { icon: BarChart3, label: 'Reports', to: '/reports', roles: ['super_admin', 'admin'] },
];

export function Sidebar() {
  const { user, logout } = useAuth();

  const filteredItems = menuItems.filter(item => 
    !item.roles || (user && item.roles.includes(user.role))
  );

  return (
    <aside className="w-64 h-screen bg-[#000d6b] flex flex-col fixed left-0 top-0 z-20 transition-transform -translate-x-full lg:translate-x-0 shadow-2xl overflow-hidden shadow-indigo-900/40">
      
      {/* Brand Section */}
      <div className="p-8">
        <div className="flex items-center gap-3">
           <span className="text-white text-2xl font-[800] font-headline tracking-tighter">
             NatakaHii Cargo
           </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {filteredItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => `
              flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group font-headline
              ${isActive 
                ? 'bg-[#1525a7] text-white shadow-lg' 
                : 'text-indigo-200/50 hover:text-white hover:bg-white/5'}
            `}
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} className={`transition-all duration-300 ${isActive ? 'text-white' : 'group-hover:text-white'}`} />
                <span className="text-sm font-bold tracking-tight">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section (Matching Mockup) */}
      <div className="p-6 space-y-6">
        
        {/* Fleet @ Load Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 border border-white/5">
          <div className="flex justify-between items-center mb-4">
             <span className="text-[10px] font-extrabold text-indigo-200 uppercase tracking-widest">Fleet Load</span>
             <Zap size={14} className="text-[#fe6431]" />
          </div>
          <div className="h-1.5 w-full bg-indigo-900/50 rounded-full overflow-hidden mb-3">
             <div className="h-full bg-[#fe6431] rounded-full animate-[shimmer_2s_infinite]" style={{ width: '82%' }} />
          </div>
          <div className="flex justify-between items-end">
             <strong className="text-lg font-extrabold text-white leading-none">82% <span className="text-[10px] font-bold text-indigo-300 ml-1">Capacity</span></strong>
          </div>
        </div>

        {/* Action Links */}
        <div className="space-y-1">
          <NavLink
            to="/settings"
            className={({ isActive }) => `
              flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 group font-headline
              ${isActive ? 'bg-white/10 text-white' : 'text-indigo-200/50 hover:text-white hover:bg-white/5'}
            `}
          >
            <Settings size={20} />
            <span className="text-sm font-bold">Settings</span>
          </NavLink>
          
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-5 py-3 text-indigo-100 hover:text-white bg-white/5 hover:bg-red-500/20 rounded-2xl transition-all duration-300 group font-headline border border-white/5"
          >
            <LogOut size={20} className="text-red-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-[800]">Sign Out</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
