import React, { useState, useEffect } from 'react';

export default function HudTimer() {
  const targetDate = new Date('2026-10-01T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 17,
    hours: 4,
    minutes: 23,
    seconds: 16,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="relative inline-flex flex-col items-center justify-center">
      
      {/* Header Label: — MISSION STARTS IN — */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#FF3B3B]" />
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#FF3B3B] font-extrabold">
          MISSION STARTS IN
        </span>
        <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#FF3B3B]" />
      </div>

      {/* Timer Digits Row */}
      <div className="relative flex items-center justify-center gap-4 sm:gap-6 px-4 py-2">
        
        {/* Days Circle Indicator */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            {/* Outer Gear Ring */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow text-[#B11226] opacity-50" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
            </svg>
            
            {/* Glowing Circle Ring Arc */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(177, 18, 38, 0.2)" strokeWidth="3" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#FF3B3B"
                strokeWidth="3.5"
                strokeDasharray="251.2"
                strokeDashoffset="55"
                strokeLinecap="round"
              />
            </svg>

            <span className="absolute font-display font-black text-2xl sm:text-4xl text-[#FF3B3B] text-glow-bright tracking-tight">
              {pad(timeLeft.days)}
            </span>
          </div>
          <span className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] font-bold">
            DAYS
          </span>
        </div>

        {/* Divider 1 */}
        <div className="h-10 w-[1px] bg-[#B11226]/50" />

        {/* Hours */}
        <div className="flex flex-col items-center px-1">
          <span className="font-display font-black text-2xl sm:text-4xl text-[#FF3B3B] text-glow-bright tracking-tight">
            {pad(timeLeft.hours)}
          </span>
          <span className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] font-bold">
            HOURS
          </span>
        </div>

        {/* Divider 2 */}
        <div className="h-10 w-[1px] bg-[#B11226]/50" />

        {/* Minutes */}
        <div className="flex flex-col items-center px-1">
          <span className="font-display font-black text-2xl sm:text-4xl text-[#FF3B3B] text-glow-bright tracking-tight">
            {pad(timeLeft.minutes)}
          </span>
          <span className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] font-bold">
            MINUTES
          </span>
        </div>

        {/* Divider 3 */}
        <div className="h-10 w-[1px] bg-[#B11226]/50" />

        {/* Seconds */}
        <div className="flex flex-col items-center px-1">
          <span className="font-display font-black text-2xl sm:text-4xl text-[#FF3B3B] text-glow-bright tracking-tight animate-pulse">
            {pad(timeLeft.seconds)}
          </span>
          <span className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#FF3B3B] font-bold">
            SECONDS
          </span>
        </div>

      </div>

    </div>
  );
}
