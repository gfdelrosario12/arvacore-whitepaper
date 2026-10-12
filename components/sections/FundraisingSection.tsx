

import React from 'react';
import { BUDGET_ITEMS, BUDGET_SUMMARY } from '@/lib/whitepaper-data';

export const FundraisingSection: React.FC = () => {
  const formatCurrency = (amount: number) => `₱${amount.toLocaleString()}`;


  return (
    <section id="act-funding" className="py-16 sm:py-24 bg-[#080e0a]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-emerald-400">ACT 07</span>
          <span className="h-3 w-[1px] bg-slate-700" />
          <span className="font-mono text-xs text-slate-400 uppercase">DEPLOYMENT FUNDRAISING</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
          Help Bring ArvaCore to the Field
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-8 max-w-3xl">
          ArvaCore is progressing toward prototype completion and planned field deployment in{' '}
          <span className="text-cyan-300 font-medium">{BUDGET_SUMMARY.location}</span>. The preliminary funding target is{' '}
          <span className="text-emerald-400 font-semibold">₱25,000</span> to help bring the system closer to practical field evaluation.
        </p>

        {/* Ways to Support */}
                <div id="support" className="scroll-mt-24 mb-10 rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 shadow-xl space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">Ways to Support ArvaCore</h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-4">
              Help bring ArvaCore from prototype development toward field deployment in{' '}
              <span className="text-cyan-300 font-medium">{BUDGET_SUMMARY.location}</span>.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              The project requires hardware, supporting components, deployment preparation, and field-testing resources to move toward practical evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-[#1b2e21] bg-[#080d09] p-4 space-y-2">
              <h4 className="font-serif font-semibold text-white">Monetary Contributions</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Provide financial support for essential component purchases, hardware assembly, connectivity, transportation, deployment preparation, and related expenses.
              </p>
            </div>
            <div className="rounded-lg border border-[#1b2e21] bg-[#080d09] p-4 space-y-2">
              <h4 className="font-serif font-semibold text-white">In-Kind Hardware Contributions</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Contribute compatible sensors, microcontrollers, communication modules, solar-power components, batteries, enclosures, wiring, or connectors.
              </p>
            </div>
            <div className="rounded-lg border border-[#1b2e21] bg-[#080d09] p-4 space-y-2">
              <h4 className="font-serif font-semibold text-white">Component and Subsystem Sponsorships</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sponsor specific items within ArvaCore, ArvaNode, or ArvaNet. Coordinate component specifications with the project team.
              </p>
            </div>
            <div className="rounded-lg border border-[#1b2e21] bg-[#080d09] p-4 space-y-2">
              <h4 className="font-serif font-semibold text-white">Technical Collaboration</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Discuss hardware sourcing, engineering guidance, testing resources, deployment logistics, or technical collaboration with the project team.
              </p>
            </div>
          </div>

          <div className="border-t border-[#1b2e21] pt-4">
            <p className="text-sm leading-relaxed text-slate-300 mb-2">
              ArvaCore is seeking <span className="text-emerald-400 font-semibold">{formatCurrency(BUDGET_SUMMARY.fundingTarget)}</span> in financial and in-kind support. No funds have been received to date, and online donations are not yet enabled — please contact the project team to discuss support.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              The breakdown below lists the estimated expenses for prototype completion and planned field deployment in {BUDGET_SUMMARY.location}.
            </p>
          </div>
        </div>

        {/* Itemized Budget */}
        <div id="funding-breakdown" className="scroll-mt-24 rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between border-b border-[#1b2e21] pb-3 mb-6 text-xs font-mono gap-2">
            <span className="text-emerald-400 font-bold uppercase">Preliminary Deployment Budget</span>
            <span className="text-slate-400">ESTIMATES SUBJECT TO SUPPLIER QUOTATIONS</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-4 text-[11px] font-mono text-slate-400">
            <span><span className="text-cyan-300 font-semibold">PRELIMINARY</span> — price supplied by the project team; not yet purchased</span>
            <span><span className="text-amber-300 font-semibold">ESTIMATED</span> — planning estimate; pending quotation</span>
          </div>

          {BUDGET_SUMMARY.groupSubtotals.map(({ group, subtotal }) => (
            <div key={group} className="mb-6">
              <h3 className="font-mono text-xs font-bold text-white uppercase mb-2">{group}</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px] text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#1b2e21] text-slate-400 text-[11px]">
                      <th scope="col" className="py-2 px-3">ITEM</th>
                      <th scope="col" className="py-2 px-3">STATUS</th>
                      <th scope="col" className="py-2 px-3 text-right">COST (PHP)</th>
                      <th scope="col" className="py-2 px-3">NOTES</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1b2e21]/60 text-slate-300">
                    {BUDGET_ITEMS.filter((item) => item.category === group).map((item) => (
                      <tr key={item.item}>
                        <td className="py-2 px-3 text-white font-medium">{item.item}</td>
                        <td className={`py-2 px-3 text-[10px] font-semibold ${item.type === 'supplied' ? 'text-cyan-300' : 'text-amber-300'}`}>
                          {item.type === 'supplied' ? 'PRELIMINARY' : 'ESTIMATED'}
                        </td>
                        <td className="py-2 px-3 text-right text-emerald-400 font-semibold">{formatCurrency(item.costPhp)}</td>
                        <td className="py-2 px-3 text-slate-400 text-[10px] max-w-xs">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-2 flex justify-between items-center px-3 py-2 rounded border border-[#1b2e21] bg-[#080d09] text-sm font-mono">
                <span className="text-slate-300">{group} subtotal</span>
                <span className="text-emerald-400 font-bold">{formatCurrency(subtotal)}</span>
              </div>
            </div>
          ))}

          {/* Summary */}
          <dl className="mt-8 space-y-2 rounded-lg border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 p-4 font-mono">
            {BUDGET_SUMMARY.groupSubtotals.map(({ group, subtotal }) => (
              <div key={group} className="flex justify-between text-xs text-slate-400">
                <dt>{group}</dt>
                <dd>{formatCurrency(subtotal)}</dd>
              </div>
            ))}
            <div className="flex justify-between items-center border-t border-emerald-500/30 pt-2">
              <dt className="text-sm text-white font-bold">Total Estimated Project Expenses</dt>
              <dd className="text-xl text-emerald-400 font-bold">{formatCurrency(BUDGET_SUMMARY.totalEstimatedExpenses)}</dd>
            </div>
            <div className="flex justify-between text-sm text-slate-300">
              <dt>Funding Target</dt>
              <dd>{formatCurrency(BUDGET_SUMMARY.fundingTarget)}</dd>
            </div>
            <div className="flex justify-between items-center text-sm">
              <dt className="text-white">Budget Headroom (Target − Estimated Expenses)</dt>
              <dd className="text-lg text-cyan-400 font-bold">{formatCurrency(BUDGET_SUMMARY.budgetHeadroom)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-[11px] font-mono text-slate-400 leading-relaxed">
            Budget headroom is the planned difference between the funding target and the estimated expenses. It is not money already raised; it absorbs price changes once supplier quotations replace the estimates above. Of the total, {formatCurrency(BUDGET_SUMMARY.suppliedPriceSubtotal)} uses team-supplied preliminary prices and {formatCurrency(BUDGET_SUMMARY.estimatedPriceSubtotal)} is planning estimates.
          </p>
        </div>
      </div>
    </section>
  );
};
