export interface Donate {
  heroSection: DonateHeroSection;
  donateSection: DonateSection;
  donationTransparencyBlock: DonationTransparencyBlock;
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
}
interface DonateOptionsBlock {
  optionTitle: string;
  optionText: string;
  buttonText: string;
}
interface DonationTransparencyBlock {
  title: string;
  text: string;
}
