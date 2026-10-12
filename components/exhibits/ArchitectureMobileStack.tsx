'use client';

import React, { useState } from 'react';
import { ARCHITECTURE_COMPONENTS } from '@/lib/whitepaper-data';

export const ArchitectureMobileStack: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('field-nodes');

  return (
    <div className="md:hidden space-y-3">
      <div className="text-xs font-mono text-emerald-400 mb-2">
        VERTICAL ARCHITECTURE PIPELINE (Tap to Inspect):
      </div>

      {ARCHITECTURE_COMPONENTS.map((comp, idx) => {
        const isExpanded = expandedId === comp.id;
        return (
          <div key={comp.id} className="relative">
            {/* Step Card */}
            <div
              onClick={() => setExpandedId(isExpanded ? null : comp.id)}
              className={`rounded-lg border p-4 transition-colors cursor-pointer ${
                isExpanded
                  ? 'border-emerald-500/50 bg-[#122216]'
                  : 'border-[#1b2e21] bg-[#0c150e]'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">
                    STAGE 0{idx + 1} • {comp.category}
                  </div>
                  <h4 className="font-semibold text-sm text-white mt-0.5">{comp.label}</h4>
                  <div className="text-xs font-mono text-slate-400">{comp.technicalRole}</div>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  {isExpanded ? '▲' : '▼'}
                </span>
              </div>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-[#1b2e21] text-xs text-slate-300 space-y-2">
                  <p className="font-sans leading-relaxed">{comp.description}</p>
                  {comp.subcomponents && (
                    <div className="space-y-1 font-mono text-[11px] text-slate-400 pt-1">
                      {comp.subcomponents.map((s, i) => (
                        <div key={i}>• {s}</div>
                      ))}
                    </div>
                  )}
                  <div className="text-[10px] font-mono text-emerald-400/80">Ref: {comp.thesisRef}</div>
                </div>
              )}
            </div>

            {/* Downward connecting line */}
            {idx < ARCHITECTURE_COMPONENTS.length - 1 && (
              <div className="flex justify-center my-1">
                <div className="h-4 w-[1px] bg-emerald-500/40" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

