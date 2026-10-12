import React from 'react';
import { TelemetryBadge } from '../ui/TelemetryBadge';

export const PhysicalNodesSection: React.FC = () => {
  return (
    <section id="act-hardware" className="py-16 sm:py-24 border-b border-[#1b2e21] bg-[#080e0a]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-emerald-400">ACT 02</span>
          <span className="h-3 w-[1px] bg-slate-700" />
          <span className="font-mono text-xs text-slate-400 uppercase">CHAPTER 2: EMBEDDED SENSING DOMAIN</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
          The Physical Domain &amp; Configurable Field Monitoring Nodes
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-10 max-w-3xl">
          To overcome the microtopographical unevenness and soil variability typical of Philippine lowland paddies, ArvaCore avoids single-point sensing in favor of a configurable network of modular field-monitoring nodes (<span className="font-mono text-emerald-400 font-semibold">N sensor nodes</span>) deployed across representative paddy zones.
        </p>

        {/* Dynamic Nodes Specification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Processing Unit */}
          <div className="rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1b2e21] pb-3">
              <span className="font-mono text-xs font-bold text-emerald-400">EDGE CONTROLLER</span>
              <TelemetryBadge label="MCU" value="Low-Power ESP MCU" variant="emerald" />
            </div>
            <h3 className="text-lg font-semibold text-white">Microcontroller Platform</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Each field node features a dedicated microcontroller board providing digital and analog I/O alongside wireless radio capabilities. The MCU periodically samples water-level distance transducers and soil moisture probes, computes running averages to filter ripple noise, and packages serialized frames for transmission to the field gateway.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-[#1b2e21]/50">
              <div>PLATFORM: <span className="text-white">ESP Architecture</span></div>
              <div>ADC RESOLUTION: <span className="text-white">Multichannel SAR</span></div>
              <div>WIRELESS: <span className="text-white">RF / Wi-Fi Telemetry</span></div>
              <div>POWER MGMT: <span className="text-white">Deep Sleep Cycling</span></div>
            </div>
          </div>

          {/* Card 2: Ultrasonic Water-Level Sensing */}
          <div className="rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1b2e21] pb-3">
              <span className="font-mono text-xs font-bold text-cyan-400">WATER LEVEL TRANSDUCER</span>
              <TelemetryBadge label="RANGE" value="2 cm – 400 cm" variant="cyan" />
            </div>
            <h3 className="text-lg font-semibold text-white">Ultrasonic Acoustic Echo Transducer</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Measures the physical distance between the transducer and the ponded water surface by emitting high-frequency ultrasonic acoustic pulses (40 kHz) and calculating the round-trip time-of-flight. Mounted above the paddy inside an open perforated field well to protect against wind ripples and foliage interference while maintaining non-contact reliability.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-[#1b2e21]/50">
              <div>PRINCIPLE: <span className="text-white">Time-of-Flight (ToF)</span></div>
              <div>FREQUENCY: <span className="text-white">40 kHz Ultrasonic</span></div>
              <div>CONTACT: <span className="text-white">Non-Contact</span></div>
              <div>TARGET TOLERANCE: <span className="text-emerald-400">±5.0% Benchmark</span></div>
            </div>
          </div>

          {/* Card 3: Root-Zone Soil Moisture Probe */}
          <div className="rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1b2e21] pb-3">
              <span className="font-mono text-xs font-bold text-amber-400">SOIL SENSING</span>
              <TelemetryBadge label="DEPTH" value="-15 cm (Root Zone)" variant="amber" />
            </div>
            <h3 className="text-lg font-semibold text-white">Subsurface Soil-Moisture Sensor</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Inserted into the root horizon (0 to -15 cm depth) to quantify volumetric water content (VWC) in the soil matrix. When surface ponding recedes below 0 cm, this sensor verifies whether moisture remains available to rice roots or if immediate reflooding is necessary to prevent crop stress.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-[#1b2e21]/50">
              <div>METRIC: <span className="text-white">Volumetric Water %</span></div>
              <div>PLACEMENT: <span className="text-white">Root Mass Zone</span></div>
              <div>ROLE: <span className="text-white">Root Moisture Safety</span></div>
              <div>SOIL TYPE: <span className="text-white">Barangay Silang Clay</span></div>
            </div>
          </div>

          {/* Card 4: Environmental & Mechanical Housing */}
          <div className="rounded-xl border border-[#1b2e21] bg-[#0c150e] p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1b2e21] pb-3">
              <span className="font-mono text-xs font-bold text-slate-300">FIELD ENCLOSURE</span>
              <TelemetryBadge label="TOPOLOGY" value="N Configurable Nodes" variant="neutral" />
            </div>
            <h3 className="text-lg font-semibold text-white">Weatherproof Field Enclosure &amp; Power</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Deployed in exposed, humid, and mud-prone paddy environments. Electronics are housed in sealed IP-rated enclosures mounted on rigid agricultural stakes with perforated stilling wells anchoring into the mud to create a calm water column.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-[#1b2e21]/50">
              <div>STATION TYPE: <span className="text-white">Modular Staking</span></div>
              <div>TOPOLOGY: <span className="text-white">Scalable N Nodes</span></div>
              <div>WELL SYSTEM: <span className="text-white">Perforated Tube</span></div>
              <div>POWER OPTION: <span className="text-white">Solar / 18650 Pack</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
