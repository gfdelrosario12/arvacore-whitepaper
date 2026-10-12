'use client';

import React from 'react';
import { EXPECTED_BENEFITS } from '@/lib/whitepaper-data';

export const ExpectedBenefitsSection: React.FC = () => {
  return (
    <section id="act-benefits" className="py-16 sm:py-24 border-b border-[#1b2e21] bg-[#080e0a]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-emerald-400">ACT 06</span>
          <span className="h-3 w-[1px] bg-slate-700" />
          <span className="font-mono text-xs text-slate-400 uppercase">PROJECT VALUE &amp; IMPACT</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
          What ArvaCore Could Make Possible
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-10 max-w-3xl">
          The potential benefits outlined below represent anticipated outcomes to be assessed during testing and
          deployment. They reflect the system&apos;s design intent rather than confirmed results, grounded in its
          IoT-based agricultural monitoring capabilities.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPECTED_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="border-b border-[#1b2e21] pb-3">
                <div className="font-mono text-xs font-bold text-emerald-400 uppercase mb-1">{benefit.tagline}</div>
                <h3 className="text-lg font-serif font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{benefit.description}</p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-sans pt-2">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
