import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  TrendingUp, 
  CloudLightning, 
  Zap,
  MapPin,
  Calendar
} from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onOpenConsultation }) => {
  const [postalCode, setPostalCode] = useState('');
  const [verifiedZip, setVerifiedZip] = useState<boolean | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (postalCode.trim().length >= 5) {
      setVerifiedZip(true);
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background ambient lighting and subtle grid */}
      <div className="absolute inset-0 bg-[#070a12] -z-20" />
      <div 
        className="absolute inset-0 opacity-[0.03] -z-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />
      
      {/* Gradient Ambient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-sky-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Compelling Pitch & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tech-grade pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel-light border border-sky-500/30 text-sky-300 text-xs font-semibold shadow-inner shadow-sky-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span>Next-Gen Architectural Storm Defense</span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-300 flex items-center gap-1 font-bold">
                <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                4.98 (410+ Verified Homes)
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                A Roof Engineered Like{' '}
                <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Aerospace Armor.
                </span>
                <br />
                <span className="text-slate-200">Guaranteed for Life.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Replace your roof with the precision of a high-tech build. Commercial-grade standing-seam steel, composite slate, and hurricane-rated systems designed for zero leaks, maximum energy savings, and lifetime transferable equity.
              </p>
            </div>

            {/* Micro Quick-Check ZIP Lead Magnet */}
            <div className="glass-panel p-2 sm:p-2.5 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-xl shadow-black/50 border border-slate-800">
              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-950/70 rounded-xl border border-slate-800 focus-within:border-sky-500/60 transition-colors">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                      if (verifiedZip) setVerifiedZip(null);
                    }}
                    placeholder="Enter your ZIP Code (e.g. 78701)"
                    className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
                    maxLength={10}
                  />
                </div>
                <button
                  type="submit"
                  onClick={verifiedZip ? onOpenConsultation : undefined}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-sky-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{verifiedZip ? 'Book Free Drone Scan' : 'Check Coverage & Rates'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {verifiedZip && (
                <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    Priority crew & autonomous drone team available in <strong>{postalCode}</strong>. Eligible for instant $1,500 seasonal upgrade credit.
                  </span>
                </div>
              )}
            </div>

            {/* Primary Action Buttons & Social Assurance */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-sky-500/30 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule 15-Min Drone Scan</span>
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Interactive Price Estimator</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/70 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-black text-white">160<span className="text-sky-400">mph</span></div>
                <div className="text-[11px] text-slate-400">Wind & Hurricane Shield</div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-black text-white">Class <span className="text-amber-400">4</span></div>
                <div className="text-[11px] text-slate-400">Hail Impact Certified</div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-black text-white">50<span className="text-sky-400">yr+</span></div>
                <div className="text-[11px] text-slate-400">Transferable Warranty</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Architectural Showcase & Live Telemetry Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Luxury Architectural House Image Container */}
            <div className="relative rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl shadow-sky-950/50 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="./images/hero-roof-luxury.jpg"
                  alt="Modern architectural home with standing seam roof"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Glass Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-white border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Apex Obsidian Standing Seam™</span>
                </div>

                {/* Floating Live Sensor Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <CloudLightning className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Thermal Deflection: 84%</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="text-[10px] text-slate-400">HVAC energy load reduction avg $280/mo</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-sky-300">0 Leaks</span>
                    <div className="text-[10px] text-emerald-400 font-medium">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Micro-Card: Fast Installation Telemetry */}
            <div className="hidden sm:flex absolute -top-6 -right-6 glass-panel p-3.5 rounded-2xl border border-sky-500/30 shadow-2xl shadow-black max-w-[210px] animate-float">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">48-Hr Tear & Install</div>
                  <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                    Synchronized 8-person master crew with zero yard debris.
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Micro-Card: Insurance Benefit */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass-panel p-3.5 rounded-2xl border border-emerald-500/30 shadow-2xl shadow-black max-w-[220px]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Save Up to 32% on Insurance</div>
                  <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                    Class-4 certified paperwork forwarded directly to your provider.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
