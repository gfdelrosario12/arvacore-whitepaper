'use client';

import React from 'react';
import { THESIS_METADATA } from '@/lib/whitepaper-data';

export const AcademicHero: React.FC = () => {
  return (
    <section
      id="act-prologue"
      className="relative overflow-hidden border-b border-[#1b2e21] bg-radial-gradient-vignette pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Background Animated Paddy Atmosphere Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle contour lines representing terrace terrain */}
          <path d="M 0 350 Q 360 300 720 370 T 1440 320" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 0 420 Q 400 380 800 440 T 1440 390" stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M 0 500 Q 300 460 700 520 T 1440 470" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.2" />

          {/* Abstract rice plant silhouettes on the bottom horizon */}
          <g stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
            <path d="M 120 600 Q 115 540 100 510" />
            <path d="M 120 600 Q 120 530 125 500" />
            <path d="M 120 600 Q 130 545 145 520" />

            <path d="M 380 600 Q 375 530 360 495" />
            <path d="M 380 600 Q 380 520 385 490" />
            <path d="M 380 600 Q 390 535 410 510" />

            <path d="M 920 600 Q 915 540 900 510" />
            <path d="M 920 600 Q 920 530 925 500" />
            <path d="M 920 600 Q 930 545 945 520" />

            <path d="M 1240 600 Q 1235 535 1220 505" />
            <path d="M 1240 600 Q 1240 525 1245 495" />
            <path d="M 1240 600 Q 1250 540 1265 515" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top Provenance Badges with clean technical styling */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs font-mono">
          <span className="rounded border border-emerald-500/30 bg-emerald-950/60 px-2.5 py-1 text-emerald-300 font-semibold tracking-wider flex items-center gap-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            RESEARCH WHITEPAPER
          </span>
          <span className="rounded border border-[#1b2e21] bg-[#0c150e] px-2.5 py-1 text-slate-300">
            {THESIS_METADATA.institution}
          </span>
          <span className="rounded border border-[#1b2e21] bg-[#0c150e] px-2.5 py-1 text-cyan-400 font-mono">
            {THESIS_METADATA.location.coordinates}
          </span>
        </div>

        {/* Full Exact Thesis Title */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl font-serif leading-[1.18] mb-6">
          ARVACORE: An IoT-Based Irrigation Monitoring and Automated Water Management System for Rice Cultivation
        </h1>



        {/* Latin Etymology & System Architecture Tiers */}
        <div className="mb-8 rounded-xl border border-emerald-500/25 bg-emerald-950/25 p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
            <span className="font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              ETYMOLOGY:
            </span>
            <span className="text-slate-200">
              <strong className="text-white font-semibold">Arva</strong>, derived from the Latin word{' '}
              <em className="text-emerald-300 font-serif not-italic">arvum</em>, meaning &ldquo;fertile,&rdquo; &ldquo;cultivated field,&rdquo; or &ldquo;arable land.&rdquo;
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-emerald-900/40 text-xs">
            <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
              <div>
                <div className="font-mono font-bold text-emerald-400 text-sm">ArvaCore</div>
                <div className="text-[12px] text-white font-medium mt-0.5">Automated Irrigation &amp; Pump Controller</div>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-emerald-950/60 mt-2">
                Closed-loop decision engine, relay actuation &amp; in-line flow verification
              </div>
            </div>

            <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
              <div>
                <div className="font-mono font-bold text-cyan-400 text-sm">ArvaNode</div>
                <div className="text-[12px] text-white font-medium mt-0.5">Distributed Field Monitoring Nodes</div>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-emerald-950/60 mt-2">
                Ultrasonic ponded depth sensing, perforated well &amp; root-zone soil moisture
              </div>
            </div>

            <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
              <div>
                <div className="font-mono font-bold text-emerald-300 text-sm">ArvaNet</div>
                <div className="text-[12px] text-white font-medium mt-0.5">Internet Gateway &amp; Field Wi-Fi Base</div>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-emerald-950/60 mt-2">
                Long-range wireless packet collector &amp; 4G LTE Cat-1 cloud uplink station
              </div>
            </div>

            <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
              <div>
                <div className="font-mono font-bold text-cyan-300 text-sm">ArvaLink</div>
                <div className="text-[12px] text-white font-medium mt-0.5">Farmer Dashboard &amp; Mobile App</div>
              </div>
              <div className="text-[10px] text-slate-400 pt-2 border-t border-emerald-950/60 mt-2">
                Real-time hydrological depth gauges, drying curves &amp; remote pump oversight
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <a
            href="#funding-breakdown"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs sm:text-sm font-semibold px-5 py-2.5 transition-colors shadow-lg shadow-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <span>View Funding Breakdown</span>
            <span>↓</span>
          </a>
          <a
            href="#support"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1b2e21] bg-[#080d09] hover:bg-[#121f15] text-slate-300 hover:text-white font-mono text-xs sm:text-sm px-4 py-2.5 transition-colors"
          >
            <span>Support the Project</span>
          </a>
        </div>
        {/* Research Team Grid with Jenice Nicole C. Ramirez Prominently Featured */}
        <div className="mb-10 rounded-xl border border-[#1b2e21] bg-[#0c150e]/95 p-5 sm:p-6 backdrop-blur-md shadow-xl technical-corner">
          <div className="flex items-center justify-between border-b border-[#1b2e21] pb-2.5 mb-4 text-xs font-mono">
            <span className="uppercase tracking-wider text-slate-400">
              RESEARCH INVESTIGATORS &amp; PROJECT TEAM
            </span>
            <span className="text-emerald-400 font-bold">PUP STA. MESA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {THESIS_METADATA.authors.map((author) => (
              <div
                key={author.name}
                className={`space-y-1.5 p-4 rounded-lg border transition-all ${
                  author.lead
                    ? 'bg-emerald-950/30 border-emerald-500/40 ring-1 ring-emerald-500/20'
                    : 'bg-[#070e09]/80 border-[#16271c]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-sm text-slate-100">{author.name}</div>
                  {author.lead && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      LEAD
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-emerald-400 font-medium">{author.role}</div>
                <div className="text-[11px] text-slate-400 leading-normal font-sans pt-1">
                  {author.contribution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Ambient Telemetry Ticker */}
        <div className="rounded-lg border border-[#1b2e21] bg-[#080e0a]/90 p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">STUDY VENUE:</span>
            <span className="text-emerald-400 font-semibold">
              {THESIS_METADATA.location.barangay}, {THESIS_METADATA.location.municipality}, {THESIS_METADATA.location.province}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>SYSTEM FOCUS: <strong className="text-cyan-300 font-semibold">Smart Irrigation &amp; Water Management</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
