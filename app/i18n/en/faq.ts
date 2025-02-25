import {
  BgHeader,
  GlobeIcon,
  MonitorIcon,
  PhoneInHandIcon,
  PrivacyIcon,
  QuestionMarkIcon,
  RecycleIcon,
  SearchIcon,
} from '@/public/images/faq';

import { type FAQ } from '../types/faq';

const faq: FAQ = {
  headerSection: {
    img: BgHeader,
    altText: '',
    title: [
      {
        type: 'text',
        text: 'How can we ',
      },
      {
        type: 'span',
        text: 'help ',
      },
      {
        type: 'text',
        text: 'you?',
      },
    ],
    input: {
      placeholder: 'Start typing your search...',
      img: SearchIcon,
      altText: 'search icon',
    },
    texts: [
      {
        type: 'text',
        text: 'Or ',
      },
      {
        type: 'span',
        text: 'choose ',
      },
      {
        type: 'text',
        text: 'an option below to help find what you are looking for.',
      },
    ],
  },
  topicsSection: {
    title: 'FAQ Topics',
    cards: [
      {
        title: 'Virufy App',
        img: PhoneInHandIcon,
        altText: '',
      },
      {
        title: 'About Virufy',
        img: GlobeIcon,
        altText: '',
      },
      {
        title: 'About AI',
        img: RecycleIcon,
        altText: '',
      },
      {
        title: 'Finances',
        img: MonitorIcon,
        altText: '',
      },
      {
        title: 'Privacy',
        img: PrivacyIcon,
        altText: '',
      },
      {
        title: 'Other',
        img: QuestionMarkIcon,
        altText: '',
      },
    ],
  },
  questionsSection: {
    topicTitle: 'Common Questions',
    noResultsTitle: 'No Results Found',
    questionsByTopic: {
      'Virufy App': [
        {
          question:
            'When and how will the app give COVID-19 prediction results?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Our app is currently for data collection only. We cannot release a COVID-19 prediction app without public health department approvals in each country and clinical studies to validate the AI technology in local conditions. This process can take some weeks or months depending on the speed of the government partner. Virufy welcomes partnerships from health officials and hospitals to bring the technology for free use to the people and to optimize usage of costly PCR tests only when necessary.',
                },
              ],
            },
          ],
        },
        {
          question:
            'Is your app available for iOS or Android?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Our app is designed as a web app, so it can be used from the web browser on any mobile device. It does not require a separate download or install.',
                },
              ],
            },
          ],
        },
        {
          question: 'Will the application be available for free and worldwide?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'As a 501(c)(3) non-profit organization, our intention is to make the app free for the benefit of low-income countries. However, we may need to charge a nominal fee to support our operations in case we are not able to raise enough funds.',
                },
              ],
            },
          ],
        },
        {
          question: 'Do you plan to extend this app in a for-profit startup?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy is a non-profit organization. We may partner with companies if needed to accelerate deployment of the app for the benefit of people.',
                },
              ],
            },
          ],
        },
      ],
      'About Virufy': [
        {
          question: 'How was the initiative created?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'When the pandemic hit, Virufy’s founder, Amil, knew smartphones were omnipresent and that COVID impacted the nose, throat, and lungs. He hypothesized that breathing and cough sounds could be analyzed with machine learning to detect COVID patterns. Wanting to make a positive impact, he orchestrated a clinical study with 362 patients in an esteemed university hospital. The original team of Virufy, beginning with Stanford graduate AI students, expanded to volunteers from universities around the world. As a One Young World Japan ambassador who has travelled to over 25 countries, Amil understands the global perspective and how a smartphone-based solution can be used by people all over the world.',
                },
              ],
            },
          ],
        },
        {
          question:
            'How is Virufy different from other groups working on similar projects?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Because Virufy is a 501(c)(3) non-profit organization, we are able to recruit highly talented professionals as volunteers. Our team is global, spanning five continents, and our organization thus has global empathy built in. We are not concerned with making profit, so are able to work in developing countries. Our dense university alumni and professional networks grant us access to top echelon contacts in every country of the world. Mentorship is built into our organization, as dozens of young professionals in our team are empowered by sage advice from senior industry experts leads to rapid, creative activity focused in the right direction.',
                },
              ],
            },
          ],
        },
        {
          question:
            'What phase of the investigation are you at? Is there a deadline to participate?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'We have put considerable effort to form partnerships, build our mobile app, register our California non-profit entity, and build our policies for compliance with data privacy laws across dozens of countries. Our data collection app is at the breakthrough stage, as have addressed the majority of healthcare data privacy and technical concerns to allow for launch. We have already gotten data privacy, information security, and UI/UX in place for our data collection mobile app, along with a scalable backend AWS infrastructure. We had large volumes of data collection exceeding 250,000 patients and with the help of AI are building the solution. There is no deadline, and we always welcome partners who can provide grant funding, volunteer services, and clinical data collection.',
                },
              ],
            },
          ],
        },
        {
          question: 'What is unique about Virufy from other projects?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'As a young organization with a diverse and global team including alumni from more than 25 universities, we are guided by top-level industry professionals. Our multidisciplinary team has expertise in law, machine learning, medicine, information security, and mobile app development. Our One Young World network allows us to connect with trusted partners in every country. We welcome all, and being a 501(c)(3) non-profit allows for volunteers to join. As a volunteer run non-profit, we are independent and have less red tape.',
                },
              ],
            },
          ],
        },
        {
          question:
            'How much investment was made to make the Virufy project possible?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'More than 1,000 volunteers have put thousands of hours into making the project possible. Several companies have supported us with free software, including email, storage, and messaging platforms, along with cloud compute. Certain softwares such as video conferencing and project management tools have not been free, so unfortunately have to be paid from founder Amil’s limited savings. We believe that if we are successful, our cloud compute costs will increase, but we will be able to attract ample grant funding and private donations, along with government support to keep our system running.',
                },
              ],
            },
          ],
        },
      ],
      'About AI': [
        {
          question: 'Why are COVID-19 coughs distinguishable?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Similar to other respiratory diseases, COVID-19 damages the throat and lungs, creating detectable differences in cough patterns. Consequently, cough sounds can be analyzed to detect COVID-19​. and other upper respiratory diseases. Globally, this idea is being actively researched by several prestigious institutions, including Carnegie Mellon (CMU), MIT, and Cambridge. For example,research done by University of Cambridge showed that a simple binary machine learning classifier is able to classify COVID-19 positive patients through breathing and coughing sounds with high accuracy. Similarly, researchers at CMU identified 18 voice features that distinguish positive COVID-19 patients and trained an academic model to detect COVID-19 with high accuracy.',
                },
              ],
            },
          ],
        },
        {
          question:
            'What was the main difficulty in collecting and processing data? Was there any region where artificial intelligence was less accurate, for example?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'The process is slow and cumbersome when collecting from hospitals, requiring clinical study forms and IRB approvals. With supervision from various medical advisors, including from Harvard and Stanford, we have enrolled more than 250,000 patients in our clinical studies across 5 countries. For collecting directly from users, we spent significant efforts with pro bono expert lawyers to ensure compliance with data privacy laws, including LGPD, GDPR, and CCPA. As described in our research paper, some of the difficulties we found in processing data included excessive background noises and incorrect cough recordings submitted by users, which required the AI developers to manually clean the audio samples before training AI models.',
                },
              ],
            },
          ],
        },
        {
          question: 'Can asymptomatic cases be detected?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Yes, asymptomatic detection has been shown in research by MIT and other groups. It is especially important for people in their 20s and 30s who are more likely to be asymptomatic.',
                },
              ],
            },
          ],
        },
        {
          question:
            'Will the application use AI developed by third parties or created just for this purpose?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy has its own AI research team with patented technology. We are open to collaboration, co-development, and integration of AI algorithms from other research groups.',
                },
              ],
            },
          ],
        },
      ],
      Finances: [
        {
          question:
            'Do I need to make any financial contribution to donate my cough?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy is currently only collecting coughs from certain countries, which can be found in our app: ',
                },
                {
                  type: 'link',
                  text: 'https://virufy.org/study',
                  href: 'https://virufy.org/study',
                },
                {
                  type: 'text',
                  text: '.',
                },
              ],
            },
          ],
        },
        {
          question: 'Do I need to have coughing symptoms to donate my cough?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'No, the app is also compatible with a forced cough.',
                },
              ],
            },
          ],
        },
        {
          question: 'How many donors have you had in total?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'We have more than 5,000 cough recordings from over 10 countries, mostly in South America and South Asia. Some of these are clinical, and others are contributed directly by individuals in our app.',
                },
              ],
            },
          ],
        },
        {
          question: 'What are the operational expenses for the organization?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'We are currently completely volunteer run. Our main budget requirements are for marketing and clinical studies for cough data collection. We would also need money for computation later on after scaling to a large user base.',
                },
              ],
            },
          ],
        },
        {
          question:
            'Does the team get funding? If so, where and how much? What is it used on?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'We partner with several universities to apply for R&D grants leveraging our 501(c)(3) status.',
                },
              ],
            },
          ],
        },
      ],
      Privacy: [
        {
          question: 'How will Virufy securely store my data?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'We use Amazon Web Services (AWS) for research study data collection. AWS stores the data in a secure application with restricted access and controls. Your data will be stored with AWS until it is downloaded by us. We will store the data in a database with restricted access. If you would like more information about how AWS store your data, please visit their respective privacy policies at ',
                },
                {
                  type: 'link',
                  text: 'https://aws.amazon.com/en/privacy',
                  href: 'https://aws.amazon.com/en/privacy',
                },
                {
                  type: 'text',
                  text: '. If you would like to learn more, please refer to the Virufy privacy policy.',
                },
              ],
            },
          ],
        },
        {
          question:
            'Is my privacy ever at risk of being exposed when I donate my cough to Virufy?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Our strong legal and information security teams have developed a DPIA to address potential risks and threats for your privacy. We will only store your personal data in an anonymized form (where you cannot be identified in any way) and in a secure database with restricted access. If you would like to learn more please refer to the Virufy Privacy Policy.',
                },
              ],
            },
          ],
        },
        {
          question: 'Does Virufy have a privacy policy and cookie policy?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy takes the privacy and protection of your personal information seriously. Our legal team has prepared a detailed Privacy Policy and Cookie Policy to protect the personal information you share with us through use of our website, participation in our cough donation study, contacting us, and volunteer applications. Refer to the footer for a detailed Privacy Policy and Cookie Policy.',
                },
              ],
            },
          ],
        },
        {
          question: 'Will my data be shared with third parties?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'If you opt-in to share your contact information (e.g., email and phone number) with us, we will not distribute any of this personal identifiable information to any third party. However, we may share your anonymized information, such as your cough sounds, with third parties in order to accelerate global research efforts to stop the COVID-19 pandemic and other future spreads of disease. More details can be found in our Privacy Policy and the data collection study Consent Form.',
                },
              ],
            },
          ],
        },
      ],
      Other: [
        {
          question: 'How can I support Virufy more?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'You can join our team today and look at the ',
                },
                {
                  type: 'relative-link',
                  text: 'Job Listing',
                  href: '/job-listing',
                },
                {
                  type: 'text',
                  text: ' page for more information. You can also support us at GoFundMe. You can also contact us for partnership.',
                },
              ],
            },
          ],
        },
        {
          question:
            'How does distribution work, and how will Virufy become more widespread?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'The app will be offered for the benefit of people in low-income countries and will likely market itself and spread quickly.',
                },
              ],
            },
          ],
        },
        {
          question: 'What if I have more questions?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'More details can be found in our full Privacy Policy, Cookie Policy, and consent form which is embedded in the data collection app. For questions related to the data collection study, please email us at ',
                },
                {
                  type: 'link',
                  text: 'study@virufy.org',
                  href: 'mailto:study@virufy.org',
                },
                {
                  type: 'text',
                  text: '. For data related queries, we can be contacted at ',
                },
                {
                  type: 'link',
                  text: 'open-data@virufy.org',
                  href: 'mailto:open-data@virufy.org',
                },
                {
                  type: 'text',
                  text: '. For all other inquiries, you may reach us at ',
                },
                {
                  type: 'link',
                  text: 'info@virufy.org',
                  href: 'mailto:info@virufy.org',
                },
                {
                  type: 'text',
                  text: '.',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export default faq;
