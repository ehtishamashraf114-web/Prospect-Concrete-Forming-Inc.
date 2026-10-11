import React, { useState } from 'react';
import { Shield, HardHat, FileText, CheckCircle2, Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react';
import { CONSTRAINTS, GTA_MUNICIPALITIES } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';

export const TenderContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    contractorName: '',
    contactPerson: '',
    email: '',
    phone: '',
    projectTitle: '',
    projectLocation: 'City of Toronto Core',
    estimatedVolume: '5000',
    sector: 'Architectural Commercial',
    selectedConstraints: ['subgrade_watertable', 'urban_infill_shoring'],
    timeline: 'Q3 2026',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleConstraintToggle = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedConstraints.includes(id);
      return {
        ...prev,
        selectedConstraints: exists
          ? prev.selectedConstraints.filter((c) => c !== id)
          : [...prev.selectedConstraints, id],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contractorName || !formData.email || !formData.projectTitle) {
      setValidationError('Please provide your contractor/developer name, valid email, and project title.');
      return;
    }
    setValidationError(null);

    setSubmitting(true);
    setTimeout(() => {
      setRefNumber(`PCF-TNDR-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-white text-[#111216] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#E5E7EB] pb-10 space-y-4"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
            Operational Standards & Tender Submissions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111216] tracking-tight text-balance">
            Safety Leadership, Yard Fleet & Estimating RFP
          </h1>
          <p className="text-base text-[#4B5563] max-w-3xl leading-relaxed text-balance">
            Prospect Concrete Forming operates as an integrated partner to general contractors across Ontario. Our COR™ safety certification, extensive company-owned modular inventory, and union labor stability guarantee project execution certainty.
          </p>
        </motion.div>

        {/* Safety & Accreditations Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#E5E7EB] p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-50 border border-[#E5E7EB]">
                <Shield className="w-5 h-5 text-[#C25E00]" />
              </div>
              <h2 className="text-base font-bold text-[#111216]">IHSA COR™ Certified</h2>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Certificate of Recognition (COR™) certified via the Infrastructure Health & Safety Association. Audited safety management systems with continuous daily site audits and JHSC hazard inspections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-[#E5E7EB] p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-50 border border-[#E5E7EB]">
                <HardHat className="w-5 h-5 text-[#C25E00]" />
              </div>
              <h2 className="text-base font-bold text-[#111216]">Union Partner Stability</h2>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Signatory with LiUNA Local 183 & Local 506 and Carpenters Local 27. Access to over 300 skilled formwork carpenters and rodmen with mandatory Ontario safety credentials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white border border-[#E5E7EB] p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-50 border border-[#E5E7EB]">
                <FileText className="w-5 h-5 text-[#C25E00]" />
              </div>
              <h2 className="text-base font-bold text-[#111216]">WSIB Excellence & Zero-LTI</h2>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Maintained 0.00 Lost-Time Injury frequency across 650,000+ field man-hours. Active participant in WSIB Health & Safety Excellence Program with top rating.
            </p>
          </motion.div>
        </div>

        {/* Operational Yard & Fleet Overview */}
        <div className="bg-white border border-[#E5E7EB] p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F3F4F6] pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                Equipment Yard & Logistics
              </span>
              <h3 className="text-xl font-bold text-[#111216] mt-1">
                Etobicoke Central Yard & Fleet Inventory
              </h3>
            </div>
            <div className="text-xs font-mono text-[#525660]">
              140 Brockhouse Way, Toronto ON
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-neutral-50 border border-[#E5E7EB]">
              <span className="text-[#6B7280] block uppercase text-[10px]">Yard Area</span>
              <span className="text-base font-bold text-[#111216] mt-1 block">4.8 Acres</span>
              <span className="text-[#525660] mt-1 block text-[11px]">Enclosed storage & fabrication</span>
            </div>
            <div className="p-4 bg-neutral-50 border border-[#E5E7EB]">
              <span className="text-[#6B7280] block uppercase text-[10px]">Modular Formwork</span>
              <span className="text-base font-bold text-[#111216] mt-1 block">120,000+ sq ft</span>
              <span className="text-[#525660] mt-1 block text-[11px]">Doka & MEVA systems</span>
            </div>
            <div className="p-4 bg-neutral-50 border border-[#E5E7EB]">
              <span className="text-[#6B7280] block uppercase text-[10px]">Hydraulic Jump Cores</span>
              <span className="text-base font-bold text-[#111216] mt-1 block">6 Complete Sets</span>
              <span className="text-[#525660] mt-1 block text-[11px]">Self-climbing core rigs</span>
            </div>
            <div className="p-4 bg-neutral-50 border border-[#E5E7EB]">
              <span className="text-[#6B7280] block uppercase text-[10px]">Shoring Capacity</span>
              <span className="text-base font-bold text-[#111216] mt-1 block">8,500 Heavy Legs</span>
              <span className="text-[#525660] mt-1 block text-[11px]">Up to 100 kN per leg</span>
            </div>
          </div>
        </div>

        {/* TENDER RFP BUILDER */}
        <div className="bg-white border border-[#E5E7EB] p-6 sm:p-10 space-y-8 shadow-xs">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
              Estimating Department
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111216] tracking-tight mt-1">
              Request for Proposal (RFP) & Formwork Estimate
            </h2>
            <p className="text-sm text-[#4B5563] mt-2 max-w-3xl">
              Provide your preliminary structural drawings, concrete volumes, and known site constraints. Our senior estimating team will prepare a cycle analysis, formwork schedule, and tender quote within 3–5 business days.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-neutral-50 border border-[#C25E00] text-center space-y-4 shadow-sm"
            >
              <CheckCircle2 className="w-12 h-12 text-[#C25E00] mx-auto animate-bounce" />
              <div className="text-2xl font-bold text-[#111216]">
                Tender Request Received
              </div>
              <div className="text-sm text-[#4B5563] max-w-md mx-auto">
                Thank you, <span className="text-[#111216] font-semibold">{formData.contactPerson || formData.contractorName}</span>. Your tender dossier has been registered with our Toronto estimating department.
              </div>
              <div className="p-3 bg-white border border-[#E5E7EB] inline-block font-mono text-xs text-[#C25E00] shadow-xs">
                Reference ID: <span className="font-bold text-[#111216]">{refNumber}</span>
              </div>
              <p className="text-xs text-[#525660]">
                A Senior Estimator will review your drawings and contact you at <span className="text-[#111216] font-semibold">{formData.email}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 text-xs font-mono uppercase text-[#111216] bg-white hover:bg-neutral-100 border border-[#D1D5DB] cursor-pointer transition-colors"
              >
                Submit Another Project RFP
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Validation error notice if triggered */}
              <AnimatePresence>
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-4 bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono flex items-center gap-3"
                  >
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{validationError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Row 1: Contractor & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#525660] uppercase">
                    Contractor / Developer *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. EllisDon, PCL, Menkes"
                    value={formData.contractorName}
                    onChange={(e) => setFormData({ ...formData, contractorName: e.target.value })}
                    className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] px-3.5 py-2.5 outline-none font-sans transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#525660] uppercase">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Lead or Estimator"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] px-3.5 py-2.5 outline-none font-sans transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#525660] uppercase">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] px-3.5 py-2.5 outline-none font-sans transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#525660] uppercase">
                    Direct Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(416) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] px-3.5 py-2.5 outline-none font-sans transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Project Particulars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#525660] uppercase">
                    Project Name & Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Waterfront Sub-Station Phase II"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] px-3.5 py-2.5 outline-none font-sans transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#525660] uppercase">
                    GTA Municipality / Region
                  </label>
                  <select
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] px-3.5 py-2.5 outline-none font-sans transition-colors"
                  >
                    {GTA_MUNICIPALITIES.map((m, i) => (
                      <option key={i} value={m} className="bg-white">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#525660] uppercase">
                    Approximate Concrete Volume (m³)
                  </label>
                  <input
                    type="number"
                    placeholder="5000"
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] px-3.5 py-2.5 outline-none font-mono transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Site Constraints Checklist */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#525660] uppercase block">
                  Identify Applicable Construction Constraints (Check all that apply):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {CONSTRAINTS.map((c) => {
                    const isChecked = formData.selectedConstraints.includes(c.id);
                    return (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => handleConstraintToggle(c.id)}
                        className={`p-3 text-left border text-xs font-mono transition-all flex items-start gap-3 cursor-pointer ${
                          isChecked
                            ? 'bg-white border-[#C25E00] text-[#111216] shadow-xs ring-1 ring-[#C25E00]'
                            : 'bg-neutral-50/70 border-[#E5E7EB] text-[#525660] hover:text-[#111216] hover:bg-neutral-100'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 mt-0.5 border flex items-center justify-center shrink-0 ${
                            isChecked ? 'border-[#C25E00] bg-[#C25E00]' : 'border-[#CBD5E1]'
                          }`}
                        >
                          {isChecked && <span className="text-white text-[10px]">✓</span>}
                        </div>
                        <div>
                          <div className="font-bold text-[#C25E00] text-[11px]">{c.code}</div>
                          <div className="text-[#111216] mt-0.5">{c.title}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Drawing Links / Scope Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#525660] uppercase">
                  Drawing Set Cloud Link (SharePoint, Procore, BIM360) or Scope Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Paste secure link to tender IFC structural drawings or outline schedule milestones, crane constraints, and spec notes."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-neutral-50/70 focus:bg-white border border-[#D1D5DB] focus:border-[#C25E00] text-sm text-[#111216] p-3 outline-none font-sans transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#6B7280] font-mono">
                  All drawings treated with strict non-disclosure commercial confidentiality.
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C25E00] hover:bg-[#A84F00] active:bg-[#8F4300] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Registering Tender...' : 'Submit Tender RFP Package'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-mono text-[#374151]">
          <div className="p-4 bg-white border border-[#E5E7EB] flex items-center gap-3 shadow-xs">
            <MapPin className="w-5 h-5 text-[#C25E00] shrink-0" />
            <div>
              <div className="text-[#111216] font-bold">Yard & Dispatch Operations</div>
              <div className="text-[#6B7280]">140 Brockhouse Way, Toronto ON</div>
            </div>
          </div>

          <div className="p-4 bg-white border border-[#E5E7EB] flex items-center gap-3 shadow-xs">
            <Phone className="w-5 h-5 text-[#C25E00] shrink-0" />
            <div>
              <div className="text-[#111216] font-bold">Main Dispatch Office</div>
              <div className="text-[#6B7280]">(416) 745-9200</div>
            </div>
          </div>

          <div className="p-4 bg-white border border-[#E5E7EB] flex items-center gap-3 shadow-xs">
            <Mail className="w-5 h-5 text-[#C25E00] shrink-0" />
            <div>
              <div className="text-[#111216] font-bold">Tenders & Estimating</div>
              <div className="text-[#6B7280]">tenders@prospectconcrete.ca</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
