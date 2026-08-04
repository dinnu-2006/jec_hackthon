import React, { useState } from 'react';
import { Clock, CheckCircle, Terminal, Coffee, Code, Presentation, Trophy } from 'lucide-react';

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      { time: '08:00 AM', event: 'RECEPTION & CHECK-IN', desc: 'Badge allocation, swags distribution, and squad desk assignment.', type: 'Logistics', icon: Coffee },
      { time: '10:00 AM', event: 'GRAND OPENING CEREMONY', desc: 'Keynote speeches by AI & Cyber leaders; revealing surprise problem twists.', type: 'Stage', icon: Terminal },
      { time: '11:00 AM', event: 'HACKATHON CLOCK STARTS (HOUR 00)', desc: '24-hour countdown commences. Ideation & code repositories creation.', type: 'Coding', icon: Code },
      { time: '02:00 PM', event: 'MENTOR OFFICE HOURS: SESSION 1', desc: 'One-on-one architecture review with track mentors.', type: 'Mentorship', icon: CheckCircle },
      { time: '08:00 PM', event: 'NEO-NOIR CYBER DINNER', desc: 'Catered high-protein dinner & ambient synthwave DJ set.', type: 'Break', icon: Coffee },
      { time: '11:59 PM', event: 'MIDNIGHT CAPTURE-THE-FLAG MINI GAME', desc: 'Optional speed hacking challenge with instant cash bounties.', type: 'Fun', icon: Terminal },
    ],
    2: [
      { time: '03:00 AM', event: 'GRAVEYARD SHIFT ENERGY BOOST', desc: 'Espresso bars, red bull station, and VR lounge open.', type: 'Break', icon: Coffee },
      { time: '09:00 AM', event: 'MID-WAY CODE CHECK-IN & REPO SNAPSHOT', desc: 'Submitting mandatory proof-of-work commit hash.', type: 'Checkpoint', icon: CheckCircle },
      { time: '01:00 PM', event: 'LUNCH & DISCORD AMAs', desc: 'Global sponsors QA desk & VC speed networking.', type: 'Networking', icon: Terminal },
      { time: '05:00 PM', event: 'MENTOR OFFICE HOURS: SESSION 2', desc: 'Pitch deck refinement & demo preparation.', type: 'Mentorship', icon: CheckCircle },
      { time: '09:00 PM', event: 'FINAL NIGHT BUILD SPRINT', desc: 'Locks down backend APIs and core UI polish.', type: 'Coding', icon: Code },
    ],
    3: [
      { time: '08:00 AM', event: 'FINAL REPO FREEZE (HOUR 24)', desc: 'All code commits locked. Video demos & pitch decks uploaded.', type: 'Deadline', icon: Clock },
      { time: '09:30 AM', event: 'PRELIMINARY TRACK JUDGING', desc: '5-minute table demos before track judges across 7 rooms.', type: 'Judging', icon: Presentation },
      { time: '01:30 PM', event: 'TOP 15 FINALIST ANNOUNCEMENT', desc: 'Selected teams prepare for main auditorium stage pitch.', type: 'Stage', icon: Trophy },
      { time: '03:00 PM', event: 'GRAND AUDITORIUM FINALE PITCHES', desc: 'Live public prototype pitching to VC panel & audience.', type: 'Stage', icon: Presentation },
      { time: '05:30 PM', event: 'AWARD CEREMONY & WINNERS REVEAL', desc: 'Trophy presentation, $25,000 cash prizes, and closing afterparty.', type: 'Awards', icon: Trophy },
    ],
  };

  return (
    <section id="schedule" className="relative py-28 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-crimson/10 border border-crimson/30">
            <Clock className="w-3.5 h-3.5 text-crimson-bright" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright font-bold">
              24-HOUR CHRONOLOGY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            EVENT <span className="text-crimson-bright text-glow-bright">SCHEDULE</span>
          </h2>
          <p className="max-w-2xl font-sans text-muted text-sm sm:text-base">
            Every minute calculated for maximum output. View the hour-by-hour operational schedule.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { id: 1, label: 'DAY 01', date: 'OCTOBER 01' },
            { id: 2, label: 'DAY 02', date: 'OCTOBER 02' },
            { id: 3, label: 'DAY 03', date: 'OCTOBER 03' },
          ].map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`px-6 py-3 rounded-xl font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex flex-col items-center ${
                activeDay === day.id
                  ? 'bg-crimson text-white border border-crimson-neon shadow-red-glow scale-105'
                  : 'glass-card text-muted border-crimson/20 hover:border-crimson/40 hover:text-white'
              }`}
            >
              <span>{day.label}</span>
              <span className="font-mono text-[9px] opacity-75">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Schedule Items List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {scheduleData[activeDay].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-5 sm:p-6 rounded-xl border-crimson/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-crimson/15 border border-crimson/40 text-crimson-bright shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-crimson-bright tracking-wider">
                        {item.time}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-muted uppercase">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold uppercase text-white tracking-wide mt-1">
                      {item.event}
                    </h3>
                    <p className="font-sans text-xs text-muted mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 font-mono text-[10px] text-crimson-bright uppercase font-bold flex items-center gap-1.5 self-end sm:self-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-bright animate-ping" />
                  CONFIRMED
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
