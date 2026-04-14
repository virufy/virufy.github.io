// app/i18n/types/navbar.ts

export interface NavbarType {
  home: string;
  ourTechnology: OurTechnology;
  coughCheckApp: CoughCheckApp;
  aboutUs: AboutUs;
  media: Media;
  faq: string;
  donate: DonateSection;
  joinUs: JoinUsSection;
  searchPlaceholder: string;
  noResultsPlaceholder: string;
}

export interface OurTechnology {
  section: string;
}

export interface CoughCheckApp {
  section: string;
  covid19: string;
  flu: string;
  copd: string;
  rsv: string;
}

export interface AboutUs {
  section: string;
  advisors: string;
  ourFounder: string;
  ourSupporters: string;
  blog: string;
  oneYoungWorld: string;
}

export interface Media {
  section: string;
  pressReleases: string;
  ourResearch: string;
}

export interface DonateSection {
  buttonText: string;
  optionsTitle: string;
}

export interface JoinUsSection {
  buttonText: string;
}
