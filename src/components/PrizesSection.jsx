import React from 'react';
import { Trophy, Award, Gift, Sparkles, Zap, ShieldAlert, Star } from 'lucide-react';

export default function PrizesSection({ onOpenRegister }) {
  const specialPrizes = [
    { title: 'BEST ALL-FEMALE TEAM', reward: '$1,000', sponsor: 'Tech Diversity Network' },
    { title: 'BEST HARDWARE INTEGRATION', reward: '$1,000', sponsor: 'NVIDIA Hardware Lab' },
    { title: 'BEST ZERO-KNOWLEDGE PROOF HACK', reward: '$1,000', sponsor: 'Polygon ZK Labs' },
    { title: 'PEOPLE\'S CHOICE AWARD', reward: 'Tech Gadgets & Swag', sponsor: 'Community Voted' },
  ];

  return (
    <section id="prizes" className="relative py-28 bg-obsidian/90 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-crimson/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <Trophy className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              $25,000+ GRAND PRIZE POOL
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            REWARDS & <span className="text-crimson-bright text-glow-bright">PRIZE POOL</span>
          </h2>
          <p className="max-w-2xl font-sans text-muted text-sm sm:text-base">
            Victors claim direct seed funding, global recognition, hardware perks, and cloud infrastructure credits.
          </p>
        </div>

        {/* Podium Layout with Trophy Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* 2nd Runner Up */}
          <div className="lg:col-span-3 lg:order-1 flex">
            <div className="w-full glass-card glass-card-hover p-8 rounded-2xl border-crimson/30 flex flex-col justify-between items-center text-center relative overflow-hidden group">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted font-bold block mb-4">
                3RD PLACE
              </span>
              <div className="w-16 h-16 rounded-full bg-crimson/10 border border-crimson/40 flex items-center justify-center text-muted group-hover:text-crimson-bright transition-colors mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                2ND RUNNER UP
              </h3>
              <div className="font-display text-4xl font-black text-white text-glow-red my-2">
                $4,000
              </div>
              <p className="font-sans text-xs text-muted leading-relaxed mt-2">
                + $5,000 Cloud Credits <br />
                + VR Headsets for Team
              </p>
              <div className="w-full h-1 bg-crimson/30 mt-6 rounded-full" />
            </div>
          </div>

          {/* 1st Place / Grand Champion Centerpiece */}
          <div className="lg:col-span-6 lg:order-2 flex">
            <div className="w-full glass-card p-8 sm:p-10 rounded-3xl border-2 border-crimson-bright shadow-[0_0_50px_rgba(225,29,72,0.4)] bg-obsidian/95 flex flex-col items-center text-center relative overflow-hidden group">
              
              {/* Top Crown Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson border border-crimson-neon text-white font-mono text-xs font-bold tracking-widest uppercase mb-6 shadow-red-glow">
                <Star className="w-4 h-4 text-white fill-white" />
                GRAND CHAMPION
              </div>

              {/* Abstract Trophy Artwork */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 rounded-2xl overflow-hidden border border-crimson/40 shadow-red-glow">
                <img
                  src="/assets/trophy_abstract.png"
                  alt="VYNORAE Grand Trophy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-wider mb-2">
                OVERALL WINNER
              </h3>

              <div className="font-display text-5xl sm:text-6xl font-black text-white text-glow-bright tracking-tight my-2">
                $10,000
              </div>

              <p className="font-sans text-sm text-gray-300 max-w-md leading-relaxed mt-2">
                + Direct $50,000 VC Incubation Seed Term Sheet <br />
                + $25,000 AWS & OpenAI Compute Credits <br />
                + Custom Neo-Noir Laser-Etched Trophy
              </p>

              <button
                onClick={onOpenRegister}
                className="mt-8 px-8 py-3.5 bg-crimson hover:bg-crimson-bright text-white font-display text-xs font-bold tracking-[0.2em] uppercase rounded border border-crimson-neon shadow-red-glow transition-all duration-300 hover:scale-105"
              >
                CLAIM THE TITLE →
              </button>
            </div>
          </div>

          {/* 1st Runner Up */}
          <div className="lg:col-span-3 lg:order-3 flex">
            <div className="w-full glass-card glass-card-hover p-8 rounded-2xl border-crimson/30 flex flex-col justify-between items-center text-center relative overflow-hidden group">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted font-bold block mb-4">
                2ND PLACE
              </span>
              <div className="w-16 h-16 rounded-full bg-crimson/10 border border-crimson/40 flex items-center justify-center text-muted group-hover:text-crimson-bright transition-colors mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                1ST RUNNER UP
              </h3>
              <div className="font-display text-4xl font-black text-white text-glow-red my-2">
                $6,000
              </div>
              <p className="font-sans text-xs text-muted leading-relaxed mt-2">
                + $10,000 Cloud Credits <br />
                + High-End Mechanical Keyboards
              </p>
              <div className="w-full h-1 bg-crimson/30 mt-6 rounded-full" />
            </div>
          </div>

        </div>

        {/* Special Category Bounties Grid */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-extrabold uppercase text-white tracking-wider mb-8 text-center">
            SPECIAL CATEGORY <span className="text-crimson-bright">BOUNTIES</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((item, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-xl border-crimson/30 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-crimson-bright font-bold block mb-2">
                    {item.sponsor}
                  </span>
                  <h4 className="font-display text-sm font-bold uppercase text-white mb-3">
                    {item.title}
                  </h4>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-display text-lg font-black text-white">
                    {item.reward}
                  </span>
                  <Gift className="w-5 h-5 text-crimson-bright" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
