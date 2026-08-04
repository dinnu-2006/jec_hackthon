import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import HudTimer from './HudTimer';
import FocusAreasBar from './FocusAreasBar';

export default function HeroSection({ onOpenRegister }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video autoplay prevented:", error);
        });
      }
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 lg:pt-28 pb-0 flex flex-col justify-between overflow-hidden bg-void">
      
      {/* Optimized Lightweight SVG Filter */}
      <svg className="hidden" width="0" height="0">
        <defs>
          <filter id="rust-displace" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* GPU Hardware Accelerated Video Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [will-change:transform]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/john_wick_hero_bg.png"
          className="w-full h-full object-cover scale-105 transform-gpu translate-z-0"
        >
          <source src="/video/hero_background.mp4" type="video/mp4" />
        </video>

        {/* Ambient Volumetric Red Glow Overlay */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-crimson/25 rounded-full blur-[140px] mix-blend-screen pointer-events-none" />

        {/* Vignette & Dimming Overlay */}
        <div className="absolute inset-0 bg-void/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-void/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/85 via-transparent to-void/85 pointer-events-none" />
      </div>

      {/* Right Side Vertical Scroll Bar */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 text-muted pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B3B] shadow-[0_0_10px_#FF3B3B]" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted/40" />
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#B11226] to-transparent my-2" />
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase rotate-90 text-[#8A8A8A] whitespace-nowrap mt-4">
          SCROLL
        </span>
      </div>

      {/* Main Content Container */}
      <div className="w-full px-6 sm:px-12 z-10 my-auto pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-[1600px] mx-auto">
          
          {/* Left Side Column */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start space-y-5">
            
            {/* Top Subtitle */}
            <div className="space-y-0.5 font-mono text-[11px] sm:text-xs tracking-[0.25em] font-semibold uppercase">
              <div className="text-[#8A8A8A]">NATIONAL HACKATHON</div>
              <div className="text-[#8A8A8A]">
                ON <span className="text-[#FF3B3B]">EMERGING TECHNOLOGIES</span>
              </div>
            </div>

            {/* Massive Weathered Rusty Headline */}
            <div className="space-y-0 select-none" style={{ filter: "url(#rust-displace)" }}>
              <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[0.92]">
                <span className="text-rusty-metallic">BUILD.</span> <br />
                <span className="text-rusty-crimson">INNOVATE.</span> <br />
                <span className="text-rusty-metallic">TRANSFORM.</span>
              </h1>
            </div>

            {/* Subtitle Line */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.22em] font-semibold uppercase space-y-0.5 pt-1">
              <div className="text-[#8A8A8A]">ONE PROBLEM. ONE SOLUTION.</div>
              <div className="text-[#FF3B3B]">INFINITE IMPACT.</div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenRegister}
                className="relative group inline-flex items-center justify-center px-6 py-3 bg-[#0A0A0A]/90 border border-[#B11226]/80 hover:border-[#FF3B3B] rounded-md text-white font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B11226] shadow-[0_0_20px_rgba(177,18,38,0.3)] hover:shadow-[0_0_35px_rgba(255,59,59,0.7)]"
              >
                <span className="flex items-center gap-2.5">
                  ACCEPT THE MISSION
                  <ArrowRight className="w-4 h-4 text-[#FF3B3B] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </span>
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0A0A0A]/60 border border-white/20 hover:border-white/60 rounded-md text-[#A0A0A0] hover:text-white font-mono text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  DOWNLOAD RULEBOOK
                  <Download className="w-3.5 h-3.5 text-[#8A8A8A] group-hover:text-white" />
                </span>
              </a>
            </div>

          </div>

          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

        </div>

        {/* Center-Bottom Mission Countdown HUD */}
        <div className="w-full flex justify-center pt-8 pb-3">
          <HudTimer />
        </div>
      </div>

      {/* Focus Areas Bar */}
      <div className="w-full z-10">
        <FocusAreasBar />
      </div>

    </section>
  );
}
