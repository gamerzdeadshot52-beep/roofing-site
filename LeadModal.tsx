import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Home, 
  ArrowRight,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    postalCode: '',
    roofAge: '15-20 years',
    preferredDate: 'This Week (Priority)',
    notes: initialData ? `Custom Spec: ${initialData.materialName} (${initialData.squareFootage} sqft)` : '',
    hasInsuranceClaim: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Fire celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl glass-panel rounded-3xl border border-sky-500/40 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Light */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="space-y-2 pr-8 mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero-Pressure Engineering Audit</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Schedule Your Free 15-Minute{' '}
                <span className="text-sky-400">Drone LiDAR Flight</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Autonomous drone captures high-res thermal imaging and pitch measurements. You receive a digital interactive 3D report, sample material swatches, and 90-day price lock.
              </p>
            </div>

            {/* Quick Incentive Callout */}
            <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/40 text-xs text-sky-300 flex items-center gap-2.5 mb-6">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Included Today:</strong> Free $1,500 High-Wind Armor upgrade voucher automatically applied to your file.
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sky-400" />
                    <span>Homeowner Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Phone (For Drone Arrival SMS)</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(512) 555-0198"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>Email Address (For 3D Report)</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@vancearch.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>ZIP Code</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="78701"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-sky-400" />
                  <span>Property Street Address</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="1420 Highland Crest Dr"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Estimated Roof Age</label>
                  <select
                    value={formData.roofAge}
                    onChange={(e) => setFormData({ ...formData, roofAge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    <option value="Over 20 years">Over 20 years (Immediate replacement)</option>
                    <option value="15-20 years">15-20 years (Aging shingles)</option>
                    <option value="10-15 years">10-15 years (Storm inspection)</option>
                    <option value="Under 10 years">Under 10 years (Hail/Leak check)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Preferred Time Window</label>
                  <select
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  >
                    <option value="This Week (Priority)">This Week (Priority Flight Staging)</option>
                    <option value="Next Week">Next Week</option>
                    <option value="Weekend Preferred">Weekend Preferred</option>
                  </select>
                </div>
              </div>

              {/* Insurance Checkbox */}
              <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasInsuranceClaim}
                  onChange={(e) => setFormData({ ...formData, hasInsuranceClaim: e.target.checked })}
                  className="w-4 h-4 rounded text-sky-500 bg-slate-800 border-slate-700"
                />
                <span className="text-xs text-slate-300">
                  I suspect storm or hail damage and want insurance claim documentation included.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-sky-500/25 transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Staging Drone Flight...</span>
                ) : (
                  <>
                    <span>Confirm Priority Drone Scan</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </>
                )}
              </button>

              <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero sales pressure. Your information is 100% private and never sold.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                Flight Telemetry Staged
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                You're Scheduled, {formData.fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Our autonomous flight staging team has reserved your 15-minute slot in <strong>{formData.postalCode}</strong>. We sent a calendar invitation and flight tracker link to <strong>{formData.email}</strong>.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 text-left space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">Target Address</span>
                <span className="font-bold text-white">{formData.address || 'On File'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target Window</span>
                <span className="font-bold text-sky-400">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Upgrade Bonus</span>
                <span className="font-bold text-emerald-400">$1,500 Armor Credit Applied</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Price Lock Guarantee</span>
                <span className="font-bold text-white">90 Days Active</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
              >
                Return to Landing Page
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
