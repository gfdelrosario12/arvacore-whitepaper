'use client';

import React from 'react';
import { EVALUATION_PILLARS } from '@/lib/whitepaper-data';

export const EvaluationApproachSection: React.FC = () => {
  return (
    <section id="act-evaluation" className="py-16 sm:py-24 border-b border-[#1b2e21] bg-[#09100b]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-emerald-400">ACT 05</span>
          <span className="h-3 w-[1px] bg-slate-700" />
          <span className="font-mono text-xs text-slate-400 uppercase">EVALUATION &amp; VALIDATION</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
          Evaluation Approach &amp; Technical Benchmarks
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-10 max-w-3xl">
          The evaluation of ArvaCore focuses on assessing its performance, reliability, and usability in the context of
          agricultural monitoring for lowland rice farming. Rather than reproducing exhaustive survey instruments, the
          approach generalizes key criteria drawn from the research methodology and Technology Acceptance Model (TAM).
        </p>

        {/* Technical Validation Standards Table */}
        <div className="mb-14 rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between border-b border-[#1b2e21] pb-3 mb-4 text-xs font-mono">
            <span className="text-emerald-400 font-bold uppercase">TECHNICAL VALIDATION BENCHMARKS</span>
            <span className="text-slate-400">DESIGN VERIFICATION FRAMEWORK</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#1b2e21] text-slate-400 text-[11px]">
                  <th className="py-2.5 px-3">PARAMETER</th>
                  <th className="py-2.5 px-3">OBJECTIVE</th>
                  <th className="text-center py-2.5 px-3">TARGET BENCHMARK</th>
                  <th className="py-2.5 px-3">FORMULA / CRITERIA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1b2e21]/60 text-slate-300">
                <tr className="hover:bg-emerald-950/20 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white">Ultrasonic Water-Level Accuracy</td>
                  <td className="py-3 px-3 text-emerald-400">Distance Measurement Validation</td>
                  <td className="py-3 px-3 text-center font-bold text-cyan-300">±5%</td>
                  <td className="py-3 px-3 text-slate-400 text-[11px] font-sans">
                    Percentage error comparison vs calibrated physical depth reference
                  </td>
                </tr>
                <tr className="hover:bg-emerald-950/20 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white">Pump Activation/Deactivation Accuracy</td>
                  <td className="py-3 px-3 text-emerald-400">Actuation Reliability</td>
                  <td className="py-3 px-3 text-center font-bold text-cyan-300">≥ 95%</td>
                  <td className="py-3 px-3 text-slate-400 text-[11px] font-sans">Across repeated controlled test trials</td>
                </tr>
                <tr className="hover:bg-emerald-950/20 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white">System Response Time</td>
                  <td className="py-3 px-3 text-emerald-400">Real-Time Responsiveness</td>
                  <td className="py-3 px-3 text-center font-bold text-cyan-300">≤ 30 seconds</td>
                  <td className="py-3 px-3 text-slate-400 text-[11px] font-sans">
                    Time from threshold detection to command execution
                  </td>
                </tr>
                <tr className="hover:bg-emerald-950/20 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white">Flow Sensor Verification (MAPE)</td>
                  <td className="py-3 px-3 text-emerald-400">Hydraulic Validation</td>
                  <td className="py-3 px-3 text-center font-bold text-cyan-300">Target MAPE ≤ 5%</td>
                  <td className="py-3 px-3 text-slate-400 text-[11px] font-sans">
                    MAPE = (100/n)·∑|actual_i - measured_i|/actual_i
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-[11px] font-mono text-slate-400 border-t border-[#1b2e21]/40 pt-2">
            Note: These values represent design benchmarks and evaluation targets to be validated during field testing,
            not measured achievements.
          </div>
        </div>

        {/* Evaluation Pillars Grid */}
        <div className="rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 shadow-xl">
          <div className="border-b border-[#1b2e21] pb-3 mb-6 text-xs font-mono">
            <span className="text-emerald-400 font-bold uppercase">EVALUATION PILLARS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVALUATION_PILLARS.map((pillar) => (
              <div key={pillar.id} className="rounded-lg border border-[#1b2e21] bg-[#080d09] p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-[#1b2e21] pb-2">
                  <span className="font-serif font-bold text-sm text-white">{pillar.title}</span>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                    {pillar.focus}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{pillar.description}</p>
                <div className="pt-2 border-t border-[#1b2e21]/40">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase block mb-1">Evaluation Method</span>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{pillar.evaluationMethod}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
