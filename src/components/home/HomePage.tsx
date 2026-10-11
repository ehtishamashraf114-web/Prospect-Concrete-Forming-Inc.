import React from 'react';
import { ASSETS, CONSTRAINTS, PROJECTS, FIRM_METRICS, SERVICES } from '../../data/content';
import { ConstraintId, Project } from '../../types';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Sliders, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigateTab: (tab: string) => void;
  onSelectProject: (project: Project) => void;
  onFilterConstraint: (constraintId: ConstraintId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateTab,
  onSelectProject,
  onFilterConstraint,
}) => {
  // 4 Featured Projects for the Featured Project Constraints section
  const featuredProjects = PROJECTS.filter((p) => p.isFeaturedHome);

  return (
    <div className="w-full bg-white text-[#111216]">
      {/* ======================================================== */}
      {/* HERO SECTION: Editorial 1440px presence with raking light */}
      {/* ======================================================== */}
      <section className="relative w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
        {/* Background Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-grid-hairline opacity-75 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Typographic Hierarchy (Col 1-7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#C25E00]"
              >
                <span className="w-2 h-2 bg-[#C25E00] animate-pulse" />
                <span>Toronto Concrete Contractor · Established 1984</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111216] text-balance leading-[1.08]"
              >
                Monolithic Precision in Concrete Forming.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl text-balance"
              >
                Specialized in engineered formwork systems, heavy reinforcement placement, and high-tolerance concrete construction for complex civil, industrial, and architectural projects across Greater Toronto.
              </motion.p>

              {/* Primary & Secondary Actions */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() => onNavigateTab('work')}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C25E00] hover:bg-[#A84F00] active:bg-[#8F4300] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigateTab('scope')}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1F2937] bg-white hover:bg-neutral-50 active:bg-neutral-100 border border-[#D1D5DB] hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>View Technical Scope</span>
                  <ChevronRight className="w-4 h-4 text-[#6B7280]" />
                </button>
              </motion.div>

              {/* Quiet Micro Trust Signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-6 text-xs text-[#525660] font-mono"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C25E00]" /> COR™ Certified
                </span>
                <span>·</span>
                <span>CSA A23.1 / ACI 347 Verified</span>
                <span>·</span>
                <span>LiUNA 183 & 506 / Carpenters 27</span>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Visual Asset (Col 8-12) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full border border-[#E5E7EB] bg-white overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={ASSETS.heroFormwork}
                  alt="Prospect Concrete Forming Toronto Construction"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono">
                  <div className="text-[#FBBF24] uppercase tracking-wider text-[11px] font-semibold">Field Operations / Core Wall</div>
                  <div className="text-white font-medium mt-0.5">Heavy Formwork Assembly · Downtown Toronto</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4-Column KPI Metric Strip (Full width row below hero) */}
        <div className="border-t border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
              {FIRM_METRICS.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className={`pt-4 md:pt-0 ${index !== 0 ? 'md:pl-8' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111216] font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[#525660] mt-1 font-mono uppercase tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CLIENT REQUIREMENT 1: "Featured Project Constraints"      */}
      {/* ======================================================== */}
      <section className="py-24 border-b border-[#E5E7EB] relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
              01. Engineering Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111216] tracking-tight">
              Featured Project Constraints
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed text-balance">
              In Toronto’s challenging geotechnical strata, active waterfronts, and dense zero-lot urban cores, standard forming assumptions fail. We engineer bespoke forming solutions directly around site constraints, material kinetics, and structural tolerances.
            </p>
          </div>

          {/* 4 Featured Constraint Cards Grid with subtle motion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const constraint = CONSTRAINTS.find((c) => c.id === project.primaryConstraintId);
              if (!constraint) return null;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] transition-colors flex flex-col justify-between group overflow-hidden shadow-xs hover:shadow-md"
                >
                  {/* Top Image Preview with Scrim */}
                  <div className="relative aspect-16/9 w-full bg-[#E5E7EB] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono uppercase font-bold text-white bg-black/80 border border-white/20">
                        {constraint.code}
                      </span>
                      <span className="px-2.5 py-1 text-[11px] font-mono text-white/90 bg-black/80 border border-white/20">
                        {constraint.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-[#FBBF24] font-mono uppercase tracking-wide font-medium">
                        {project.sector} · {project.location}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Constraint Title & Description */}
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#6B7280] font-mono">
                          Governing Constraint:
                        </div>
                        <div className="text-base font-semibold text-[#111216] mt-1">
                          {constraint.title}
                        </div>
                        <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                          {constraint.summary}
                        </p>
                      </div>

                      {/* Technical Spec Highlight Strip */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F3F4F6]">
                        {constraint.technicalParameters.slice(0, 2).map((param, pIdx) => (
                          <div key={pIdx} className="bg-neutral-50 p-2.5 border border-[#E5E7EB]">
                            <div className="text-[10px] text-[#6B7280] font-mono uppercase">
                              {param.label}
                            </div>
                            <div className="text-xs font-semibold text-[#111216] mt-0.5 font-mono">
                              {param.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Engineering Mitigation Summary */}
                      <div className="text-xs text-[#374151] bg-neutral-50/80 p-3 border-l-2 border-[#C25E00]">
                        <span className="font-semibold text-[#111216]">Methodology: </span>
                        {project.summary}
                      </div>
                    </div>

                    {/* Interactive Action Links: Satisfying Link Destination Requirement */}
                    <div className="pt-4 border-t border-[#F3F4F6] flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#111216] hover:text-[#C25E00] transition-colors font-mono uppercase tracking-wider cursor-pointer"
                      >
                        <span>Open Technical Dossier</span>
                        <ArrowUpRight className="w-4 h-4 text-[#C25E00]" />
                      </button>

                      <button
                        onClick={() => {
                          onFilterConstraint(constraint.id);
                          onNavigateTab('work');
                        }}
                        className="text-xs text-[#525660] hover:text-[#111216] transition-colors font-mono cursor-pointer"
                      >
                        All [{constraint.code}] Projects →
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Link to Full Constraints Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <div className="text-sm font-semibold text-[#111216]">
                Review All 7 Standard Construction Constraints
              </div>
              <div className="text-xs text-[#525660] mt-0.5">
                Thermal hydration modeling, cold-weather curing, secant pile tolerances, and post-tensioning falsework.
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('constraints')}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111216] bg-white hover:bg-neutral-50 active:bg-neutral-100 border border-[#D1D5DB] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-2xs hover:scale-[1.02]"
            >
              Examine Technical Matrix
            </button>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCOPE SNAPSHOT: Core Forming Disciplines                  */}
      {/* ======================================================== */}
      <section className="py-24 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                02. Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111216] tracking-tight">
                Scope of Work & Forming Systems
              </h2>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                From self-climbing hydraulic core formwork to Class-A architectural board-form finishes, our operations cover the full envelope of structural concrete execution.
              </p>
            </div>

            <button
              onClick={() => onNavigateTab('scope')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C25E00] hover:text-[#A84F00] font-semibold cursor-pointer transition-transform hover:translate-x-1"
            >
              <span>View In-Depth Technical Scope & Sequencing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 5 Disciplines Bento / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between hover:border-[#CBD5E1] transition-all shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#C25E00] uppercase tracking-widest font-bold">
                    {service.code}
                  </div>
                  <h3 className="text-lg font-bold text-[#111216]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Tolerances Preview */}
                  <div className="pt-2 border-t border-[#E5E7EB] space-y-1.5">
                    <div className="text-[11px] font-mono text-[#6B7280] uppercase">
                      Engineering Tolerances:
                    </div>
                    {service.tolerances.slice(0, 2).map((tol, i) => (
                      <div key={i} className="text-xs text-[#374151] font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C25E00]" />
                        <span>{tol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E7EB]">
                  <button
                    onClick={() => onNavigateTab('scope')}
                    className="text-xs text-[#111216] hover:text-[#C25E00] font-mono uppercase tracking-wider inline-flex items-center gap-1.5 font-semibold cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C25E00]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary 2-Col Service Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {SERVICES.slice(3, 5).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-[#CBD5E1] transition-all shadow-xs hover:shadow-md"
              >
                <div className="space-y-2 max-w-md">
                  <div className="text-xs font-mono text-[#C25E00] uppercase tracking-widest font-bold">
                    {service.code} · {service.kicker}
                  </div>
                  <h3 className="text-base font-bold text-[#111216]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#4B5563]">
                    {service.description}
                  </p>
                </div>
                <button
                  onClick={() => onNavigateTab('scope')}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#111216] bg-white hover:bg-neutral-50 border border-[#D1D5DB] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-2xs"
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* OPERATIONAL RIGOR & FORMING FLEET                         */}
      {/* ======================================================== */}
      <section className="py-24 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                03. Equipment & Formwork Assets
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111216] tracking-tight text-balance">
                120,000+ sq ft of Proprietary Modular Inventory in Toronto.
              </h2>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                We do not broker formwork or wait on third-party supply chains. Prospect maintains an extensive equipment yard in Etobicoke stocking Doka Framax, MEVA Mammut 350, self-climbing hydraulic cores, and heavy-duty shoring towers ready for immediate site deployment.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'In-house P.Eng stamped shop drawings & 3D BIM coordination',
                  'Dedicated pre-fabrication yard assembling rebar mats and table gangs',
                  'Full COR™ certified safety personnel on all active placements',
                  'Exclusive ready-mix batching agreements for massive continuous pours',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#374151]">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigateTab('tender')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C25E00] hover:bg-[#A84F00] transition-colors cursor-pointer"
                >
                  Request Pre-Qualification / Tender Package
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 w-full border border-[#E5E7EB] bg-white overflow-hidden shadow-md">
                <img
                  src={ASSETS.engineeredShoring}
                  alt="Prospect Concrete Shoring Yard and Equipment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-mono text-[#FBBF24] uppercase font-semibold">Equipment Yard Inventory</div>
                  <div className="text-sm font-semibold text-white mt-1">
                    Heavy-Duty Aluminum Table Forms & High-Capacity Modular Shoring Towers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* TENDER CTA STRIP                                         */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
            Tender Submissions · Estimating Department
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111216] tracking-tight max-w-2xl mx-auto text-balance">
            Preparing an RFP or Complex Substructure Tender in the GTA?
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Our estimating team provides comprehensive preliminary formwork budgets, sequencing schedules, and constraint mitigation reviews for general contractors and developers.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigateTab('tender')}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#C25E00] hover:bg-[#A84F00] transition-colors cursor-pointer shadow-sm hover:shadow-md"
            >
              Submit Tender Drawings & Spec RFP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
