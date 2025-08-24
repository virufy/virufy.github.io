import { type StaticImageData } from 'next/image';

export interface OneYoungWorld {
  header: HeaderSection;
  navbarTexts: OywNavbarTexts;
  oyw: OywSection;
}

// Header and Navbar Section
interface HeaderSection {
  text: string;
  image: StaticImageData;
  altText: string;
}

export interface OywNavbarTexts {
  oyw: string;
  teamLeads: string;
}

// One Young World Section
export interface OywSection {
  bgImage: StaticImageData;
  altText: string;
  virufyAndOyw: VirufyAndOywSection;
  whyOyw: WhyOywSection;
  volunteerStories: VolunteerStoriesSection;
}

interface VirufyAndOywSection {
  title: string;
  subTitle: string;
  texts: string[];
  videoUrl: string;
  videoTitle: string;
}

// Why One Young World
interface WhyOywSection {
  title: string;
  cards: OywCard[];
}

interface OywCard {
  title: string;
  text: string;
  image: StaticImageData;
  altText: string;
}

// Volunteer Stories
interface VolunteerStoriesSection {
  title: string;
  text: string;
  testimonials: Testimonial[];
  buttonText: string;
}

export interface Testimonial {
  name: string;
  origin: string;
  image: StaticImageData;
  altText: string;
  testimonial: string;
}
