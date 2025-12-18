import { type Donate } from '../types/donate';

const donate: Donate = {
  heroSection: {
    title: [
      {
        text: 'Together, we can revolutionize global respiratory health. ',
      },
      {
        text: 'Every contribution brings us closer to delivering AI-powered diagnostic tools to patients and communities in need.',
      },
    ],
  },
  donateSection: {
    title: 'Your gift creates a lasting impact.',
    text: 'Every donation helps Virufy bring accessible respiratory health technology to people and communities that need it most. By supporting us, you’re accelerating innovation and giving patients the tools to protect their health.',
    contentBlocks: [
      {
        title: 'Expand Access',
        text: 'Bring AI-powered health screening tools to underserved communities worldwide.',
        iconUrl: '/icons/innovate.svg',
      },
      {
        title: 'Advance Research',
        text: 'Support cutting-edge studies that improve early detection and treatment of respiratory illness.',
        iconUrl: '/icons/expand.svg',
      },
      {
        title: 'Empower Patients',
        text: 'Help individuals take control of their health with accessible, science-driven insights.',
        iconUrl: '/icons/empower.svg',
      },
    ],
    optionsTitle: 'Choose how you’d like to give:',
    optionsText:
      'Your support matters, no matter the method. Select a donation option below to get started',
    DonationsOptionsBlock: [
      {
        optionTitle: 'Donate via GoFundMe',
        optionText:
          'Contribute to our active campaign and help us reach more people, faster.',
        buttonText: 'GoFundMe',
        buttonUrl: 'https://example.com/donate-once',
      },
      {
        optionTitle: 'Donate via PayPal',
        optionText:
          'Make a secure one-time or recurring donation directly through PayPal.',
        buttonText: 'PayPal',
        buttonUrl: 'https://example.com/donate-monthly',
      },
    ],
  },
};

export default donate;
