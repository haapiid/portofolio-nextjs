import React from "react";

export default function Hero() {
  return (
    <header
      id="about"
      className="mb-24 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Kolom Teks */}
      <div className="flex-1 order-2 md:order-1">
        <div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium mb-6 animate-pulse">
          Available for New Projects
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Fullstack <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent italic">
            Developer.
          </span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
          Halo, saya{" "}
          <span className="text-slate-100 font-semibold">Rifki Hafidl</span>.
          Seorang Software Developer yang berfokus pada pembangunan solusi
          digital yang skalabel. Meskipun sangat mahir dalam{" "}
          <span className="text-blue-400">PHP</span> &{" "}
          <span className="text-emerald-400">Flutter</span>, saya senang
          mengeksplorasi ekosistem teknologi modern untuk menghadirkan
          pengalaman pengguna yang optimal.
        </p>
      </div>

      <div className="flex-shrink-0 order-1 md:order-2">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
            <img
              src="/foto-profil.jpg"
              alt="Rifki Hafidl"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://ui-avatars.com/api/?name=Rifki+Hafidl&background=0D8ABC&color=fff&size=256")
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}
