"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-center">
        <div className="flex gap-8 text-sm font-medium text-slate-400 items-center">
          <Link 
            href="/#about" 
            className="hover:text-blue-400 transition-colors py-2"
          >
            About
          </Link>
          
          <Link 
            href="/projects" 
            className="hover:text-blue-400 transition-colors py-2"
          >
            Projects
          </Link>
          
          <Link 
            href="/dashboard" 
            className="px-5 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/5"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}