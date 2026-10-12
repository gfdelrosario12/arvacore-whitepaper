'use client';

import React, { useState } from 'react';
import { ARCHITECTURE_COMPONENTS } from '@/lib/whitepaper-data';

export const ArchitectureDiagramSvg: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('field-nodes');
  const [animateSignals, setAnimateSignals] = useState<boolean>(true);

  const activeComponent = ARCHITECTURE_COMPONENTS.find((c) => c.id === selectedId) || ARCHITECTURE_COMPONENTS[1];

  return (
    <div className="space-y-6">
      {/* Control Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-[#1b2e21] pb-3">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">INSPECT COMPONENT:</span>
          <span className="text-emerald-400 font-bold">{activeComponent.label}</span>
        </div>

        <button
          onClick={() => setAnimateSignals(!animateSignals)}
          className={`px-3 py-1 rounded border text-[11px] transition-colors ${
            animateSignals
              ? 'border-emerald-500/40 bg-emerald-950/60 text-emerald-300'
              : 'border-slate-800 bg-slate-900 text-slate-400'
          }`}
        >
          {animateSignals ? '● Signal Flow Active' : '○ Signal Flow Paused'}
        </button>
      </div>

      {/* Responsive Desktop / Tablet SVG Canvas */}
      <div className="hidden md:block relative overflow-hidden rounded-lg border border-[#1b2e21] bg-[#070e09] p-4">
        <svg
          viewBox="0 0 1200 480"
          className="w-full h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#10b981" />
            </marker>
            <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#0ea5e9" />
            </marker>
            <marker id="arrow-amber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#f59e0b" />
            </marker>
          </defs>

          {/* BACKGROUND DOMAINS */}
          {/* Domain 1: Physical Paddy */}
          <rect x="20" y="100" width="500" height="230" rx="10" fill="#0b1710" stroke="#162a1c" strokeWidth="1" strokeDasharray="4 4" />
          <text x="35" y="125" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold">ZONE A: AGRICULTURAL FIELD (PADDY TRANSECT)</text>

          {/* Domain 2: Cloud & Decision Backend */}
          <rect x="740" y="90" width="260" height="370" rx="10" fill="#08141e" stroke="#132c3f" strokeWidth="1" strokeDasharray="4 4" />
          <text x="755" y="115" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">ZONE B: CLOUD PROCESSING</text>

          {/* Domain 3: Actuation Loop */}
          <rect x="1005" y="90" width="180" height="370" rx="10" fill="#1b140b" stroke="#332414" strokeWidth="1" strokeDasharray="4 4" />
          <text x="1015" y="115" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">ZONE C: IRRIGATION LOOP</text>

          {/* CONNECTING DATA PATHWAYS */}
          {/* Field -> Nodes */}
          <path d="M 240 215 L 280 215" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
          
          {/* Nodes -> Gateway */}
          <path d="M 510 215 L 550 215" stroke="#10b981" strokeWidth="2.5" strokeDasharray={animateSignals ? "6 4" : "none"} className={animateSignals ? "animate-pulse" : ""} markerEnd="url(#arrow-green)" />
          <text x="530" y="205" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace">Wi-Fi</text>

          {/* Gateway -> Server */}
          <path d="M 720 215 L 760 215" stroke="#0ea5e9" strokeWidth="2.5" strokeDasharray={animateSignals ? "6 4" : "none"} markerEnd="url(#arrow-blue)" />
          <text x="740" y="205" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">Internet</text>

          {/* Server -> Dashboard */}
          <path d="M 870 290 L 870 350" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow-blue)" />
          
          {/* Dashboard -> User */}
          <path d="M 980 395 L 1020 395" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Server -> Pump Actuator */}
          <path d="M 980 185 L 1020 185" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
          <text x="1000" y="175" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">Command</text>

          {/* Pump -> Flow Sensor */}
          <path d="M 1095 230 L 1095 240" stroke="#0ea5e9" strokeWidth="3" markerEnd="url(#arrow-blue)" />

          {/* Flow Sensor Feedback -> Server */}
          <path d="M 1020 280 L 980 280" stroke="#10b981" strokeWidth="2" strokeDasharray={animateSignals ? "5 3" : "none"} markerEnd="url(#arrow-green)" />
          <text x="1000" y="272" textAnchor="middle" fill="#34d399" fontSize="8" fontFamily="monospace">Pulse FB</text>

          {/* COMPONENT CARDS IN SVG */}
          {ARCHITECTURE_COMPONENTS.map((comp) => {
            const isSelected = comp.id === selectedId;
            return (
              <g
                key={comp.id}
                onClick={() => setSelectedId(comp.id)}
                className="cursor-pointer transition-transform"
              >
                <rect
                  x={comp.coordinates.x}
                  y={comp.coordinates.y}
                  width={comp.coordinates.width}
                  height={comp.coordinates.height}
                  rx="6"
                  fill={isSelected ? '#122518' : '#0d1810'}
                  stroke={isSelected ? '#10b981' : '#1f3524'}
                  strokeWidth={isSelected ? 2 : 1}
                />
                {/* Category indicator line */}
                <rect
                  x={comp.coordinates.x}
                  y={comp.coordinates.y}
                  width="4"
                  height={comp.coordinates.height}
                  rx="2"
                  fill={
                    comp.category === 'field-sensing'
                      ? '#10b981'
                      : comp.category === 'network'
                      ? '#0ea5e9'
                      : comp.category === 'processing'
                      ? '#38bdf8'
                      : comp.category === 'actuation'
                      ? '#f59e0b'
                      : '#cbd5e1'
                  }
                />
                {/* Title */}
                <text
                  x={comp.coordinates.x + 14}
                  y={comp.coordinates.y + 22}
                  fill={isSelected ? '#ffffff' : '#e2e8f0'}
                  fontSize="11"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                >
                  {comp.label}
                </text>
                {/* Role */}
                <text
                  x={comp.coordinates.x + 14}
                  y={comp.coordinates.y + 38}
                  fill={isSelected ? '#34d399' : '#94a3b8'}
                  fontSize="9"
                  fontFamily="monospace"
                >
                  {comp.technicalRole}
                </text>
                {/* Subcomponents preview */}
                {comp.subcomponents && comp.subcomponents.slice(0, 2).map((sub, idx) => (
                  <text
                    key={idx}
                    x={comp.coordinates.x + 14}
                    y={comp.coordinates.y + 60 + idx * 16}
                    fill="#64748b"
                    fontSize="8.5"
                    fontFamily="sans-serif"
                  >
                    • {sub}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Component Detail Inspection Panel */}
      <div className="rounded-xl border border-emerald-500/30 bg-[#0d1610] p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1b2e21] pb-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
              {activeComponent.category}
            </span>
            <span className="text-white font-semibold text-sm">{activeComponent.label}</span>
          </div>
          <span className="text-slate-400 text-[11px]">{activeComponent.thesisRef}</span>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed font-sans">
          {activeComponent.description}
        </p>

        {activeComponent.subcomponents && (
          <div className="pt-2 border-t border-[#1b2e21]/50">
            <div className="text-xs font-mono uppercase text-slate-400 mb-2">Verified Subsystems &amp; Roles:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              {activeComponent.subcomponents.map((sub, i) => (
                <div key={i} className="flex items-center gap-2 rounded bg-[#070d08] p-2 border border-[#1b2e21]">
                  <span className="text-emerald-400">▹</span>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
