import {
  AmbassadorIcon,
  BgBody,
  BgHeader,
  DiverseIcon,
  GlobeIcon,
  GonzaloTestimonial,
  MarcosTestimonial,
  SebastianTestimonial,
  YouthIcon,
} from '@/public/images/oneYoungWorld';
import { type OneYoungWorld } from '../types/oneYoungWorld';

const oneYoungWorld: OneYoungWorld = {
  header: {
    text: 'Companies and organizations support us from their extensive knowledge and provide us with security and certainty in what we do.',
    image: BgHeader,
    altText: '',
  },
  navbarTexts: {
    oyw: 'One Young World',
    teamLeads: 'Team Leads',
  },
  oyw: {
    bgImage: BgBody,
    altText: '',
    virufyAndOyw: {
      title: 'One Young World',
      subTitle: 'Virufy & One Young World',
      texts: [
        'Our world needs great leadership. The new generation is one of the most informed, educated and well connected generations in world history. One Young World identifies, promotes and connects the most impactful young leaders across the globe to create a better world: a world with more responsible and effective leadership.',
        'Virufy has been featured on various OYW platforms, including in the Americas and Japan, ambassadors in action, delegate conferences, and ambassadors on the frontline for COVID-19 response. We are also collaborating with OYW coordinating ambassadors across various regions for outreach efforts.',
      ],
      videoUrl: 'https://www.youtube.com/embed/hvJgwPNYnZo?si=k_ujoF1pBeYFg65C',
      videoTitle: "Virufy's Vision and Call to Action",
    },
    whyOyw: {
      title: 'Why One Young World?',
      cards: [
        {
          title: 'Ambassador driven',
          text: 'Our organization structure matches One Young World with youth ambassadors coordinating operations in each region.',
          image: AmbassadorIcon,
          altText: '',
        },
        {
          title: 'Youth led',
          text: 'Our growing team is led by young professionals from over a dozen countries with close advisory from global industry leaders.',
          image: YouthIcon,
          altText: '',
        },
        {
          title: 'Focused on global impact',
          text: 'Our aim from day one has been to provide equitable solutions for all people in all countries across the world.',
          image: GlobeIcon,
          altText: '',
        },
        {
          title: 'Diverse representation',
          text: 'Our team has representation from over 50 universities and 25 countries and has received support from dozens of One Young World ambassadors.',
          image: DiverseIcon,
          altText: '',
        },
      ],
    },
    volunteerStories: {
      title: 'Volunteer Testimonials',
      text: 'Several ambassadors have volunteered at Virufy and have given testimonials. We have strong trust in members of the One Young World community and warmly welcome any ambassadors interested to contribute.',
      testimonials: [
        {
          name: 'Sebastian Pedraza',
          origin: 'Colombia',
          image: SebastianTestimonial,
          altText: 'image of Sebastian Pedraza',
          testimonial: `“Virufy unites the power of youth and technology to transform the world. We hope that this solution will reach the whole world and that it will become a support for doctors, especially in low-income countries.”`,
        },
        {
          name: 'Gonzalo Roiffe',
          origin: 'Argentina',
          image: GonzaloTestimonial,
          altText: 'image of Gonzalo Roiffe',
          testimonial: `“Virufy will impact globally, no matter the users' background or social status. This is what changing the status quo feels like.”`,
        },
        {
          name: 'Marcos Deza',
          origin: 'Argentina',
          image: MarcosTestimonial,
          altText: 'image of Marcos Deza',
          testimonial: `“I think that Virufy will develop a very accurate solution and this will be useful for the entire world in every industry. So I encourage everyone to take some minutes and contribute with us.”`,
        },
      ],
      buttonText: 'Join our Team',
    },
  },
};

export default oneYoungWorld;
