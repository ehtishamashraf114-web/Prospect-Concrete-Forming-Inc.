import React from 'react';
import { Shield, HardHat, FileText, ArrowUp, SlidersHorizontal } from 'lucide-react';
import { GTA_MUNICIPALITIES } from '../../data/content';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenSpecs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-[#E5E7EB] text-[#525660] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#E5E7EB]">
          {/* Brand & Operational Summary (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-[#111216] font-bold text-lg tracking-tight uppercase">
              PROSPECT CONCRETE FORMING Inc.
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed max-w-sm">
              Established Toronto concrete contractor providing engineered formwork systems, heavy rebar placement, and high-tolerance concrete construction across civil, industrial, and architectural sectors.
            </p>
            <div className="pt-2 text-xs font-mono text-[#525660] space-y-1">
              <div>Yard & Logistics: 140 Brockhouse Way, Toronto, ON M8W 2W9</div>
              <div>Dispatch Operations: (416) 745-9200 · tenders@prospectconcrete.ca</div>
            </div>
          </div>

          {/* Core Navigation (Col 6-7) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-[#111216] font-mono font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    scrollToTop();
                  }}
                  className="hover:text-[#111216] text-[#525660] transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('work');
                    scrollToTop();
                  }}
                  className="hover:text-[#111216] text-[#525660] transition-colors text-left cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('scope');
                    scrollToTop();
                  }}
                  className="hover:text-[#111216] text-[#525660] transition-colors text-left cursor-pointer"
                >
                  Scope of Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('constraints');
                    scrollToTop();
                  }}
                  className="hover:text-[#111216] text-[#525660] transition-colors text-left cursor-pointer"
                >
                  Technical Constraints
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('tender');
                    scrollToTop();
                  }}
                  className="hover:text-[#111216] text-[#525660] transition-colors text-left cursor-pointer"
                >
                  Safety & Tender
                </button>
              </li>
            </ul>
          </div>

          {/* Operational Reach / GTA (Col 8-9) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-[#111216] font-mono font-bold">
              Regional Coverage
            </div>
            <ul className="space-y-1.5 text-xs">
              {GTA_MUNICIPALITIES.slice(0, 5).map((m, i) => (
                <li key={i} className="text-[#525660] font-mono text-[11px]">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations & Standards (Col 10-12) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-[#111216] font-mono font-bold">
              Accreditations & Labor
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-[#374151]">
                <Shield className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                <span>IHSA COR™ Certified Contractor</span>
              </div>
              <div className="flex items-start gap-2 text-[#374151]">
                <HardHat className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                <span>Formwork Council of Ontario</span>
              </div>
              <div className="flex items-start gap-2 text-[#374151]">
                <FileText className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                <span>LiUNA Local 183 & Local 506 / Carpenters Local 27</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSpecs}
                className="inline-flex items-center gap-1.5 text-xs text-[#C25E00] hover:text-[#A84F00] font-mono font-semibold cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Open Design System & 12-Col Grid Spec</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} PROSPECT CONCRETE FORMING Inc. All rights reserved. Registered in Ontario, Canada.
          </div>
          <div className="flex items-center gap-6">
            <span>CSA A23.1 / ACI 347 Verified</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#6B7280] hover:text-[#111216] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
