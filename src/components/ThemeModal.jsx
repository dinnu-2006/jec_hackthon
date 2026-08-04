import React from 'react';
import { X, ArrowRight, ShieldAlert, Cpu, Trophy, CheckCircle } from 'lucide-react';

export default function ThemeModal({ theme, onClose, onRegister }) {
  if (!theme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/90 backdrop-blur-2xl animate-fade-in">
      <div className="relative w-full max-w-3xl glass-card rounded-2xl border border-crimson/50 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_0_80px_rgba(177,18,38,0.4)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted hover:text-white rounded-lg bg-obsidian border border-crimson/30 hover:border-crimson transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-crimson/20 border border-crimson/50 text-crimson-bright shadow-red-glow">
            {theme.icon && <theme.icon className="w-8 h-8" />}
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson-bright font-bold block">
              TRACK SPECIFICATION • {theme.code}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              {theme.title}
            </h3>
          </div>
        </div>

        {/* Track Overview */}
        <div className="space-y-6 text-gray-300 font-sans text-sm leading-relaxed border-t border-white/10 pt-6">
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-crimson-bright mb-2">
              TRACK OVERVIEW
            </h4>
            <p>{theme.detailedDesc || theme.desc}</p>
          </div>

          {/* Key Problem Statements */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-crimson-bright mb-3">
              SAMPLE PROBLEM STATEMENTS
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {theme.problems?.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2 text-white bg-obsidian/70 p-3 rounded border border-crimson/20">
                  <CheckCircle className="w-4 h-4 text-crimson-bright shrink-0 mt-0.5" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Tech Stack & Bounty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-obsidian/60 p-4 rounded-xl border border-white/10">
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">
                RECOMMENDED TECH STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {theme.tags?.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-crimson/15 text-crimson-bright border border-crimson/40 rounded text-[10px] font-mono font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-obsidian/60 p-4 rounded-xl border border-crimson/30">
              <span className="font-mono text-[10px] text-crimson-bright uppercase tracking-wider block mb-1 font-bold">
                TRACK PRIZE BOUNTY
              </span>
              <p className="font-display text-xl font-black text-white">
                {theme.bounty || '$3,500 Cash + Cloud Credits'}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-mono uppercase text-muted hover:text-white"
            >
              Close Briefing
            </button>
            <button
              onClick={() => {
                onClose();
                onRegister();
              }}
              className="px-6 py-3 bg-crimson hover:bg-crimson-bright text-white font-display text-xs font-bold tracking-widest uppercase rounded border border-crimson-neon shadow-red-glow flex items-center gap-2"
            >
              CHOOSE THIS TRACK & REGISTER
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
