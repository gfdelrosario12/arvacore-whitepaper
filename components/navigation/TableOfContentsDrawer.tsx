'use client';

import React, { useEffect } from 'react';

interface SectionLink {
  id: string;
  act: string;
  title: string;
}

interface TableOfContentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sections: SectionLink[];
}

export const TableOfContentsDrawer: React.FC<TableOfContentsDrawerProps> = ({
  isOpen,
  onClose,
  sections,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-md border-l border-[#1b2e21] bg-[#080e0a] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-between border-b border-[#1b2e21] pb-4 mb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                ArvaCore Research Whitepaper
              </span>
              <h2 className="text-lg font-serif font-bold text-white mt-0.5">
                Table of Contents
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded p-1.5 text-slate-400 hover:text-white hover:bg-[#121f15] border border-transparent hover:border-slate-700 transition-colors font-mono text-sm"
              aria-label="Close Table of Contents"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={onClose}
                className="group flex items-start gap-3 rounded-lg border border-transparent hover:border-[#1b2e21] hover:bg-[#0f1a12] p-3 transition-colors"
              >
                <span className="font-mono text-xs font-bold text-emerald-400 mt-0.5 w-12 shrink-0">
                  {sec.act}
                </span>
                <span className="text-sm text-slate-200 group-hover:text-emerald-300 transition-colors font-medium">
                  {sec.title}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Drawer Footer */}
        <div className="mt-8 border-t border-[#1b2e21] pt-4 text-xs font-mono text-slate-400 space-y-2">
          <div className="flex items-center justify-between">
            <span>DEFENSE DATE:</span>
            <span className="text-slate-200">September 2026</span>
          </div>
          <div className="flex items-center justify-between">
            <span>CAMPUS:</span>
            <span className="text-slate-200">PUP Sta. Mesa, Manila</span>
          </div>
          <div className="flex items-center justify-between">
            <span>FIELD VENUE:</span>
            <span className="text-emerald-400">Barangay Silang, Lopez, Quezon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

