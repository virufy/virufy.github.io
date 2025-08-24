import type { TypeText } from './baseInterfaces';

export interface HomeType {
  introSection: WelcomeSection;
  section2: Section2;
}

interface WelcomeSection {
  text: string;
  text2: string;
  subText: TypeText[];
  buttonText: string;
  disclaimers: Array<string>;
  mainText2: string;
  subText2: TypeText[];
}

interface Section2 {
  text: string;
  subtext: string;
  title: Array<string>;
  sub: Array<string>;
  disclaimer: string;
  buttonText: string;
}
