import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Building, 
  CheckCircle2
} from 'lucide-react';
import { ROOF_MATERIALS } from '../data/roofingData';

interface InteractiveEstimatorProps {
  initialMaterialId?: string;
  onBookInspection: (estimateData: any) => void;
}

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({ 
  initialMaterialId = 'standing-seam',
  onBookInspection 
}) => {
  const [squareFootage, setSquareFootage] = useState<number>(3200);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(initialMaterialId);
  const [pitchType, setPitchType] = useState<'gentle' | 'moderate' | 'steep'>('moderate');
  const [stories, setStories] = useState<number>(2);
  const [needsTearOff, setNeedsTearOff] = useState<boolean>(true);
  const [addGutters, setAddGutters] = useState<boolean>(true);
  const [addSkylights, setAddSkylights] = useState<boolean>(false);
  const [financingMode, setFinancingMode] = useState<boolean>(true);

  const sqftInputId = useId();

  // Pricing calculations
  const material = ROOF_MATERIALS.find(m => m.id === selectedMaterialId) || ROOF_MATERIALS[0];

  const pitchMultiplier = pitchType === 'gentle' ? 1.0 : pitchType === 'moderate' ? 1.12 : 1.25;
  const storiesMultiplier = stories === 1 ? 1.0 : stories === 2 ? 1.08 : 1.15;
  
  const baseMaterialAndLabor = squareFootage * material.pricePerSqFt * pitchMultiplier * storiesMultiplier;
  const tearOffCost = needsTearOff ? squareFootage * 1.20 : 0;
  const guttersCost = addGutters ? 1800 : 0;
  const skylightCost = addSkylights ? 2400 : 0;

  const totalEstimate = Math.round(baseMaterialAndLabor + tearOffCost + guttersCost + skylightCost);
  const monthlyPayment = Math.round(totalEstimate / 120); // 10-year low rate APR sample ($149-$280/mo)

  // Federal clean energy incentive discount if solar tile
  const isSolar = material.id === 'solar-integrated';
  const taxCredit = isSolar ? Math.round(totalEstimate * 0.30) : 0;
  const netSolarEstimate = totalEstimate - taxCredit;

  const handleExportEstimate = () => {
    onBookInspection({
      squareFootage,
      materialName: material.name,
      totalEstimate,
      monthlyPayment,
      pitchType,
      stories,
      needsTearOff,
      addGutters
    });
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Instant Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Transparent Pricing.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Zero Contractor Sales Games.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Calculate your exact roof replacement investment in real time based on your square footage, pitch, and materials. No hidden fees, no phone calls required to see real numbers.
          </p>
        </div>

        {/* The Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-8">
            
            {/* 1. Square Footage Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor={sqftInputId} className="text-sm font-bold text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-sky-400" />
                  <span>Estimated Home Roof Size</span>
                </label>
                <div className="text-right">
                  <span className="text-lg font-black text-sky-400 font-mono">
                    {squareFootage.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">sq ft</span>
                </div>
              </div>

              <input
                id={sqftInputId}
                type="range"
                min="1200"
                max="7500"
                step="100"
                value={squareFootage}
                onChange={(e) => setSquareFootage(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />

              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1,200 sq ft (Cottage)</span>
                <span>3,200 sq ft (Avg 2-Story)</span>
                <span>7,500 sq ft (Estate)</span>
              </div>
            </div>

            {/* 2. Material Tier Selector */}
            <div className="space-y-3">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Select Architectural Material System</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ROOF_MATERIALS.map((mat) => {
                  const isSelected = selectedMaterialId === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500/15 border-sky-400 text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold leading-tight">{mat.name}</span>
                        <span className="text-[11px] font-mono text-sky-400">${mat.pricePerSqFt}/sqft</span>
                      </div>
                      <span className="text-[10px] text-slate-400 block mt-1">{mat.durabilityYears} • {mat.windRating}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Roof Pitch & Architectural Complexity */}
            <div className="space-y-3">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Roof Pitch & Slope Slope Angle</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'gentle', label: 'Gentle (4/12)', desc: 'Standard Walkable' },
                  { id: 'moderate', label: 'Moderate (7/12)', desc: 'Common 2-Story' },
                  { id: 'steep', label: 'Steep (10/12+)', desc: 'Cathedral / Turret' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPitchType(item.id as any)}
                    className={`p-3 rounded-xl text-center border transition-all cursor-pointer ${
                      pitchType === item.id
                        ? 'bg-sky-500/20 border-sky-400 text-white'
                        : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Stories & Custom Upgrades Toggles */}
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-white">Property Features & Stories</div>
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStories(s)}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                        stories === s ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {s} {s === 1 ? 'Story' : 'Stories'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsTearOff}
                    onChange={(e) => setNeedsTearOff(e.target.checked)}
                    className="w-4 h-4 rounded text-sky-500 bg-slate-800 border-slate-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Full Deck Tear-Off</div>
                    <div className="text-[10px] text-slate-400">Includes haul-away</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addGutters}
                    onChange={(e) => setAddGutters(e.target.checked)}
                    className="w-4 h-4 rounded text-sky-500 bg-slate-800 border-slate-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Seamless 6" Gutters</div>
                    <div className="text-[10px] text-slate-400">+ Leaf guards</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addSkylights}
                    onChange={(e) => setAddSkylights(e.target.checked)}
                    className="w-4 h-4 rounded text-sky-500 bg-slate-800 border-slate-700 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">Skylight Re-flashing</div>
                    <div className="text-[10px] text-slate-400">Zero leak seal</div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Pricing Summary Card (Right) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative space-y-6">
              
              {/* Top Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real-Time Pricing Specification</span>
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  Fixed Price Guaranteed
                </span>
              </div>

              {/* Financing Mode Switcher */}
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                <button
                  onClick={() => setFinancingMode(true)}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                    financingMode ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Low Monthly Plan ($0 Down)
                </button>
                <button
                  onClick={() => setFinancingMode(false)}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                    !financingMode ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Total Investment
                </button>
              </div>

              {/* Main Price Output Display */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-center space-y-1">
                {financingMode ? (
                  <>
                    <div className="text-xs text-slate-400 font-medium">Estimated Zero-Down Monthly</div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      ${monthlyPayment}
                      <span className="text-base sm:text-lg font-semibold text-slate-400 font-sans">/mo</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                      0% APR for 18 Months or Low Fixed APR (Instant Soft Check)
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-xs text-slate-400 font-medium">Complete Turnkey Replacement Investment</div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      ${totalEstimate.toLocaleString()}
                    </div>
                    {isSolar && (
                      <div className="text-xs text-emerald-400 font-bold pt-1">
                        Net after 30% Federal Clean Energy Tax Credit: ${netSolarEstimate.toLocaleString()}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Line Items Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 border-y border-slate-800/80 py-4">
                <div className="flex justify-between">
                  <span>Selected System</span>
                  <span className="font-bold text-white text-right">{material.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Underlayment & Weather Barrier</span>
                  <span className="text-emerald-400 font-bold">100% Full Surface Shield</span>
                </div>
                <div className="flex justify-between">
                  <span>Labor & Teardown Cleanup</span>
                  <span className="font-bold text-white">Certified Master Crew Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Debris & Magnet Yard Sweep</span>
                  <span className="text-emerald-400 font-bold">$0 (Zero Property Impact)</span>
                </div>
                <div className="flex justify-between">
                  <span>Warranty Transfer Deed</span>
                  <span className="font-bold text-white">{material.warranty}</span>
                </div>
              </div>

              {/* High-Conversion Primary CTA */}
              <button
                onClick={handleExportEstimate}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm tracking-wide shadow-xl shadow-sky-500/30 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In This Spec & Book Drone Scan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-center text-slate-400 space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Locks in your price for 90 days. Zero obligation.</span>
                </div>
                <p>Includes free autonomous drone mapping flight ($450 value).</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
