import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ThemesSection from './components/ThemesSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import ScheduleSection from './components/ScheduleSection';
import JudgesSection from './components/JudgesSection';
import FaqSection from './components/FaqSection';
import SponsorsSection from './components/SponsorsSection';
import ContactFooter from './components/ContactFooter';
import ParticleCanvas from './components/ParticleCanvas';
import AudioEffect from './components/AudioEffect';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  return (
    <div className="relative min-h-screen bg-void text-white selection:bg-crimson selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Interactive Ember & Rain Canvas */}
      <ParticleCanvas particleMode="full" />

      {/* Navigation Bar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection onOpenRegister={handleOpenRegister} />
        <AboutSection />
        <ThemesSection onOpenRegister={handleOpenRegister} />
        <TimelineSection />
        <PrizesSection onOpenRegister={handleOpenRegister} />
        <ScheduleSection />
        <JudgesSection />
        <FaqSection />
        <SponsorsSection />
      </main>

      {/* Footer */}
      <ContactFooter onOpenRegister={handleOpenRegister} />

      {/* Audio Controller */}
      <AudioEffect isMuted={isMuted} setIsMuted={setIsMuted} />

      {/* Interactive Registration Modal */}
      <RegistrationModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </div>
  );
}
