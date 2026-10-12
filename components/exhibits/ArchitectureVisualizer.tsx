'use client';

import React, { useState } from 'react';
import { ARCHITECTURE_COMPONENTS } from '@/lib/whitepaper-data';

interface ArchitectureVisualizerProps {
  initialSelectedId?: string;
}

export const ArchitectureVisualizer: React.FC<ArchitectureVisualizerProps> = ({
  initialSelectedId = 'field-nodes',
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialSelectedId);
  const [animateSignals, setAnimateSignals] = useState<boolean>(true);

  const activeComponent =
    ARCHITECTURE_COMPONENTS.find((c) => c.id === selectedId) || ARCHITECTURE_COMPONENTS[1];

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedId(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Inspection & Animation Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-[#1b2e21] pb-3">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">INSPECTING ENTITY:</span>
          <span className="text-emerald-400 font-bold">{activeComponent.label}</span>
          <span className="text-[10px] text-slate-400">({activeComponent.category})</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAnimateSignals(!animateSignals)}
            className={`px-3 py-1 rounded border text-[11px] font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
              animateSignals
                ? 'border-emerald-500/40 bg-emerald-950/60 text-emerald-300'
                : 'border-slate-800 bg-slate-900 text-slate-400'
            }`}
            aria-label={animateSignals ? 'Pause data flow animations' : 'Activate data flow animations'}
          >
            {animateSignals ? '● Data Flow: Active' : '○ Data Flow: Paused'}
          </button>
        </div>
      </div>

      {/* SVG Canvas (Desktop & Tablet) */}
      <div className="hidden md:block relative overflow-hidden rounded-xl border border-[#1b2e21] bg-[#060c07] p-4 shadow-2xl">
        <svg
          viewBox="0 0 1200 560"
          className="w-full h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive ArvaCore Farm-to-Digital System Architecture Schematic"
        >
          <defs>
            {/* Arrow Markers */}
            <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#10b981" />
            </marker>
            <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#0ea5e9" />
            </marker>
            <marker id="arrow-amber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#f59e0b" />
            </marker>

            {/* Linear Gradients for Soil & Water Layers */}
            <linearGradient id="water-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="soil-root-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c2e22" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#142118" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="hardpan-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c150f" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#050a06" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* ZONE BACKGROUND CONTAINERS */}
          {/* ZONE 1: PHYSICAL FIELD & SENSING */}
          <rect x="20" y="20" width="460" height="520" rx="12" fill="#09140c" stroke="#162e1c" strokeWidth="1" strokeDasharray="4 4" />
          <text x="35" y="44" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ZONE I: AGRICULTURAL TRANSECT (BARANGAY SILANG PADDY)
          </text>

          {/* ZONE 2: WIRELESS GATEWAY & CLOUD PROCESSING */}
          <rect x="500" y="20" width="410" height="520" rx="12" fill="#06121a" stroke="#11293a" strokeWidth="1" strokeDasharray="4 4" />
          <text x="515" y="44" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ZONE II: TELEMETRY GATEWAY &amp; APPLICATION SERVER
          </text>

          {/* ZONE 3: CLOSED-LOOP IRRIGATION & ACTUATION */}
          <rect x="930" y="20" width="250" height="520" rx="12" fill="#181108" stroke="#332210" strokeWidth="1" strokeDasharray="4 4" />
          <text x="945" y="44" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ZONE III: HYDRAULIC DELIVERY
          </text>

          {/* ============================================================== */}
          {/* SECTION A: DETAILED AGRICULTURAL RICE FIELD CROSS-SECTION      */}
          {/* ============================================================== */}
          <g id="paddy-cross-section" transform="translate(35, 60)">
            {/* Paddy Sky / Ambient Atmosphere */}
            <rect x="0" y="0" width="430" height="70" rx="6" fill="#0d1b12" />
            <text x="12" y="20" fill="#6ee7b7" fontSize="9" fontFamily="monospace">AMBIENT HORIZON (MICROCLIMATE)</text>
            <text x="12" y="36" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Direct sunlight, evaporation &amp; rainfall recharge</text>

            {/* Rice Plant Canopies (Vector Sprigs) */}
            <g stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" fill="none">
              {/* Hill 1 */}
              <path d="M 50 70 Q 45 40 35 30" />
              <path d="M 50 70 Q 50 35 55 22" />
              <path d="M 50 70 Q 55 42 68 35" />
              {/* Hill 2 */}
              <path d="M 120 70 Q 115 38 102 26" />
              <path d="M 120 70 Q 120 32 125 18" />
              <path d="M 120 70 Q 128 40 138 30" />
              {/* Hill 3 */}
              <path d="M 190 70 Q 185 38 174 25" />
              <path d="M 190 70 Q 192 34 195 20" />
              <path d="M 190 70 Q 198 42 210 32" />
            </g>

            {/* Perched Water Layer (+5 cm to 0 cm) */}
            <rect
              x="0"
              y="70"
              width="430"
              height="35"
              fill="url(#water-gradient)"
              stroke="#0284c7"
              strokeWidth="0.8"
              className="cursor-pointer"
              onClick={() => setSelectedId('field-conditions')}
            />
            <line x1="0" y1="70" x2="430" y2="70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="10" y="85" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">
              +5.0 cm PONDED WATER LAYER (RE-FLOOD CEILING)
            </text>

            {/* Mud / Ground Surface Boundary (0.0 cm) */}
            <line x1="0" y1="105" x2="430" y2="105" stroke="#10b981" strokeWidth="1.5" />
            <text x="320" y="100" fill="#34d399" fontSize="8" fontFamily="monospace">0.0 cm SOIL BASELINE</text>

            {/* Root Zone Soil Layer (0 to -15 cm) */}
            <rect
              x="0"
              y="105"
              width="430"
              height="65"
              fill="url(#soil-root-gradient)"
              stroke="#1b2e21"
              strokeWidth="0.8"
              className="cursor-pointer"
              onClick={() => setSelectedId('field-conditions')}
            />
            {/* Subsurface Root Fibers */}
            <g stroke="#84cc16" strokeWidth="0.8" strokeLinecap="round" opacity="0.6">
              <path d="M 50 105 Q 48 125 40 145" />
              <path d="M 50 105 Q 53 130 58 155" />
              <path d="M 120 105 Q 116 125 110 150" />
              <path d="M 120 105 Q 124 135 130 160" />
              <path d="M 190 105 Q 186 128 178 152" />
              <path d="M 190 105 Q 194 132 202 158" />
            </g>
            <line x1="0" y1="170" x2="430" y2="170" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" />
            <text x="10" y="125" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">
              Root Mass Zone (0 to -15 cm) • Active moisture extraction
            </text>
            <text x="10" y="165" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
              -15.0 cm CRITICAL WATER-LEVEL THRESHOLD
            </text>

            {/* Hardpan Impermeable Clay */}
            <rect
              x="0"
              y="170"
              width="430"
              height="40"
              rx="4"
              fill="url(#hardpan-gradient)"
              className="cursor-pointer"
              onClick={() => setSelectedId('field-conditions')}
            />
            <text x="10" y="195" fill="#64748b" fontSize="8.5" fontFamily="monospace">
              SUB-ROOT HARDPAN (Low hydraulic conductivity clay layer)
            </text>

            {/* PHYSICAL SENSOR INSTALLATION SCHEMATIC OVERLAY */}
            {/* Stilling Well Tube */}
            <rect x="290" y="45" width="40" height="135" fill="#08140d" stroke="#34d399" strokeWidth="1.2" opacity="0.8" rx="2" />
            <line x1="290" y1="75" x2="330" y2="75" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
            <text x="310" y="60" textAnchor="middle" fill="#6ee7b7" fontSize="7" fontFamily="monospace">WELL</text>

            {/* Ultrasonic Sensor Horn */}
            <rect x="295" y="32" width="30" height="14" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
            {/* Ultrasonic Acoustic Beams */}
            <g stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 3" opacity={animateSignals ? '0.8' : '0.4'}>
              <line x1="300" y1="46" x2="300" y2="75" />
              <line x1="310" y1="46" x2="310" y2="75" />
              <line x1="320" y1="46" x2="320" y2="75" />
            </g>
            <text x="340" y="40" fill="#38bdf8" fontSize="8" fontFamily="monospace">Ultrasonic ToF</text>

            {/* Root-Zone Soil Moisture Probe */}
            <rect x="250" y="115" width="12" height="45" rx="2" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
            <path d="M 256 160 L 256 170" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="268" y="138" fill="#fbbf24" fontSize="8" fontFamily="monospace">Soil Probe</text>

            {/* Cable Lead to Node */}
            <path d="M 310 32 L 310 12 Q 310 0 350 0 L 390 0" stroke="#10b981" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
          </g>

          {/* ============================================================== */}
          {/* SECTION B: ESP32 MONITORING NODE CLUSTER BOX                    */}
          {/* ============================================================== */}
          <g
            id="node-cluster"
            transform="translate(35, 290)"
            className="cursor-pointer"
            onClick={() => setSelectedId('field-nodes')}
            onKeyDown={(e) => handleKeyDown(e, 'field-nodes')}
            tabIndex={0}
            role="button"
            aria-label="Field-Monitoring Nodes Component"
          >
            <rect
              x="0"
              y="0"
              width="430"
              height="230"
              rx="8"
              fill={selectedId === 'field-nodes' ? '#14291b' : '#0c1810'}
              stroke={selectedId === 'field-nodes' ? '#10b981' : '#1f3524'}
              strokeWidth={selectedId === 'field-nodes' ? 2 : 1}
            />
            {/* Node Cluster Header */}
            <rect x="0" y="0" width="430" height="32" rx="8" fill="#122518" />
            <text x="16" y="21" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold">
              N MODULAR FIELD-MONITORING NODES (ESP32)
            </text>
            <text x="360" y="21" fill="#94a3b8" fontSize="9" fontFamily="monospace">
              CH. 3, P. 47
            </text>

            {/* 4 Quadrant Mini-Nodes Grid */}
            <g transform="translate(16, 44)">
              {/* Node 1 */}
              <rect x="0" y="0" width="190" height="75" rx="4" fill="#071109" stroke="#1b2e21" />
              <text x="10" y="18" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">Node 1 (North Quadrant)</text>
              <text x="10" y="34" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Ultrasonic Level: +3.2 cm</text>
              <text x="10" y="48" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Soil Moisture: 78% VWC</text>
              <text x="10" y="62" fill="#34d399" fontSize="8" fontFamily="monospace">Wi-Fi RSSI: -64 dBm [OK]</text>

              {/* Node 2 */}
              <rect x="205" y="0" width="190" height="75" rx="4" fill="#071109" stroke="#1b2e21" />
              <text x="215" y="18" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">Node 2 (East Quadrant)</text>
              <text x="215" y="34" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Ultrasonic Level: +2.8 cm</text>
              <text x="215" y="48" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Soil Moisture: 74% VWC</text>
              <text x="215" y="62" fill="#34d399" fontSize="8" fontFamily="monospace">Wi-Fi RSSI: -68 dBm [OK]</text>

              {/* Node 3 */}
              <rect x="0" y="86" width="190" height="75" rx="4" fill="#071109" stroke="#1b2e21" />
              <text x="10" y="104" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">Node 3 (South Quadrant)</text>
              <text x="10" y="120" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Ultrasonic Level: +3.0 cm</text>
              <text x="10" y="134" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Soil Moisture: 76% VWC</text>
              <text x="10" y="148" fill="#34d399" fontSize="8" fontFamily="monospace">Wi-Fi RSSI: -62 dBm [OK]</text>

              {/* Node 4 */}
              <rect x="205" y="86" width="190" height="75" rx="4" fill="#071109" stroke="#1b2e21" />
              <text x="215" y="104" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">Node 4 (West Quadrant)</text>
              <text x="215" y="120" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Ultrasonic Level: +3.4 cm</text>
              <text x="215" y="134" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">• Soil Moisture: 80% VWC</text>
              <text x="215" y="148" fill="#34d399" fontSize="8" fontFamily="monospace">Wi-Fi RSSI: -66 dBm [OK]</text>
            </g>
          </g>

          {/* ============================================================== */}
          {/* SECTION C: WIRELESS TELEMETRY UPLINK TO GATEWAY               */}
          {/* ============================================================== */}
          {/* Wi-Fi Radio Waves from Nodes to Gateway */}
          <path
            d="M 465 400 L 525 200"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray={animateSignals ? '6 4' : 'none'}
            className={animateSignals ? 'animate-pulse' : ''}
            fill="none"
            markerEnd="url(#arrow-green)"
          />
          <text x="490" y="290" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold" transform="rotate(-65 490,290)">
            2.4 GHz IEEE 802.11 Wi-Fi Link
          </text>

          {/* GATEWAY BOX */}
          <g
            id="gateway-box"
            transform="translate(525, 140)"
            className="cursor-pointer"
            onClick={() => setSelectedId('gateway')}
            onKeyDown={(e) => handleKeyDown(e, 'gateway')}
            tabIndex={0}
            role="button"
            aria-label="IoT Gateway Component"
          >
            <rect
              x="0"
              y="0"
              width="150"
              height="120"
              rx="6"
              fill={selectedId === 'gateway' ? '#122a38' : '#0a1922'}
              stroke={selectedId === 'gateway' ? '#0ea5e9' : '#143447'}
              strokeWidth={selectedId === 'gateway' ? 2 : 1}
            />
            <rect x="0" y="0" width="150" height="26" rx="6" fill="#0d2433" />
            <text x="12" y="18" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
              COMM. GATEWAY
            </text>
            <text x="12" y="48" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
              Local Transceiver
            </text>
            <text x="12" y="64" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
              Receives node frames
            </text>
            <text x="12" y="78" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
              Forwarding protocol
            </text>
            <text x="12" y="98" fill="#38bdf8" fontSize="8" fontFamily="monospace">
              WAN Internet Uplink
            </text>
          </g>

          {/* Gateway -> Cloud Server link */}
          <path
            d="M 675 200 L 710 200"
            stroke="#0ea5e9"
            strokeWidth="2.5"
            strokeDasharray={animateSignals ? '6 4' : 'none'}
            fill="none"
            markerEnd="url(#arrow-blue)"
          />

          {/* ============================================================== */}
          {/* SECTION D: APPLICATION SERVER & TIME-SERIES DATABASE           */}
          {/* ============================================================== */}
          <g
            id="server-box"
            transform="translate(710, 80)"
            className="cursor-pointer"
            onClick={() => setSelectedId('application-server')}
            onKeyDown={(e) => handleKeyDown(e, 'application-server')}
            tabIndex={0}
            role="button"
            aria-label="Application Server & Database Component"
          >
            <rect
              x="0"
              y="0"
              width="185"
              height="240"
              rx="8"
              fill={selectedId === 'application-server' ? '#122638' : '#0a1724'}
              stroke={selectedId === 'application-server' ? '#38bdf8' : '#16314a'}
              strokeWidth={selectedId === 'application-server' ? 2 : 1}
            />
            <rect x="0" y="0" width="185" height="28" rx="8" fill="#0e2338" />
            <text x="12" y="19" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
              APPLICATION SERVER
            </text>

            <g transform="translate(12, 40)" fontSize="8.5" fontFamily="sans-serif">
              <text x="0" y="0" fill="#f8fafc" fontWeight="bold">Data Processing Engine:</text>
              <text x="0" y="14" fill="#94a3b8">• Node identification tagger</text>
              <text x="0" y="28" fill="#94a3b8">• Wave noise smoothing</text>

              <text x="0" y="55" fill="#f8fafc" fontWeight="bold">System Database:</text>
              <text x="0" y="69" fill="#94a3b8">• Time-series telemetry logs</text>
              <text x="0" y="83" fill="#94a3b8">• Irrigation event histories</text>

              <text x="0" y="110" fill="#f8fafc" fontWeight="bold">Threshold Decision Logic:</text>
              <text x="0" y="124" fill="#f59e0b" fontWeight="bold">• Trigger: Depth ≤ -15 cm</text>
              <text x="0" y="138" fill="#38bdf8" fontWeight="bold">• Halt: Depth ≥ +5 cm</text>
              <text x="0" y="152" fill="#94a3b8">• Flow verification crosscheck</text>
            </g>
          </g>

          {/* Server -> Dashboard line */}
          <path d="M 802 320 L 802 360" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />

          {/* WEB DASHBOARD & USER */}
          <g
            id="dashboard-box"
            transform="translate(525, 360)"
            className="cursor-pointer"
            onClick={() => setSelectedId('web-dashboard')}
            onKeyDown={(e) => handleKeyDown(e, 'web-dashboard')}
            tabIndex={0}
            role="button"
            aria-label="Web Dashboard Component"
          >
            <rect
              x="0"
              y="0"
              width="370"
              height="160"
              rx="8"
              fill={selectedId === 'web-dashboard' ? '#12251a' : '#09160e'}
              stroke={selectedId === 'web-dashboard' ? '#10b981' : '#173322'}
              strokeWidth={selectedId === 'web-dashboard' ? 2 : 1}
            />
            <rect x="0" y="0" width="370" height="28" rx="8" fill="#102517" />
            <text x="14" y="19" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">
              ARVACORE WEB MONITORING DASHBOARD (FARMER / OPERATOR)
            </text>

            <g transform="translate(14, 42)">
              {/* Mock Dashboard Gauges */}
              <rect x="0" y="0" width="165" height="95" rx="4" fill="#050e08" stroke="#1b2e21" />
              <text x="10" y="16" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">Average Paddy Depth</text>
              <text x="10" y="42" fill="#38bdf8" fontSize="18" fontFamily="monospace" fontWeight="bold">+3.1 cm</text>
              <text x="10" y="60" fill="#34d399" fontSize="8" fontFamily="sans-serif">Status: Flooded / Stable</text>
              <text x="10" y="74" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Next irrigation cycle in: 48h</text>

              <rect x="175" y="0" width="165" height="95" rx="4" fill="#050e08" stroke="#1b2e21" />
              <text x="185" y="16" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">Central Pump Relay</text>
              <text x="185" y="42" fill="#94a3b8" fontSize="18" fontFamily="monospace" fontWeight="bold">STANDBY</text>
              <text x="185" y="60" fill="#34d399" fontSize="8" fontFamily="sans-serif">Inline Flow: 0.0 L/min</text>
              <text x="185" y="74" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Zero leakage confirmed</text>
            </g>
          </g>

          {/* ============================================================== */}
          {/* SECTION E: CLOSED-LOOP ACTUATION & FLOW SENSING                */}
          {/* ============================================================== */}
          {/* Server Command -> Central Pump Actuator */}
          <path
            d="M 895 180 L 960 180"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeDasharray={animateSignals ? '6 3' : 'none'}
            fill="none"
            markerEnd="url(#arrow-amber)"
          />
          <text x="925" y="172" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="monospace">
            COMMAND
          </text>

          {/* Centralized Pump Mechanism */}
          <g
            id="pump-box"
            transform="translate(960, 130)"
            className="cursor-pointer"
            onClick={() => setSelectedId('irrigation-mechanism')}
            onKeyDown={(e) => handleKeyDown(e, 'irrigation-mechanism')}
            tabIndex={0}
            role="button"
            aria-label="Centralized Irrigation Mechanism Component"
          >
            <rect
              x="0"
              y="0"
              width="190"
              height="100"
              rx="6"
              fill={selectedId === 'irrigation-mechanism' ? '#2a1a08' : '#1a1005'}
              stroke={selectedId === 'irrigation-mechanism' ? '#f59e0b' : '#332009'}
              strokeWidth={selectedId === 'irrigation-mechanism' ? 2 : 1}
            />
            <rect x="0" y="0" width="190" height="26" rx="6" fill="#241606" />
            <text x="10" y="18" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">
              CENTRAL IRRIGATION PUMP
            </text>
            <text x="10" y="45" fill="#f8fafc" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">
              Submersible / Surface Pump
            </text>
            <text x="10" y="60" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
              Digital relay control
            </text>
            <text x="10" y="75" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
              Water delivery to canal/pipe
            </text>
            <text x="10" y="90" fill="#34d399" fontSize="7.5" fontFamily="monospace">
              Latency standard: ≤30s
            </text>
          </g>

          {/* Pressurized Water Delivery Pipe from Pump to Flow Sensor */}
          <path
            d="M 1055 230 L 1055 270"
            stroke="#0ea5e9"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#arrow-blue)"
          />
          <text x="1065" y="255" fill="#38bdf8" fontSize="8" fontFamily="monospace">
            H₂O PIPE
          </text>

          {/* In-Line Flow Sensor Box */}
          <g
            id="flow-sensor-box"
            transform="translate(960, 270)"
            className="cursor-pointer"
            onClick={() => setSelectedId('flow-sensor')}
            onKeyDown={(e) => handleKeyDown(e, 'flow-sensor')}
            tabIndex={0}
            role="button"
            aria-label="In-Line Flow Sensor Component"
          >
            <rect
              x="0"
              y="0"
              width="190"
              height="100"
              rx="6"
              fill={selectedId === 'flow-sensor' ? '#122538' : '#0a1622'}
              stroke={selectedId === 'flow-sensor' ? '#0ea5e9' : '#143046'}
              strokeWidth={selectedId === 'flow-sensor' ? 2 : 1}
            />
            <rect x="0" y="0" width="190" height="26" rx="6" fill="#0d2133" />
            <text x="10" y="18" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">
              IN-LINE FLOW SENSOR
            </text>
            <text x="10" y="45" fill="#f8fafc" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">
              Pulse Volume Feedback
            </text>
            <text x="10" y="60" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
              Verifies actual water flow
            </text>
            <text x="10" y="75" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
              Catches dry runs &amp; line leaks
            </text>
            <text x="10" y="90" fill="#34d399" fontSize="7.5" fontFamily="monospace">
              Flow benchmark: MAPE ≤5%
            </text>
          </g>

          {/* Flow Sensor Feedback Line to Application Server */}
          <path
            d="M 960 320 L 895 240"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray={animateSignals ? '5 3' : 'none'}
            fill="none"
            markerEnd="url(#arrow-green)"
          />
          <text x="910" y="275" fill="#34d399" fontSize="8" fontFamily="monospace">
            VERIFICATION
          </text>

          {/* Water Discharge from Pipe back to Rice Paddy (Hydraulic Closure) */}
          <path
            d="M 1055 370 L 1055 500 Q 1055 520 1000 520 L 465 520"
            stroke="#0284c7"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            fill="none"
            markerEnd="url(#arrow-blue)"
          />
          <text x="750" y="514" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">
            HYDRAULIC IRRIGATION DISCHARGE CANAL TO PADDY
          </text>
        </svg>
      </div>

      {/* Selected Entity Technical Detail Workbench */}
      <div className="rounded-xl border border-emerald-500/30 bg-[#0c150e] p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1b2e21] pb-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              {activeComponent.category}
            </span>
            <span className="text-white font-semibold text-sm">{activeComponent.label}</span>
          </div>
          <span className="text-slate-400 text-[11px] bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
            {activeComponent.thesisRef}
          </span>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed font-sans">
          {activeComponent.description}
        </p>

        {activeComponent.subcomponents && (
          <div className="pt-2 border-t border-[#1b2e21]/50">
            <div className="text-xs font-mono uppercase text-slate-400 mb-2">
              Verified Hardware Subcomponents &amp; Roles:
            </div>
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
