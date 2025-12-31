
import React, { useState, useEffect } from 'react';
import { User, ShoutOut } from '../types';
import { getRecognitionRecommendations } from '../services/gemini';
import { NavLink } from 'react-router-dom';

const AIRecommendations: React.FC<{ user: User; brags: ShoutOut[]; users: User[] }> = ({ user, brags, users }) => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecs = async () => {
      const dataStr = brags.slice(0, 10).map(b => `${b.fromName} recognized ${b.toNames.join(', ')} for ${b.category}`).join('. ');
      const recs = await getRecognitionRecommendations(dataStr);
      setRecommendations(recs);
      setIsLoading(false);
    };
    fetchRecs();
  }, [brags]);

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header>
        <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter mb-4">Neural Suggestions</h1>
        <p className="text-slate-500 font-medium italic leading-relaxed">Gemini AI has analyzed recent workspace velocity to suggest operatives who deserve your attention.</p>
      </header>

      {isLoading ? (
        <div className="bg-white p-20 rounded-[3rem] border border-slate-100 flex flex-col items-center justify-center gap-6">
           <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
           <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest animate-pulse">Consulting Gemini Engine...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, i) => (
            <div key={i} className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-black italic shadow-lg">
                    {rec.employeeName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900 italic">{rec.employeeName}</p>
                    <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">{rec.badgeSuggested}</span>
                  </div>
               </div>
               <p className="text-slate-600 font-medium leading-relaxed italic text-sm mb-10">"{rec.reason}"</p>
               <NavLink to="/create-shoutout" className="block w-full py-5 bg-slate-900 text-white text-center rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-600 transition-all italic">Initiate Recognition</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIRecommendations;
