import React from 'react';

interface GridOverlayProps {
  isActive: boolean;
  onClose: () => void;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({ isActive, onClose }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none select-none">
      <div className="max-w-7xl 2xl:max-w-[1600px] h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full bg-red-500/5 border-x border-red-500/20 relative flex flex-col justify-between p-1"
            >
              <span className="text-[10px] font-mono text-red-400 font-bold opacity-80">
                Col {i + 1}
              </span>
              <span className="text-[9px] font-mono text-red-400 opacity-60">
                12-Col Guide
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Floating indicator to close or notify */}
      <div className="pointer-events-auto fixed bottom-6 left-6 z-40 bg-[#161820] border border-[#C25E00] px-3.5 py-2 text-xs font-mono text-white shadow-xl flex items-center gap-3">
        <span className="w-2 h-2 bg-[#C25E00] animate-pulse" />
        <span>12-Column Architectural Grid Active (1440px/1920px)</span>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white underline ml-2 cursor-pointer"
        >
          Hide Grid
        </button>
      </div>
    </div>
  );
};
