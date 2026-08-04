import React from 'react';
import { ShieldCheck, Cpu, Globe, Rocket } from 'lucide-react';

export default function SponsorsSection() {
  const sponsors = {
    title: [
      { name: 'NVIDIA', tier: 'TITLE SPONSOR', logo: 'https://img.shields.io/badge/NVIDIA-76B900?style=for-the-badge&logo=nvidia&logoColor=white' },
      { name: 'AWS', tier: 'CLOUD INFRASTRUCTURE', logo: 'https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white' },
      { name: 'OPENAI', tier: 'INTELLIGENCE PARTNER', logo: 'https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white' },
    ],
    gold: [
      { name: 'POLYGON', role: 'Web3 & ZK Sponsor' },
      { name: 'STRIPE', role: 'FinTech Infrastructure' },
      { name: 'SUPABASE', role: 'Database Partner' },
      { name: 'VERCEL', role: 'Deployment Platform' },
      { name: 'MONGODB', role: 'Data Analytics Partner' },
      { name: 'GITHUB', role: 'Developer Platform' },
    ],
  };

  return (
    <section id="sponsors" className="relative py-28 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <Rocket className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              BACKED BY INDUSTRY LEADERS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            SPONSORS & <span className="text-crimson-bright text-glow-bright">PARTNERS</span>
          </h2>
          <p className="max-w-xl font-sans text-muted text-sm sm:text-base">
            Empowered by tech behemoths offering compute credits, direct API keys, and venture seed capital.
          </p>
        </div>

        {/* Title Sponsors Cards */}
        <div className="mb-16">
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-crimson-bright text-center mb-8">
            • TITLE VISIONARIES •
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.title.map((item, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-8 rounded-2xl border-crimson/40 flex flex-col items-center text-center relative group"
              >
                <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest group-hover:text-crimson-neon transition-colors mb-2">
                  {item.name}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-crimson-bright font-bold px-3 py-1 rounded bg-crimson/15 border border-crimson/30">
                  {item.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Partners Grid */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted text-center mb-8">
            • ECOSYSTEM & BOUNTY SPONSORS •
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.gold.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl border-crimson/20 hover:border-crimson/50 text-center flex flex-col justify-center items-center group transition-all"
              >
                <span className="font-display text-base font-extrabold text-white group-hover:text-crimson-bright tracking-wider">
                  {item.name}
                </span>
                <span className="font-mono text-[9px] text-muted tracking-tight mt-1">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
