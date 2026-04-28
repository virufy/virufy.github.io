import { type StaticImageData } from 'next/image';

export interface SevenSupportUs {
  introSection: IntroSection;
  impactSection: ImpactSection;
  pillars: Pillar[];
  donateOptions: DonateOptions;
  banner: Banner;
}

interface IntroSection {
  tag: string;
  title: string[];
  text: string;
  buttonText: string;
}

interface ImpactSection {
  title: string;
  description: string;
}

interface Pillar {
  title: string;
  description: string;
  icon: StaticImageData;
}

interface DonateOptions {
  title: string;
  subtitle: string;
  options: DonateOption[];
}

interface DonateOption {
  name: string;
  description: string;
  buttonText: string;
  url: string;
  icon: StaticImageData;
}

interface Banner {
  title: string;
  text: string[];
}
