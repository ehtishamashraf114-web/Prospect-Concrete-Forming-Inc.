import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/home/HomePage';
import { SelectedWorkPage } from './components/work/SelectedWorkPage';
import { ScopeOfWorkPage } from './components/scope/ScopeOfWorkPage';
import { ConstraintsPage } from './components/constraints/ConstraintsPage';
import { TenderContactPage } from './components/about-tender/TenderContactPage';
import { ProjectModal } from './components/common/ProjectModal';
import { DesignSystemInspector } from './components/spec-inspector/DesignSystemInspector';
import { GridOverlay } from './components/common/GridOverlay';
import { ConstraintId, Project, ServiceId } from './types';
import { PROJECTS, CONSTRAINTS } from './data/content';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedConstraintId, setSelectedConstraintId] = useState<ConstraintId | 'all'>('all');
  const [activeConstraintDetailId, setActiveConstraintDetailId] = useState<ConstraintId>('subgrade_watertable');
  const [isSpecsOpen, setIsSpecsOpen] = useState<boolean>(false);
  const [isGridOverlayActive, setIsGridOverlayActive] = useState<boolean>(false);

  // Scroll to top when switching main pages
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Deep-link from Home or Scope directly into Selected Work with a pre-set Constraint filter
  const handleFilterConstraintFromAnywhere = (constraintId: ConstraintId) => {
    setSelectedConstraintId(constraintId);
    setActiveConstraintDetailId(constraintId);
    setActiveTab('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Jump from any page directly to the detailed Constraints page
  const handleNavigateConstraintPage = (constraintId: ConstraintId) => {
    setActiveConstraintDetailId(constraintId);
    setSelectedConstraintId(constraintId);
    setActiveTab('constraints');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Jump from project modal or constraints page into the Scope of Work page
  const handleNavigateServicePage = (serviceId: ServiceId) => {
    setActiveTab('scope');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111216] flex flex-col font-sans selection:bg-[#C25E00] selection:text-white relative">
      {/* 12-Column Grid Overlay (Toggleable for 1440px / 1920px precision inspection) */}
      <GridOverlay
        isActive={isGridOverlayActive}
        onClose={() => setIsGridOverlayActive(false)}
      />

      {/* Top Navigation Bar (Strict 3-zone contract) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenSpecs={() => setIsSpecsOpen(true)}
        isSpecsOpen={isSpecsOpen}
      />

      {/* Main Page Views with Smooth Architectural Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'home' && (
              <HomePage
                onNavigateTab={handleTabChange}
                onSelectProject={(project) => setSelectedProject(project)}
                onFilterConstraint={handleFilterConstraintFromAnywhere}
              />
            )}

            {activeTab === 'work' && (
              <SelectedWorkPage
                selectedConstraintId={selectedConstraintId}
                onSelectConstraintId={(id) => setSelectedConstraintId(id)}
                onSelectProject={(project) => setSelectedProject(project)}
                onNavigateConstraintDetail={handleNavigateConstraintPage}
                onNavigateServiceDetail={handleNavigateServicePage}
              />
            )}

            {activeTab === 'scope' && (
              <ScopeOfWorkPage
                onNavigateConstraint={handleNavigateConstraintPage}
                onNavigateTender={() => handleTabChange('tender')}
                onFilterWorkByConstraint={handleFilterConstraintFromAnywhere}
              />
            )}

            {activeTab === 'constraints' && (
              <ConstraintsPage
                activeConstraintId={activeConstraintDetailId}
                onSelectProject={(project) => setSelectedProject(project)}
                onNavigateService={handleNavigateServicePage}
                onNavigateTender={() => handleTabChange('tender')}
              />
            )}

            {activeTab === 'tender' && <TenderContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Restrained Editorial Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenSpecs={() => setIsSpecsOpen(true)}
      />

      {/* Project Engineering Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateConstraint={handleNavigateConstraintPage}
        onNavigateService={handleNavigateServicePage}
      />

      {/* Design System & Vercel Developer Handover Inspector Drawer */}
      <DesignSystemInspector
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        isGridOverlayActive={isGridOverlayActive}
        onToggleGridOverlay={() => setIsGridOverlayActive(!isGridOverlayActive)}
      />
    </div>
  );
}
