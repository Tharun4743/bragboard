
import React from 'react';
import { ShoutOut } from '../types';

const AppreciationWall: React.FC<{ brags: ShoutOut[] }> = ({ brags }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="text-center space-y-4">
        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] italic">The Wall of Wins</div>
        <h1 className="text-5xl font-black text-slate-900 italic tracking-tighter">Celebrating Excellence</h1>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto">A living collection of moments where our team went above and beyond.</p>
      </header>

      {brags.length === 0 ? (
        <div className="text-center py-20 opacity-30">
          <div className="text-9xl mb-4">🧱</div>
          <p className="text-sm font-black uppercase tracking-widest">Wall is currently empty</p>
        </div>
      ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {brags.map((brag) => (
            <div key={brag.id} className="break-inside-avoid bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${brag.fromName}`} className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner" alt="" />
                 <div>
                    <p className="text-xs font-black text-slate-900 italic">{brag.fromName}</p>
                    {/* Fix: Use brag.toNames.join(', ') instead of deprecated brag.toName */}
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">to {brag.toNames.join(', ')}</p>
                 </div>
              </div>
              <p className="text-xl font-black italic text-slate-700 leading-snug mb-8">
                "{brag.message}"
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                   {new Date(brag.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                 </span>
                 <div className="flex gap-2">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">#{brag.category}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppreciationWall;
