'use client';

import React, { useState, useEffect } from 'react';

export const AwdSimulationWidget: React.FC<{ onStageChange?: (stage: 'sensing' | 'monitoring' | 'trigger' | 'pumping' | 'reflooded' | 'standby') => void }> = ({ onStageChange }) => {
  const [waterLevel, setWaterLevel] = useState(0); // cm relative to mud line
  const [isPumping, setIsPumping] = useState(false);
  const [pumpSeconds, setPumpSeconds] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Monitoring field water elevation...');

  // Derived system states
  useEffect(() => {
    if (waterLevel <= -15 && !isPumping) {
      const t = setTimeout(() => {
        setIsPumping(true);
        setPumpSeconds(0);
        setStatusMessage('Water level ≤ -15 cm. Pump relay closed, flow verified. Reflooding in progress.');
        onStageChange?.('trigger');
      }, 0);
      return () => clearTimeout(t);
    } else if (waterLevel >= 5 && isPumping) {
      const t = setTimeout(() => {
        setIsPumping(false);
        setStatusMessage('Target reflood level +5 cm reached. Pump deactivated. Monitoring continues.');
        onStageChange?.('reflooded');
      }, 0);
      return () => clearTimeout(t);
    } else if (isPumping) {
      setTimeout(() => {
        setStatusMessage('irrigation monitoring cycle: reflooding until +5 cm. Flow sensor confirming delivery.');
        onStageChange?.('pumping');
      }, 0);
    } else if (waterLevel > -5) {
      setTimeout(() => {
        setStatusMessage('Sufficient water elevation. System on standby within normal range.');
        onStageChange?.('standby');
      }, 0);
    } else {
      setTimeout(() => {
        setStatusMessage('Water receding. Monitoring for threshold breach.');
        onStageChange?.('monitoring');
      }, 0);
    }
  }, [waterLevel, isPumping, onStageChange]);

  // Simulation timer for pumping
  useEffect(() => {
    if (!isPumping) return;
    const t = setInterval(() => {
      setPumpSeconds((s) => s + 1);
      setWaterLevel((w) => Math.min(5.2, w + 1.2)); // recharge rate
    }, 800);
    return () => clearInterval(t);
  }, [isPumping]);

  const handleDrain = () => {
    if (isPumping) return;
    setWaterLevel((w) => Math.max(-18, w - 2));
  };

  const handleReflood = () => {
    if (isPumping) return;
    setWaterLevel((w) => Math.min(8, w + 2));
  };

  return (
    <div className="rounded-xl border border-[#1b2e21] bg-[#0c150e] p-5 shadow-lg">
      <div className="flex items-center justify-between border-b border-[#1b2e21] pb-3 mb-4">
        <span className="font-mono text-xs font-bold text-emerald-400 uppercase">IRRIGATION MONITORING SIMULATOR</span>
        <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${isPumping ? 'bg-amber-950/40 text-amber-300 border-amber-500/40 animate-pulse' : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'}`}>
          {isPumping ? 'PUMP ACTIVE' : 'IDLE'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="rounded-lg border border-[#1b2e21] bg-[#080d09] p-4 text-center">
          <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">Water Level</div>
          <div className={`text-3xl font-mono font-bold ${waterLevel <= -15 ? 'text-red-400' : waterLevel < 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
            {waterLevel >= 0 ? `+${waterLevel.toFixed(1)}` : waterLevel.toFixed(1)} cm
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-1">Relative to mud line</div>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <button
            onClick={handleDrain}
            disabled={isPumping}
            className="w-full rounded border border-[#1b2e21] bg-[#111a13] px-3 py-2 text-xs font-mono text-slate-300 hover:text-white hover:bg-[#16241a] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Drain Field (-2 cm)
          </button>
          <button
            onClick={handleReflood}
            disabled={isPumping}
            className="w-full rounded border border-emerald-700/40 bg-emerald-950/40 px-3 py-2 text-xs font-mono text-emerald-300 hover:text-emerald-200 hover:bg-emerald-900/40 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Manual Refill (+2 cm)
          </button>
        </div>
      </div>

      <div className="rounded border border-[#1b2e21] bg-[#070d08] p-3 text-xs font-mono text-slate-300 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400">Status</span>
          <span className="text-cyan-400">Cycle Time: {pumpSeconds}s</span>
        </div>
        <div className="text-emerald-300">{statusMessage}</div>
      </div>

      <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Trigger at ≤ -15 cm</span>
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Stop at +5 cm</span>
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Flow Verified</span>
      </div>
    </div>
  );
};
