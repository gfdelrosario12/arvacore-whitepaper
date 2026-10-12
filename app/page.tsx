import { ReadingHeader } from '@/components/navigation/ReadingHeader';
import { AcademicHero } from '@/components/hero/AcademicHero';
import { AgronomicContextSection } from '@/components/sections/AgronomicContextSection';
import { PhysicalNodesSection } from '@/components/sections/PhysicalNodesSection';
import { SystemArchitectureSection } from '@/components/sections/SystemArchitectureSection';
import { DecisionLogicSection } from '@/components/sections/DecisionLogicSection';
import { EvaluationApproachSection } from '@/components/sections/EvaluationApproachSection';
import { ExpectedBenefitsSection } from '@/components/sections/ExpectedBenefitsSection';
import { FundraisingSection } from '@/components/sections/FundraisingSection';
import { ConceptualFrameworkSvg } from '@/components/exhibits/ConceptualFrameworkSvg';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080e0a]">
      {/* Sticky Reading Navigation Header */}
      <ReadingHeader />

      {/* Act 0: Prologue & Editorial Hero */}
      <AcademicHero />

      {/* Act 1: Agronomic Context & Problem Setting */}
      <AgronomicContextSection />

      {/* Act 2: Physical Domain & Configurable Monitoring Nodes */}
      <PhysicalNodesSection />

      {/* Conceptual Framework Exhibit (Figure 1) */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
        <ConceptualFrameworkSvg />
      </div>

      {/* Act 3: Farm-to-Digital System Architecture (Figure 3) */}
      <SystemArchitectureSection />

      {/* Act 4: Closed-Loop Decision Dynamics & Simulation (Figure 2) */}
      <DecisionLogicSection />

      {/* Act 5: Evaluation Approach & Technical Benchmarks */}
      <EvaluationApproachSection />

      {/* Act 6: Expected Benefits & Project Value */}
      <ExpectedBenefitsSection />

      {/* Act 7: Deployment Fundraising */}
      <FundraisingSection />
    </main>
  );
}
