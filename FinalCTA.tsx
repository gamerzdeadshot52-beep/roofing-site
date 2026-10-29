import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  PhoneCall, 
  CheckCircle2, 
  Clock,
  Lock
} from 'lucide-react';

interface FinalCTAProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/20 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-panel p-8 sm:p-14 lg:p-16 rounded-3xl border border-sky-500/40 shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Subtle decorative glow ring */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Limited Seasonal Promotion: $1,500 High-Wind Armor Upgrade Credit</span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Protect Your Home with the{' '}
              <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Last Roof You'll Ever Buy?
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Book your complimentary 15-minute autonomous LiDAR drone inspection today. Receive an interactive 3D digital telemetry report, fixed price guarantee, and full sample materials.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-sky-500/30 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Free 15-Min Drone Scan</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={onOpenEstimator}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700/80 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Build & Price Your Spec</span>
            </button>
          </div>

          {/* Reassurance Grid */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs text-slate-400 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Free Drone Scan</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Lock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>90-Day Fixed Price Lock</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Lifetime Transferable Deed</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>48-Hour Installation Team</span>
            </div>
          </div>

          {/* Instant Call Option */}
          <div className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <span>Prefer to speak immediately?</span>
            <a href="tel:18005557663" className="text-sky-400 font-bold hover:underline flex items-center gap-1">
              <PhoneCall className="w-3 h-3" />
              <span>(800) 555-ROOF (Available 24/7)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
