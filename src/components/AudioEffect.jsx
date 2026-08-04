import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ShieldAlert } from 'lucide-react';

export default function AudioEffect({ isMuted, setIsMuted }) {
  const [audioCtx, setAudioCtx] = useState(null);

  useEffect(() => {
    // Web Audio API context setup on user gesture
    const initAudio = () => {
      if (!audioCtx) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        setAudioCtx(ctx);
      }
    };
    window.addEventListener('click', initAudio, { once: true });
    return () => window.removeEventListener('click', initAudio);
  }, [audioCtx]);

  const playHoverSound = () => {
    if (isMuted || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio context play error catch
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setIsMuted(!isMuted)}
        onMouseEnter={playHoverSound}
        className="glass-card p-3 rounded-full text-muted hover:text-crimson-bright border-crimson/30 hover:border-crimson transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] flex items-center gap-2 text-xs tracking-wider font-mono uppercase"
        title={isMuted ? "Unmute Cyber Atmosphere" : "Mute Sound"}
      >
        {isMuted ? (
          <>
            <VolumeX size={16} className="text-muted" />
            <span className="hidden md:inline text-muted/70">Audio Off</span>
          </>
        ) : (
          <>
            <Volume2 size={16} className="text-crimson-bright animate-pulse" />
            <span className="hidden md:inline text-crimson-bright">Cyber Audio Active</span>
          </>
        )}
      </button>
    </div>
  );
}
