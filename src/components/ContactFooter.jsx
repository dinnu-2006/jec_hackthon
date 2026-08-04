import React from 'react';
import { Shield, Mail, MapPin, Phone, Github, Twitter, Linkedin, MessageSquare, ArrowUp } from 'lucide-react';

export default function ContactFooter({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-obsidian border-t border-crimson/30 pt-20 pb-12 overflow-hidden text-gray-400">
      {/* Background Volumetric Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded border border-crimson/40 bg-obsidian text-crimson-bright">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-display font-black text-2xl tracking-[0.2em] text-white">
                VYNO<span className="text-crimson-bright">RAE</span>
              </span>
            </div>

            <p className="font-sans text-xs leading-relaxed max-w-md">
              VYNORAE 2026 is India's flagship National Hackathon on Emerging Technologies. Engineered to bring together elite software engineers, AI researchers, and cybersecurity builders for 36 non-stop hours of autonomous innovation.
            </p>

            <div className="pt-2 font-mono text-xs text-muted space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-crimson-bright shrink-0" />
                <span>Central Innovation Arena, Tech Campus, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-crimson-bright shrink-0" />
                <span>contact@vynorae2026.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-crimson-bright shrink-0" />
                <span>+91 98765 43210 (Organizer Desk)</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
              <li><a href="#home" className="hover:text-crimson-bright transition-colors">01. Home</a></li>
              <li><a href="#about" className="hover:text-crimson-bright transition-colors">02. Mission Briefing</a></li>
              <li><a href="#themes" className="hover:text-crimson-bright transition-colors">03. Battleground Themes</a></li>
              <li><a href="#timeline" className="hover:text-crimson-bright transition-colors">04. Roadmap & Timeline</a></li>
              <li><a href="#prizes" className="hover:text-crimson-bright transition-colors">05. Prize Pool & Bounties</a></li>
              <li><a href="#schedule" className="hover:text-crimson-bright transition-colors">06. 36-Hour Schedule</a></li>
              <li><a href="#judges" className="hover:text-crimson-bright transition-colors">07. Evaluation Council</a></li>
            </ul>
          </div>

          {/* Socials & Dispatch Box */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              CONNECT & DISPATCH
            </h4>
            <p className="font-sans text-xs">
              Stay connected with real-time announcements, track problem statements releases, and AMA office hours.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Github, href: 'https://github.com' },
                { icon: MessageSquare, href: 'https://discord.com' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-obsidian/90 border border-crimson/30 hover:border-crimson hover:text-crimson-bright hover:bg-crimson/20 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenRegister}
                className="w-full py-3 bg-crimson hover:bg-crimson-bright text-white font-display text-xs font-bold tracking-[0.2em] uppercase rounded border border-crimson-neon shadow-red-glow transition-all"
              >
                ACCEPT THE MISSION NOW →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-muted">
          <div>
            © 2026 VYNORAE NATIONAL HACKATHON. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-crimson-bright font-bold">SEC_STATUS: OPERATIONAL</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>TOP OF CORE</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
