import React, { useState } from 'react';
import { PRICING_PACKAGES } from '../data/roofingData';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Zap
} from 'lucide-react';

interface PricingProps {
  onSelectPackage: (pkg: any) => void;
  onOpenConsultation: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage, onOpenConsultation }) => {
  const [billingCycle, setBillingCycle] = useState<'financing' | 'full'>('financing');

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Guaranteed Fixed Investments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Transparent Pricing Packages.{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Never a Penny More.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every package is backed by our Price Lock Guarantee and $0 deposit policy. All tear-off debris disposal, magnetic lawn sweeps, permits, and lifetime warranty registrations included.
          </p>

          {/* Toggle View */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setBillingCycle('financing')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  billingCycle === 'financing'
                    ? 'bg-sky-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Zero-Down Low Monthly Plans
              </button>
              <button
                onClick={() => setBillingCycle('full')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  billingCycle === 'full'
                    ? 'bg-sky-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Turnkey Project Investment
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  pkg.popular
                    ? 'glass-panel border-sky-500 shadow-2xl shadow-sky-500/20 ring-1 ring-sky-400/40 lg:-translate-y-2'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg shadow-sky-500/30 flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Homeowner #1 Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header of card */}
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {billingCycle === 'financing' ? (
                        pkg.id === 'essential' ? '$149' : pkg.id === 'signature' ? '$239' : '$299'
                      ) : (
                        pkg.priceEstimate
                      )}
                      {billingCycle === 'financing' && (
                        <span className="text-xs font-normal text-slate-400 font-sans ml-1">/mo ($0 down)</span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <span>Rate:</span>
                      <strong className="text-sky-300">{pkg.sqFtRate}</strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold text-slate-200 tracking-wide block uppercase">
                      What's Included in Spec:
                    </span>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button CTA */}
                <div className="pt-8 space-y-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-black shadow-sky-500/25 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Price locked for 90 days. $0 deposit required.</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Insurance Claims Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Suspect Wind or Hail Storm Damage from this Season?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Our licensed public adjusters document drone micro-dents and negotiate directly with your insurer so your out-of-pocket is just your standard deductible.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 whitespace-nowrap cursor-pointer"
          >
            Claim Insurance Drone Audit
          </button>
        </div>

      </div>
    </section>
  );
};
