
import React from 'react';

const AuditLogs: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-black text-slate-900 italic mb-2">System Audit Logs</h1>
        <p className="text-slate-500 font-medium">Traceable security record of every significant workspace event.</p>
      </header>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest italic border-b border-slate-100">
                  <th className="px-8 py-5">Event Time</th>
                  <th className="px-8 py-5">User</th>
                  <th className="px-8 py-5">Action</th>
                  <th className="px-8 py-5">System Target</th>
                  <th className="px-8 py-5">Status</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {[
                 { time: '14:22:10', user: 'Tharun', action: 'Login Successful', target: 'Security Hub', status: 'Success' },
                 { time: '12:05:45', user: 'System', action: 'Daily Analytics Compute', target: 'DB Worker 2', status: 'Success' },
                 { time: '09:15:22', user: 'Meghana', action: 'Point Redemption', target: 'Rewards Store', status: 'Pending' },
                 { time: '08:00:00', user: 'Admin', action: 'Update User Role', target: 'User u5', status: 'Success' },
               ].map((log, idx) => (
                 <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs text-slate-400">{log.time}</td>
                    <td className="px-8 py-5 font-black text-slate-700 italic text-sm">{log.user}</td>
                    <td className="px-8 py-5 font-bold text-slate-500 text-xs">{log.action}</td>
                    <td className="px-8 py-5 font-mono text-[10px] text-indigo-400">{log.target}</td>
                    <td className="px-8 py-5">
                       <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${log.status === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          {log.status}
                       </span>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default AuditLogs;
