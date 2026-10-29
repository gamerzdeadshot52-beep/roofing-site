import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Calculator, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Systems', href: '#systems' },
    { label: 'Technology', href: '#technology' },
    { label: 'Interactive Estimator', href: '#estimator' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-nav py-3.5 shadow-2xl shadow-black/40' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 p-0.5 shadow-lg shadow-sky-500/25 group-hover:shadow-sky-500/40 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  APEX<span className="text-sky-400 font-extrabold">ROOF</span>
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 tracking-wider">
                    PRO
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 tracking-wider font-medium">Architectural Storm Defense</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-slate-800/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:18005557663"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>(800) 555-ROOF</span>
              </a>

              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2 text-xs font-semibold text-sky-300 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-800/50 px-3.5 py-2.5 rounded-xl transition-all duration-200 hover:border-sky-600 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-sky-400" />
                <span>Instant Estimate</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all duration-300 shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 group-hover:opacity-100 opacity-90 transition-opacity" />
                <span className="relative flex items-center gap-2 px-4 py-2.5 rounded-[11px] bg-slate-950/80 backdrop-blur-sm text-white group-hover:bg-transparent transition-all duration-300">
                  <span>Free Drone Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-300 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenEstimator}
                className="p-2 text-sky-400 bg-sky-950/60 rounded-lg border border-sky-800/40"
                aria-label="Calculator"
              >
                <Calculator className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden glass-nav border-t border-slate-800/80 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 px-3 py-2.5 rounded-lg border border-slate-800/50"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 text-sky-300 rounded-xl text-xs font-semibold"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Instant Price</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-sky-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book 15-Min Free Drone Scan</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
