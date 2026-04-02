import organisationData from "@/content/organisation.json";

export type BureauMember = {
  name: string;
  title: string;
  position: string;
  description: string;
  image: string | null;
  featured?: boolean;
  priority?: number;
};

export type Department = {
  title: string;
  services: string[];
};

export type HierarchyGroup = {
  title: string;
  items: string[];
};

export type TerritorialMember = {
  name: string;
  role: string;
  image: string;
};

export const governance = organisationData as {
  slogan: string;
  directionGeneral: BureauMember[];
  bureauMembers: BureauMember[];
  organs: string[];
  specializedOrgans: string[];
  departments: Department[];
  hierarchy: HierarchyGroup[];
  territorialRepresentation: TerritorialMember[];
};

export const directionGeneral = [...governance.directionGeneral].sort(
  (a, b) => (a.priority ?? 999) - (b.priority ?? 999),
);

export const bureauMembers = [...governance.bureauMembers].sort(
  (a, b) => (a.priority ?? 999) - (b.priority ?? 999),
);
