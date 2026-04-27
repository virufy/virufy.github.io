import type { SevenSupportUs } from '../types/sevensupportus';
import {
  DonateIcon,
  ImpowerIcon,
  ExpandAccessIcon,
  AdvanceResearchIcon,
} from '@/public/images/sevenSupportUs';

const sevensupportus: SevenSupportUs = {
  introSection: {
    tag: 'Support Our Mission',
    title: ['Together, we can revolutionize', 'global respiratory health'],
    text: 'Every contribution brings us closer to delivering AI-powered diagnostic tools to patients and communities worldwide offering health equity.',
    buttonText: 'How to Contribute',
  },
  impactSection: {
    title: 'Your gift creates a lasting impact.',
    description:
      "Every donation helps Virufy bring accessible digital health technology to underserved communities. By supporting us, you're accelerating innovation and giving patients the tools to protect their health.",
  },

  pillars: [
    {
      title: 'Expand Access',
      description:
        'Bring AI-powered health screening tools and advantages to underserved communities worldwide.',
      icon: ExpandAccessIcon,
    },
    {
      title: 'Advance Research',
      description:
        'Support cutting-edge studies that improve early detection of respiratory illness.',
      icon: AdvanceResearchIcon,
    },
    {
      title: 'Empower Patients',
      description:
        'Help individuals take control of their health with accessible, science-driven insights.',
      icon: ImpowerIcon,
    },
  ],
  donateOptions: {
    title: 'Choose how you’d like to give.',
    subtitle:
      'Your support matters. Select a donation option below to get started.',
    options: [
      {
        name: 'GoFundMe',
        description:
          "Contributions are directed through Virufy's GoFundMe campaign.",
        buttonText: 'Donate via GoFundMe',
        url: 'https://www.gofundme.com/f/donate-virufy',
        icon: DonateIcon,
      },
      {
        name: 'PayPal',
        description:
          "Contributions are processed directly through Virufy's PayPal account.",
        buttonText: 'Donate via PayPal',
        url: 'https://www.paypal.com/us/fundraiser/charity/4348461',
        icon: DonateIcon,
      },
    ],
  },
  banner: {
    title: 'Transparency you can trust.',
    text: [
      'Virufy is a 501(c)(3) nonprofit organization. Your donations are tax-deductible where applicable. We are committed to transparency and accountability, ensuring that your gift directly supports research, innovation, and patient access.',
    ],
  },
};
export default sevensupportus;
