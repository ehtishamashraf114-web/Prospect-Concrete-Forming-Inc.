import React, { useState } from 'react';
import { CONSTRAINTS, PROJECTS, SERVICES } from '../../data/content';
import { ConstraintId, Project, ServiceId } from '../../types';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Ruler, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConstraintsPageProps {
  activeConstraintId?: ConstraintId;
  onSelectProject: (project: Project) => void;
  onNavigateService: (serviceId: ServiceId) => void;
  onNavigateTender: () => void;
}

export const ConstraintsPage: React.FC<ConstraintsPageProps> = ({
  activeConstraintId,
  onSelectProject,
  onNavigateService,
  onNavigateTender,
}) => {
  const [selectedConstraint, setSelectedConstraint] = useState<ConstraintId>(
    activeConstraintId || 'subgrade_watertable'
  );

  const current = CONSTRAINTS.find((c) => c.id === selectedConstraint) || CONSTRAINTS[0];
  const matchingProjects = PROJECTS.filter(
    (p) =>
      p.primaryConstraintId === current.id ||
      p.secondaryConstraintIds.includes(current.id)
  );
  const matchingServices = SERVICES.filter((s) =>
    s.solvedConstraintIds.includes(current.id)
  );

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
            Structural Physics & Site Constraints
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111216] tracking-tight text-balance">
            The 7 Essential Construction Constraints
          </h1>
          <p className="text-base text-[#4B5563] max-w-3xl leading-relaxed text-balance">
            Concrete performance is not an abstract calculation. In Greater Toronto, deep foundations, tight transit easements, and Canadian winter cycles define the boundary conditions of every successful pour.
          </p>
        </motion.div>

        {/* Graphical Constraint Switcher (7 items) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 bg-white p-2 border border-[#E5E7EB] shadow-xs">
          {CONSTRAINTS.map((c) => {
            const isSelected = c.id === selectedConstraint;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedConstraint(c.id)}
                className={`p-3 text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#C25E00] text-[#111216] ring-1 ring-[#C25E00] shadow-xs'
                    : 'bg-neutral-50/70 border-neutral-200/80 text-[#525660] hover:text-[#111216] hover:bg-neutral-100'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-[#C25E00]">
                  {c.code}
                </div>
                <div className="text-xs font-semibold mt-2 line-clamp-2 leading-tight text-[#111216]">
                  {c.title}
                </div>
                <div className="text-[10px] font-mono text-[#6B7280] mt-2 truncate">
                  {c.category.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive on Active Constraint */}
        <div className="bg-white border border-[#E5E7EB] p-6 sm:p-10 space-y-10 animate-fadeIn shadow-xs">
          {/* Top Banner */}
          <div className="border-b border-[#F3F4F6] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#C25E00] text-white font-mono text-xs font-bold">
                  {current.code}
                </span>
                <span className="text-xs font-mono text-[#525660]">
                  {current.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111216] tracking-tight mt-3">
                {current.title}
              </h2>
            </div>
            <div className="text-xs font-mono text-[#525660]">
              Governing Code: <span className="text-[#111216] font-semibold">{current.codeStandard}</span>
            </div>
          </div>

          {/* Description & Technical Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                  Physical & Geotechnical Challenge
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {current.summary}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#111216] font-semibold">
                  Prospect Standard Mitigation Methodology
                </h3>
                <div className="p-4 bg-neutral-50 border-l-2 border-[#C25E00] text-xs text-[#374151] font-mono leading-relaxed">
                  {current.mitigationMethod}
                </div>
              </div>

              {/* Linked Solved Services */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#6B7280]">
                  Deployed Forming Disciplines:
                </div>
                <div className="flex flex-wrap gap-2">
                  {matchingServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => onNavigateService(service.id)}
                      className="px-3 py-1.5 text-xs font-mono bg-neutral-50 border border-[#E5E7EB] hover:border-[#C25E00] text-[#111216] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span className="text-[#C25E00] font-bold">{service.code}</span>
                      <span>{service.title}</span>
                      <ArrowRight className="w-3 h-3 text-[#C25E00]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Parameters Sidebar */}
            <div className="lg:col-span-5 bg-neutral-50 border border-[#E5E7EB] p-6 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
                Engineering Control Limits
              </h3>
              <div className="divide-y divide-[#E5E7EB]">
                {current.technicalParameters.map((param, i) => (
                  <div key={i} className="py-3 flex flex-col justify-between">
                    <span className="text-[11px] font-mono text-[#6B7280] uppercase">
                      {param.label}
                    </span>
                    <span className="text-sm font-semibold text-[#111216] font-mono mt-0.5">
                      {param.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Case Studies Matching this Constraint */}
          <div className="pt-8 border-t border-[#F3F4F6] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#111216] font-semibold">
                Projects Conquering Constraint [{current.code}]
              </h3>
              <span className="text-xs font-mono text-[#525660]">
                {matchingProjects.length} Verified Case Studies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchingProjects.map((p, pIdx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: pIdx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#E5E7EB] p-5 flex flex-col justify-between hover:border-[#CBD5E1] transition-all shadow-xs hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#C25E00] font-bold">{p.sector}</span>
                      <span className="text-[#6B7280]">{p.year}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#111216]">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#4B5563] line-clamp-2">
                      {p.summary}
                    </p>
                    <div className="text-xs text-[#374151] font-mono pt-1">
                      Volume: <span className="text-[#111216] font-semibold">{p.volume}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(p)}
                      className="text-xs font-mono uppercase tracking-wider text-[#111216] hover:text-[#C25E00] inline-flex items-center gap-1.5 font-semibold cursor-pointer"
                    >
                      <span>Open Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C25E00]" />
                    </button>
                    <span className="text-[11px] text-[#6B7280] font-mono">
                      {p.location.split(',')[0]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RFP Call to Action */}
        <div className="p-8 bg-white border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
              Engineering Pre-Consultation
            </div>
            <div className="text-base font-bold text-[#111216] mt-1">
              Facing complex shoring clearances, cold weather schedules, or mass raft thermal concerns?
            </div>
            <div className="text-xs text-[#525660] mt-0.5">
              Engage our structural formwork engineers early in the tender phase to optimize form cycle budgets.
            </div>
          </div>
          <button
            onClick={onNavigateTender}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C25E00] hover:bg-[#A84F00] whitespace-nowrap shrink-0 cursor-pointer shadow-sm hover:shadow-md"
          >
            Submit Project Specifications
          </button>
        </div>
      </div>
    </div>
  );
};
