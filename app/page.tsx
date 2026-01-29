"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

const MyGitHubCalendar = dynamic(() => import('./components/GitHubCalendar'), { 
  ssr: false,
  loading: () => <div className="h-[150px] w-full animate-pulse bg-slate-900/50 rounded-3xl" />
});

export default function Home() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const githubUsername = "haapiid"; 

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('/api/github');
        const data = await res.json();
        if (Array.isArray(data)) setRepos(data);
      } catch (error) {
        console.error("Gagal memuat repo:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const displayedRepos = repos.slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        <section id="about" className="scroll-mt-32">
          <Hero />
        </section>

        <section className="mb-32">
          <MyGitHubCalendar username={githubUsername} />
        </section>

        <section id="projects" className="scroll-mt-32">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              Featured Projects
            </h2>
            
            {/* Link ke halaman semua proyek */}
            <Link 
              href="/projects" 
              className="hidden md:block text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              See all projects →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading ? (
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 rounded-[2rem] bg-slate-900/40 animate-pulse border border-slate-800" />
              ))
            ) : (
              displayedRepos.map((repo: any) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))
            )}
          </div>

          {!loading && repos.length > 6 && (
            <div className="mt-12 flex justify-center">
              <Link 
                href="/projects"
                className="group relative px-8 py-3 bg-slate-900 border border-slate-800 rounded-2xl font-bold overflow-hidden transition-all hover:border-blue-500/50"
              >
                <span className="relative z-10">Lihat Semua Proyek</span>
                <div className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-900 py-10 text-center text-slate-600 text-sm">
        © 2026 Rifki Hafidl Alauddin. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}