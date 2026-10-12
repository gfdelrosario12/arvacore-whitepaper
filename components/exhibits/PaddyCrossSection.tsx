'use client';

import React, { useState } from 'react';
import { TelemetryBadge } from '../ui/TelemetryBadge';

interface PaddyCrossSectionProps {
  interactive?: boolean;
}

export const PaddyCrossSection: React.FC<PaddyCrossSectionProps> = ({ interactive = true }) => {
  // Current simulated water level: -18 cm to +6 cm
  const [waterLevel, setWaterLevel] = useState<number>(2.5);

  const echoDistanceToF = (25 - waterLevel).toFixed(1);
  const soilVwc = waterLevel >= 0 ? 82 : Math.max(25, Math.round(82 + (waterLevel * 3.2)));

  return (
    <div className="rounded-xl border border-[#1b2e21] bg-[#09120a] p-6 shadow-2xl space-y-6">
      <div className="flex flex-wrap items-center justify-between border-b border-[#1b2e21] pb-3 text-xs font-mono">
        <span className="text-emerald-400 font-bold uppercase">RICE PADDY TRANSECT &amp; SENSOR HORIZONS</span>
        <span className="text-slate-400">ACOUSTIC &amp; CAPACITIVE CALIBRATION</span>
      </div>

      {/* SVG Canvas for Paddy Cross Section */}
      <div className="relative overflow-hidden rounded-lg border border-[#1b2e21] bg-[#050b07] p-2">
        <svg
          viewBox="0 0 800 420"
          className="w-full h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="paddy-water-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="paddy-soil-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2b1f" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0f1912" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* ATMOSPHERIC SKY / SURFACE CANOPY */}
          <rect x="0" y="0" width="800" height="150" fill="#09150d" />

          {/* Rice Foliage Hills */}
          <g stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none">
            {/* Clump 1 */}
            <path d="M 80 150 Q 75 90 60 70" />
            <path d="M 80 150 Q 82 80 88 50" />
            <path d="M 80 150 Q 90 95 110 80" />
            {/* Clump 2 */}
            <path d="M 220 150 Q 215 85 200 65" />
            <path d="M 220 150 Q 222 75 228 45" />
            <path d="M 220 150 Q 230 90 250 75" />
            {/* Clump 3 */}
            <path d="M 360 150 Q 355 90 340 70" />
            <path d="M 360 150 Q 362 80 368 50" />
            <path d="M 360 150 Q 370 95 390 80" />
          </g>

          {/* WATER PONDING LAYER (DYNAMIC HEIGHT) */}
          <rect
            x="0"
            y={Math.max(100, 150 - (waterLevel * 8))}
            width="800"
            height={Math.max(0, waterLevel * 8 + 120)}
            fill="url(#paddy-water-gradient)"
            className="transition-all duration-300 ease-out"
          />

          {/* WATER SURFACE LEVEL LINE */}
          <line
            x1="0"
            y1={Math.max(100, 150 - (waterLevel * 8))}
            x2="800"
            y2={Math.max(100, 150 - (waterLevel * 8))}
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="4 2"
          />

          <text
            x="640"
            y={Math.max(115, 142 - (waterLevel * 8))}
            fill="#38bdf8"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            WATER SURFACE ({waterLevel > 0 ? `+${waterLevel.toFixed(1)}` : waterLevel.toFixed(1)} cm)
          </text>

          {/* MUD LINE / SOIL SURFACE (y=150 is 0.0 cm elevation) */}
          <line x1="0" y1="150" x2="800" y2="150" stroke="#10b981" strokeWidth="2" />
          <text x="15" y="142" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">
            0.0 cm PADDY SOIL SURFACE (MUD LINE)
          </text>

          {/* SOIL ROOT ZONE MATRIX (y=150 to y=270, 0 to -15 cm) */}
          <rect x="0" y="150" width="800" height="120" fill="url(#paddy-soil-gradient)" opacity="0.85" />

          {/* Root Silhouettes in the top soil layer */}
          <g stroke="#ca8a04" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
            <path d="M 80 150 Q 75 190 70 240" />
            <path d="M 80 150 Q 85 200 95 250" />
            <path d="M 220 150 Q 215 190 205 240" />
            <path d="M 220 150 Q 225 200 235 250" />
            <path d="M 360 150 Q 355 190 345 240" />
            <path d="M 360 150 Q 366 200 375 250" />
          </g>
          <text x="15" y="210" fill="#f8fafc" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
            Root Zone Soil Matrix (0 to -15 cm depth)
          </text>
          <text x="15" y="228" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
            Clayey rice paddy loam • Monitored by subsurface volumetric moisture probe
          </text>

          {/* Critical -15 cm Irrigation Threshold Line */}
          <line x1="0" y1="270" x2="800" y2="270" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 3" />
          <text x="15" y="265" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
            -15.0 cm CRITICAL WATER-LEVEL THRESHOLD (IRRIGATION TRIGGER)
          </text>

          {/* HARDPAN CLAY LAYER (-15 cm to -30 cm, y=270 to y=420) */}
          <rect x="0" y="270" width="800" height="150" fill="#070e08" stroke="#16261b" strokeWidth="1" />
          <text x="15" y="320" fill="#64748b" fontSize="10" fontFamily="monospace">
            IMPERMEABLE HARDPAN PLOW SOLE (High bulk density clay)
          </text>
          <text x="15" y="338" fill="#475569" fontSize="9" fontFamily="sans-serif">
            Maintains perched water table • Prevents deep downward percolation loss
          </text>

          {/* SENSOR WELL APPARATUS SCHEMATIC */}
          <g transform="translate(560, 40)">
            {/* Perforated Stilling Well */}
            <rect x="0" y="40" width="60" height="250" rx="3" fill="#0b1710" stroke="#10b981" strokeWidth="1.5" opacity="0.85" />
            {/* Well Perforations */}
            <g stroke="#34d399" strokeWidth="1.5" strokeLinecap="round">
              <line x1="12" y1="120" x2="22" y2="120" />
              <line x1="38" y1="120" x2="48" y2="120" />
              <line x1="12" y1="160" x2="22" y2="160" />
              <line x1="38" y1="160" x2="48" y2="160" />
              <line x1="12" y1="200" x2="22" y2="200" />
              <line x1="38" y1="200" x2="48" y2="200" />
              <line x1="12" y1="240" x2="22" y2="240" />
              <line x1="38" y1="240" x2="48" y2="240" />
            </g>

            {/* Ultrasonic Sensor Horn */}
            <rect x="8" y="20" width="44" height="20" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="30" y="34" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">US-HORN</text>

            {/* Ultrasonic Acoustic Pulses */}
            <g stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3">
              <line x1="20" y1="40" x2="20" y2={Math.min(250, 110 - Math.max(-100, waterLevel * 8))} />
              <line x1="30" y1="40" x2="30" y2={Math.min(250, 110 - Math.max(-100, waterLevel * 8))} />
              <line x1="40" y1="40" x2="40" y2={Math.min(250, 110 - Math.max(-100, waterLevel * 8))} />
            </g>

            {/* Soil Moisture Probe in Soil Zone */}
            <rect x="-40" y="140" width="16" height="70" rx="3" fill="#d97706" stroke="#fbbf24" strokeWidth="1.2" />
            <text x="-32" y="175" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="monospace" transform="rotate(-90 -32,175)">
              SOIL PROBE
            </text>

            {/* Annotations */}
            <text x="70" y="34" fill="#38bdf8" fontSize="9" fontFamily="monospace">Ultrasonic Transducer (ToF Echo)</text>
            <text x="70" y="180" fill="#fbbf24" fontSize="9" fontFamily="monospace">Root Moisture Sensor (VWC %)</text>
            <text x="70" y="250" fill="#34d399" fontSize="9" fontFamily="monospace">Perforated Stilling Well</text>
          </g>
        </svg>
      </div>

      {/* Interactive Controls & Telemetry Readouts */}
      {interactive && (
        <div className="space-y-4 pt-2">
          <div className="flex justify-between items-center font-mono text-xs">
            <span className="text-slate-300 font-semibold">ADJUST WATER DEPTH IN TRANSECT:</span>
            <span className="text-emerald-400 font-bold text-sm">
              {waterLevel > 0 ? `+${waterLevel.toFixed(1)}` : waterLevel.toFixed(1)} cm
            </span>
          </div>

          <input
            type="range"
            min="-18"
            max="6"
            step="0.5"
            value={waterLevel}
            onChange={(e) => setWaterLevel(parseFloat(e.target.value))}
            className="w-full h-2 bg-[#1b2e21] rounded-lg appearance-none cursor-pointer accent-emerald-500"
            aria-label="Paddy Water Level Slider"
          />

          <div className="flex flex-wrap items-center gap-3">
            <TelemetryBadge label="TIME-OF-FLIGHT" value={echoDistanceToF} unit="cm echo" variant="cyan" />
            <TelemetryBadge label="ROOT MOISTURE" value={soilVwc} unit="% VWC" variant={soilVwc < 40 ? 'amber' : 'emerald'} />
            <TelemetryBadge label="HORIZON STATUS" value={waterLevel <= -15 ? 'Critical Threshold Trigger' : waterLevel >= 5 ? 'Target Ponding Met' : 'Normal Water Depth'} variant={waterLevel <= -15 ? 'amber' : 'emerald'} />
          </div>
        </div>
      )}
    </div>
  );
};
