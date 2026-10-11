import React, { useState } from 'react';
import { SERVICES, REFINED_SCOPE_STEPS, CONSTRAINTS, ASSETS } from '../../data/content';
import { ConstraintId, ServiceId } from '../../types';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Ruler, Shield, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScopeOfWorkPageProps {
  onNavigateConstraint: (constraintId: ConstraintId) => void;
  onNavigateTender: () => void;
  onFilterWorkByConstraint: (constraintId: ConstraintId) => void;
}

export const ScopeOfWorkPage: React.FC<ScopeOfWorkPageProps> = ({
  onNavigateConstraint,
  onNavigateTender,
  onFilterWorkByConstraint,
}) => {
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceId>('architectural_concrete');
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [activeCallout, setActiveCallout] = useState<number | null>(null);

  // Callout hot-spots on the refined architectural concrete photography
  const callouts = [
    {
      id: 1,
      x: '38%',
      y: '26%',
      title: 'Architectural Tie-Hole Cone',
      description: 'Custom-turned aluminum recessed cones spaced on a strict 600mm x 450mm laser-verified grid with neoprene gasket seals.',
    },
    {
      id: 2,
      x: '58%',
      y: '52%',
      title: 'Wire-Brushed Douglas Fir Grain',
      description: 'Deep relief texture achieved by triple wire-brushing kiln-dried B.C. fir boards; back-screwed to eliminate surface fasteners.',
    },
    {
      id: 3,
      x: '75%',
      y: '78%',
      title: 'Micro-Sealed Chamfer Reveal',
      description: '45-degree sharp reveal joint lined with closed-cell polyurea tape, guaranteeing zero slurry leakage and knife-edge lines.',
    },
  ];

  const currentService = SERVICES.find((s) => s.id === activeServiceTab) || SERVICES[2];

  return (
    <div className="w-full bg-white text-[#111216] py-16 sm:py-20">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ======================================================== */}
        {/* PAGE HEADER: Clear architectural hierarchy               */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#E5E7EB] pb-10 space-y-4"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
            Operational Scope & Services
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111216] tracking-tight text-balance">
            Technical Disciplines & Structural Capabilities
          </h1>
          <p className="text-base text-[#4B5563] max-w-3xl leading-relaxed text-balance">
            Prospect executes the full technical lifecycle of structural forming—from engineered falsework towers and heavy shoring brackets to precision Class-A architectural concrete surfaces across Ontario.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* CLIENT REQUIREMENT 3: INTERNAL STICKY SERVICE NAV         */}
        {/* Clear active states & smooth switching between services  */}
        {/* ======================================================== */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md py-3 border-y border-[#E5E7EB]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {SERVICES.map((s) => {
              const isActive = s.id === activeServiceTab;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveServiceTab(s.id)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#C25E00] text-[#111216] shadow-xs font-bold ring-1 ring-[#C25E00]'
                      : 'bg-white border-[#E5E7EB] text-[#525660] hover:text-[#111216] hover:bg-neutral-50'
                  }`}
                >
                  <span className="text-[#C25E00] mr-2 font-bold">{s.code}</span>
                  <span>{s.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* CLIENT REQUIREMENT 4: REFINED SECTION DEEP-DIVE          */}
        {/* Section 03: Architectural & High-Tolerance Placement     */}
        {/* Text, graphics & photography at 1440px & 1920px          */}
        {/* ======================================================== */}
        {activeServiceTab === 'architectural_concrete' && (
          <section className="bg-white border border-[#E5E7EB] p-6 sm:p-10 lg:p-12 space-y-12 animate-fadeIn shadow-xs">
            {/* Editorial Kicker & Refined Header */}
            <div className="border-b border-[#F3F4F6] pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#C25E00] text-white font-mono text-xs font-bold">
                    REFINED SPECIFICATION · S-03
                  </span>
                  <span className="text-xs font-mono text-[#525660]">
                    Governing Standard: CSA A23.1-19 Class A Exposed / ACI 303R-12
                  </span>
                </div>
                <div className="text-xs font-mono text-[#C25E00] font-semibold">
                  Target Tolerance: ± 1.5mm / 6.0m
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111216] tracking-tight mt-4">
                Architectural & High-Tolerance Concrete Placement
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] max-w-4xl mt-3 leading-relaxed">
                When concrete is designated as the primary finished architectural surface, conventional forming tolerances and patch-work are strictly unacceptable. Prospect treats the forming face as a high-precision mold: engineering panel joints, grain continuity, tie-rod geometry, and pour rates to produce flawless, monolithic architectural masonry without surface patching or bug-holes.
              </p>
            </div>

            {/* 1440px / 1920px 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Interactive Photography with Architectural Callouts (Col 1-7) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#525660]">
                  <span>Interactive Field Detail (Hover or Click Markers)</span>
                  <span className="text-[#C25E00] font-semibold">3 Precision Benchmarks</span>
                </div>

                <div className="relative aspect-4/3 sm:aspect-16/10 w-full bg-[#E5E7EB] border border-[#D1D5DB] overflow-hidden group shadow-md">
                  <img
                    src={ASSETS.architecturalBoardform}
                    alt="Prospect Architectural Boardform Concrete Detail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Interactive Callout Points */}
                  {callouts.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCallout(activeCallout === c.id ? null : c.id)}
                      style={{ top: c.y, left: c.x }}
                      aria-label={c.title}
                      className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#C25E00] text-white flex items-center justify-center font-mono text-xs font-bold border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform group-hover:ring-4 group-hover:ring-[#C25E00]/40"
                    >
                      {c.id}
                    </button>
                  ))}

                  {/* Callout Info Bubble */}
                  {activeCallout !== null && (
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-[#C25E00] p-4 text-xs font-mono text-[#111216] animate-fadeIn shadow-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-[#C25E00] font-bold uppercase">
                          Point 0{activeCallout}: {callouts[activeCallout - 1].title}
                        </span>
                        <button
                          onClick={() => setActiveCallout(null)}
                          className="text-[#6B7280] hover:text-[#111216] cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="mt-1.5 text-[#374151] font-sans text-xs leading-relaxed">
                        {callouts[activeCallout - 1].description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Callout Legend Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                  {callouts.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCallout(c.id)}
                      className={`p-2.5 text-left border transition-colors cursor-pointer ${
                        activeCallout === c.id
                          ? 'bg-white border-[#C25E00] text-[#111216] font-bold shadow-xs'
                          : 'bg-[#F8F9FA] border-[#E5E7EB] text-[#525660] hover:text-[#111216]'
                      }`}
                    >
                      <span className="text-[#C25E00] font-bold mr-1.5">0{c.id}.</span>
                      <span className="truncate">{c.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Technical Tolerances & Form Specs (Col 8-12) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                    Quantitative Tolerances Matrix
                  </h3>
                  <div className="mt-3 divide-y divide-[#E5E7EB] border border-[#E5E7EB] bg-[#F8F9FA]">
                    {[
                      { param: 'Surface Roughness Class', val: 'CSA A23.1 Class A Exposed' },
                      { param: 'Plumbness Deviation', val: '< 2.0mm over 6.0m elevation' },
                      { param: 'Tie Hole Pitch Uniformity', val: '± 1.0mm laser-verified center' },
                      { param: 'Reveal Straightness', val: '< 1.0mm per 3.0m straightedge' },
                      { param: 'Color Uniformity (Delta-E)', val: 'ΔE < 1.5 across 12 discrete pours' },
                      { param: 'Max Permissible Bug Holes', val: '< 3mm diameter, < 0.5% surface' },
                    ].map((row, idx) => (
                      <div key={idx} className="p-3 flex items-center justify-between text-xs font-mono">
                        <span className="text-[#525660]">{row.param}</span>
                        <span className="text-[#111216] font-semibold">{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Mix Systems */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B7280]">
                    Formwork Facing Systems Deployed
                  </h3>
                  <div className="space-y-2 text-xs">
                    {[
                      'CNC wire-brushed Canadian Douglas Fir with back-screwed concealed fixings',
                      'High-density 220g/m² phenolic-faced birch plywood with sealed edge chamfers',
                      'Automated self-compacting concrete (SCC) flow with polycarboxylate superplasticizers',
                      'Electric high-frequency immersion vibrators with non-marking polyurethane heads',
                    ].map((spec, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[#374151]">
                        <CheckCircle2 className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Cross-Links to Solved Constraints (Client Requirement 3) */}
                <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
                  <div className="text-xs font-mono text-[#6B7280] uppercase">
                    Solved Construction Constraints:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => onNavigateConstraint('architectural_boardform')}
                      className="px-3 py-1.5 text-xs font-mono bg-neutral-50 border border-[#E5E7EB] text-[#111216] hover:border-[#C25E00] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>C-03: Architectural Board-Form</span>
                      <ArrowRight className="w-3 h-3 text-[#C25E00]" />
                    </button>
                    <button
                      onClick={() => onNavigateConstraint('cold_weather_curing')}
                      className="px-3 py-1.5 text-xs font-mono bg-neutral-50 border border-[#E5E7EB] text-[#111216] hover:border-[#C25E00] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>C-05: Winter Thermal Curing</span>
                      <ArrowRight className="w-3 h-3 text-[#C25E00]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-PHASE SEQUENCING GRAPHICS: Smooth scroll & interactive step inspection */}
            <div className="pt-8 border-t border-[#E5E7EB] space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                  Execution Protocol
                </div>
                <h3 className="text-xl font-bold text-[#111216] tracking-tight mt-1">
                  4-Phase Method Statement & Quality Gate Verification
                </h3>
              </div>

              {/* Step Navigation Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {REFINED_SCOPE_STEPS.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`p-4 text-left border transition-all cursor-pointer ${
                      activePhaseIndex === idx
                        ? 'bg-white border-[#C25E00] text-[#111216] shadow-xs ring-1 ring-[#C25E00]'
                        : 'bg-neutral-50/70 border-[#E5E7EB] text-[#525660] hover:text-[#111216] hover:bg-neutral-100'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-[#C25E00] uppercase font-bold">
                      {step.step}
                    </div>
                    <div className="text-xs font-semibold mt-1 text-[#111216] truncate">
                      {step.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Step Detailed Callout with animated transition */}
              <motion.div
                key={activePhaseIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="p-6 bg-neutral-50/80 border border-[#E5E7EB] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-8 space-y-2">
                  <div className="text-xs font-mono text-[#C25E00] uppercase font-bold">
                    Specification Requirement · {REFINED_SCOPE_STEPS[activePhaseIndex].step}
                  </div>
                  <div className="text-base font-bold text-[#111216]">
                    {REFINED_SCOPE_STEPS[activePhaseIndex].title}
                  </div>
                  <p className="text-xs text-[#374151] leading-relaxed font-mono">
                    {REFINED_SCOPE_STEPS[activePhaseIndex].specification}
                  </p>
                </div>

                <div className="md:col-span-4 bg-white p-4 border border-[#E5E7EB] space-y-1 shadow-xs">
                  <div className="text-[10px] font-mono text-[#6B7280] uppercase">
                    Mandatory Hold Point / Sign-Off
                  </div>
                  <div className="text-xs text-[#16A34A] font-mono font-bold">
                    {REFINED_SCOPE_STEPS[activePhaseIndex].checkCriteria}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* OTHER SERVICES OVERVIEWS (S-01, S-02, S-04, S-05)         */}
        {/* ======================================================== */}
        {activeServiceTab !== 'architectural_concrete' && (
          <section className="bg-white border border-[#E5E7EB] p-6 sm:p-10 lg:p-12 space-y-10 animate-fadeIn shadow-xs">
            <div className="border-b border-[#F3F4F6] pb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#C25E00] uppercase font-bold">
                  Service Discipline · {currentService.code}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111216] tracking-tight mt-1">
                  {currentService.title}
                </h2>
                <p className="text-xs text-[#6B7280] font-mono mt-1">
                  {currentService.kicker}
                </p>
              </div>

              <button
                onClick={onNavigateTender}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C25E00] hover:bg-[#A84F00] cursor-pointer"
              >
                Inquire on this Discipline
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {currentService.description}
                </p>

                {/* Tolerances */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                    Strict Engineering Tolerances
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentService.tolerances.map((tol, i) => (
                      <div key={i} className="p-3 bg-neutral-50 border border-[#E5E7EB] text-xs font-mono text-[#374151]">
                        {tol}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B7280]">
                    Proprietary Equipment & Systems
                  </h3>
                  <div className="space-y-2 text-xs">
                    {currentService.equipmentSystems.map((eq, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#374151]">
                        <CheckCircle2 className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="relative aspect-4/3 w-full bg-[#E5E7EB] border border-[#D1D5DB] overflow-hidden shadow-md">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white">
                    {currentService.title} · Field Verification
                  </div>
                </div>

                {/* Solved Constraints */}
                <div className="p-5 bg-neutral-50 border border-[#E5E7EB] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    Solved Engineering Constraints:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentService.solvedConstraintIds.map((cid) => {
                      const c = CONSTRAINTS.find((x) => x.id === cid);
                      if (!c) return null;
                      return (
                        <button
                          key={c.id}
                          onClick={() => onNavigateConstraint(c.id)}
                          className="px-2.5 py-1.5 text-xs font-mono bg-white hover:bg-[#F3F4F6] text-[#111216] border border-[#D1D5DB] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <span>{c.code}: {c.title.split('&')[0]}</span>
                          <ArrowRight className="w-3 h-3 text-[#C25E00]" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* COMPLETE DISCIPLINE ROSTER: All 5 Services Overview       */}
        {/* ======================================================== */}
        <div className="space-y-6 pt-8 border-t border-[#E5E7EB]">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
              Full Scope Roster (Click to switch view)
            </h3>
            <span className="text-xs font-mono text-[#525660]">
              5 Primary Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveServiceTab(s.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  s.id === activeServiceTab
                    ? 'bg-white border-[#C25E00] text-[#111216] shadow-xs ring-1 ring-[#C25E00]'
                    : 'bg-white border-[#E5E7EB] text-[#525660] hover:text-[#111216] hover:bg-[#F8F9FA]'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono text-[#C25E00] uppercase font-bold">
                    {s.code}
                  </div>
                  <div className="text-xs font-bold mt-1.5 text-[#111216] leading-snug">
                    {s.title}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#6B7280] mt-4 flex items-center justify-between">
                  <span>{s.tolerances.length} Tolerances</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C25E00]" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
