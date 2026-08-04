import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'WHO IS ELIGIBLE TO PARTICIPATE IN VYNORAE 2026?',
      a: 'VYNORAE 2026 is open to undergraduate, postgraduate, and PhD students, as well as early-stage startup founders and independent developers across India and globally. Anyone with a passion for code and innovation is welcome.',
    },
    {
      q: 'IS THERE ANY REGISTRATION FEE OR HIDDEN COST?',
      a: 'Zero. Participation in VYNORAE 2026 is 100% free of charge. Selected physical finalists will be provided with free high-speed wifi, 24/7 meals, energy drinks, hacker beds, and travel reimbursements.',
    },
    {
      q: 'WHAT IS THE ALLOWED TEAM SIZE?',
      a: 'Teams can range from 2 to 4 members. You can form cross-college and cross-specialization teams to ensure a blend of AI, full-stack, and hardware skills.',
    },
    {
      q: 'WHAT IF I DO NOT HAVE A TEAM YET?',
      a: 'No problem! Register as an individual, and join our official VYNORAE Discord server. We host dedicated team-formation channels and speed-matching sessions prior to Phase 01 pitch submissions.',
    },
    {
      q: 'WHO OWNS THE INTELLECTUAL PROPERTY (IP) OF THE PROJECTS?',
      a: 'You retain 100% full ownership of your intellectual property, code, design, and patents. VYNORAE and sponsors claim zero IP rights over hacker creations.',
    },
    {
      q: 'CAN WE USE PRE-EXISTING CODE OR LIBRARIES?',
      a: 'You may utilize open-source frameworks, public APIs, third-party libraries, and pre-trained foundation models. However, all core application logic and project code must be built during the 36-hour hackathon window.',
    },
  ];

  return (
    <section id="faq" className="relative py-28 bg-obsidian/95 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <HelpCircle className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              KNOWLEDGE BASE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            FREQUENTLY ASKED <span className="text-crimson-bright text-glow-bright">QUESTIONS</span>
          </h2>
          <p className="max-w-xl font-sans text-muted text-sm sm:text-base">
            Everything you need to know about mission protocols, hardware kits, travel, and IP rights.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-crimson-bright shadow-[0_0_25px_rgba(177,18,38,0.3)] bg-obsidian/90'
                    : 'border-crimson/20 hover:border-crimson/40'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base font-bold uppercase text-white tracking-wide"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-crimson-bright font-extrabold">
                      [0{idx + 1}]
                    </span>
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-full border border-crimson/30 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-crimson text-white' : 'text-muted'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discord CTA Box */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-crimson/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-crimson/20 text-crimson-bright shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold uppercase text-white">
                STILL HAVE UNANSWERED QUESTIONS?
              </h4>
              <p className="font-sans text-xs text-muted">
                Join our 24/7 Discord developer community to ask organizers directly.
              </p>
            </div>
          </div>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-obsidian hover:bg-crimson border border-crimson/40 hover:border-crimson text-white font-display text-xs font-bold uppercase tracking-wider rounded transition-all shrink-0"
          >
            JOIN DISCORD →
          </a>
        </div>

      </div>
    </section>
  );
}
