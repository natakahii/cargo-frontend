import React from 'react';

export function RecentFeed({ feed }) {
  return (
    <div className="mt-10 text-left">
      <h3 className="text-xl font-[800] text-[#000d6b] font-headline mb-6 tracking-tight">Recent Feed</h3>
      <div className="space-y-6">
        {feed && feed.length > 0 ? (
          feed.map((item, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex flex-col items-center pt-1.5">
                 <div className={`w-2 h-2 rounded-full ${item.type === 'success' ? 'bg-green-500' : 'bg-[#fe6431]'} shadow-[0_0_8px_rgba(0,0,0,0.1)]`} />
                 {i !== feed.length - 1 && <div className="w-[1px] h-full bg-slate-100 mt-2" />}
              </div>
              <div className="pb-4">
                <p className="text-xs font-bold text-slate-800 leading-relaxed mb-0.5 group-hover:text-[#000d6b] transition-colors">
                  {item.content}
                </p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  {item.time}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xs font-bold text-slate-300 uppercase tracking-widest text-center py-10">
            No recent activity detected.
          </p>
        )}
      </div>
    </div>
  );
}
