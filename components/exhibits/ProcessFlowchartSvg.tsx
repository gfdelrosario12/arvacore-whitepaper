import React from 'react';

interface ProcessFlowchartSvgProps {
  currentStage?: 'sensing' | 'monitoring' | 'trigger' | 'pumping' | 'reflooded' | 'standby';
}

export const ProcessFlowchartSvg: React.FC<ProcessFlowchartSvgProps> = ({
  currentStage = 'standby',
}) => {
  return (
    <div className="w-full flex justify-center py-4">
      <svg
        viewBox="0 0 460 760"
        className="w-full max-w-md h-auto select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker id="flow-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#10b981" />
          </marker>
        </defs>

        {/* Start Node */}
        <rect x="180" y="20" width="100" height="36" rx="18" fill="#122418" stroke="#10b981" strokeWidth="1.5" />
        <text x="230" y="43" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">Start</text>

        {/* Down Arrow */}
        <line x1="230" y1="56" x2="230" y2="80" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Node 1: Water-level sensor */}
        <rect
          x="140"
          y="80"
          width="180"
          height="48"
          rx="6"
          fill={currentStage === 'sensing' ? '#1c3d26' : '#0c1810'}
          stroke={currentStage === 'sensing' ? '#34d399' : '#1b2e21'}
          strokeWidth="1.5"
        />
        <text x="230" y="102" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Water-level sensor</text>
        <text x="230" y="117" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Measures field level</text>

        <line x1="230" y1="128" x2="230" y2="150" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Node 2: ESP32 receives reading */}
        <rect x="140" y="150" width="180" height="42" rx="6" fill="#0c1810" stroke="#1b2e21" strokeWidth="1.5" />
        <text x="230" y="175" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">ESP32 receives reading</text>

        <line x1="230" y1="192" x2="230" y2="214" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Node 3: Transmit data via IoT */}
        <rect x="140" y="214" width="180" height="42" rx="6" fill="#0c1810" stroke="#1b2e21" strokeWidth="1.5" />
        <text x="230" y="239" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">Transmit data via IoT</text>

        <line x1="230" y1="256" x2="230" y2="278" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Node 4: Website dashboard */}
        <rect
          x="140"
          y="278"
          width="180"
          height="48"
          rx="6"
          fill={currentStage === 'monitoring' ? '#1c3d26' : '#0c1810'}
          stroke={currentStage === 'monitoring' ? '#34d399' : '#1b2e21'}
          strokeWidth="1.5"
        />
        <text x="230" y="300" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Website dashboard</text>
        <text x="230" y="315" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Displays water level</text>

        <line x1="230" y1="326" x2="230" y2="348" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Node 5: Farmer monitors */}
        <rect x="140" y="348" width="180" height="48" rx="6" fill="#0c1810" stroke="#1b2e21" strokeWidth="1.5" />
        <text x="230" y="370" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="sans-serif">Farmer / owner monitors</text>
        <text x="230" y="385" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Water-level status</text>

        <line x1="230" y1="396" x2="230" y2="420" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Decision 1: Below water-level threshold? */}
        <polygon
          points="230,420 315,455 230,490 145,455"
          fill={currentStage === 'trigger' ? '#33230d' : '#121e16'}
          stroke={currentStage === 'trigger' ? '#f59e0b' : '#10b981'}
          strokeWidth="1.5"
        />
        <text x="230" y="452" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Below level</text>
        <text x="230" y="465" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="sans-serif" fontWeight="bold">threshold?</text>

        {/* Decision 1 'No' branch -> Continue monitoring */}
        <line x1="315" y1="455" x2="380" y2="455" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#flow-arrow)" />
        <text x="335" y="445" fill="#94a3b8" fontSize="9" fontFamily="monospace">No</text>
        <rect x="345" y="465" width="95" height="38" rx="4" fill="#08100b" stroke="#1b2e21" />
        <text x="392" y="482" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Continue field</text>
        <text x="392" y="493" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">monitoring</text>

        {/* Return loop line from continue monitoring */}
        <path d="M 392 465 L 392 302 L 320 302" stroke="#1b2e21" strokeWidth="1" strokeDasharray="3 3" />

        {/* Decision 1 'Yes' branch */}
        <line x1="230" y1="490" x2="230" y2="520" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />
        <text x="240" y="508" fill="#34d399" fontSize="9" fontFamily="monospace">Yes</text>

        {/* Node 6: Activate pump */}
        <rect
          x="150"
          y="520"
          width="160"
          height="40"
          rx="6"
          fill={currentStage === 'pumping' ? '#1c3d26' : '#0c1810'}
          stroke={currentStage === 'pumping' ? '#10b981' : '#1b2e21'}
          strokeWidth="1.5"
        />
        <text x="230" y="545" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Activate pump</text>

        <line x1="230" y1="560" x2="230" y2="580" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Node 7: Irrigate rice field */}
        <rect x="150" y="580" width="160" height="36" rx="6" fill="#0c1810" stroke="#1b2e21" strokeWidth="1.5" />
        <text x="230" y="603" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="sans-serif">Irrigate rice field</text>

        <line x1="230" y1="616" x2="230" y2="636" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Node 8: Water level increases */}
        <rect x="150" y="636" width="160" height="36" rx="6" fill="#0c1810" stroke="#1b2e21" strokeWidth="1.5" />
        <text x="230" y="659" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="sans-serif">Water level increases</text>

        <line x1="230" y1="672" x2="230" y2="692" stroke="#10b981" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Decision 2: Desired level reached? */}
        <polygon
          points="230,692 310,722 230,752 150,722"
          fill={currentStage === 'reflooded' ? '#1c3d26' : '#121e16'}
          stroke={currentStage === 'reflooded' ? '#34d399' : '#10b981'}
          strokeWidth="1.5"
        />
        <text x="230" y="718" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Desired level</text>
        <text x="230" y="730" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="bold">reached?</text>

        {/* Decision 2 No -> keep pumping loop */}
        <path d="M 150 722 L 90 722 L 90 540 L 150 540" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#flow-arrow)" />
        <text x="80" y="630" fill="#f59e0b" fontSize="8" fontFamily="monospace" transform="rotate(-90 80,630)">No — keep pumping</text>
      </svg>
    </div>
  );
};

