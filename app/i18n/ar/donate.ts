import type { Donate } from '../types/donate';

const donate: Donate = {
  introSection: {
    tag: 'دعم مهمتنا',
    title: ['معًا، يمكننا إحداث ثورة', 'صحة الجهاز التنفسي العالمية'],
    text: 'كل مساهمة تقربنا من تقديم أدوات التشخيص المدعومة بالذكاء الاصطناعي للمرضى والمجتمعات في جميع أنحاء العالم التي تقدم العدالة الصحية.',
    buttonText: 'كيفية المساهمة',
  },
  impactSection: {
    title: 'هديتك تخلق تأثيرًا دائمًا.',
    description:
      'يساعد كل تبرع شركة Virufy على توفير تكنولوجيا الصحة الرقمية التي يمكن الوصول إليها للمجتمعات المحرومة. من خلال دعمنا، فإنك تعمل على تسريع الابتكار وتزويد المرضى بالأدوات اللازمة لحماية صحتهم.',
  },

  pillars: [
    {
      title: 'قم بتوسيع الوصول',
      description:
        'توفير أدوات ومزايا الفحص الصحي المدعومة بالذكاء الاصطناعي للمجتمعات المحرومة في جميع أنحاء العالم.',
      icon: '/icons/icon-expand-access.png',
    },
    {
      title: 'البحوث المتقدمة',
      description:
        'دعم الدراسات المتطورة التي تعمل على تحسين الكشف المبكر عن أمراض الجهاز التنفسي.',
      icon: '/icons/icon-advance-research.png',
    },
    {
      title: 'تمكين المرضى',
      description:
        'ساعد الأفراد على التحكم في صحتهم من خلال رؤى علمية يمكن الوصول إليها.',
      icon: '/icons/icon-empower-patients.png',
    },
  ],
  donateOptions: {
    title: 'اختر الطريقة التي ترغب في تقديمها.',
    subtitle:
      'دعمكم مهم. حدد خيار التبرع أدناه للبدء.',
    options: [
      {
        name: 'GoFundMe',
        description:
          'يتم توجيه المساهمات من خلال حملة GoFundMe التابعة لـ Virufy.',
        buttonText: 'التبرع عبر GoFundMe',
        url: 'https://www.gofundme.com/f/donate-virufy',
        icon: '/icons/icon-donate.png',
      },
      {
        name: 'PayPal',
        description:
          'تتم معالجة المساهمات مباشرة من خلال حساب PayPal الخاص بـ Virufy.',
        buttonText: 'التبرع عبر PayPal',
        url: 'https://www.paypal.com/us/fundraiser/charity/4348461',
        icon: '/icons/icon-donate.png',
      },
    ],
  },
  banner: {
    title: 'الشفافية التي يمكنك الوثوق بها.',
    text: [
      'Virufy هي منظمة غير ربحية بموجب المادة 501(c)(3). تبرعاتك معفاة من الضرائب حيثما ينطبق ذلك. نحن ملتزمون بالشفافية والمساءلة، مما يضمن أن هديتك تدعم بشكل مباشر البحث والابتكار ووصول المرضى.',
    ],
  },
};
export default donate;
