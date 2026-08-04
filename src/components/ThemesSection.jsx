import React, { useState } from 'react';
import { Cpu, ShieldCheck, Box, HeartPulse, Building2, Scale, Lightbulb, ArrowUpRight, Sparkles } from 'lucide-react';
import ThemeModal from './ThemeModal';

export default function ThemesSection({ onOpenRegister }) {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themesData = [
    {
      id: 'ai',
      code: 'TRK-01',
      icon: Cpu,
      title: 'ARTIFICIAL INTELLIGENCE',
      subtitle: 'Autonomous Systems & LLMs',
      desc: 'Build next-gen autonomous agents, multimodal models, neural search, and local edge AI architectures.',
      detailedDesc: 'Focus on advancing artificial intelligence systems through autonomous multi-agent orchestration, privacy-preserving machine learning models, and low-latency inference on edge devices.',
      problems: [
        'Multi-agent autonomous consensus framework for complex software synthesis.',
        'On-device privacy-first AI assistant with zero server roundtrips.',
        'Real-time automated code vulnerability patching using local LLMs.'
      ],
      tags: ['PyTorch', 'Transformers', 'LangChain', 'CUDA', 'ONNX'],
      bounty: '$4,000 Cash + AWS GPU Credits'
    },
    {
      id: 'cybersecurity',
      code: 'TRK-02',
      icon: ShieldCheck,
      title: 'CYBERSECURITY',
      subtitle: 'Zero-Trust & Threat Intel',
      desc: 'Formulate bulletproof zero-trust protocols, automated threat intelligence, and post-quantum encryption.',
      detailedDesc: 'Tackle critical infrastructure vulnerabilities by engineering next-generation threat detection, automated exploit mitigation, and post-quantum cryptographic primitives.',
      problems: [
        'Automated real-time zero-day exploit isolation in Kubernetes clusters.',
        'Post-quantum lattice-based encryption SDK for microservices.',
        'AI-driven cyber threat intelligence graph parser.'
      ],
      tags: ['Rust', 'eBPF', 'Cryptography', 'Zero-Trust', 'SIEM'],
      bounty: '$3,500 Cash + Security Audit Credits'
    },
    {
      id: 'web3',
      code: 'TRK-03',
      icon: Box,
      title: 'WEB3 & CRYPTO',
      subtitle: 'DeFi & Zero-Knowledge Proofs',
      desc: 'Architect high-throughput Layer 2 solutions, zero-knowledge privacy circuits, and decentralized identity.',
      detailedDesc: 'Push the frontiers of decentralized finance and cryptography with ZK-SNARK rollups, cross-chain liquidity bridges, and sovereign digital identity protocols.',
      problems: [
        'ZK-proof based anonymous compliance verifier for institutional finance.',
        'Cross-chain automated arbitrage liquidator with MEV protection.',
        'Decentralized physical infrastructure network (DePIN) storage engine.'
      ],
      tags: ['Solidity', 'Circom', 'Zk-SNARKs', 'Ether.js', 'Substrate'],
      bounty: '$4,000 Cash + Polygon Grant Eligibility'
    },
    {
      id: 'healthcare',
      code: 'TRK-04',
      icon: HeartPulse,
      title: 'HEALTHCARE INNOVATION',
      subtitle: 'Biotech & Medical Diagnostics',
      desc: 'Develop predictive diagnostic AI engines, genomic sequence analyzers, and remote patient telemetry.',
      detailedDesc: 'Revolutionize modern medicine by applying computer vision and neural networks to diagnostic imaging, accelerated drug discovery, and secure patient record sharing.',
      problems: [
        'AI-assisted early cancer detection from multi-modal radiological scans.',
        'Federated learning network for multi-hospital clinical trials.',
        'Real-time ICU telemetry anomaly alert system.'
      ],
      tags: ['TensorFlow', 'DICOM', 'Federated Learning', 'Python', 'FHIR'],
      bounty: '$3,500 Cash + Medical Accelerator Pitch'
    },
    {
      id: 'fintech',
      code: 'TRK-05',
      icon: Building2,
      title: 'FINTECH SOLUTIONS',
      subtitle: 'Next-Gen Payments & Fraud AI',
      desc: 'Craft ultra-low latency transaction routing, real-time fraud mitigation, and algorithmic wealth management.',
      detailedDesc: 'Transform financial infrastructure through sub-millisecond fraud scoring models, cross-border remittance engines, and programmable financial contracts.',
      problems: [
        'Sub-5ms machine learning transaction fraud detection pipeline.',
        'Cross-border instant liquidity netting protocol.',
        'Autonomous micro-investment agent with risk-adjusted rebalancing.'
      ],
      tags: ['Go', 'Kafka', 'PostgreSQL', 'Machine Learning', 'Redis'],
      bounty: '$3,500 Cash + Stripe Credits'
    },
    {
      id: 'legaltech',
      code: 'TRK-06',
      icon: Scale,
      title: 'LEGAL TECH',
      subtitle: 'Regulatory Automation & Contracts',
      desc: 'Engineer smart legal contract parsers, regulatory compliance bots, and automated IP protection suites.',
      detailedDesc: 'Bridge law and code by deploying NLP contract audit tools, automated regulatory tracking systems, and tamper-proof IP registries.',
      problems: [
        'Automated multi-jurisdictional contract risk audit engine.',
        'Real-time regulatory compliance mapping for cross-border SaaS.',
        'Decentralized patent prior-art verification index.'
      ],
      tags: ['NLP', 'VectorDB', 'TypeScript', 'Llama-Index', 'LegalAI'],
      bounty: '$3,000 Cash + Legal Firm Sponsorship'
    },
    {
      id: 'open',
      code: 'TRK-07',
      icon: Lightbulb,
      title: 'OPEN INNOVATION',
      subtitle: 'Breakthrough Emerging Tech',
      desc: 'Unleash wildcard innovations spanning Quantum Computing, AR/VR, Robotics, and Smart Cities.',
      detailedDesc: 'For ideas that transcend boundaries. Experiment with spatial computing, quantum circuit simulators, autonomous robotics, or climate technology.',
      problems: [
        'Spatial AR collaborative engineering workspace.',
        'Quantum algorithm simulator for logistics route optimization.',
        'Autonomous drone mesh network for emergency disaster response.'
      ],
      tags: ['Unity/Unreal', 'Qiskit', 'ROS', 'IoT', 'Spatial Computing'],
      bounty: '$3,500 Cash + Wildcard Trophy'
    },
  ];

  return (
    <section id="themes" className="relative py-28 bg-obsidian/95 overflow-hidden">
      {/* Background Graphic Asset Overlay */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] opacity-15 pointer-events-none mix-blend-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/assets/cyber_node.png')" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
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

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themesData.map((theme) => {
            const Icon = theme.icon;
            return (
              <div
                key={theme.id}
                onClick={() => setSelectedTheme(theme)}
                className="group relative cursor-pointer glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-crimson/30"
              >
                {/* Top Code Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] px-2.5 py-1 rounded bg-crimson/15 border border-crimson/30 text-crimson-bright font-bold">
                      {theme.code}
                    </span>
                    <div className="p-3 rounded-xl bg-obsidian border border-crimson/30 group-hover:border-crimson group-hover:bg-crimson/20 group-hover:shadow-red-glow transition-all duration-300">
                      <Icon className="w-6 h-6 text-crimson-bright group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-extrabold uppercase text-white tracking-wide group-hover:text-crimson-neon transition-colors">
                    {theme.title}
                  </h3>
                  <p className="font-mono text-xs text-crimson-bright font-semibold mb-3">
                    {theme.subtitle}
                  </p>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {theme.desc}
                  </p>
                </div>

                {/* Tech Tags & CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {theme.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="font-mono text-[9px] text-muted px-2 py-0.5 rounded bg-obsidian/80 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-crimson/10 border border-crimson/40 group-hover:border-crimson group-hover:bg-crimson group-hover:text-white flex items-center justify-center text-crimson-bright transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Red Glow Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Trigger */}
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
