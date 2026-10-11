import React, { useState } from 'react';
import { CONSTRAINTS, PROJECTS } from '../../data/content';
import { ConstraintId, Project, ServiceId } from '../../types';
import { ArrowUpRight, Filter, Layers, CheckCircle2, ChevronRight, Sliders, MapPin, Building2, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SelectedWorkPageProps {
  selectedConstraintId: ConstraintId | 'all';
  onSelectConstraintId: (id: ConstraintId | 'all') => void;
  onSelectProject: (project: Project) => void;
  onNavigateConstraintDetail: (id: ConstraintId) => void;
  onNavigateServiceDetail: (serviceId: ServiceId) => void;
}

export const SelectedWorkPage: React.FC<SelectedWorkPageProps> = ({
  selectedConstraintId,
  onSelectConstraintId,
  onSelectProject,
  onNavigateConstraintDetail,
  onNavigateServiceDetail,
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const sectors = [
    { id: 'all', label: 'All Sectors' },
    { id: 'Civil Infrastructure', label: 'Civil Infrastructure' },
    { id: 'Architectural Commercial', label: 'Architectural Commercial' },
    { id: 'Industrial & Transit', label: 'Industrial & Transit' },
    { id: 'Institutional', label: 'Institutional' },
  ];

  // Filtering projects based on constraint and sector
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesConstraint =
      selectedConstraintId === 'all'
        ? true
        : project.primaryConstraintId === selectedConstraintId ||
          project.secondaryConstraintIds.includes(selectedConstraintId);

    const matchesSector =
      selectedSector === 'all' ? true : project.sector === selectedSector;

    return matchesConstraint && matchesSector;
  });

  const activeConstraint =
    selectedConstraintId === 'all'
      ? null
      : CONSTRAINTS.find((c) => c.id === selectedConstraintId);

  return (
    <div className="w-full bg-white text-[#111216] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ======================================================== */}
        {/* PAGE HEADER: Editorial restraint & context               */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#E5E7EB] pb-10 space-y-4"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
            Portfolio & Case Archives
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111216] tracking-tight text-balance">
            Selected Work — Concrete Engineering Matrix
          </h1>
          <p className="text-base text-[#4B5563] max-w-3xl leading-relaxed text-balance">
            Switch between the 7 essential construction constraints governing Toronto’s civil, industrial, and architectural infrastructure to inspect concrete mix formulations, shoring methodologies, and structural yields.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* CLIENT REQUIREMENT 2: GRAPHICAL CONSTRAINT NAVIGATOR      */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6B7280]">
              Filter by Construction Constraint (7 Core Challenges):
            </span>
            <span className="text-xs font-mono text-[#C25E00] font-semibold">
              {selectedConstraintId === 'all' ? 'Showing All Constraints' : activeConstraint?.code}
            </span>
          </div>

          {/* Graphical Constraint Navigation Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 bg-white p-2 border border-[#E5E7EB] shadow-xs">
            {/* "All" Option */}
            <button
              onClick={() => onSelectConstraintId('all')}
              className={`p-3 text-left transition-all border flex flex-col justify-between cursor-pointer ${
                selectedConstraintId === 'all'
                  ? 'bg-white border-[#C25E00] text-[#111216] shadow-xs ring-1 ring-[#C25E00]'
                  : 'bg-neutral-50/70 border-neutral-200/80 text-[#525660] hover:text-[#111216] hover:bg-neutral-100'
              }`}
            >
              <div className="text-[10px] font-mono uppercase font-bold text-[#C25E00]">
                ALL
              </div>
              <div className="text-xs font-semibold mt-2 leading-tight text-[#111216]">
                All Projects
              </div>
              <div className="text-[10px] font-mono text-[#6B7280] mt-2">
                {PROJECTS.length} Works
              </div>
            </button>

            {/* 7 Essential Construction Constraints */}
            {CONSTRAINTS.map((c) => {
              const isSelected = selectedConstraintId === c.id;
              const count = PROJECTS.filter(
                (p) => p.primaryConstraintId === c.id || p.secondaryConstraintIds.includes(c.id)
              ).length;

              return (
                <button
                  key={c.id}
                  onClick={() => onSelectConstraintId(c.id)}
                  className={`p-3 text-left transition-all border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#C25E00] text-[#111216] shadow-xs ring-1 ring-[#C25E00]'
                      : 'bg-neutral-50/70 border-neutral-200/80 text-[#525660] hover:text-[#111216] hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#C25E00]">
                      {c.code}
                    </span>
                    <span className="text-[10px] font-mono text-[#6B7280]">
                      {count}
                    </span>
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

          {/* ACTIVE CONSTRAINT INSPECTION BANNER (When a constraint is active) */}
          <AnimatePresence mode="wait">
            {activeConstraint && (
              <motion.div
                key={activeConstraint.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-white border border-[#E5E7EB] space-y-4 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F3F4F6] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#C25E00] text-white">
                      {activeConstraint.code}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-[#111216]">
                        {activeConstraint.title}
                      </h2>
                      <span className="text-xs text-[#525660] font-mono">
                        Category: {activeConstraint.category} · Governing Standard: {activeConstraint.codeStandard}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigateConstraintDetail(activeConstraint.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#C25E00] hover:text-[#A84F00] font-mono uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <span>Constraint Engineering Deep-Dive</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Technical Parameters Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeConstraint.technicalParameters.map((param, i) => (
                    <div key={i} className="p-2.5 bg-neutral-50 border border-[#E5E7EB]">
                      <div className="text-[10px] font-mono text-[#6B7280] uppercase">
                        {param.label}
                      </div>
                      <div className="text-xs font-semibold text-[#111216] mt-0.5 font-mono">
                        {param.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-[#374151] bg-neutral-50/80 p-3 border-l-2 border-[#C25E00]">
                  <span className="font-semibold text-[#111216]">Methodology: </span>
                  {activeConstraint.mitigationMethod}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sector Secondary Filter Strip (Single-line controls) */}
          <div className="flex items-center gap-2 pt-2 overflow-x-auto pb-1">
            <span className="text-xs font-mono text-[#6B7280] mr-2 whitespace-nowrap">
              Sector:
            </span>
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSector === s.id
                    ? 'bg-[#111216] text-white border border-[#111216]'
                    : 'bg-white text-[#525660] hover:text-[#111216] border border-[#E5E7EB] hover:border-[#CBD5E1]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PROJECTS SHOWCASE GRID: Coherent visual structure        */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#525660]">
            <span>
              Showing {filteredProjects.length} of {PROJECTS.length} Engineering Cases
            </span>
            {(selectedConstraintId !== 'all' || selectedSector !== 'all') && (
              <button
                onClick={() => {
                  onSelectConstraintId('all');
                  setSelectedSector('all');
                }}
                className="text-[#C25E00] hover:underline cursor-pointer font-semibold"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center bg-white border border-[#E5E7EB] space-y-3">
              <div className="text-base text-[#111216] font-medium">
                No projects match the selected constraint and sector combination.
              </div>
              <p className="text-xs text-[#525660]">
                Try selecting "All Sectors" or switching to another constraint category.
              </p>
              <button
                onClick={() => {
                  onSelectConstraintId('all');
                  setSelectedSector('all');
                }}
                className="mt-2 px-4 py-2 text-xs font-mono uppercase text-white bg-[#C25E00]"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => {
                  const primaryC = CONSTRAINTS.find((c) => c.id === project.primaryConstraintId);

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4 }}
                      key={project.id}
                      className="bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] transition-colors flex flex-col justify-between group overflow-hidden shadow-xs hover:shadow-md"
                    >
                      {/* Visual Asset (Consistent 16:9 crop) */}
                      <div className="relative aspect-16/10 w-full bg-[#E5E7EB] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        {/* Constraint Tag */}
                        {primaryC && (
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 text-[10px] font-mono font-bold bg-black/80 text-white border border-white/20">
                              {primaryC.code} · {primaryC.title.split('&')[0]}
                            </span>
                          </div>
                        )}

                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-0.5 text-[10px] font-mono text-white/90 bg-black/75">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Metadata & Content */}
                      <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs text-[#525660] font-mono">
                            <span>{project.sector}</span>
                            <span>·</span>
                            <span className="truncate">{project.location.split(',')[0]}</span>
                          </div>

                          <h3 className="text-lg font-bold text-[#111216] tracking-tight leading-snug group-hover:text-black">
                            {project.title}
                          </h3>

                          <p className="text-xs text-[#4B5563] line-clamp-3 leading-relaxed">
                            {project.summary}
                          </p>

                          {/* Specs Mini Strip */}
                          <div className="pt-2 border-t border-[#F3F4F6] grid grid-cols-2 gap-2 text-xs font-mono">
                            <div className="bg-neutral-50 p-2 border border-[#E5E7EB]">
                              <span className="text-[10px] text-[#6B7280] block uppercase">Volume</span>
                              <span className="text-[#111216] font-semibold truncate block">{project.volume.split(' ')[0]} m³</span>
                            </div>
                            <div className="bg-neutral-50 p-2 border border-[#E5E7EB]">
                              <span className="text-[10px] text-[#6B7280] block uppercase">Client</span>
                              <span className="text-[#111216] font-semibold truncate block">{project.client.split('/')[0]}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Action Links */}
                        <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                          <button
                            onClick={() => onSelectProject(project)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#111216] hover:text-[#C25E00] font-mono transition-colors cursor-pointer"
                          >
                            <span>Inspect Dossier</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#C25E00]" />
                          </button>

                          {primaryC && (
                            <button
                              onClick={() => onNavigateConstraintDetail(primaryC.id)}
                              className="text-[11px] font-mono text-[#525660] hover:text-[#111216] transition-colors cursor-pointer"
                            >
                              Constraint Specs →
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Bottom Cross-Navigation Banner: Scope & RFP */}
        <div className="p-8 bg-white border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-semibold">
              Tender Estimating & Drawing Review
            </div>
            <div className="text-lg font-bold text-[#111216]">
              Have a structural drawing package with similar constraints?
            </div>
            <p className="text-xs text-[#525660]">
              Submit your architectural or structural tender drawings for a comprehensive formwork cycle breakdown and preliminary budget.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectConstraintId('all')}
              className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#111216] bg-[#F8F9FA] hover:bg-[#EEF0F3] border border-[#D1D5DB] cursor-pointer"
            >
              Reset Filters
            </button>
            <button
              onClick={() => {
                const tenderTab = document.getElementById('tender-btn');
                if (tenderTab) tenderTab.click();
              }}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C25E00] hover:bg-[#A84F00] cursor-pointer"
            >
              Request Tender Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
