export type ConstraintId =
  | 'subgrade_watertable'
  | 'urban_infill_shoring'
  | 'architectural_boardform'
  | 'mass_pour_thermal'
  | 'cold_weather_curing'
  | 'post_tensioned_cantilever'
  | 'fast_track_sequencing';

export type ServiceId =
  | 'engineered_formwork'
  | 'reinforcement_placement'
  | 'architectural_concrete'
  | 'mass_civil_placement'
  | 'shoring_falsework';

export interface ProjectConstraint {
  id: ConstraintId;
  code: string; // e.g. "C-01"
  title: string;
  category: string;
  summary: string;
  technicalParameters: {
    label: string;
    value: string;
  }[];
  mitigationMethod: string;
  codeStandard: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  client: string;
  structuralEngineer: string;
  year: string;
  sector: 'Civil Infrastructure' | 'Architectural Commercial' | 'Industrial & Transit' | 'Institutional';
  volume: string;
  primaryConstraintId: ConstraintId;
  secondaryConstraintIds: ConstraintId[];
  serviceIds: ServiceId[];
  image: string;
  headline: string;
  summary: string;
  challenge: string;
  engineeringSolution: string;
  keySpecs: {
    label: string;
    value: string;
  }[];
  isFeaturedHome: boolean;
}

export interface ServiceDetail {
  id: ServiceId;
  code: string; // e.g. "S-01"
  title: string;
  kicker: string;
  description: string;
  image: string;
  tolerances: string[];
  equipmentSystems: string[];
  solvedConstraintIds: ConstraintId[];
  deliverables: string[];
}

export interface StepSequence {
  step: string;
  title: string;
  specification: string;
  checkCriteria: string;
}
