import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'THEMES', href: '#themes' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'PRIZES', href: '#prizes' },
    { name: 'MENTORS', href: '#judges' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#B11226]/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.95)]'
          : 'bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-6'
      }`}
    >
      <div className="w-full px-6 sm:px-12 flex items-center justify-between">
        
        {/* Logo Top Left */}
        <a href="#home" className="group flex flex-col cursor-pointer select-none shrink-0">
          <span className="font-display font-black text-2xl tracking-[0.2em] text-white">
            VYNO<span className="text-[#FF3B3B]">RAE</span>
          </span>
          <span className="font-mono text-[10px] tracking-[0.45em] text-[#FF3B3B] font-bold uppercase text-center -mt-1">
            2026
          </span>
        </a>

        {/* Desktop Nav Items Centered */}
        <nav className="hidden xl:flex items-center space-x-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                  isActive ? 'text-[#FF3B3B] font-bold' : 'text-[#8A8A8A] hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FF3B3B] shadow-[0_0_8px_#FF3B3B]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Top Right Button: REGISTER NOW → */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            onClick={onOpenRegister}
            className="relative inline-flex items-center justify-center px-6 py-2.5 bg-[#0E0E0E]/80 border border-[#B11226]/70 hover:border-[#FF3B3B] rounded-lg text-white font-mono text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(177,18,38,0.25)] transition-all duration-300 hover:bg-[#B11226] hover:shadow-[0_0_30px_rgba(255,59,59,0.6)] group"
          >
            <span className="flex items-center gap-2">
              REGISTER NOW
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="xl:hidden flex items-center gap-3">
          <button
            onClick={onOpenRegister}
            className="px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-white uppercase bg-[#B11226]/30 border border-[#FF3B3B]/60 rounded-md"
          >
            REGISTER
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#8A8A8A] hover:text-white border border-[#B11226]/30 rounded-md bg-[#0E0E0E]/90 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} className="text-[#FF3B3B]" /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0E0E0E]/95 backdrop-blur-2xl border-b border-[#B11226]/40 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-[0.2em] text-[#8A8A8A] hover:text-[#FF3B3B] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 bg-[#B11226] hover:bg-[#FF3B3B] text-white font-mono text-xs font-bold tracking-[0.2em] uppercase rounded-md border border-[#FF3B3B] shadow-red-glow"
              >
                REGISTER NOW →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
