'use client';

import React, { useEffect, useState } from 'react';
import { TableOfContentsDrawer } from './TableOfContentsDrawer';

interface SectionLink {
  id: string;
  act: string;
  title: string;
}

const SECTIONS: SectionLink[] = [
  { id: 'act-prologue', act: 'ACT 0', title: 'Prologue & Metadata' },
  { id: 'act-agronomy', act: 'ACT 1', title: 'Agronomic Context' },
  { id: 'act-hardware', act: 'ACT 2', title: 'Physical Field Nodes' },
  { id: 'act-architecture', act: 'ACT 3', title: 'System Architecture (Fig 3)' },
  { id: 'act-dynamics', act: 'ACT 4', title: 'Decision Logic & Simulator' },
  { id: 'act-evaluation', act: 'ACT 5', title: 'Evaluation Approach' },
  { id: 'act-benefits', act: 'ACT 6', title: 'Benefits & Project Value' },
  { id: 'act-funding', act: 'ACT 7', title: 'Deployment Fundraising' },
];

export const ReadingHeader: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('ACT 0: Prologue');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      const scrollPos = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`${SECTIONS[i].act}: ${SECTIONS[i].title}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#1b2e21] bg-[#080e0a]/90 backdrop-blur-md">
        <div
          className="h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-400"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="7" fill="#0c1810" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.4" />
                <path d="M4 25 C9 23, 13 27, 18 25 C23 23, 27 26, 28 25" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                <line x1="16" y1="23" x2="16" y2="10" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 18 C11 17, 8 13, 9 8 C12 8, 15 11, 16 15" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M16 15 C20 14, 23 10, 23 6 C19 6, 17 9, 16 12" fill="#34d399" fillOpacity="0.3" stroke="#34d399" strokeWidth="1.4" strokeLinejoin="round" />
                <circle cx="16" cy="7" r="2.2" fill="#34d399" />
                <circle cx="16" cy="7" r="4.2" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="1.5 1" opacity="0.85" />
              </svg>
              <span className="font-mono text-xs font-bold tracking-wider text-emerald-400">
                ARVACORE
              </span>
            </div>
            <span className="hidden sm:inline-block h-3.5 w-[1px] bg-slate-700" />
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400 truncate max-w-xs md:max-w-md">
              Agricultural Monitoring &amp; Water Management
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase text-slate-400">Reading:</span>
            <span className="rounded bg-[#121f15] border border-emerald-500/20 px-2.5 py-0.5 text-xs font-mono text-emerald-300">
              {activeSection}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/50 px-3 py-1 text-xs font-mono text-emerald-300 hover:text-emerald-200 transition-colors"
              aria-label="Open Table of Contents"
            >
              <span>INDEX</span>
              <span className="text-[10px]">☰</span>
            </button>
          </div>
        </div>
      </header>

      <TableOfContentsDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sections={SECTIONS}
      />
    </>
  );
};
