import React from 'react';

interface RepoProps {
  repo: any;
}

export default function ProjectCard({ repo }: RepoProps) {
  return (
    <a 
      href={repo.html_url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 hover:border-blue-500/40 transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-slate-400 px-3 py-1 rounded-full">
          {repo.language || 'Code'}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
        {repo.name}
      </h3>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">
        {repo.description || "Building something amazing with modern technologies."}
      </p>

      <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>📦 {(repo.size / 1024).toFixed(1)} MB</span>
      </div>
    </a>
  );
}