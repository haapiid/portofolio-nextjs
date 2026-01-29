"use client";
import React from 'react';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const username = "haapiid".toLowerCase(); 

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12 border-l-4 border-emerald-500 pl-6">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Git-Analytics Dashboard</h1>
          <p className="text-slate-400 font-medium text-lg">
            Real-time insights for developer <span className="text-emerald-400">@{username}</span>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          
          <section className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Commit Contributions
            </h2>
            <div className="w-full flex justify-center bg-slate-950/50 p-6 rounded-2xl border border-slate-800/50">
              <img 
                src={`https://ghchart.rshah.org/10b981/${username}`} 
                alt="GitHub Chart" 
                className="w-full h-auto invert brightness-150 contrast-125"
                onError={(e) => e.currentTarget.src = "https://via.placeholder.com/800x100/0f172a/64748b?text=GitHub+Chart+Loading..."}
              />
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 flex flex-col items-center min-h-[300px]">
               <h2 className="w-full text-left text-lg font-bold mb-6 text-slate-400">General Overview</h2>
               <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=00000000&title_color=34d399&text_color=94a3b8&icon_color=34d399&hide_border=true`} 
                alt="GitHub Stats" 
                className="w-full h-auto"
               />
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 flex flex-col items-center min-h-[300px]">
               <h2 className="w-full text-left text-lg font-bold mb-6 text-slate-400">Most Used Languages</h2>
               <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=00000000&title_color=34d399&text_color=94a3b8&hide_border=true`} 
                alt="Top Languages" 
                className="w-full h-auto"
               />
            </div>
          </div>

          <section className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800">
             <h2 className="text-left text-lg font-bold mb-6 text-slate-400">Coding Consistency</h2>
             <div className="flex justify-center">
               <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=020617`} 
                alt="GitHub Streak" 
                className="w-full max-w-2xl h-auto"
                onError={(e) => e.currentTarget.style.display = 'none'} 
                />
             </div>
          </section>

        </div>
      </main>
    </div>
  );
}