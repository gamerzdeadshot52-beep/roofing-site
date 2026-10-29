import React from 'react';
import { TESTIMONIALS } from '../data/roofingData';
import { 
  Star, 
  CheckCircle, 
  Award, 
  ShieldCheck, 
  Building
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Residential Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Discerning Homeowners &{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Architects Alike.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Read real feedback from homeowners whose roofs have already survived Category-3 gusts, baseball hail storms, and blazing heat waves.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                
                {/* Star rating row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified Home
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.text}"
                </p>

              </div>

              {/* Author & Project Details */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-sky-400/40"
                />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.role} • {item.location}
                  </div>
                  <div className="text-[10px] text-sky-400 font-semibold mt-0.5">
                    System: {item.project}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Third-Party Verification Ribbon */}
        <div className="mt-14 glass-panel p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span><strong>410+ Verified Installations</strong> across state regions</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span><strong>4.98 Stars</strong> on Google Reviews & Houzz</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Building className="w-4 h-4 text-emerald-400" />
            <span><strong>$0 Deposit Guarantee</strong> until final inspection pass</span>
          </div>
        </div>

      </div>
    </section>
  );
};
