"use client";
import { GitHubCalendar } from 'react-github-calendar';

export default function MyGitHubCalendar({ username }: { username: string }) {
  return (
    <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col items-center">
      <div className="w-full flex justify-start mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          GitHub Contributions
        </h2>
      </div>
      <GitHubCalendar 
        username={username}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        theme={{
          light: ['#ebeed0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
          dark: ['#1e293b', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }}
      />
    </div>
  );
}