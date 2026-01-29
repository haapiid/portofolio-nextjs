"use client";
import React from 'react';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const username = "haapiid".toLowerCase(); 

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12 border-l-4 border-emerald-500 pl-6">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Git-Analytics</h1>
          <p className="text-slate-400">Real-time stats for @{username}</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          
          {/* 1. Kontribusi (Sangat Stabil) */}
          <section className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800">
            <h2 className="text-lg font-bold mb-6 text-emerald-400">Commit Contributions</h2>
            <img 
              src={`https://ghchart.rshah.org/10b981/${username}`} 
              alt="GitHub Chart" 
              className="w-full h-auto invert brightness-110"
            />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2. Overview - Menggunakan Provider Berbeda */}
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800">
               <h2 className="text-lg font-bold mb-6 text-slate-400">General Stats</h2>
               <img 
                src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=020617&hide_border=true`} 
                alt="GitHub Stats" 
                className="w-full h-auto"
                // Jika provider ini juga 503, gunakan fallback statis sederhana
                onError={(e) => e.currentTarget.src = `https://img.shields.io/github/followers/${username}?label=Followers&style=for-the-badge&color=10b981`}
               />
            </div>

            {/* 3. Top Langs - Menggunakan Provider Alternatif */}
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800">
               <h2 className="text-lg font-bold mb-6 text-slate-400">Top Languages</h2>
               <img 
                src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=020617&hide_border=true`} 
                alt="Top Languages" 
                className="w-full h-auto"
               />
            </div>
          </div>

          {/* 4. Activity Graph (Jauh lebih stabil dibanding Streak Stats) */}
          <section className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800">
             <h2 className="text-lg font-bold mb-6 text-slate-400">Activity Graph</h2>
             <img 
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&bg_color=020617&hide_border=true&color=10b981`} 
              alt="GitHub Activity Graph" 
              className="w-full h-auto"
              />
          </section>

        </div>
      </main>
    </div>
  );
}