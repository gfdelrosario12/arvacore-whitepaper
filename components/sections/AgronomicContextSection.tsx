import React from 'react';
import { INTRODUCTION_TEXT } from '@/lib/whitepaper-data';
import { PaddyCrossSection } from '../exhibits/PaddyCrossSection';
import { FigureFrame } from '../ui/FigureFrame';

export const AgronomicContextSection: React.FC = () => {
  return (
    <section id="act-agronomy" className="py-16 sm:py-24 border-b border-[#1b2e21] bg-[#09100b]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-emerald-400">ACT 01</span>
          <span className="h-3 w-[1px] bg-slate-700" />
          <span className="font-mono text-xs text-slate-400 uppercase">CHAPTER 1: AGRICULTURAL CONTEXT &amp; MONITORING NEED</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
          The Rice Agronomy Challenge &amp; Field Monitoring Problem
        </h2>

        {/* Project Overview Callout (Replaces Abstract) */}
        <div className="mb-12 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-sm">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            {INTRODUCTION_TEXT.heading}
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-sans mb-4">
            {INTRODUCTION_TEXT.problem}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 font-sans border-t border-emerald-900/40 pt-4 mb-4">
            <div>
              <strong className="text-emerald-400 font-mono block mb-1">THE MONITORING NEED:</strong>
              {INTRODUCTION_TEXT.monitoringNeed}
            </div>
            <div>
              <strong className="text-emerald-400 font-mono block mb-1">SYSTEM OBJECTIVE:</strong>
              {INTRODUCTION_TEXT.systemPurpose}
            </div>
          </div>

          {/* Arva Etymology & Subsystem Architecture Family */}
          <div className="border-t border-emerald-900/40 pt-4">
            <div className="text-xs text-slate-300 mb-3">
              <span className="font-mono text-emerald-400 font-semibold mr-1.5">ETYMOLOGY:</span>
              <strong className="text-white">Arva</strong>, derived from the Latin word{' '}
              <em className="text-emerald-300 font-serif not-italic">arvum</em>, meaning &ldquo;fertile,&rdquo; &ldquo;cultivated field,&rdquo; or &ldquo;arable land.&rdquo;
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
                <div>
                  <div className="font-mono font-bold text-emerald-400 text-sm">ArvaCore</div>
                  <div className="text-white font-medium text-[11px] mb-1">Automated Irrigation &amp; Pump Controller</div>
                </div>
                <div className="text-[10px] text-slate-400 leading-normal pt-2 border-t border-emerald-950/60 mt-1">
                  Threshold decision logic, digital pump relay actuation, and in-line fluid flow verification.
                </div>
              </div>
              <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
                <div>
                  <div className="font-mono font-bold text-cyan-400 text-sm">ArvaNode</div>
                  <div className="text-white font-medium text-[11px] mb-1">Distributed Field Monitoring Nodes</div>
                </div>
                <div className="text-[10px] text-slate-400 leading-normal pt-2 border-t border-emerald-950/60 mt-1">
                  Ultrasonic ponded depth sensing inside a stilling well &amp; root-zone (-15 cm) capacitive soil moisture.
                </div>
              </div>
              <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
                <div>
                  <div className="font-mono font-bold text-emerald-300 text-sm">ArvaNet</div>
                  <div className="text-white font-medium text-[11px] mb-1">Wireless Internet Gateway &amp; Wi-Fi Base</div>
                </div>
                <div className="text-[10px] text-slate-400 leading-normal pt-2 border-t border-emerald-950/60 mt-1">
                  On-site radio receiver hub, agricultural Wi-Fi access station, and 4G LTE cellular WAN bridge.
                </div>
              </div>
              <div className="rounded-lg bg-[#07120a]/80 border border-emerald-800/40 p-3 flex flex-col justify-between">
                <div>
                  <div className="font-mono font-bold text-cyan-300 text-sm">ArvaLink</div>
                  <div className="text-white font-medium text-[11px] mb-1">Web Telemetry Dashboard &amp; Mobile App</div>
                </div>
                <div className="text-[10px] text-slate-400 leading-normal pt-2 border-t border-emerald-950/60 mt-1">
                  Real-time paddy hydrological gauges, drying trend curves, irrigation alerts, and pump control.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Scholarly Analysis */}
          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-300">
            <h3 className="text-lg font-serif font-bold text-white border-l-2 border-emerald-500 pl-3">
              The Limits of Manual Field Observation
            </h3>
            <p>
              In traditional Philippine rice farming, maintaining continuous standing water throughout the vegetative phase remains standard practice. However, unmonitored flooding causes excessive water loss through deep percolation and continuous evaporation, placing significant strain on local canals and pumping systems.
            </p>
            <p>
              In communities like Barangay Silang in Lopez, Quezon, farmers manage plots with varying microtopography. Water allocation through shared communal pumps requires coordinated scheduling, but farmers currently lack continuous quantitative feedback regarding perched water depths and root-zone moisture depletion.
            </p>

            <h3 className="text-lg font-serif font-bold text-white border-l-2 border-cyan-500 pl-3 pt-2">
              Sensing Field Hydrology &amp; Subsurface Moisture
            </h3>
            <p>
              Understanding when to irrigate requires tracking two critical physical parameters: the perched water elevation relative to the field mud line, and the volumetric moisture content in the active root horizon (down to <span className="font-mono text-amber-400 font-semibold">-15 cm</span>).
            </p>
            <p>
              By coupling non-contact acoustic distance measurement inside a perforated stilling well with subsurface capacitive moisture probing, ArvaCore provides objective, continuous telemetry—replacing manual field guessing with verifiable hydrological data.
            </p>
          </div>

          {/* Right Column: Agronomic Soil & Water Cross-Section Graphic */}
          <div className="w-full">
            <FigureFrame
              figureNumber="4"
              title="Interactive Rice Paddy Cross-Section &amp; Sensor Horizons"
              caption="Interactive cross-section of a rice paddy transect in Barangay Silang, Lopez, Quezon, depicting the perched water layer (reflood ceiling at +5 cm), the active root-zone soil horizon extending to the -15 cm critical water-level threshold, and the subsurface sensor installation: a perforated stilling well, ultrasonic time-of-flight transducer, and capacitive root-zone moisture probe. Drag the water-depth slider to inspect field hydrology across irrigation states."
            >
              <PaddyCrossSection interactive={true} />
            </FigureFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
