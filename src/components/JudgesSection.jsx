import React from 'react';
import { Award, Linkedin, Twitter, ExternalLink, ShieldCheck } from 'lucide-react';

export default function JudgesSection() {
  const judges = [
    {
      name: 'DR. ELENA ROSTOVA',
      role: 'Principal AI Researcher',
      company: 'DeepMind Systems',
      track: 'AI & Autonomous Models',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Leading neural network alignment & multi-agent reinforcement learning at Google DeepMind.'
    },
    {
      name: 'VIKRAMADITYA KULKARNI',
      role: 'Head of Cybersecurity',
      company: 'Apex Cyber Defence',
      track: 'Zero-Trust Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneer in post-quantum cryptography protocols and cloud-native eBPF thread monitoring.'
    },
    {
      name: 'MARCUS VANE',
      role: 'Partner & Lead Architect',
      company: 'Polygon Labs & ZK',
      track: 'Web3 & Cryptography',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Architected ZK-rollup scaling infrastructure processing over 10M daily transactions.'
    },
    {
      name: 'SARAH CHEN',
      role: 'Director of Machine Learning',
      company: 'OpenAI Foundations',
      track: 'Large Language Models',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Supervising multimodal inference scaling and fine-tuning frameworks for enterprise agents.'
    },
    {
      name: 'ARJUN NAIR',
      role: 'VP of Fintech Engineering',
      company: 'Stripe Global',
      track: 'FinTech & Payments',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Oversees real-time sub-millisecond fraud scoring engine handling global liquidity routes.'
    },
    {
      name: 'DR. CLARA MENDOZA',
      role: 'Biotech AI Lead',
      company: 'Genomic Labs',
      track: 'Healthcare Innovation',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      bio: 'Specialist in deep learning application for protein folding and rapid diagnostic discovery.'
    },
  ];

  return (
    <section id="judges" className="relative py-28 bg-obsidian/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <Award className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              THE EVALUATION COUNCIL
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            JUDGES & <span className="text-crimson-bright text-glow-bright">MENTORS</span>
          </h2>
          <p className="max-w-2xl font-sans text-muted text-sm sm:text-base">
            Evaluated by industry legends, founders, and research directors from global tech giants.
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border-crimson/30 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Image & Company Badge */}
                <div className="relative w-24 h-24 mb-6 rounded-xl overflow-hidden border border-crimson/40 shadow-red-glow">
                  <img
                    src={judge.avatar}
                    alt={judge.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-crimson/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded bg-crimson/20 border border-crimson/40 text-crimson-bright font-bold inline-block mb-2">
                  {judge.company}
                </span>

                <h3 className="font-display text-xl font-extrabold uppercase text-white tracking-wide group-hover:text-crimson-bright transition-colors">
                  {judge.name}
                </h3>
                <p className="font-mono text-xs text-muted font-medium mb-3">
                  {judge.role}
                </p>
                <p className="font-sans text-xs text-gray-300 leading-relaxed mb-4">
                  {judge.bio}
                </p>
              </div>

              {/* Footer Track & Social */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                <span className="text-crimson-bright font-semibold">
                  EVALUATING: {judge.track}
                </span>
                <div className="flex items-center gap-2 text-muted">
                  <a href="#" className="hover:text-white transition-colors">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Twitter size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
