export interface Donate {
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
  icon: string;
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
  icon: string;
}

interface Banner {
  title: string;
  text: string[];
}
