import { type StaticImageData } from 'next/image';

export interface People {
  titleImage: string;
  sectionMeetOurFounder: sectionMeetOurFounder;
  sectionAdvisors: sectionAdvisors;
}

export interface sectionMeetOurFounder {
  titleMeetOurFounder: string;
  titleAmil: string;
  textAmil: string;
  button: string;
}

export interface sectionAdvisors {
  title: string;
  advisors: AdvisorsMap;
  advisorOrder: AdvisorOrder;
}
export type AdvisorsMap = Record<string, Advisor>;
export type AdvisorOrder = (keyof AdvisorsMap)[];

type Advisor = {
  img: StaticImageData;
  name: string;
  role: string;
  texts: string[];
  link: string;
};
