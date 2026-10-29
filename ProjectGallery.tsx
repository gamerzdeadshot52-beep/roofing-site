import React, { useState } from 'react';
import { 
  SHOWCASE_PROJECTS, 
  ProjectShowcase 
} from '../data/roofingData';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Quote, 
  ArrowRight
} from 'lucide-react';

interface ProjectGalleryProps {
  onOpenConsultation: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenConsultation }) => {
  const [activeProject, setActiveProject] = useState<ProjectShowcase>(SHOWCASE_PROJECTS[0]);

  return (
    <section id="showcase" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Architectural Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Proven Performance in the{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Most Demanding Climates.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore recent high-end residential installations completed on schedule with zero lawn disturbance, verified energy savings, and lifetime warranty deed certificates.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SHOWCASE_PROJECTS.map((proj) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-lg shadow-sky-500/25 scale-[1.02]'
                    : 'glass-panel text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{proj.client}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-slate-950 text-sky-300' : 'bg-slate-800 text-slate-400'
                }`}>
                  {proj.location}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feature Case Study Display */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-800 group shadow-2xl">
                <img
                  src={activeProject.image}
                  alt={activeProject.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/10 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{activeProject.location}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">{activeProject.roofType}</span>
                    <span className="text-[11px] text-slate-400">{activeProject.beforeAfterCaption}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-sky-400 font-mono">{activeProject.sizeSqFt.toLocaleString()} sq ft</span>
                    <span className="text-[10px] text-emerald-400 block font-medium">Turnaround: {activeProject.durationDays} Days</span>
                  </div>
                </div>
              </div>

              {/* Highlights Pill Row */}
              <div className="flex flex-wrap gap-2">
                {activeProject.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial & Details Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-1">
                  Completed Architectural Case Study
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeProject.client}
                </h3>
                <div className="text-xs text-slate-400 flex items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    Completed in {activeProject.durationDays} Days
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {activeProject.warranty}
                  </span>
                </div>
              </div>

              {/* Homeowner Quote Card */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 relative space-y-3">
                <Quote className="w-6 h-6 text-sky-500/40" />
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  "{activeProject.quote}"
                </p>
                <div className="text-xs font-bold text-sky-300">
                  Verified Resident & Homeowner
                </div>
              </div>

              {/* Technical Inspection Guarantee */}
              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-800/40 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-sky-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Post-Installation Flight Guarantee</span>
                </div>
                <p className="text-slate-400">
                  Includes digital 4K aerial photogrammetry report delivered to owner, guaranteeing zero nail penetrations and sealed water channels.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>Schedule Similar Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
