import React from 'react';
import { Project, ConstraintId, ServiceId } from '../../types';
import { CONSTRAINTS, SERVICES } from '../../data/content';
import { X, ArrowRight, CheckCircle2, Ruler, ShieldCheck, MapPin, Building2, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateConstraint?: (constraintId: ConstraintId) => void;
  onNavigateService?: (serviceId: ServiceId) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigateConstraint,
  onNavigateService,
}) => {
  if (!project) return null;

  const primaryConstraint = CONSTRAINTS.find((c) => c.id === project.primaryConstraintId);
  const relatedServices = SERVICES.filter((s) => project.serviceIds.includes(s.id));

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-white border border-[#E5E7EB] text-[#111216] shadow-2xl overflow-hidden my-auto rounded-none"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#C25E00] font-mono font-bold">
              Technical Dossier / {project.sector}
            </span>
            <span className="text-[#D1D5DB]">|</span>
            <span className="text-xs text-[#6B7280] font-mono">{project.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B7280] hover:text-[#111216] transition-colors hover:bg-neutral-100 cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[82vh] overflow-y-auto">
          {/* Hero Visual Banner */}
          <div className="relative aspect-21/9 w-full bg-[#E5E7EB] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-white/90 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FBBF24]" /> {project.location}
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-white/70" /> Client: {project.client}
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-white/70" /> {project.year}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8 bg-white">
            {/* Engineering Headline */}
            <div className="border-l-2 border-[#C25E00] pl-4 py-1">
              <p className="text-lg text-[#111216] font-semibold italic">
                "{project.headline}"
              </p>
              <p className="text-sm text-[#4B5563] mt-2">
                {project.summary}
              </p>
            </div>

            {/* Key Specifications Grid */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#6B7280] font-mono mb-3 font-semibold">
                Structural & Pour Specifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.keySpecs.map((spec, i) => (
                  <div key={i} className="p-3 bg-neutral-50 border border-[#E5E7EB]">
                    <div className="text-[11px] text-[#6B7280] font-mono">{spec.label}</div>
                    <div className="text-sm font-semibold text-[#111216] mt-1 font-mono">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-neutral-50 border border-[#E5E7EB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-[#C25E00]" />
                  <h4 className="text-xs uppercase tracking-widest text-[#111216] font-mono font-bold">
                    The Construction Constraint
                  </h4>
                </div>
                <p className="text-sm text-[#374151] leading-relaxed">
                  {project.challenge}
                </p>
                {primaryConstraint && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <div className="text-[11px] text-[#6B7280] font-mono">Governing Code:</div>
                    <div className="text-xs text-[#111216] mt-0.5 font-medium">{primaryConstraint.codeStandard}</div>
                    {onNavigateConstraint && (
                      <button
                        onClick={() => {
                          onClose();
                          onNavigateConstraint(primaryConstraint.id);
                        }}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#C25E00] hover:text-[#A84F00] font-semibold cursor-pointer"
                      >
                        Inspect Constraint [{primaryConstraint.code}] <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="p-5 bg-neutral-50 border border-[#E5E7EB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-emerald-600" />
                  <h4 className="text-xs uppercase tracking-widest text-[#111216] font-mono font-bold">
                    Prospect Engineering Solution
                  </h4>
                </div>
                <p className="text-sm text-[#374151] leading-relaxed">
                  {project.engineeringSolution}
                </p>
                <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-xs text-[#6B7280] font-mono">Structural Engineer:</span>
                  <span className="text-xs text-[#111216] font-semibold">{project.structuralEngineer}</span>
                </div>
              </div>
            </div>

            {/* Applicable Services & Scope */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#6B7280] font-mono mb-3 font-semibold">
                Deployed Services & Forming Disciplines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 bg-white border border-[#E5E7EB] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-mono text-[#C25E00] font-bold">{service.code}</div>
                      <div className="text-sm font-semibold text-[#111216] mt-1">{service.title}</div>
                      <div className="text-xs text-[#525660] mt-1 line-clamp-2">{service.kicker}</div>
                    </div>
                    {onNavigateService && (
                      <button
                        onClick={() => {
                          onClose();
                          onNavigateService(service.id);
                        }}
                        className="mt-3 inline-flex items-center gap-1 text-xs text-[#C25E00] hover:text-[#A84F00] font-semibold cursor-pointer"
                      >
                        View Discipline Specs <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E5E7EB] bg-white flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#6B7280] font-mono">
            Prospect Concrete Forming Inc. · Toronto Operational Records
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#111216] bg-neutral-100 hover:bg-neutral-200 border border-[#D1D5DB] transition-colors cursor-pointer shadow-xs"
          >
            Close Dossier
          </button>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
