
import React from 'react';
import { User } from '../types';

const Certificates: React.FC<{ user: User }> = ({ user }) => {
  const certifications = [
    { id: 'c1', title: 'Cultural Catalyst', date: 'Dec 2025', issuer: 'BragBoard AI', icon: '🌟' },
    { id: 'c2', title: 'Collaboration Expert', date: 'Nov 2025', issuer: 'Engineering Dept', icon: '🤝' },
    { id: 'c3', title: 'High-Impact Innovator', date: 'Oct 2025', issuer: 'Product Guild', icon: '💡' }
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in duration-500">
      <header className="mb-12">
        <h1 className="text-3xl font-black text-slate-900 italic mb-2 tracking-tight">Accolade Repository</h1>
        <p className="text-slate-500 font-medium italic">Your verified portfolio of organizational recognition and achievements.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {certifications.map(cert => (
          <div key={cert.id} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform"></div>
             <div className="text-6xl mb-10 group-hover:rotate-12 transition-transform origin-left">{cert.icon}</div>
             <h3 className="text-2xl font-black text-slate-900 italic tracking-tight mb-2">{cert.title}</h3>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10 italic">Issued {cert.date} by {cert.issuer}</p>
             
             <div className="flex gap-4">
                <button className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-200 hover:bg-indigo-700 italic">Download PDF</button>
                <button className="px-6 py-4 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 italic">Share</button>
             </div>
          </div>
        ))}
        
        <div className="bg-slate-50 p-12 rounded-[3.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4">
           <div className="text-4xl opacity-20">📜</div>
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">New accolades unlocked every 500 XP</p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
