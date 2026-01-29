"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Masterpiece Collection</h1>
          <p className="text-slate-400 text-lg">Daftar proyek pilihan yang saya kerjakan dengan penuh cinta dan kopi.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
             [1,2,3,4].map(i => <div key={i} className="h-64 rounded-[2rem] bg-slate-900/40 animate-pulse" />)
          ) : (
            repos.map((repo: any) => <ProjectCard key={repo.id} repo={repo} />)
          )}
        </div>
      </main>
    </div>
  );
}