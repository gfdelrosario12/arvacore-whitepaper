import React from 'react';

interface TelemetryBadgeProps {
  label: string;
  value: string | number;
  unit?: string;
  variant?: 'emerald' | 'cyan' | 'amber' | 'neutral';
}

export const TelemetryBadge: React.FC<TelemetryBadgeProps> = ({
  label,
  value,
  unit,
  variant = 'emerald',
}) => {
  const variantStyles = {
    emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/40',
    cyan: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/40',
    amber: 'text-amber-400 border-amber-500/20 bg-amber-950/40',
    neutral: 'text-slate-400 border-slate-700/50 bg-slate-900/40',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-mono tracking-tight ${variantStyles[variant]}`}
    >
      <span className="text-slate-400 uppercase tracking-wider text-[10px]">{label}:</span>
      <span className="font-semibold text-white">
        {value}
        {unit && <span className="ml-1 text-[11px] text-slate-300 font-normal">{unit}</span>}
      </span>
    </div>
  );
};

