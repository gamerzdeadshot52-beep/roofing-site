import React, { useState } from 'react';
import { 
  Cpu, 
  Scan, 
  Layers, 
  Compass, 
  Sparkles, 
  ArrowRight,
  Activity
} from 'lucide-react';

interface TechSpecsProps {
  onOpenConsultation: () => void;
}

export const TechSpecs: React.FC<TechSpecsProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Autonomous Aerial LiDAR Scan',
      tag: 'Step 1: Sub-Millimeter Telemetry',
      icon: Scan,
      description: 'Our high-resolution drone maps 20,000 coordinate surface points in 12 minutes. We detect microscopic deck deflection, exact pitch angles, and hidden thermal leaks without anyone stepping on your roof.',
      stats: '20,000+ points / 12 minutes'
    },
    {
      title: 'Zero-Penetration Underlayment Shield',
      tag: 'Step 2: Dual Armor Membrane',
      icon: Layers,
      description: 'We install high-tensile synthetic weather barriers and self-healing SBS ice-and-water guards across 100% of eaves, valleys, and skylight curbs. Even if shingles were removed, your home remains watertight.',
      stats: '100% Surface Dual-Sealed'
    },
    {
      title: 'Laser-Leveled Concealed Fastening',
      tag: 'Step 3: Surgical Craftsmanship',
      icon: Compass,
      description: 'Our certified master craftsmen utilize robotic laser alignment for perfectly straight standing seams and custom Kynar 500® perimeter flashings. Zero exposed screws, zero rubber washers that dry-rot in the sun.',
      stats: '160 MPH Hurricane Tested'
    },
    {
      title: 'Lifetime AI Health Audits',
      tag: 'Step 4: Continuous Digital Guardian',
      icon: Cpu,
      description: 'Every Apex installation includes an annual complimentary drone flight checkup for life. Our AI flags early tree branch hazards, gutter blockages, and storm impact before leaks can ever develop.',
      stats: 'Lifetime Annual Re-scan'
    }
  ];

  return (
    <section id="technology" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>The Apex Engineering Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How Leading Tech Standards{' '}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Eliminate Roofing Failure.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Traditional roofing relies on chalk lines, guess-work estimates, and cheap subcontractors. We replaced all of that with digital telemetry, precision robotics, and lifelong accountability.
          </p>
        </div>

        {/* Interactive Feature Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Step Buttons */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'glass-panel border-sky-500/80 shadow-lg shadow-sky-500/10'
                      : 'bg-slate-900/40 border-slate-800/70 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 ${
                      isActive ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-sky-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-sky-400 font-semibold uppercase tracking-wider">
                          {step.tag}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          {step.stats}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Drone Technology & Digital Mesh Visualizer */}
          <div className="lg:col-span-6">
            <div className="relative glass-panel p-3 rounded-3xl border border-slate-800 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="./images/roof-drone-scan.jpg"
                  alt="Autonomous drone scanning luxury roof with LiDAR mesh"
                  className="w-full h-full object-cover"
                />
                
                {/* Visual HUD Overlay Simulation */}
                <div className="absolute inset-0 bg-sky-950/20 mix-blend-color-dodge pointer-events-none" />
                <div className="absolute inset-0 border-2 border-sky-400/20 rounded-2xl pointer-events-none m-3" />
                
                {/* Telemetry points */}
                <div className="absolute top-6 left-6 glass-panel px-3 py-1.5 rounded-lg border border-sky-400/30 text-xs font-mono text-sky-300 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                  <span>LiDAR TELEMETRY ACTIVE (99.8% PRECISION)</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Digital Pitch Tolerance</span>
                    <span className="text-emerald-400 font-mono font-bold">±0.04° Variance</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full w-[96%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Deck Integrity: 100% Solid</span>
                    <span>Moisture Intrusion: 0.00%</span>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <div className="text-left">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Want to see your home's 3D roof map?</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    We send the flight crew free of charge. No ladders, no disruption.
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs whitespace-nowrap flex items-center gap-2 cursor-pointer shadow-md shadow-sky-500/20"
                >
                  <span>Request Free Scan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
