import organisationData from "@/content/organisation.json";

export type BureauMember = {
  name: string;
  title: string;
  position: string;
  description: string;
  image: string | null;
  featured?: boolean;
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
