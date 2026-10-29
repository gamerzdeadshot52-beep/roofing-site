import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle, 
  Sparkles,
  Lock,
  Building2,
  FileCheck
} from 'lucide-react';

export const SocialProof: React.FC = () => {
  const certifications = [
    {
      title: 'Class 4 Impact Certified',
      subtitle: 'UL 2218 Maximum Hail Shield',
      icon: ShieldCheck,
      color: 'text-sky-400'
    },
    {
      title: 'Miami-Dade High Velocity',
      subtitle: '160 MPH Wind Hurricane Zone Rated',
      icon: Zap,
      color: 'text-amber-400'
    },
    {
      title: 'Lifetime Transferable',
      subtitle: 'Zero-Deductible Non-Prorated Deed',
      icon: Lock,
      color: 'text-emerald-400'
    },
    {
      title: 'A+ BBB Accredited',
      subtitle: '100% Five-Star Residential Record',
      icon: Award,
      color: 'text-indigo-400'
    }
  ];

  const featuredIn = [
    { name: 'ARCHITECTURAL DIGEST', sub: 'Featured Residential System' },
    { name: 'MODERN DWELLING', sub: 'Top Storm Resilience Tech' },
    { name: 'HOME EQUITY FORUM', sub: '#1 Highest ROI Renovation' },
    { name: 'ENERGY STAR RATED', sub: 'Cool Roof Certified' },
  ];

  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-slate-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industry Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10">
          {certifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 group"
              >
                <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">{item.title}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{item.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Media & Standards Recognition Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Recognized for engineering excellence by</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto text-center">
            {featuredIn.map((pub, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-xs font-black tracking-widest text-slate-300 font-mono">
                  {pub.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">{pub.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Customer Guarantees */}
        <div className="mt-8 pt-6 border-t border-slate-800/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left text-xs text-slate-400">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>$0 Deposit Required</strong> until full completion inspection</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span><strong>Licensed & $5M Insured</strong> Master Installers</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Direct Insurance Claims</strong> handled with zero hassle</span>
          </div>
        </div>

      </div>
    </section>
  );
};
