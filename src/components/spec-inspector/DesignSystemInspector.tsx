import React, { useState } from 'react';
import { X, SlidersHorizontal, Check, Copy, Eye, Layers, Palette, Type, Grid3X3, GitBranch, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DesignSystemInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  isGridOverlayActive: boolean;
  onToggleGridOverlay: () => void;
}

export const DesignSystemInspector: React.FC<DesignSystemInspectorProps> = ({
  isOpen,
  onClose,
  isGridOverlayActive,
  onToggleGridOverlay,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'figma' | 'vercel'>('specs');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inspector-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl h-full bg-white border-l border-[#E5E7EB] text-[#111216] flex flex-col justify-between shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E5E7EB] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-[#C25E00]" />
            <div>
              <h2 id="inspector-title" className="text-sm font-bold uppercase tracking-wider text-[#111216]">
                Design System & Developer Handover Specs
              </h2>
              <span className="text-[11px] font-mono text-[#6B7280]">
                1440px / 1920px Figma Alignment · Vercel Auto-Deploy
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B7280] hover:text-[#111216] hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close Design System Inspector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E5E7EB] bg-white px-6 text-xs font-mono uppercase">
          {[
            { id: 'specs', label: 'Component Specs & Tokens', icon: Layers },
            { id: 'figma', label: '1440 / 1920 Grid & Rationale', icon: Grid3X3 },
            { id: 'vercel', label: 'Vercel & Git Deploy Guide', icon: Rocket },
          ].map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`py-3 px-3.5 border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'border-[#C25E00] text-[#111216] font-semibold'
                    : 'border-transparent text-[#6B7280] hover:text-[#111216]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#C25E00]" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-white">
          {/* TAB 1: Component Specs & Tokens */}
          {activeTab === 'specs' && (
            <div className="space-y-8">
              {/* Live Grid Switcher */}
              <div className="p-4 bg-neutral-50 border border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#111216] uppercase font-mono">
                    Live 12-Column Grid Overlay
                  </div>
                  <div className="text-[11px] text-[#525660] mt-0.5">
                    Toggle red guide columns with 24px gutters across current viewport.
                  </div>
                </div>
                <button
                  onClick={onToggleGridOverlay}
                  className={`px-3 py-1.5 text-xs font-mono uppercase font-semibold transition-colors cursor-pointer ${
                    isGridOverlayActive
                      ? 'bg-[#C25E00] text-white shadow-xs'
                      : 'bg-white text-[#111216] border border-[#D1D5DB] hover:bg-neutral-100'
                  }`}
                >
                  {isGridOverlayActive ? 'Grid Active (ON)' : 'Show Grid (OFF)'}
                </button>
              </div>

              {/* Color System */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C25E00] flex items-center gap-2 font-semibold">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Color Tokens (Restrained Architectural Palette)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-[11px]">
                  {[
                    { name: 'Canvas White', hex: '#FFFFFF', role: 'Dominant 60% Canvas' },
                    { name: 'Surface Low', hex: '#F9FAFB', role: '30% Container Card' },
                    { name: 'Surface Mid', hex: '#F3F4F6', role: 'Inner Spec Modules' },
                    { name: 'Hairline Stroke', hex: '#E5E7EB', role: 'Subtle 1px Borders' },
                    { name: 'Text High', hex: '#111216', role: 'Display Headlines' },
                    { name: 'Text Body', hex: '#4B5563', role: 'Prose & Specifications' },
                    { name: 'Text Muted', hex: '#6B7280', role: 'Captions & Metadata' },
                    { name: 'Accent Copper', hex: '#C25E00', role: '10% Intent / Action' },
                    { name: 'Accent Hover', hex: '#A84F00', role: 'Interactive Hover State' },
                  ].map((color, i) => (
                    <div
                      key={i}
                      onClick={() => copyToClipboard(color.hex, color.hex)}
                      className="p-2.5 bg-neutral-50 border border-[#E5E7EB] cursor-pointer hover:border-[#C25E00] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 border border-black/15 shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="font-bold text-[#111216]">{color.name}</span>
                      </div>
                      <div className="text-[#525660] mt-1">{color.hex}</div>
                      <div className="text-[10px] text-[#6B7280] mt-0.5">{color.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Scale */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C25E00] flex items-center gap-2 font-semibold">
                  <Type className="w-3.5 h-3.5" />
                  <span>Typography Scale (Plus Jakarta Sans + JetBrains Mono)</span>
                </div>
                <div className="divide-y divide-[#E5E7EB] border border-[#E5E7EB] bg-neutral-50 text-xs font-mono">
                  {[
                    { token: 'Hero Display', size: 'clamp(2.25rem, 4vw, 3.75rem)', weight: 'Bold 700', tracking: '-0.02em', font: 'Plus Jakarta Sans' },
                    { token: 'Section H2', size: '36px / 40px', weight: 'Bold 700', tracking: '-0.015em', font: 'Plus Jakarta Sans' },
                    { token: 'Card H3', size: '20px / 26px', weight: 'SemiBold 600', tracking: '-0.01em', font: 'Plus Jakarta Sans' },
                    { token: 'Body Prose', size: '15px / 24px', weight: 'Regular 400', tracking: 'normal', font: 'Plus Jakarta Sans' },
                    { token: 'Mono Spec Label', size: '11px–12px', weight: 'Medium 500', tracking: '+0.05em', font: 'JetBrains Mono' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#111216]">{item.token}</div>
                        <div className="text-[11px] text-[#6B7280]">{item.font} · {item.weight}</div>
                      </div>
                      <div className="text-right text-[#C25E00]">
                        <div>{item.size}</div>
                        <div className="text-[10px] text-[#6B7280]">{item.tracking}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Component Specs & States */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#111216] font-semibold">
                  Interactive Component Specifications
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-3 bg-neutral-50 border border-[#E5E7EB] space-y-1">
                    <span className="text-[#111216] font-bold block">Primary CTA Button</span>
                    <span className="text-[#525660] block">Height: 40px / Padding: py-2.5 px-5 / Font: 12px uppercase tracking-wider 600</span>
                    <span className="text-[#C25E00] block">Default: #C25E00 → Hover: #A84F00 → Active: #8F4300 (150ms ease)</span>
                  </div>
                  <div className="p-3 bg-neutral-50 border border-[#E5E7EB] space-y-1">
                    <span className="text-[#111216] font-bold block">Constraint Graphical Pill / Tab</span>
                    <span className="text-[#525660] block">Interactive segmented button; active state has #C25E00 1px border and ring.</span>
                    <span className="text-[#525660] block">Zero pill enclosures for static metadata; unboxed clean typography only.</span>
                  </div>
                  <div className="p-3 bg-neutral-50 border border-[#E5E7EB] space-y-1">
                    <span className="text-[#111216] font-bold block">Hairline Dividers & Grid Alignment</span>
                    <span className="text-[#525660] block">1px solid #E5E7EB (crisp white architectural baseline, single-elevation depth).</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 1440px / 1920px Grid & Creative Rationale */}
          {activeTab === 'figma' && (
            <div className="space-y-6">
              <div className="p-4 bg-neutral-50 border border-[#E5E7EB] space-y-2">
                <div className="text-xs font-mono uppercase font-bold text-[#C25E00]">
                  Grid Math: 1440px Baseline vs 1920px Ultra-Wide
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-2">
                  <div className="p-3 bg-white border border-[#E5E7EB] shadow-2xs">
                    <div className="text-[#111216] font-bold">1440px Desktop Baseline</div>
                    <div className="text-[#525660] mt-1">Columns: 12</div>
                    <div className="text-[#525660]">Max Container: 1280px (max-w-7xl)</div>
                    <div className="text-[#525660]">Gutters: 24px (gap-6)</div>
                    <div className="text-[#525660]">Outer Margins: 80px (px-8)</div>
                  </div>
                  <div className="p-3 bg-white border border-[#E5E7EB] shadow-2xs">
                    <div className="text-[#111216] font-bold">1920px Display Scale</div>
                    <div className="text-[#525660] mt-1">Columns: 12</div>
                    <div className="text-[#525660]">Max Container: 1536px (2xl:max-w-[1600px])</div>
                    <div className="text-[#525660]">Gutters: 32px (gap-8)</div>
                    <div className="text-[#525660]">Outer Margins: 192px</div>
                  </div>
                </div>
              </div>

              {/* Creative Rationale */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#111216] font-semibold">
                  Creative Recommendations & Architectural Visual Direction
                </div>
                <div className="p-4 bg-neutral-50 border border-[#E5E7EB] space-y-3 text-xs text-[#374151] leading-relaxed">
                  <p>
                    <strong className="text-[#111216]">1. Restrained Architectural Aesthetic:</strong> Rather than generic construction tropes (bright yellow caution stripes, loud clip art), Prospect operates at the engineering caliber of leading architectural consultancies (like Foster + Partners or Arup). Pure white canvas, crisp hairline concrete grey dividers, and a restrained copper-bronze accent create gravitas.
                  </p>
                  <p>
                    <strong className="text-[#111216]">2. Constraint-First Storytelling:</strong> General contractors in Toronto don't just ask for concrete placement; they ask how you handle Lake Ontario's water table, zero-lot subway easements, and -25°C winter cycles. Making the 7 Constraints the central spine of the Home and Work pages demonstrates deep structural mastery.
                  </p>
                  <p>
                    <strong className="text-[#111216]">3. Zero-Pill Discipline & Typographic Rigor:</strong> Metadata is treated with architectural unboxed typography (`·` and `/` separators), preventing "AI badge clutter" and preserving editorial whitespace.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Vercel & GitHub Instant Deploy Guide */}
          {activeTab === 'vercel' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase font-mono">
                  <Check className="w-4 h-4" />
                  <span>100% Ready for Direct Vercel Deployment</span>
                </div>
                <p className="text-xs text-emerald-700">
                  This project compiles cleanly with standard Vite (`npm run build`). No extra server backend or database config needed. It will build and run on Vercel out of the box in under 30 seconds!
                </p>
              </div>

              {/* 3 Simple Steps */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C25E00] font-semibold">
                  How to Push to GitHub & Auto-Deploy to Vercel:
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3 bg-neutral-50 border border-[#E5E7EB]">
                    <div className="text-[#C25E00] font-bold">Step 1: Commit & Push to GitHub</div>
                    <div className="mt-2 bg-white border border-[#E5E7EB] p-2 text-[#111216] flex items-center justify-between">
                      <code>git add . && git commit -m "Deploy Prospect Concrete" && git push</code>
                      <button
                        onClick={() => copyToClipboard('git add . && git commit -m "Deploy Prospect Concrete" && git push', 'step1')}
                        className="text-[#6B7280] hover:text-[#111216] cursor-pointer"
                      >
                        {copiedCode === 'step1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-50 border border-[#E5E7EB]">
                    <div className="text-[#C25E00] font-bold">Step 2: Connect GitHub Repo in Vercel</div>
                    <div className="mt-1 text-[#525660] text-[11px] leading-relaxed">
                      Go to <span className="text-[#111216] font-sans font-semibold">vercel.com/new</span> → Select your GitHub repository → Vercel automatically detects Vite.
                    </div>
                    <div className="mt-2 text-[11px] text-[#374151] bg-white border border-[#E5E7EB] p-2 space-y-1">
                      <div>Framework Preset: <span className="text-emerald-700 font-bold">Vite</span></div>
                      <div>Build Command: <span className="text-emerald-700 font-bold">npm run build</span></div>
                      <div>Output Directory: <span className="text-emerald-700 font-bold">dist</span></div>
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-50 border border-[#E5E7EB]">
                    <div className="text-[#C25E00] font-bold">Step 3: Instant Live Production URL</div>
                    <div className="mt-1 text-[#525660] text-[11px]">
                      Vercel will build and assign your production URL (e.g. <span className="text-[#111216] font-semibold">prospect-concrete.vercel.app</span>) with automatic SSL and global CDN. Every future push to GitHub automatically redeploys!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E5E7EB] bg-white flex items-center justify-between">
          <div className="text-xs font-mono text-[#6B7280]">
            Prospect Concrete Forming · Design System v2.4
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono uppercase bg-neutral-100 hover:bg-neutral-200 text-[#111216] border border-[#D1D5DB] cursor-pointer transition-colors"
          >
            Done
          </button>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
