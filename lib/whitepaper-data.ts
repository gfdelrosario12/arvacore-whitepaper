import { ResearchMetadata, DiagramComponent, DiagramConnection, EvaluationPillar, BudgetItem, BenefitCategory } from './types';

export const THESIS_METADATA: ResearchMetadata = {
  title: 'ARVACORE: AN IOT-BASED IRRIGATION MONITORING AND AUTOMATED WATER MANAGEMENT SYSTEM FOR RICE CULTIVATION',
  degree: 'Bachelor of Science in Computer Engineering',
  institution: 'Polytechnic University of the Philippines',
  campus: 'Sta. Mesa, Manila',
  date: 'September 2026',
  location: {
    barangay: 'Barangay Silang',
    municipality: 'Lopez',
    province: 'Quezon',
    country: 'Philippines',
    coordinates: '13.8824° N, 122.0621° E',
  },
  authors: [
    {
      name: 'Gladwin Ferdz I. Del Rosario',
      role: 'Project Lead & System Architect',
      contribution: 'Overall project lead, system architecture, cloud backend, decision engine logic, and web monitoring systems.',
      lead: true,
    },
    {
      name: 'Jenice Nicole C. Ramirez',
      role: 'Project Manager & Research Coordinator',
      contribution: 'Project management, research manuscript, analytical modeling, data survey executions, and user acceptability framework.',
      lead: false,
    },
    {
      name: 'Pranz Gabrielle N. Capucion',
      role: 'Hardware Architecture & Embedded Sensing',
      contribution: 'ESP microcontroller sensor node integration, ultrasonic water-level calibration, and electronics prototyping.',
      lead: false,
    },
  ],
  totalPages: 60,
};

export const SYSTEM_NOMENCLATURE = {
  etymology: {
    term: 'Arva',
    origin: 'Latin arvum',
    definition: 'meaning "fertile," "cultivated field," or "arable land"',
    statement: 'Arva is derived from the Latin word arvum, meaning "fertile," "cultivated field," or "arable land."',
  },
  subsystems: [
    {
      name: 'ArvaCore',
      role: 'Automated Irrigation Decision & Pump Actuation Controller',
      shortRole: 'Irrigation Pump Controller',
      description: 'The centralized closed-loop control unit and decision engine. Compares real-time field telemetry against hydrological thresholds, governs pump relay actuation, and performs in-line flow rate safety verification.',
      icon: 'core',
      hardwareFocus: 'ESP32 Control MCU, Industrial Digital Relay, In-line Flow Sensor Transducer',
    },
    {
      name: 'ArvaNode',
      role: 'Distributed Field Hydrology & Soil-Moisture Monitoring Nodes',
      shortRole: 'Paddy Monitoring Nodes',
      description: 'Solar-powered edge sensing stations deployed across paddy zones. Houses an acoustic ultrasonic water-level sensor suspended inside a perforated stilling well alongside a subsurface capacitive root-zone moisture probe.',
      icon: 'node',
      hardwareFocus: 'ESP MCU, HC-SR04 Ultrasonic Sensor, Perforated Stilling Well, Capacitive Soil Probe, 18650 Solar Pack',
    },
    {
      name: 'ArvaNet',
      role: 'Long-Range Wireless Internet Gateway & Agricultural Wi-Fi Base',
      shortRole: 'Internet Gateway & Field Wi-Fi',
      description: 'The on-site communication bridge. Collects wireless sensor telemetry from distributed ArvaNodes via RF/LoRa and relays authenticated data packages to cloud servers over cellular 4G LTE Cat-1 or field Wi-Fi.',
      icon: 'gateway',
      hardwareFocus: 'ESP32 Gateway Host, 900 MHz LoRa Transceiver, High-Gain Antenna, Air780E 4G LTE Cat-1 Uplink',
    },
    {
      name: 'ArvaLink',
      role: 'Farmer Web Telemetry Dashboard & Mobile Progressive Application',
      shortRole: 'Web Dashboard & Mobile App',
      description: 'The farmer-facing digital platform. Provides real-time ponded depth gauges, historical soil drying curves, automated irrigation alerts, remote pump override switches, and multi-node agricultural analytics.',
      icon: 'network',
      hardwareFocus: 'Responsive Web Application, Mobile Viewport Interface, Real-time WebSockets / REST API',
    },
  ],
};

export const INTRODUCTION_TEXT = {
  heading: 'Project Overview',
  subheading: 'IoT-enabled sensing and data-driven irrigation management for lowland rice agriculture.',
  problem: 'Rice cultivation in the Philippines relies predominantly on traditional continuous flooding, submerging fields under standing water throughout the season. This practice requires massive freshwater allocation and demands frequent, time-consuming manual field visits by farmers to inspect water levels across dispersed paddies.',
  monitoringNeed: 'Without timely, objective field-condition data, farmers must rely on visual guesswork. Changing weather patterns, fluctuating water supplies, and rising operational costs make consistent manual monitoring increasingly difficult and risky.',
  systemPurpose: 'ArvaCore is engineered as an accessible IoT-based agricultural monitoring and automated water management system. It aims to provide rice farmers with reliable, real-time visibility into field hydrology while supporting automated, threshold-based irrigation control.',
  architectureIntegration: 'The system connects configurable field-monitoring sensor nodes with an on-site gateway, a cloud-based data processing server, and an intuitive web dashboard. By continuously tracking water levels and soil conditions, ArvaCore delivers automated pump control and operational alerts to the farmer.',
  deploymentContext: 'Designed with the agricultural conditions of Barangay Silang in Lopez, Quezon as its benchmark, ArvaCore emphasizes practical field resilience, accessible hardware, and meaningful data for local farming communities.',
};

export const EVALUATION_PILLARS: EvaluationPillar[] = [
  {
    id: 'functionality',
    title: 'System Functionality & Sensor Precision',
    focus: 'Measurement fidelity and threshold execution',
    description: 'Assesses the accuracy of ultrasonic water-level tracking, soil moisture readings, and the responsiveness of automated pump activation and shutoff under controlled field trials.',
    evaluationMethod: 'Comparative bench trials against physical depth benchmarks and calibrated reference instruments.',
  },
  {
    id: 'reliability',
    title: 'Data Transmission & Operational Reliability',
    focus: 'Packet delivery and environment resilience',
    description: 'Evaluates the consistency of wireless data transmission between field nodes, local gateway transceivers, and cloud servers across humid, open agricultural conditions.',
    evaluationMethod: 'Continuous signal logging, packet delivery rate auditing, and hardware stability testing over repeated cycles.',
  },
  {
    id: 'usability',
    title: 'Interface Usability & User Acceptance',
    focus: 'Clarity, accessibility, and ease of use',
    description: 'Gathers structured user feedback from local rice farmers and agricultural practitioners regarding dashboard readability, alert comprehensibility, and overall system ease of operation.',
    evaluationMethod: 'Guided field interaction sessions, semi-structured usability interviews, and Technology Acceptance Model (TAM) survey assessments.',
  },
  {
    id: 'suitability',
    title: 'Practical Suitability & Operational Value',
    focus: 'Labor reduction and decision support',
    description: 'Measures the practical utility of remote monitoring in reducing avoidable in-person field inspections, supporting timely water decisions, and integrating with existing irrigation habits.',
    evaluationMethod: 'Field observation reports, operational feedback logs, and comparative workflow assessments.',
  },
];

export const ARCHITECTURE_COMPONENTS: DiagramComponent[] = [
  {
    id: 'field-conditions',
    label: 'Field Conditions (Rice Paddy)',
    category: 'field-sensing',
    technicalRole: 'Physical Environment',
    thesisRef: 'Chapter 3, Page 47, Figure 3',
    description: 'Paddy water depth, perched water table fluctuations, and root-zone volumetric soil moisture resulting from crop uptake, evaporation, and percolation in Barangay Silang, Lopez, Quezon.',
    subcomponents: ['Perched Water Layer (0 to +5 cm)', 'Active Rice Root Horizon (-15 cm)', 'Clayey Soil Horizon'],
    coordinates: { x: 40, y: 160, width: 200, height: 110 },
  },
  {
    id: 'field-nodes',
    label: 'ArvaNode: Field Monitoring Nodes',
    category: 'field-sensing',
    technicalRole: 'Edge Sensing & Processing Unit (ArvaNode)',
    thesisRef: 'Chapter 3, Page 47–48, Figure 3',
    description: 'Modular field units deployed at designated paddy locations. Each ArvaNode houses a low-power microcontroller, an ultrasonic distance sensor in a stilling well, a soil moisture probe, and a wireless transceiver. The node count is configurable according to parcel size and topography.',
    subcomponents: ['Microcontroller (ESP MCU)', 'Ultrasonic Distance Transducer', 'Soil Moisture Sensor Probe', 'Wireless Transceiver Module'],
    coordinates: { x: 280, y: 140, width: 230, height: 150 },
  },
  {
    id: 'gateway',
    label: 'ArvaNet: Internet Gateway & Wi-Fi',
    category: 'network',
    technicalRole: 'Internet Gateway & Wi-Fi Access Station (ArvaNet)',
    thesisRef: 'Chapter 1, Page 20; Chapter 3, Page 48',
    description: 'Primary intermediary gateway and Wi-Fi access station that receives wireless sensor packets from field monitoring nodes and forwards telemetry securely across cellular/network uplinks to the cloud application server.',
    subcomponents: ['Local Wireless Receiver', 'Wi-Fi Access & 4G LTE Cellular Uplink', 'Packet Forwarding Engine'],
    coordinates: { x: 550, y: 170, width: 170, height: 90 },
  },
  {
    id: 'application-server',
    label: 'Application Server & Database',
    category: 'processing',
    technicalRole: 'Central Telemetry Processing & Decision Engine',
    thesisRef: 'Chapter 3, Page 48–49, Figure 3',
    description: 'Cloud processing server that tags readings by node ID, persists time-series field data, evaluates conditions against configured water-level thresholds, and generates actuation commands.',
    subcomponents: ['Data Processing & Node Identification', 'System Database (Time-series Logs)', 'Threshold Evaluation Engine', 'Irrigation Command Dispatcher'],
    coordinates: { x: 760, y: 140, width: 220, height: 150 },
  },
  {
    id: 'web-dashboard',
    label: 'ArvaLink: Web Dashboard & Mobile App',
    category: 'user',
    technicalRole: 'Telemetry Visualization & Mobile Interface (ArvaLink)',
    thesisRef: 'Chapter 3, Page 48, Figure 3',
    description: 'Web dashboard and mobile application presenting real-time water elevation, soil moisture trends, node telemetry health, and pump activity logs for the farmer and agricultural advisors.',
    subcomponents: ['Real-Time Field Status Gauges', 'Historical Water Trends', 'Threshold Configuration Interface', 'Alert & Notification Center'],
    coordinates: { x: 760, y: 350, width: 220, height: 90 },
  },
  {
    id: 'user-operator',
    label: 'User (Farmer / Operator)',
    category: 'user',
    technicalRole: 'Human Decision Maker & Overseer',
    thesisRef: 'Chapter 3, Page 48, Figure 3',
    description: 'Farmer or agricultural irrigation manager who inspects field conditions remotely via mobile or desktop, drastically reducing frequent manual in-field inspections.',
    subcomponents: ['Remote Field Oversight', 'Manual Override Capability', 'Irrigation Water Accounting'],
    coordinates: { x: 1020, y: 350, width: 150, height: 90 },
  },
  {
    id: 'irrigation-mechanism',
    label: 'Centralized Irrigation Mechanism',
    category: 'actuation',
    technicalRole: 'Water Delivery Actuator',
    thesisRef: 'Chapter 3, Page 49, Figure 3',
    description: 'Centralized electric water pump actuated via digital relay upon receiving server irrigation-control commands, channeling water into the designated field distribution canal/pipe.',
    subcomponents: ['Digital Relay Actuator', 'Water Pump Motor', 'Irrigation Feed Line'],
    coordinates: { x: 1020, y: 140, width: 150, height: 90 },
  },
  {
    id: 'flow-sensor',
    label: 'In-Line Flow Sensor',
    category: 'actuation',
    technicalRole: 'Closed-Loop Hydraulic Verification',
    thesisRef: 'Chapter 3, Page 49, Figure 3',
    description: 'Pulse flow meter situated in the main irrigation pipe. Measures delivered water flow, verifies pump discharge, and flags anomalies when unintended water movement occurs.',
    subcomponents: ['Turbine/Rotor Pulse Transducer', 'Flow Verification Logic', 'Anomaly & Leak Detection Loop'],
    coordinates: { x: 1020, y: 240, width: 150, height: 80 },
  },
];

export const ARCHITECTURE_CONNECTIONS: DiagramConnection[] = [
  {
    id: 'conn-field-to-nodes',
    sourceId: 'field-conditions',
    targetId: 'field-nodes',
    label: 'Acoustic Time-of-Flight & Soil Moisture',
    type: 'data',
    animated: true,
  },
  {
    id: 'conn-nodes-to-gateway',
    sourceId: 'field-nodes',
    targetId: 'gateway',
    label: 'Wireless Sensor Telemetry',
    type: 'wireless',
    animated: true,
  },
  {
    id: 'conn-gateway-to-server',
    sourceId: 'gateway',
    targetId: 'application-server',
    label: 'Internet Connection / Cellular Uplink',
    type: 'internet',
    animated: true,
  },
  {
    id: 'conn-server-to-dashboard',
    sourceId: 'application-server',
    targetId: 'web-dashboard',
    label: 'Data Visualization Stream',
    type: 'data',
    animated: true,
    bidirectional: true,
  },
  {
    id: 'conn-dashboard-to-user',
    sourceId: 'web-dashboard',
    targetId: 'user-operator',
    label: 'Remote Monitoring Interface',
    type: 'data',
    animated: false,
    bidirectional: true,
  },
  {
    id: 'conn-server-to-pump',
    sourceId: 'application-server',
    targetId: 'irrigation-mechanism',
    label: 'Irrigation-Control Command',
    type: 'control',
    animated: true,
  },
  {
    id: 'conn-pump-to-flow',
    sourceId: 'irrigation-mechanism',
    targetId: 'flow-sensor',
    label: 'Centralized Water Delivery Line',
    type: 'hydraulic',
    animated: true,
  },
  {
    id: 'conn-flow-to-server',
    sourceId: 'flow-sensor',
    targetId: 'application-server',
    label: 'Flow Feedback / Verification Pulses',
    type: 'data',
    animated: true,
  },
];

export const EXPECTED_BENEFITS: BenefitCategory[] = [
  {
    id: 'farmers',
    title: 'Potential Benefits for Rice Farmers',
    tagline: 'Reducing routine field travel through remote digital visibility',
    description: 'Providing rice farmers with real-time access to actual field water and soil conditions through an accessible web interface, supporting faster and more confident irrigation management.',
    points: [
      'Remote visibility into paddy water elevation and soil moisture curves without requiring twice-daily trek visits.',
      'Timely alerts when water drops below configured critical levels, helping prevent unintended root-zone moisture stress.',
      'Potential reductions in routine manual monitoring travel, labor time, and operating fuel costs.',
      'Data-supported irrigation decisions rather than relying solely on visual guesswork across spread-out plots.',
    ],
  },
  {
    id: 'environment',
    title: 'Environmental & Resource Management Potential',
    tagline: 'Establishing baseline data for responsible water stewardship',
    description: 'Continuous digital records help farmers understand actual water consumption trends and plan irrigation more deliberately.',
    points: [
      'Empirical tracking of perched water elevation and subsurface soil moisture retention over full crop cycles.',
      'Historical trend logging providing an objective basis for evaluating and comparing different irrigation schedules.',
      'Sensor-informed pumping helps avoid excessive over-irrigation and minimizes unnecessary water withdrawal from local canals or aquifers.',
      'Foundational telemetry architecture supporting future research into water-use efficiency and ecological impact.',
    ],
  },
  {
    id: 'community',
    title: 'Potential for Irrigation Communities',
    tagline: 'Supporting fair coordination across shared water infrastructure',
    description: 'In agricultural cooperatives and shared irrigation systems, transparent field data can help farmers coordinate water allocation and maintenance.',
    points: [
      'Shared visibility into field conditions across multiple parcel quadrants to improve pumping schedules.',
      'Objective historical records to inform cooperative discussions on water allocation and pump maintenance costs.',
      'Early detection of flow anomalies or delivery disruptions in shared irrigation supply lines.',
      'A practical reference for community-level digital monitoring in agrarian agrarian settings.',
    ],
  },
  {
    id: 'research',
    title: 'Scientific & Engineering Research Value',
    tagline: 'Evaluating low-cost cyber-physical systems under tropical conditions',
    description: 'The project provides an open, documented case study for deploying low-power IoT sensing and closed-loop control in tropical agricultural environments.',
    points: [
      'Bench-testing and field validation of ultrasonic distance sensors and soil moisture probes in humid paddy environments.',
      'Evaluating low-power wireless transmission reliability across open agricultural terrain.',
      'Assessing the usability and adoption factors of agricultural dashboards among rural farming practitioners.',
      'Documenting field challenges, hardware resilience, and integration requirements for future agricultural IoT researchers.',
    ],
  },
];

export const BUDGET_ITEMS: BudgetItem[] = [
  // 1. ArvaNode Supplied
  {
    category: 'ArvaNode',
    item: 'ESP8266 Microcontroller Board',
    costPhp: 150,
    type: 'supplied',
    notes: 'Low-power Wi-Fi microcontroller unit for sensor acquisition',
  },
  {
    category: 'ArvaNode',
    item: 'Soil Moisture Sensor Probe',
    costPhp: 170,
    type: 'supplied',
    notes: 'Root-zone moisture detection probe',
  },
  {
    category: 'ArvaNode',
    item: 'HC-SR04 Ultrasonic Distance Sensor',
    costPhp: 55,
    type: 'supplied',
    notes: 'Acoustic ToF water elevation transducer',
  },
  {
    category: 'ArvaNode',
    item: '18650 Battery Holder',
    costPhp: 29,
    type: 'supplied',
    notes: 'Single-cell battery carrier',
  },
  {
    category: 'ArvaNode',
    item: 'Solar Panel (Field Unit)',
    costPhp: 299,
    type: 'supplied',
    notes: 'Photovoltaic recharging unit for field autonomy',
  },
  {
    category: 'ArvaNode',
    item: '134N3P Boost / Charging / Protection Module',
    costPhp: 28,
    type: 'supplied',
    notes: 'Battery charge management & 5V boost circuit',
  },
  {
    category: 'ArvaNode',
    item: 'PKCell 18650 Rechargeable Battery',
    costPhp: 185,
    type: 'supplied',
    notes: 'Lithium-ion energy storage cell',
  },
  {
    category: 'ArvaNode',
    item: 'Miscellaneous Allowance (Wiring & Passive Components)',
    costPhp: 100,
    type: 'supplied',
    notes: 'Connectors, resistors, heat shrink, terminal blocks',
  },

  // 2. ArvaNet Gateway Supplied
  {
    category: 'ArvaNet',
    item: 'ESP32-WROOM-32 DevKit Board',
    costPhp: 299,
    type: 'supplied',
    notes: 'Dual-core MCU for gateway packet routing & management',
  },
  {
    category: 'ArvaNet',
    item: '900 MHz External Antenna',
    costPhp: 300,
    type: 'supplied',
    notes: 'High-gain omnidirectional wireless antenna',
  },
  {
    category: 'ArvaNet',
    item: 'Air780E Cat-1 4G LTE Cellular Module',
    costPhp: 750,
    type: 'supplied',
    notes: 'WAN uplink transceiver for remote cloud server connectivity',
  },
  {
    category: 'ArvaNet',
    item: 'E32-900T20D V8 LoRa / Sub-GHz Transceiver',
    costPhp: 675,
    type: 'supplied',
    notes: 'Long-range field telemetry RF transceiver',
  },
  {
    category: 'ArvaNet',
    item: '18650 4-Cell Battery Holder',
    costPhp: 79,
    type: 'supplied',
    notes: 'Multi-cell battery pack holder',
  },
  {
    category: 'ArvaNet',
    item: 'Solar Panel (Gateway Unit)',
    costPhp: 299,
    type: 'supplied',
    notes: 'Continuous solar power replenishment for hub',
  },
  {
    category: 'ArvaNet',
    item: 'CN3065 Solar Lithium Battery Charger',
    costPhp: 80,
    type: 'supplied',
    notes: 'Solar MPPT charging controller board',
  },
  {
    category: 'ArvaNet',
    item: 'Battery Protection & BMS Board',
    costPhp: 89,
    type: 'supplied',
    notes: 'Over-discharge, short-circuit & balancing protection',
  },
  {
    category: 'ArvaNet',
    item: 'Four PKCell 18650 Batteries (Combined Set)',
    costPhp: 680,
    type: 'supplied',
    notes: 'Combined set of 4 rechargeable 18650 cells for gateway pack',
  },
  {
    category: 'ArvaNet',
    item: 'XL6009 / LM2577 DC-DC Boost Converter',
    costPhp: 59,
    type: 'supplied',
    notes: 'Voltage stabilization for cellular and RF modules',
  },
  {
    category: 'ArvaNet',
    item: 'Miscellaneous Allowance (Antenna Feed & Cables)',
    costPhp: 100,
    type: 'supplied',
    notes: 'SMA pigtails, headers, and enclosure cabling',
  },

  // 3. ArvaCore Control & Preliminary Deployment Estimates (₱13,574)
  {
    category: 'ArvaCore',
    item: 'ESP32-WROOM-32 DevKit Actuation Board',
    costPhp: 299,
    type: 'supplied',
    notes: 'Core controller board for pump actuation & flow signal handling',
  },
  {
    category: 'ArvaCore',
    item: 'Optocoupled Industrial SPDT Relay Actuation Module',
    costPhp: 380,
    type: 'estimated',
    notes: 'High-current galvanic isolation module triggering pump contactor',
  },
  {
    category: 'ArvaCore',
    item: 'In-Line Hall-Effect Turbine Water Flow Sensor & Couplers',
    costPhp: 850,
    type: 'estimated',
    notes: 'Pipe flow meter and plumbing adaptors for volumetric verification',
  },
  {
    category: 'Assembly & Deployment',
    item: 'IP66 Weatherproof Enclosures & Perforated PVC Stilling Wells',
    costPhp: 2450,
    type: 'estimated',
    notes: 'Waterproof electrical boxes, cable glands, and field water tubes for stilling water surface',
  },
  {
    category: 'Assembly & Deployment',
    item: 'Field Mounting Hardware, Brackets & Ground Staking Apparatus',
    costPhp: 1650,
    type: 'estimated',
    notes: 'Corrosion-resistant aluminum brackets, stakes, and outdoor cable ties',
  },
  {
    category: 'Assembly & Deployment',
    item: 'Cellular SIM Data, Connectivity Allowance & Cloud Host Setup',
    costPhp: 1850,
    type: 'estimated',
    notes: 'Field data telemetry SIM cards and prototype cloud database instances',
  },
  {
    category: 'Assembly & Deployment',
    item: 'Field Assembly Consumables, Solder, Gaskets & Heatshrink',
    costPhp: 1100,
    type: 'estimated',
    notes: 'Silicone marine sealant, terminal strips, test leads, and potting compound',
  },
  {
    category: 'Assembly & Deployment',
    item: 'Transportation, Field Testing & Farmer Calibration Logistics',
    costPhp: 3200,
    type: 'estimated',
    notes: 'Travel and transport to Barangay Silang, Lopez, Quezon and on-site testing supplies',
  },
  {
    category: 'Contingency',
    item: 'Contingency Allowance for Component Price Variation & Spares',
    costPhp: 1795,
    type: 'estimated',
    notes: 'Reserve buffer for backup sensors, wiring replacements, and supplier price fluctuations',
  },
];

// All budget figures below are DERIVED from BUDGET_ITEMS so that subtotals,
// the grand total, and headroom can never drift from the displayed line items.
// Expected values (verified 2026-10-12):
//   ArvaNode ₱1,016 | ArvaNet ₱3,410 | ArvaCore ₱1,529 (₱299 supplied + ₱1,230 est.)
//   Assembly & Deployment ₱10,250 | Contingency ₱1,795
//   Total ₱18,000 | Target ₱25,000 | Headroom ₱7,000
export const BUDGET_GROUPS = ['ArvaNode', 'ArvaNet', 'ArvaCore', 'Assembly & Deployment', 'Contingency'] as const;

const sumCost = (items: BudgetItem[]) => items.reduce((total, item) => total + item.costPhp, 0);

const FUNDING_TARGET_PHP = 25000;
const totalEstimatedExpenses = sumCost(BUDGET_ITEMS);

export const BUDGET_SUMMARY = {
  groupSubtotals: BUDGET_GROUPS.map((group) => ({
    group,
    subtotal: sumCost(BUDGET_ITEMS.filter((item) => item.category === group)),
  })),
  suppliedPriceSubtotal: sumCost(BUDGET_ITEMS.filter((item) => item.type === 'supplied')),
  estimatedPriceSubtotal: sumCost(BUDGET_ITEMS.filter((item) => item.type === 'estimated')),
  totalEstimatedExpenses,
  fundingTarget: FUNDING_TARGET_PHP,
  budgetHeadroom: FUNDING_TARGET_PHP - totalEstimatedExpenses,
  location: 'Barangay Silang, Lopez, Quezon Province',
};
