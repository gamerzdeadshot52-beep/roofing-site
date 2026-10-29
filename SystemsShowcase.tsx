import React, { useState } from 'react';
import { 
  ROOF_MATERIALS, 
  MaterialOption 
} from '../data/roofingData';
import { 
  Shield, 
  Wind, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Flame, 
  SunMedium, 
  HelpCircle,
  Eye
} from 'lucide-react';

interface SystemsShowcaseProps {
  onSelectSystemForEstimate: (materialId: string) => void;
  onOpenConsultation: () => void;
}

export const SystemsShowcase: React.FC<SystemsShowcaseProps> = ({ 
  onSelectSystemForEstimate, 
  onOpenConsultation 
}) => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(ROOF_MATERIALS[0]);
  const [activeViewTab, setActiveViewTab] = useState<'benefits' | 'specs' | 'crossSection'>('benefits');

  return (
    <section id="systems" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Architectural Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Materials Engineered for the{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Next 50 Years.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Compare our aerospace-grade roofing tiers. Select any material to explore its multi-layer storm defense, thermal reflection, and instant square-foot pricing.
          </p>
        </div>

        {/* System Selector Cards (Tabs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {ROOF_MATERIALS.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'glass-panel border-sky-500 shadow-xl shadow-sky-500/15 ring-2 ring-sky-500/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                {mat.popular && (
                  <span className="absolute -top-2.5 right-4 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {mat.durabilityYears}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    ${mat.pricePerSqFt.toFixed(2)}/sq ft
                  </span>
                </div>

                <div className="font-bold text-white text-base leading-snug mb-1.5">
                  {mat.name}
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {mat.tagline}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1">
                    <Wind className="w-3.5 h-3.5 text-sky-400" />
                    {mat.windRating}
                  </span>
                  <span className={`font-semibold flex items-center gap-1 ${
                    isSelected ? 'text-sky-400' : 'text-slate-400'
                  }`}>
                    <span>View Spec</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Selected Material Panel */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Media Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] border border-slate-800 group">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Ultra-Resistant Exterior Finish</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div>
                    <span className="font-bold text-sky-300">{selectedMaterial.name}</span>
                    <p className="text-[11px] text-slate-300">{selectedMaterial.warranty}</p>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300 font-mono font-bold">
                    Class 4 Hail Shield
                  </div>
                </div>
              </div>

              {/* Quick Specs Badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[11px] text-slate-400 font-medium">Lifespan</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">{selectedMaterial.durabilityYears}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[11px] text-slate-400 font-medium">Wind Rating</div>
                  <div className="text-sm font-extrabold text-sky-400 mt-0.5">{selectedMaterial.windRating}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[11px] text-slate-400 font-medium">Warranty</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5 truncate">{selectedMaterial.warranty}</div>
                </div>
              </div>
            </div>

            {/* Detailed Description & Spec Tabs Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Apex High-Performance Tier</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedMaterial.name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {selectedMaterial.description}
                </p>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800 w-fit">
                <button
                  onClick={() => setActiveViewTab('benefits')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeViewTab === 'benefits' ? 'bg-sky-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Key Architectural Benefits
                </button>
                <button
                  onClick={() => setActiveViewTab('specs')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeViewTab === 'specs' ? 'bg-sky-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Layered Protection Specs
                </button>
              </div>

              {/* Tab Contents */}
              {activeViewTab === 'benefits' ? (
                <div className="space-y-3">
                  {selectedMaterial.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                      <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>Class A Fire Rating (Maximum Non-Combustible)</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Tested against direct ember storms and severe external heat contact with zero flame spread.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                      <SunMedium className="w-3.5 h-3.5 text-sky-400" />
                      <span>Kynar 500® Thermal Heat Deflection</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Infrared-reflective micro-ceramic pigmentation keeps attic spaces up to 34°F cooler in extreme summer heat.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Interlocking Concealed Fastener Seams</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Expands and contracts seamlessly with seasonal temperature cycles without popping screws or puncturing water seals.
                    </p>
                  </div>
                </div>
              )}

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onSelectSystemForEstimate(selectedMaterial.id)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Configure With This System</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-sky-400" />
                  <span>Request Sample Swatch Box</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
