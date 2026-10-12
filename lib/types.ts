export interface Author {
  name: string;
  role: string;
  contribution: string;
  lead?: boolean;
}

export interface ResearchMetadata {
  title: string;
  degree: string;
  institution: string;
  campus: string;
  date: string;
  location: {
    barangay: string;
    municipality: string;
    province: string;
    country: string;
    coordinates: string;
  };
  authors: Author[];
  totalPages: number;
}

export interface TelemetryReading {
  nodeId: string;
  waterLevelCm: number;
  soilMoisturePct: number;
  status: 'optimal' | 'drying' | 'critical' | 'reflooding';
  lastSeen: string;
  signalRssi: string;
}

export interface DiagramComponent {
  id: string;
  label: string;
  category: 'field-sensing' | 'network' | 'processing' | 'user' | 'actuation';
  technicalRole: string;
  thesisRef: string;
  description: string;
  subcomponents?: string[];
  coordinates: { x: number; y: number; width: number; height: number };
}

export interface DiagramConnection {
  id: string;
  sourceId: string;
  targetId: string;
  label: string;
  type: 'wireless' | 'internet' | 'data' | 'control' | 'hydraulic';
  animated: boolean;
  bidirectional?: boolean;
}

export interface FlowchartNode {
  id: string;
  label: string;
  type: 'terminal' | 'process' | 'decision';
  stepNumber?: number;
  nextTrue?: string;
  nextFalse?: string;
  next?: string;
  subtext?: string;
}

export interface EvaluationPillar {
  id: string;
  title: string;
  focus: string;
  description: string;
  evaluationMethod: string;
}

export interface BudgetItem {
  category: string;
  item: string;
  costPhp: number;
  type: 'supplied' | 'estimated';
  notes: string;
}

export interface BenefitCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface CitationItem {
  id: string;
  authors: string;
  year: number;
  title: string;
  publication: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
}
