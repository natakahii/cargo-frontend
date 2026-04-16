import React from 'react';
import { Box, Truck, FileText, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export function KpiCards({ stats }) {
  const kpiData = [
    {
      label: 'ACTIVE SHIPMENTS',
      value: stats?.total_shipments || 0,
      note: '+12%',
      icon: Box,
      tone: 'indigo',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      trend: 'up'
    },
    {
      label: "TODAY'S DELIVERIES",
      value: stats?.delivered_today || 0,
      note: 'Based on real-time activity',
      icon: Truck,
      tone: 'peach',
      bgColor: 'bg-[#fee2e2]',
      iconColor: 'text-red-500',
      trend: 'status'
    },
    {
      label: 'PENDING HUB ACTION',
      value: stats?.pending_qc || 0,
      note: 'Needs priority review',
      icon: AlertCircle,
      tone: 'orange',
      bgColor: 'bg-[#fff7ed]',
      iconColor: 'text-orange-500',
      trend: 'action'
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {kpiData.map((item) => (
        <article key={item.label} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex justify-between items-start transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-[800] text-slate-400 uppercase tracking-[0.2em] font-headline">{item.label}</span>
            <h2 className="text-4xl font-[800] text-[#000d6b] font-headline tracking-tighter leading-none">
              {item.value.toLocaleString()}
            </h2>
            <div className="flex items-center gap-1.5 pt-1">
               {item.trend === 'up' && <TrendingUp size={14} className="text-green-500" />}
               {item.trend === 'status' && <Clock size={14} className="text-indigo-300" />}
               <span className={`text-[11px] font-bold ${item.trend === 'up' ? 'text-green-500' : 'text-slate-500'}`}>
                 {item.note}
               </span>
            </div>
          </div>
          <div className={`${item.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}>
            <item.icon className={item.iconColor} size={28} />
          </div>
        </article>
      ))}
    </section>
  );
}
