import React from 'react';
import { FigureFrame } from '../ui/FigureFrame';

export const ConceptualFrameworkSvg: React.FC = () => {
  return (
    <FigureFrame
      figureNumber="1"
      title="Diagram of Conceptual Framework"
      thesisRef="Chapter 1, Page 14"
      caption="The development and evaluation of ArvaCore follow a structured three-phase Input-Process-Output workflow integrating hardware specifications, water-level thresholds, system assembly, sensor calibration, and statistical user-acceptability modeling."
    >
      <div className="p-6 sm:p-8 flex flex-col items-center justify-center">
        <svg
          viewBox="0 0 900 380"
          className="w-full max-w-4xl h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connecting Arrows between phases */}
          <defs>
            <marker
              id="arrowhead-ipo"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
            </marker>
          </defs>

          {/* Flow line: Input -> Process */}
          <line
            x1="270"
            y1="190"
            x2="330"
            y2="190"
            stroke="#10b981"
            strokeWidth="2.5"
            markerEnd="url(#arrowhead-ipo)"
          />

          {/* Flow line: Process -> Output */}
          <line
            x1="570"
            y1="190"
            x2="630"
            y2="190"
            stroke="#10b981"
            strokeWidth="2.5"
            markerEnd="url(#arrowhead-ipo)"
          />

          {/* BOX 1: INPUT */}
          <g>
            <rect
              x="30"
              y="50"
              width="240"
              height="280"
              rx="8"
              fill="#0d1811"
              stroke="#1b2e21"
              strokeWidth="1.5"
            />
            {/* Header pill */}
            <rect x="30" y="50" width="240" height="42" rx="8" fill="#122418" />
            <text x="150" y="76" textAnchor="middle" fill="#34d399" fontSize="14" fontFamily="monospace" fontWeight="bold">
              INPUT PHASE
            </text>

            {/* Content items */}
            <g fontSize="11" fill="#cbd5e1" fontFamily="sans-serif">
              <text x="50" y="120" fontWeight="bold" fill="#f8fafc">• Hardware &amp; Software:</text>
              <text x="60" y="138" fill="#94a3b8">- ESP32 Microcontrollers</text>
              <text x="60" y="154" fill="#94a3b8">- Ultrasonic &amp; Soil Moisture</text>
              <text x="60" y="170" fill="#94a3b8">- Centralized Water Pump &amp; Flow Meter</text>

              <text x="50" y="202" fontWeight="bold" fill="#f8fafc">• Water-Level Thresholding:</text>
              <text x="60" y="220" fill="#94a3b8">- Critical soil depth (-15 cm)</text>
              <text x="60" y="236" fill="#94a3b8">- Target reflooding level (+5 cm)</text>

              <text x="50" y="268" fontWeight="bold" fill="#f8fafc">• TAM User Evaluation Criteria:</text>
              <text x="60" y="286" fill="#94a3b8">- Functionality &amp; Reliability</text>
              <text x="60" y="302" fill="#94a3b8">- Usability &amp; Operational Efficiency</text>
            </g>
          </g>

          {/* BOX 2: PROCESS */}
          <g>
            <rect
              x="330"
              y="50"
              width="240"
              height="280"
              rx="8"
              fill="#0d1811"
              stroke="#1b2e21"
              strokeWidth="1.5"
            />
            {/* Header pill */}
            <rect x="330" y="50" width="240" height="42" rx="8" fill="#122418" />
            <text x="450" y="76" textAnchor="middle" fill="#38bdf8" fontSize="14" fontFamily="monospace" fontWeight="bold">
              PROCESS PHASE
            </text>

            {/* Content items */}
            <g fontSize="11" fill="#cbd5e1" fontFamily="sans-serif">
              <text x="350" y="120" fontWeight="bold" fill="#f8fafc">• System Prototyping &amp; Assembly:</text>
              <text x="360" y="138" fill="#94a3b8">- Physical node fabrication</text>
              <text x="360" y="154" fill="#94a3b8">- Circuit soldering &amp; enclosures</text>
              <text x="360" y="170" fill="#94a3b8">- Actuator relay interface integration</text>

              <text x="350" y="202" fontWeight="bold" fill="#f8fafc">• Sensor Data Logging &amp; Validation:</text>
              <text x="360" y="220" fill="#94a3b8">- Repeated trials vs reference meters</text>
              <text x="360" y="236" fill="#94a3b8">- Error calculation (±5% tolerance)</text>
              <text x="360" y="252" fill="#94a3b8">- Response latency timing (≤30s)</text>

              <text x="350" y="284" fontWeight="bold" fill="#f8fafc">• Survey Administration:</text>
              <text x="360" y="302" fill="#94a3b8">- Field validation sessions</text>
            </g>
          </g>

          {/* BOX 3: OUTPUT */}
          <g>
            <rect
              x="630"
              y="50"
              width="240"
              height="280"
              rx="8"
              fill="#0d1811"
              stroke="#1b2e21"
              strokeWidth="1.5"
            />
            {/* Header pill */}
            <rect x="630" y="50" width="240" height="42" rx="8" fill="#122418" />
            <text x="750" y="76" textAnchor="middle" fill="#f59e0b" fontSize="14" fontFamily="monospace" fontWeight="bold">
              OUTPUT PHASE
            </text>

            {/* Content items */}
            <g fontSize="11" fill="#cbd5e1" fontFamily="sans-serif">
              <text x="650" y="125" fontWeight="bold" fill="#f8fafc">• Validated ArvaCore Prototype:</text>
              <text x="660" y="145" fill="#94a3b8">- Fully functional IoT hardware</text>
              <text x="660" y="162" fill="#94a3b8">- Real-time web dashboard</text>
              <text x="660" y="179" fill="#94a3b8">- Automated closed-loop pumping</text>
              <text x="660" y="196" fill="#94a3b8">- Flow verification mechanism</text>

              <text x="650" y="235" fontWeight="bold" fill="#f8fafc">• Statistical Acceptability Report:</text>
              <text x="660" y="255" fill="#94a3b8">- Weighted means across 4 TAM pillars</text>
              <text x="660" y="272" fill="#94a3b8">- Quantitative adoption readiness</text>
              <text x="660" y="289" fill="#94a3b8">- Documentation for NIA &amp; farmers</text>
            </g>
          </g>
        </svg>
      </div>
    </FigureFrame>
  );
};

