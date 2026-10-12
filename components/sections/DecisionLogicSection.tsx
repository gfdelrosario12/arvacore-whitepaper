'use client';

import React, { useState } from 'react';
import { ProcessFlowchartSvg } from '../exhibits/ProcessFlowchartSvg';
import { AwdSimulationWidget } from '../exhibits/AwdSimulationWidget';
import { FigureFrame } from '../ui/FigureFrame';

export const DecisionLogicSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'sensing' | 'monitoring' | 'trigger' | 'pumping' | 'reflooded' | 'standby'>('monitoring');

  return (
    <section id="act-dynamics" className="py-16 sm:py-24 border-b border-[#1b2e21] bg-[#080e0a]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-emerald-400">ACT 04</span>
          <span className="h-3 w-[1px] bg-slate-700" />
          <span className="font-mono text-xs text-slate-400 uppercase">CHAPTER 3: DECISION DYNAMICS</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
          Closed-Loop Irrigation Logic &amp; Water-Level Threshold Simulation
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-8 max-w-3xl">
          The core operational intelligence of ArvaCore is governed by a finite closed loop. In accordance with Thesis Figure 2, sensor readings drive real-time comparison against water-level thresholds. When water recedes below the critical safe boundary, the system actuates the pump, verifies fluid flow, and maintains pumping until the reflooded target depth is restored.
        </p>

        {/* Split Exhibit: Flowchart (Figure 2) on Left, Live Simulator on Right */}
        <FigureFrame
          figureNumber="2"
          title="ArvaCore Process Flowchart &amp; Closed-Loop Simulator"
          thesisRef="Chapter 3, Page 37"
          caption="Thesis Figure 2 Process Flowchart synchronized with an interactive closed-loop irrigation monitoring and threshold simulation. Scrubbing the field water level below -15 cm triggers the automated irrigation branch, initiating water delivery and verifying inline flow until the +5 cm ceiling is met."
        >
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Vector Flowchart */}
            <div className="border border-[#1b2e21] rounded-lg bg-[#070e09] p-4 flex flex-col items-center">
              <div className="w-full text-center text-xs font-mono text-slate-400 mb-2 border-b border-[#1b2e21] pb-2">
                FIGURE 2 STATE MACHINE
              </div>
              <ProcessFlowchartSvg currentStage={activeStage} />
            </div>

            {/* Right: Live Interactive Simulation Widget */}
            <div>
              <AwdSimulationWidget onStageChange={(stage) => setActiveStage(stage)} />
            </div>
          </div>
        </FigureFrame>
      </div>
    </section>
  );
};

