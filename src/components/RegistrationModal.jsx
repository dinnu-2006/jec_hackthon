import React, { useState } from 'react';
import { X, CheckCircle, Shield, ArrowRight, User, Mail, School, Github, Sparkles, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegistrationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    email: '',
    college: '',
    track: 'AI & Autonomous Models',
    teamSize: '3',
    github: '',
    experience: 'Intermediate',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire festive cyber confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B11226', '#FF3B3B', '#E11D48', '#FFFFFF'],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      teamName: '',
      leaderName: '',
      email: '',
      college: '',
      track: 'AI & Autonomous Models',
      teamSize: '3',
      github: '',
      experience: 'Intermediate',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/90 backdrop-blur-2xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl glass-card rounded-2xl border border-crimson/50 p-6 sm:p-8 shadow-[0_0_90px_rgba(177,18,38,0.5)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted hover:text-white rounded-lg bg-obsidian border border-crimson/30 hover:border-crimson transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-crimson/20 border border-crimson/50 text-crimson-bright shadow-red-glow">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson-bright font-bold block">
                  MISSION CLEARANCE PROTOCOL
                </span>
                <h3 className="font-display text-2xl font-extrabold uppercase text-white tracking-wide">
                  REGISTER FOR VYNORAE 2026
                </h3>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5 font-medium">
                    Squad / Team Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. CyberValkyries"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className="w-full bg-obsidian/90 border border-crimson/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-crimson-bright focus:ring-1 focus:ring-crimson-bright transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5 font-medium">
                    Team Leader Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.leaderName}
                      onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                      className="w-full bg-obsidian/90 border border-crimson/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-crimson-bright focus:ring-1 focus:ring-crimson-bright transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="leader@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-obsidian/90 border border-crimson/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-crimson-bright focus:ring-1 focus:ring-crimson-bright transition-all"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5 font-medium">
                    University / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Institution Name"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full bg-obsidian/90 border border-crimson/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-crimson-bright focus:ring-1 focus:ring-crimson-bright transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5 font-medium">
                    Primary Track Target
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-obsidian/90 border border-crimson/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-crimson-bright transition-all"
                  >
                    <option value="AI & Autonomous Models">TRK-01: ARTIFICIAL INTELLIGENCE</option>
                    <option value="Zero-Trust Infrastructure">TRK-02: CYBERSECURITY</option>
                    <option value="Web3 & Cryptography">TRK-03: WEB3 & CRYPTO</option>
                    <option value="Healthcare Innovation">TRK-04: HEALTHCARE INNOVATION</option>
                    <option value="Fintech Solutions">TRK-05: FINTECH SOLUTIONS</option>
                    <option value="Legal Tech Automation">TRK-06: LEGAL TECH</option>
                    <option value="Open Emerging Tech">TRK-07: OPEN INNOVATION</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5 font-medium">
                    Squad Size (2 to 4)
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full bg-obsidian/90 border border-crimson/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-crimson-bright transition-all"
                  >
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5 font-medium">
                  GitHub / Portfolio URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/yourusername"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full bg-obsidian/90 border border-crimson/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-crimson-bright transition-all"
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-crimson-bright uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-neon animate-ping" />
                  FREE REGISTRATION & PERKS
                </span>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-crimson hover:bg-crimson-bright text-white font-display text-xs font-bold tracking-[0.2em] uppercase rounded border border-crimson-neon shadow-red-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  TRANSMIT REGISTRATION
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-crimson/20 border-2 border-crimson-bright flex items-center justify-center text-crimson-bright shadow-red-glow">
              <CheckCircle className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold block">
                ACCESS GRANTED • ACCESS TOKEN #VY-2026-8942
              </span>
              <h3 className="font-display text-3xl font-extrabold uppercase text-white tracking-wide">
                MISSION CONFIRMED!
              </h3>
              <p className="font-sans text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Welcome to VYNORAE 2026, Squad Leader <span className="text-white font-semibold">{formData.leaderName}</span>. Your registration for <span className="text-crimson-bright font-semibold">{formData.teamName}</span> has been processed.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian/80 border border-crimson/30 max-w-md mx-auto text-left font-mono text-xs space-y-1.5">
              <div className="text-muted">TRACK: <span className="text-white">{formData.track}</span></div>
              <div className="text-muted">INSTITUTION: <span className="text-white">{formData.college}</span></div>
              <div className="text-muted">DISCORD INVITE: <span className="text-crimson-bright">https://discord.gg/vynorae2026</span></div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-crimson/20 border border-crimson/50 hover:bg-crimson text-white font-display text-xs font-bold tracking-widest uppercase rounded transition-all"
            >
              CLOSE CONFIRMATION
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
