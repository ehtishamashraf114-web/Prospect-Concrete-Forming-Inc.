import React, { useState } from 'react';
import { Menu, X, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSpecs: () => void;
  isSpecsOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSpecs,
  isSpecsOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Selected Work' },
    { id: 'scope', label: 'Scope of Work' },
    { id: 'constraints', label: 'Technical Constraints' },
    { id: 'tender', label: 'Safety & Tender' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex items-center justify-between gap-4 lg:gap-6 h-20 min-w-0 w-full">
          {/* Left: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer shrink-0 min-w-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C25E00]"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#111216] uppercase whitespace-nowrap block group-hover:text-black transition-colors">
              PROSPECT CONCRETE FORMING
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#6B7280] group-hover:text-[#C25E00] transition-colors block">
              Toronto Civil · Industrial · Architectural
            </span>
          </button>

          {/* Center: Navigation Links (Centered, reduced gap & font size, collapsed below 1024px) */}
          <nav className="hidden lg:flex items-center justify-center gap-3.5 xl:gap-5.5 text-[11px] xl:text-xs uppercase tracking-wider font-medium min-w-0 shrink">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-2 px-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#111216] font-semibold'
                      : 'text-[#5A606D] hover:text-[#111216]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C25E00]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: CTA & Actions (Specs hidden below 1440px, shortened CTA fully visible) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0">
            <button
              onClick={onOpenSpecs}
              title="Toggle Architectural 12-Column Grid & Figma Developer Specs"
              className={`hidden min-[1440px]:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono border transition-all cursor-pointer ${
                isSpecsOpen
                  ? 'bg-amber-50 border-[#C25E00] text-[#C25E00] font-semibold ring-1 ring-[#C25E00]'
                  : 'bg-white border-[#E5E7EB] text-[#4B5563] hover:text-[#111216] hover:border-[#CBD5E1] shadow-2xs'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Specs & Grid</span>
            </button>

            <button
              onClick={() => handleNavClick('tender')}
              className="px-3.5 py-2 sm:px-4.5 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C25E00] hover:bg-[#A84F00] active:bg-[#8F4300] transition-all whitespace-nowrap shrink-0 shadow-xs hover:shadow-sm cursor-pointer"
            >
              Request Tender
            </button>

            {/* Mobile / Tablet Menu Toggle (Visible below 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4B5563] hover:text-[#111216] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer with smooth animation (Below 1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-[#E5E7EB] bg-white px-4 pt-3 pb-5 space-y-2 overflow-hidden shadow-md"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2.5 px-3 text-xs uppercase tracking-widest font-mono transition-colors ${
                  activeTab === link.id
                    ? 'bg-neutral-50 text-[#111216] border-l-2 border-[#C25E00] font-bold'
                    : 'text-[#4B5563] hover:text-[#111216]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  onOpenSpecs();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono text-[#4B5563] bg-neutral-50 border border-[#E5E7EB]"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C25E00]" /> Toggle Specs & 12-Column Grid
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
