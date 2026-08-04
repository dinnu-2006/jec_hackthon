import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, MapPin, Zap } from 'lucide-react';

export default function TimelineSection() {
  const [activeStep, setActiveStep] = useState(2); // Default to Hackathon Blitz step active

  const timelineSteps = [
    {
      phase: 'PHASE 01',
      date: 'AUG 15 – SEP 10, 2026',
      title: 'REGISTRATION & IDEA SUBMISSION',
      desc: 'Form your squad of 2–4 members, register on the platform, and submit your initial problem pitch and architecture slide deck.',
      status: 'OPEN NOW',
      details: ['Online PPT & Video submission', 'Track selection', 'Mentorship AMA Sessions']
    },
    {
      phase: 'PHASE 02',
      date: 'SEPTEMBER 15, 2026',
      title: 'SHORTLISTING & SQUAD VERIFICATION',
      desc: 'Top 100 teams shortlisted across all 7 themes receive official mission clearance, travel passes, and hardware kits.',
      status: 'UPCOMING',
      details: ['100 Teams Selected', 'Hardware pre-allocation', 'Travel & Stay briefing']
    },
    {
      phase: 'PHASE 03',
      date: 'OCT 01 – OCT 03, 2026',
      title: 'THE 36-HOUR HACKATHON BLITZ',
      desc: 'Non-stop hacking at the central physical arena. Live midnight code reviews, mentor check-ins, and red-bull fueled coding.',
      status: 'MAIN EVENT',
      details: ['36 Hours Non-stop Coding', 'Direct Mentor Office Hours', 'Midnight Cyber Security Capture-the-Flag']
    },
    {
      phase: 'PHASE 04',
      date: 'OCTOBER 03, 2026',
      title: 'GRAND FINALE & PITCHING',
      desc: 'Top 15 finalist teams pitch live on the main cinematic stage to a panel of VC investors, AI pioneers, and enterprise CTOs.',
      status: 'AWARDS',
      details: ['Live stage prototype demo', 'Direct VC seed funding pitches', 'Award Ceremony & $25k Prize distribution']
    }
  ];

  return (
    <section id="timeline" className="relative py-28 bg-void overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <Calendar className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              EVENT ROADMAP & TIMELINE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            MISSION <span className="text-crimson-bright text-glow-bright">TIMELINE</span>
          </h2>
          <p className="max-w-2xl font-sans text-muted text-sm sm:text-base">
            From initial infiltration to the grand finale stage. Follow the roadmap to victory.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="relative">
          {/* Vertical Glowing Connector Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-crimson/20 via-crimson to-crimson/20 shadow-[0_0_15px_#B11226]" />

          <div className="space-y-12 lg:space-y-16">
            {timelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative cursor-pointer flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full lg:w-[45%]">
                    <div
                      className={`glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border ${
                        isActive
                          ? 'border-crimson-bright shadow-[0_0_30px_rgba(225,29,72,0.4)] bg-obsidian/90'
                          : 'border-crimson/25'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-crimson-bright tracking-widest uppercase px-2.5 py-1 rounded bg-crimson/20 border border-crimson/40">
                          {step.phase}
                        </span>
                        <span className="font-mono text-[10px] text-white/80 font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10">
                          {step.status}
                        </span>
                      </div>

                      <span className="font-mono text-xs font-semibold text-muted block mb-1">
                        {step.date}
                      </span>

                      <h3 className="font-display text-xl font-black uppercase text-white tracking-wide mb-3">
                        {step.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 border-t border-white/10 pt-4 font-mono text-[11px] text-muted">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-crimson-bright shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Node Marker */}
                  <div className="my-4 lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'border-crimson-neon bg-crimson shadow-[0_0_20px_#FF3B3B] scale-125'
                          : 'border-crimson/50 bg-obsidian text-muted hover:border-crimson'
                      }`}
                    >
                      <Zap className={`w-4 h-4 ${isActive ? 'text-white' : 'text-crimson-bright'}`} />
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
