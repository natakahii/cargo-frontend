import React from 'react';
import { MoreVertical } from 'lucide-react';

export function ShipmentTable({ shipments }) {
  const getStatusColor = (status) => {
    const statusMap = {
      pending: 'bg-slate-100 text-slate-500',
      received: 'bg-indigo-50 text-indigo-600',
      qc_in_progress: 'bg-orange-50 text-orange-600',
      qc_passed: 'bg-emerald-50 text-emerald-600',
      in_transit: 'bg-[#7c2d12] text-white',
      delivered: 'bg-[#ecfdf5] text-[#10b981] border border-[#10b981]/10',
    };
    return statusMap[status] || 'bg-slate-100 text-slate-500';
  };

  return (
    <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center text-left">
        <h3 className="text-xl font-[800] text-[#000d6b] font-headline tracking-tight">Recent Shipments</h3>
        <div className="flex bg-slate-50 p-1 rounded-full border border-slate-100">
          <button className="px-6 py-2 rounded-full text-xs font-bold text-white bg-[#000d6b] shadow-sm">
            All
          </button>
          <button className="px-6 py-2 rounded-full text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
            In Transit
          </button>
        </div>
      </div>

      <div className="overflow-x-auto text-left">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50/30 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-[800]">
              <th className="px-10 py-5">ID Ref</th>
              <th className="px-10 py-5">Destination</th>
              <th className="px-10 py-5">Customer</th>
              <th className="px-10 py-5">Status</th>
              <th className="px-10 py-5 text-right">Age</th>
              <th className="px-10 py-5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {shipments.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-10 py-12 text-center text-sm font-bold text-slate-300 font-body uppercase tracking-widest leading-none">
                   No active shipments found.
                </td>
              </tr>
            ) : (
              shipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-10 py-6 text-sm font-bold text-[#000d6b] font-headline tracking-tighter">
                    {shipment.tracking_number}
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex flex-col">
                       <span className="text-sm font-bold text-slate-700 font-headline uppercase leading-none mb-1">
                         {shipment.destination_fulfillment_center?.code || 'WEB-RC'}
                       </span>
                       <span className="text-[10px] font-black text-slate-300 uppercase leading-none">
                         {shipment.recipient_city}
                       </span>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-500 font-body">
                    {shipment.recipient_name}
                  </td>
                  <td className="px-10 py-6">
                    <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter whitespace-nowrap shadow-sm ${getStatusColor(shipment.status)}`}>
                      {shipment.status.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-sm font-bold text-slate-500 font-body text-right">
                    {Math.floor((new Date() - new Date(shipment.created_at)) / (1000 * 60 * 60 * 24))}d
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button type="button" className="opacity-0 group-hover:opacity-100 p-2 hover:bg-slate-100 rounded-xl transition-all">
                      <MoreVertical size={18} className="text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
