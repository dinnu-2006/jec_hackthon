import React from 'react';

export default function FocusAreasBar() {
  const focusAreas = [
    {
      id: 'ai',
      line1: 'ARTIFICIAL',
      line2: 'INTELLIGENCE',
      svg: (
        <svg className="w-6 h-6 text-[#FF3B3B] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8l-1 3H9l-1-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z" />
          <path d="M12 6v4" />
          <path d="M9 10h6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      id: 'cyber',
      line1: 'CYBER',
      line2: 'SECURITY',
      svg: (
        <svg className="w-6 h-6 text-[#FF3B3B] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9.5" y="10.5" width="5" height="4" rx="0.5" />
          <path d="M10.5 10.5V9a1.5 1.5 0 0 1 3 0v1.5" />
        </svg>
      )
    },
    {
      id: 'web3',
      line1: 'WEB3',
      line2: 'TECHNOLOGIES',
      svg: (
        <svg className="w-6 h-6 text-[#FF3B3B] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
          <path d="M12 22V12" />
          <path d="M21 7l-9 5" />
          <path d="M3 7l9 5" />
        </svg>
      )
    },
    {
      id: 'healthcare',
      line1: 'HEALTHCARE',
      line2: 'INNOVATION',
      svg: (
        <svg className="w-6 h-6 text-[#FF3B3B] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          <path d="M8.5 12h2l1-2.5l2 5l1-2.5h2" />
        </svg>
      )
    },
    {
      id: 'fintech',
      line1: 'FINTECH',
      line2: 'SOLUTIONS',
      svg: (
        <svg className="w-6 h-6 text-[#FF3B3B] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M3 10h18" />
          <path d="M5 6l7-3 7 3" />
          <path d="M6 10v7" />
          <path d="M10 10v7" />
          <path d="M14 10v7" />
          <path d="M18 10v7" />
        </svg>
      )
    },
    {
      id: 'legal',
      line1: 'LEGAL',
      line2: 'TECH',
      svg: (
        <svg className="w-6 h-6 text-[#FF3B3B] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="M5 21h14" />
          <path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7z" />
          <path d="M19 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
        </svg>
      )
    },
    {
      id: 'open',
      line1: 'OPEN',
      line2: 'INNOVATION',
      svg: (
        <svg className="w-6 h-6 text-[#FF3B3B] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V17h8v-2.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7z" />
        </svg>
      )
    },
  ];

  return (
    <div className="w-full bg-[#050505]/95 backdrop-blur-xl border-t border-[#B11226]/30 py-3.5 mt-2">
      <div className="w-full px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-w-[1600px] mx-auto">
          
          {/* Left Title: OUR FOCUS AREAS */}
          <div className="flex flex-col shrink-0 border-b lg:border-b-0 lg:border-r border-[#B11226]/30 pb-3 lg:pb-0 lg:pr-8">
            <div className="font-display text-sm font-black tracking-[0.2em] uppercase">
              <span className="text-white">OUR </span>
              <span className="text-[#FF3B3B]">FOCUS AREAS</span>
            </div>
            <div className="h-[2px] w-12 bg-[#FF3B3B] mt-1.5 shadow-[0_0_8px_#FF3B3B]" />
          </div>

          {/* 7 Focus Area Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5 w-full flex-1">
            {focusAreas.map((area) => (
              <a
                key={area.id}
                href="#themes"
                className="group flex flex-col items-center justify-center p-3 rounded-lg bg-[#0A0A0A]/85 border border-[#B11226]/30 hover:border-[#FF3B3B] hover:bg-[#1A0508]/90 hover:shadow-[0_0_20px_rgba(255,59,59,0.4)] transition-all duration-300 min-h-[92px] text-center"
              >
                <div className="mb-2">
                  {area.svg}
                </div>
                <div className="font-mono text-[9px] leading-tight tracking-wider text-[#A0A0A0] group-hover:text-white uppercase font-bold">
                  <div>{area.line1}</div>
                  <div>{area.line2}</div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
