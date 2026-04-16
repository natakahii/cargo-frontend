import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Search, Filter, Box, ChevronRight, User } from 'lucide-react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export function Shipments() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchShipments();
  }, [statusFilter]);

  const fetchShipments = async () => {
    setLoading(true);
    try {
      const response = await api.get('/shipments', {
        params: { 
          search: searchTerm,
          status: statusFilter 
        }
      });
      // Handle pagination structure from Laravel
      setShipments(response.data.data || []);
    } catch (error) {
      console.error('Error fetching shipments', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const configs = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      received: "bg-blue-100 text-blue-800 border-blue-200",
      in_transit: "bg-cyan-100 text-cyan-800 border-cyan-200",
      delivered: "bg-green-100 text-green-800 border-green-200",
      failed_delivery: "bg-red-100 text-red-800 border-red-200",
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
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 font-headline tracking-tight">Shipment Management</h1>
            <p className="text-slate-500 font-body mt-1 uppercase text-xs font-bold tracking-[0.1em]">Centralized Logistics Control</p>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-soft !min-h-[46px]">
              Export Data
            </button>
            <button className="btn btn-primary !min-h-[46px]">
              Process New Intake
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="tracking-card !p-5 flex flex-col lg:flex-row gap-4 items-center !bg-white">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search by Tracking ID, Sender, or Recipient..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-50 focus:border-cargo-primary outline-none transition-all font-body text-sm bg-slate-50/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchShipments()}
            />
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <select 
              className="flex-1 lg:w-48 px-4 py-3 rounded-xl border-2 border-slate-50 focus:border-cargo-primary outline-none transition-all font-body text-sm bg-slate-50/30 font-bold text-slate-700"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="received">Received</option>
              <option value="in_transit">In Transit</option>
              <option value="delivered">Delivered</option>
            </select>
            <button 
              onClick={fetchShipments}
              className="bg-cargo-primary text-white p-3 rounded-xl hover:bg-cargo-primary/90 transition-colors shadow-lg shadow-cargo-primary/20"
            >
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Shipments List */}
        <div className="tracking-card !p-0 overflow-hidden !bg-white !max-w-none shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold font-body">
                  <th className="px-8 py-5">Shipment & Origin</th>
                  <th className="px-8 py-5">Destination Info</th>
                  <th className="px-8 py-5 text-center">Items</th>
                  <th className="px-8 py-5">Current Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-8 py-20 text-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cargo-primary mx-auto"></div>
                      <p className="mt-4 text-slate-400 font-body text-sm font-bold uppercase tracking-widest">Loading Records...</p>
                    </td>
                  </tr>
                ) : shipments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-8 py-20 text-center">
                      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Box className="text-slate-300" size={32} />
                      </div>
                      <p className="text-slate-500 font-headline font-bold text-lg">No Shipments Found</p>
                      <p className="text-slate-400 font-body text-sm">Try adjusting your filters or search term.</p>
                    </td>
                  </tr>
                ) : (
                  shipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 font-headline group-hover:text-cargo-primary transition-colors">
                            {shipment.tracking_number}
                          </span>
                          <span className="text-xs text-slate-500 font-body flex items-center gap-1 mt-1">
                            <span className="w-2 h-2 rounded-full bg-blue-500/20 border border-blue-500/40"></span>
                            {shipment.origin_fulfillment_center?.name || 'Direct Entry'}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                             <User size={14} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-800 font-headline">{shipment.recipient_name}</span>
                            <span className="text-xs text-slate-500 font-body">{shipment.recipient_city}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600 font-mono">
                          {shipment.items?.length || 0}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        {getStatusBadge(shipment.status)}
                      </td>
                      <td className="px-8 py-6 text-right">
                        <Link 
                          to={`/shipments/${shipment.id}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-cargo-primary hover:text-blue-800 font-headline transition-colors group/btn"
                        >
                          Details 
                          <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
