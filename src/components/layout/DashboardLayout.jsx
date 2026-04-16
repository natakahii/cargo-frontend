import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, X, LogOut, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function DashboardLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, sessionWarning, resetTimers } = useAuth();

  return (
    <div className="flex bg-slate-50 min-h-screen font-sans">

      {/* ── Session Timeout Warning Banner ── */}
      {sessionWarning && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: '#fe6431',
            color: '#fff',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            boxShadow: '0 4px 20px rgba(254,100,49,0.4)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <AlertTriangle size={20} />
            <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>
              Session expiring in 1 minute due to inactivity.
            </span>
          </div>
          <button
            onClick={resetTimers}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff',
              padding: '6px 20px',
              borderRadius: 10,
              fontWeight: 800,
              fontSize: '0.75rem',
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            Stay Logged In
          </button>
        </div>
      )}

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-[80px] bg-slate-50 border-b border-slate-200 z-30 flex items-center justify-between px-6 shadow-sm"
        style={{ top: sessionWarning ? 48 : 0 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cargo-primary rounded-lg flex items-center justify-center">
            <svg className="text-white w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.657m1.945-3.411A9.954 9.954 0 0120 12a9 9 0 11-18 0 8.954 8.954 0 013.935-7.065"></path>
            </svg>
          </div>
          <span className="brand !text-lg">NatakaHii Cargo</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar />
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen pt-[80px] lg:pt-0"
        style={{ paddingTop: sessionWarning ? 128 : undefined }}
      >
        {/* Desktop Header */}
        <header className="hidden lg:flex h-[80px] items-center justify-between px-8 bg-white border-b border-slate-100 sticky top-0 z-10">
          <div>
            <span className="brand">Operations Hub</span>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] font-body -mt-1 ml-0.5">
              {user?.role?.replace('_', ' ')} Portal
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* User Info */}
            <div className="flex items-center gap-4 border-l border-slate-100 pl-6">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800 font-headline">{user?.name}</p>
                <p className="text-xs text-slate-500 font-body">{user?.email}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-cargo-primary font-bold flex items-center justify-center border border-slate-100 shadow-sm">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={logout}
              title="Sign Out"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-100 font-bold text-sm group"
            >
              <LogOut size={16} className="group-hover:scale-110 transition-transform" />
              <span className="hidden xl:block">Sign Out</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1 w-full max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
