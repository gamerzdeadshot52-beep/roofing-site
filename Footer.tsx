import React from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Lock, 
  CheckCircle, 
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  APEX<span className="text-sky-400 font-extrabold">ROOF</span>
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    PRO
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Architectural Storm Defense</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Pioneering high-durability residential and commercial roofing systems. Autonomous drone LiDAR surveys, standing-seam aerospace metals, composite slate, and lifetime transferable weather deeds.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                <a href="tel:18005557663" className="hover:text-white font-mono">(800) 555-ROOF (24/7 Priority Line)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>concierge@apexroofpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>National Staging Depots: Austin • Denver • Miami • Bellevue</span>
              </div>
            </div>
          </div>

          {/* Column: Architectural Systems */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Systems & Materials
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#systems" className="hover:text-sky-400 transition-colors">Standing Seam Steel</a></li>
              <li><a href="#systems" className="hover:text-sky-400 transition-colors">Ultra-Composite Slate</a></li>
              <li><a href="#systems" className="hover:text-sky-400 transition-colors">HD Armored Shingles</a></li>
              <li><a href="#systems" className="hover:text-sky-400 transition-colors">Integrated Solar Glass Tiles</a></li>
              <li><a href="#technology" className="hover:text-sky-400 transition-colors">Kynar 500® Perimeter Flashing</a></li>
              <li><a href="#technology" className="hover:text-sky-400 transition-colors">Hidden Gutter Infiltration</a></li>
            </ul>
          </div>

          {/* Column: Client Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Engineering & Tech
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#technology" className="hover:text-sky-400 transition-colors">15-Min Drone LiDAR Scan</a></li>
              <li><a href="#estimator" className="hover:text-sky-400 transition-colors">Interactive Cost Calculator</a></li>
              <li><a href="#pricing" className="hover:text-sky-400 transition-colors">0% Financing Options</a></li>
              <li><a href="#pricing" className="hover:text-sky-400 transition-colors">Storm Insurance Recovery</a></li>
              <li><a href="#showcase" className="hover:text-sky-400 transition-colors">Architectural Portfolio</a></li>
              <li><a href="#faq" className="hover:text-sky-400 transition-colors">Homeowner FAQ</a></li>
            </ul>
          </div>

          {/* Column: Certifications & Legal Assurance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Compliance & Guarantee
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Class 4 Hail Impact UL 2218</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>160 MPH Wind Hurricane Zone</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>$5,000,000 Liability Insured</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>EPA Energy Star Cool Roof</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-sky-400" />
                <span>Lifetime Transferable Deed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ApexRoof Pro Engineering LLC. All rights reserved. Licensed General Roofing Contractor #ROOF-98241.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Warranty</a>
            <a href="#" className="hover:text-slate-300 transition-colors">State Licensing</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
