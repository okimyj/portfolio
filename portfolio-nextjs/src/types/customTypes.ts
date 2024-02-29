import { DocumentData } from 'firebase/firestore';
export interface ICustomDocumentData extends DocumentData {
  id: string;
}

export interface GuestBookData extends ICustomDocumentData {
  writer?: string;
  password?: string;
  contents?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export type ProjectData = {
  name: string;
  period: string;
  description: string;
  whatDidIDo: string[];
  techStack: string[];
};
export type ExperienceData = {
  companyName: string;
  period: string;
  position: string;
  projects: ProjectData[];
};
