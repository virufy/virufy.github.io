export interface Donate {
  heroSection: DonateHeroSection;
  donateSection: DonateSection;
}

interface DonateHeroSection {
  title: TitleText[];
}

interface TitleText {
  text: string;
}

interface DonateSection {
  title: string;
  text: string;
  contentBlocks: DonateContentBlock[];
  optionsTitle: string;
  optionsText: string;
  DonationsOptionsBlock: DonateOptionsBlock[];
}
interface DonateContentBlock {
  title: string;
  text: string;
  iconUrl: string;
}
interface DonateOptionsBlock {
  optionTitle: string;
  optionText: string;
  buttonText: string;
  buttonUrl: string;
}
