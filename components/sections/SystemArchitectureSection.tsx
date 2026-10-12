import React from 'react';
import { ArchitectureVisualizer } from '../exhibits/ArchitectureVisualizer';
import { ArchitectureMobileStack } from '../exhibits/ArchitectureMobileStack';
import { FigureFrame } from '../ui/FigureFrame';

export const SystemArchitectureSection: React.FC = () => {
  return (
    <section id="act-architecture" className="py-16 sm:py-24 border-b border-[#1b2e21] bg-[#09100b]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-emerald-400">ACT 03</span>
          <span className="h-3 w-[1px] bg-slate-700" />
          <span className="font-mono text-xs text-slate-400 uppercase">CHAPTER 3: SYSTEM BLOCK DIAGRAM</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6">
          Farm-to-Digital System Architecture
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-8 max-w-3xl">
          Derived strictly from Thesis Figure 3, the architecture illustrates the end-to-end telemetry pipeline: from physical paddy soil-water dynamics across configurable field-monitoring nodes, through the IoT gateway and cloud application server, to the closed-loop centralized irrigation pump and inline flow verification sensor.
        </p>

        {/* Figure 3 Exhibit */}
        <FigureFrame
          figureNumber="3"
          title="ArvaCore System Block Diagram & Field IoT Topology"
          thesisRef="Chapter 3, Page 47"
          caption="The complete hardware, network, and software topology of ArvaCore. Sensor readings from four modular field nodes pass over Wi-Fi to a central gateway, routing to the application server and web dashboard. Server commands trigger the irrigation pump, with delivered water flow verified by an inline flow sensor."
        >
          <div className="p-4 sm:p-6">
            <ArchitectureVisualizer />
            <ArchitectureMobileStack />
          </div>
        </FigureFrame>
      </div>
    </section>
  );
};

