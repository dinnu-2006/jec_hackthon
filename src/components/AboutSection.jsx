import React, { useEffect, useRef } from 'react';
import { Target, ShieldCheck, Flame, Trophy, Users, Clock, Award } from 'lucide-react';

export default function AboutSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    const p = video.play();
    if (p !== undefined) p.catch((e) => console.warn('About video autoplay blocked:', e));
  }, []);

  const stats = [
    { label: 'PRIZE POOL', value: '$25,000+', icon: Trophy, desc: 'Cash rewards, incubation & perks' },
    { label: 'HACKATHON DURATION', value: '36 HOURS', icon: Clock, desc: 'Non-stop creation & coding' },
    { label: 'ELITE HACKERS', value: '500+', icon: Users, desc: 'Top engineers from across the nation' },
    { label: 'GLOBAL MENTORS', value: '20+', icon: Award, desc: 'AI leaders & industry pioneers' },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">

      {/* ── Tiger Video Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 transform-gpu"
        >
          <source src="/video/tiger.mp4" type="video/mp4" />
        </video>

        {/* Heavy dark overlay for readability */}
        <div className="absolute inset-0 bg-void/80 pointer-events-none" />
        {/* Top/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />
        {/* Side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60 pointer-events-none" />
        {/* Subtle dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#1A0508_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
        {/* Crimson glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <Target className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              THE MISSION BRIEFING
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ABOUT <span className="text-crimson-bright text-glow-bright">VYNORAE 2026</span>
          </h2>
          <p className="max-w-2xl font-sans text-muted text-sm sm:text-base leading-relaxed">
            Designed for those who push boundaries. VYNORAE 2026 is India's premier national hackathon uniting visionaries, builders, and architects of the digital future.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl border-crimson/30 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-3">
                <Flame className="text-crimson-bright w-6 h-6 animate-pulse" />
                THE NEXT CYBER FRONTIER
              </h3>

              <div className="space-y-4 text-gray-300 font-sans text-sm leading-relaxed">
                <p>
                  Technology is accelerating exponentially. VYNORAE 2026 was engineered to challenge developers to step beyond trivial applications and confront high-stakes global challenges.
                </p>
                <p>
                  Over 36 intense hours, you will collaborate with top-tier talent, leverage advanced compute resources, and build prototype systems under the direct guidance of leaders from Google DeepMind, OpenAI, Web3 Foundations, and Cyber defense institutes.
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-6 font-mono text-xs">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="w-4 h-4 text-crimson-bright shrink-0" />
                  <span>100% Direct IP Ownership</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="w-4 h-4 text-crimson-bright shrink-0" />
                  <span>Free Hardware Kits Provided</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="w-4 h-4 text-crimson-bright shrink-0" />
                  <span>Direct VC Pitching Floor</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="w-4 h-4 text-crimson-bright shrink-0" />
                  <span>Travel Reimbursement Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats HUD Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-crimson/10 border border-crimson/30 group-hover:border-crimson group-hover:bg-crimson/20 transition-colors">
                    <Icon className="w-5 h-5 text-crimson-bright" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted font-bold block mb-2">
                    {item.label}
                  </span>

                  <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight group-hover:text-crimson-neon transition-colors">
                    {item.value}
                  </div>

                  <p className="mt-2 font-sans text-xs text-muted leading-normal">
                    {item.desc}
                  </p>

                  {/* Corner Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-crimson/40 to-transparent group-hover:via-crimson-neon transition-all" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
