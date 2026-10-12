'use client';

import React, { useState } from 'react';
import { DiagramLightbox } from './DiagramLightbox';

interface FigureFrameProps {
  figureNumber: string | number;
  title: string;
  thesisRef?: string;
  caption: string;
  children: React.ReactNode;
  lightboxContent?: React.ReactNode;
}

export const FigureFrame: React.FC<FigureFrameProps> = ({
  figureNumber,
  title,
  thesisRef,
  caption,
  children,
  lightboxContent,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <figure className="my-10 rounded-lg border border-[#1b2e21] bg-[#0d1610]/80 p-4 sm:p-6 shadow-2xl backdrop-blur-sm technical-corner">
        {/* Top Header metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1b2e21] pb-3 mb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase tracking-wider text-[11px]">
              FIGURE {figureNumber}
            </span>
            <span className="text-slate-200 font-semibold">{title}</span>
          </div>

          <div className="flex items-center gap-2">
            {thesisRef && (
              <span className="text-slate-400 text-[11px] bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800 hidden sm:inline-block">
                {thesisRef}
              </span>
            )}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-700/50 text-emerald-300 text-[11px] font-mono transition-all hover:scale-105 cursor-pointer"
              title="Click to enlarge diagram with pan & zoom"
              aria-label={`Enlarge Figure ${figureNumber}: ${title}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>Enlarge & Zoom</span>
            </button>
          </div>
        </div>

        {/* Main Figure Canvas */}
        <div className="overflow-hidden rounded border border-[#1b2e21]/60 bg-[#080e0a]">
          {children}
        </div>

        {/* Caption Footnote */}
        <figcaption className="mt-3 text-xs leading-relaxed text-slate-300 font-sans border-t border-[#1b2e21]/40 pt-2.5">
          <span className="font-mono text-emerald-400 mr-1.5 font-semibold">Fig {figureNumber}.</span>
          {caption}
        </figcaption>
      </figure>

      {/* Lightbox Overlay */}
      <DiagramLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title={title}
        figureNumber={`FIGURE ${figureNumber}`}
      >
        {lightboxContent || children}
      </DiagramLightbox>
    </>
  );
};
