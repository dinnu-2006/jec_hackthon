import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Cpu, ShieldCheck, Box, HeartPulse, Building2, Scale, Lightbulb, Sparkles, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeModal from './ThemeModal';

const AUTOPLAY_MS = 5000;



export default function ThemesSection({ onOpenRegister }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  // Autoplay the background video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    const p = video.play();
    if (p !== undefined) p.catch((e) => console.warn('Theme video autoplay blocked:', e));
  }, []);

  const themesData = [
    {
      id: 'ai', code: 'TRK-01', icon: Cpu,
      title: 'ARTIFICIAL INTELLIGENCE',
      subtitle: 'Autonomous Systems & LLMs',
      desc: 'Build next-gen autonomous agents, multimodal models, neural search, and local edge AI architectures.',
      detailedDesc: 'Focus on advancing AI systems through autonomous multi-agent orchestration, privacy-preserving machine learning, and low-latency inference on edge devices.',
      problems: [
        'Multi-agent autonomous consensus framework for complex software synthesis.',
        'On-device privacy-first AI assistant with zero server roundtrips.',
        'Real-time automated code vulnerability patching using local LLMs.',
      ],
      tags: ['PyTorch', 'Transformers', 'LangChain', 'CUDA', 'ONNX'],
      bounty: '$4,000 Cash + AWS GPU Credits',
      color: '#C80018',
    },
    {
      id: 'cybersecurity', code: 'TRK-02', icon: ShieldCheck,
      title: 'CYBERSECURITY',
      subtitle: 'Zero-Trust & Threat Intel',
      desc: 'Formulate bulletproof zero-trust protocols, automated threat intelligence, and post-quantum encryption.',
      detailedDesc: 'Engineer next-generation threat detection, automated exploit mitigation, and post-quantum cryptographic primitives for critical infrastructure.',
      problems: [
        'Automated real-time zero-day exploit isolation in Kubernetes clusters.',
        'Post-quantum lattice-based encryption SDK for microservices.',
        'AI-driven cyber threat intelligence graph parser.',
      ],
      tags: ['Rust', 'eBPF', 'Cryptography', 'Zero-Trust', 'SIEM'],
      bounty: '$3,500 Cash + Security Audit Credits',
      color: '#E50914',
    },
    {
      id: 'web3', code: 'TRK-03', icon: Box,
      title: 'WEB3 & CRYPTO',
      subtitle: 'DeFi & Zero-Knowledge Proofs',
      desc: 'Architect high-throughput Layer 2 solutions, zero-knowledge privacy circuits, and decentralized identity.',
      detailedDesc: 'Push the frontiers of DeFi and cryptography with ZK-SNARK rollups, cross-chain liquidity bridges, and sovereign digital identity protocols.',
      problems: [
        'ZK-proof based anonymous compliance verifier for institutional finance.',
        'Cross-chain automated arbitrage liquidator with MEV protection.',
        'Decentralized physical infrastructure network (DePIN) storage engine.',
      ],
      tags: ['Solidity', 'Circom', 'Zk-SNARKs', 'Ether.js', 'Substrate'],
      bounty: '$4,000 Cash + Polygon Grant Eligibility',
      color: '#C80018',
    },
    {
      id: 'healthcare', code: 'TRK-04', icon: HeartPulse,
      title: 'HEALTHCARE INNOVATION',
      subtitle: 'Biotech & Medical Diagnostics',
      desc: 'Develop predictive diagnostic AI engines, genomic sequence analyzers, and remote patient telemetry.',
      detailedDesc: 'Over 24 intense hours, revolutionize medicine by applying computer vision and neural networks to diagnostic imaging, drug discovery, and secure patient record sharing.',
      problems: [
        'AI-assisted early cancer detection from multi-modal radiological scans.',
        'Federated learning network for multi-hospital clinical trials.',
        'Real-time ICU telemetry anomaly alert system.',
      ],
      tags: ['TensorFlow', 'DICOM', 'Federated Learning', 'Python', 'FHIR'],
      bounty: '$3,500 Cash + Medical Accelerator Pitch',
      color: '#E50914',
    },
    {
      id: 'fintech', code: 'TRK-05', icon: Building2,
      title: 'FINTECH SOLUTIONS',
      subtitle: 'Next-Gen Payments & Fraud AI',
      desc: 'Craft ultra-low latency transaction routing, real-time fraud mitigation, and algorithmic wealth management.',
      detailedDesc: 'Transform financial infrastructure through sub-millisecond fraud scoring, cross-border remittance engines, and programmable financial contracts.',
      problems: [
        'Sub-5ms machine learning transaction fraud detection pipeline.',
        'Cross-border instant liquidity netting protocol.',
        'Autonomous micro-investment agent with risk-adjusted rebalancing.',
      ],
      tags: ['Go', 'Kafka', 'PostgreSQL', 'Machine Learning', 'Redis'],
      bounty: '$3,500 Cash + Stripe Credits',
      color: '#C80018',
    },
    {
      id: 'legaltech', code: 'TRK-06', icon: Scale,
      title: 'LEGAL TECH',
      subtitle: 'Regulatory Automation & Contracts',
      desc: 'Engineer smart legal contract parsers, regulatory compliance bots, and automated IP protection suites.',
      detailedDesc: 'Bridge law and code with NLP contract audit tools, automated regulatory tracking systems, and tamper-proof IP registries.',
      problems: [
        'Automated multi-jurisdictional contract risk audit engine.',
        'Real-time regulatory compliance mapping for cross-border SaaS.',
        'Decentralized patent prior-art verification index.',
      ],
      tags: ['NLP', 'VectorDB', 'TypeScript', 'Llama-Index', 'LegalAI'],
      bounty: '$3,000 Cash + Legal Firm Sponsorship',
      color: '#E50914',
    },
    {
      id: 'open', code: 'TRK-07', icon: Lightbulb,
      title: 'OPEN INNOVATION',
      subtitle: 'Breakthrough Emerging Tech',
      desc: 'Unleash wildcard innovations spanning Quantum Computing, AR/VR, Robotics, and Smart Cities.',
      detailedDesc: 'For ideas that transcend boundaries. Experiment with spatial computing, quantum circuit simulators, autonomous robotics, or climate technology.',
      problems: [
        'Spatial AR collaborative engineering workspace.',
        'Quantum algorithm simulator for logistics route optimization.',
        'Autonomous drone mesh network for emergency disaster response.',
      ],
      tags: ['Unity/Unreal', 'Qiskit', 'ROS', 'IoT', 'Spatial Computing'],
      bounty: '$3,500 Cash + Wildcard Trophy',
      color: '#C80018',
    },
  ];

  const total = themesData.length;

  const goTo = useCallback((idx, dir) => {
    setDirection(dir);
    setActiveIndex(((idx % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(activeIndex + 1, 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1, -1), [activeIndex, goTo]);

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const resetAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
  };

  const theme = themesData[activeIndex];
  const Icon = theme.icon;

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80, scale: 0.97 }),
  };

  return (
    <section id="themes" className="relative py-24 overflow-hidden">
      {/* ── Hackathon Theme Video Background ── */}
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
          <source src="/video/hackthon_theme.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-void/80 pointer-events-none" />
        {/* Top/bottom fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />
        {/* Side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60 pointer-events-none" />
        {/* Crimson glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-crimson/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <Sparkles className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              7 BATTLEGROUNDS OF INNOVATION
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            HACKATHON <span className="text-crimson-bright text-glow-bright">THEMES</span>
          </h2>
          <p className="max-w-2xl font-sans text-muted text-sm sm:text-base">
            Select your track. Address high-stakes challenges engineered in collaboration with industry pioneers.
          </p>
        </div>

        {/* Track Pill Nav */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {themesData.map((t, i) => {
            const TIcon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => { goTo(i, i > activeIndex ? 1 : -1); resetAutoplay(); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold border transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-crimson border-crimson-bright text-white shadow-red-glow'
                    : 'bg-obsidian/60 border-white/10 text-muted hover:border-crimson/50 hover:text-white'
                }`}
              >
                <TIcon className="w-3 h-3" />
                {t.code}
              </button>
            );
          })}
        </div>

        {/* Main Card Carousel */}
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={() => { prev(); resetAutoplay(); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-12 h-12 rounded-full bg-obsidian border border-crimson/40 hover:border-crimson hover:bg-crimson/20 text-crimson-bright flex items-center justify-center transition-all shadow-red-glow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => { next(); resetAutoplay(); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-12 h-12 rounded-full bg-obsidian border border-crimson/40 hover:border-crimson hover:bg-crimson/20 text-crimson-bright flex items-center justify-center transition-all shadow-red-glow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Animated Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={theme.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl border border-crimson/30 overflow-hidden relative"
            >
              {/* Card Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" />

              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Left Column */}
                <div className="space-y-6">
                  {/* Badge row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 rounded-full bg-crimson/15 border border-crimson/40 text-crimson-bright font-bold">
                      {theme.code}
                    </span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                      Track {activeIndex + 1} of {total}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-crimson/10 border border-crimson/30 shrink-0">
                      <Icon className="w-10 h-10 text-crimson-bright" />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-wide leading-tight">
                        {theme.title}
                      </h3>
                      <p className="font-mono text-sm text-crimson-bright font-semibold mt-1.5">
                        {theme.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-base text-gray-300 leading-relaxed">
                    {theme.detailedDesc}
                  </p>

                  {/* Problems */}
                  <div className="space-y-3 pt-2">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted font-bold">
                      Problem Statements
                    </p>
                    {theme.problems.map((p, i) => (
                      <div key={i} className="flex items-start gap-3 bg-obsidian/60 border border-white/5 rounded-xl px-4 py-3">
                        <span className="text-crimson-bright font-bold text-sm mt-0.5 shrink-0">{i + 1}.</span>
                        <span className="font-sans text-sm text-gray-300 leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Bounty */}
                  <div className="rounded-2xl bg-gradient-to-br from-crimson/15 to-crimson/5 border border-crimson/30 p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted font-bold mb-2">
                      💰 Bounty Pool
                    </p>
                    <p className="font-display text-2xl sm:text-3xl font-black text-white">{theme.bounty}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="rounded-2xl bg-obsidian/60 border border-white/10 p-6 space-y-3">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted font-bold">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {theme.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs text-white px-3 py-1.5 rounded-lg bg-obsidian border border-crimson/20 hover:border-crimson/60 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3 pt-2">
                    <button
                      onClick={() => setSelectedTheme(theme)}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-obsidian border border-crimson/40 hover:border-crimson text-white font-mono text-sm font-bold uppercase tracking-widest hover:bg-crimson/10 transition-all"
                    >
                      View Full Briefing
                      <ArrowUpRight className="w-4 h-4 text-crimson-bright" />
                    </button>
                    <button
                      onClick={onOpenRegister}
                      className="w-full py-4 rounded-xl bg-crimson hover:bg-crimson-bright text-white font-display text-sm font-black uppercase tracking-widest shadow-red-glow transition-all hover:shadow-[0_0_40px_rgba(200,0,24,0.6)]"
                    >
                      ENLIST FOR THIS TRACK →
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {themesData.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i, i > activeIndex ? 1 : -1); resetAutoplay(); }}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 h-2 bg-crimson-bright shadow-[0_0_8px_#C80018]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Theme Detail Modal */}
      {selectedTheme && (
        <ThemeModal
          theme={selectedTheme}
          onClose={() => setSelectedTheme(null)}
          onRegister={onOpenRegister}
        />
      )}
    </section>
  );
}
