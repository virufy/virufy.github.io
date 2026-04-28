import type { SevenSupportUs } from '../types/sevensupportus';
import {
  DonateIcon,
  ImpowerIcon,
  ExpandAccessIcon,
  AdvanceResearchIcon,
} from '@/public/images/sevenSupportUs';

const sevensupportus: SevenSupportUs = {
  introSection: {
    tag: 'ادعم مهمتنا',
    title: ['معًا، يمكننا إحداث ثورة في', 'صحة الجهاز التنفسي العالمية'],
    text: 'كل مساهمة تقربنا من تقديم أدوات تشخيصية تعمل بالذكاء الاصطناعي للمرضى والمجتمعات في جميع أنحاء العالم، مما يحقق العدالة الصحية.',
    buttonText: 'كيف تساهم',
  },
  impactSection: {
    title: 'تبرعك يخلق تأثيرًا دائمًا.',
    description:
      'كل تبرع يساعد Virufy على جلب تكنولوجيا الصحة الرقمية المتاحة للمجتمعات المحرومة. بدعمك لنا، أنت تسرّع الابتكار وتمنح المرضى أدوات لحماية صحتهم.',
  },
  pillars: [
    {
      title: 'توسيع الوصول',
      description:
        'جلب أدوات الفحص الصحي المدعومة بالذكاء الاصطناعي ومزاياها للمجتمعات المحرومة حول العالم.',
      icon: ExpandAccessIcon,
    },
    {
      title: 'تطوير الأبحاث',
      description:
        'دعم الدراسات المتطورة التي تحسّن الاكتشاف المبكر لأمراض الجهاز التنفسي.',
      icon: AdvanceResearchIcon,
    },
    {
      title: 'تمكين المرضى',
      description:
        'مساعدة الأفراد على السيطرة على صحتهم من خلال رؤى علمية ميسرة وقائمة على البيانات.',
      icon: ImpowerIcon,
    },
  ],
  donateOptions: {
    title: 'اختر كيف ترغب في التبرع.',
    subtitle: 'دعمك مهم. اختر خيار التبرع أدناه للبدء.',
    options: [
      {
        name: 'GoFundMe',
        description: 'يتم توجيه التبرعات عبر حملة Virufy على GoFundMe.',
        buttonText: 'تبرع عبر GoFundMe',
        url: 'https://www.gofundme.com/f/donate-virufy',
        icon: DonateIcon,
      },
      {
        name: 'PayPal',
        description:
          'تتم معالجة التبرعات مباشرة عبر حساب PayPal الخاص بـ Virufy.',
        buttonText: 'تبرع عبر PayPal',
        url: 'https://www.paypal.com/us/fundraiser/charity/4348461',
        icon: DonateIcon,
      },
    ],
  },
  banner: {
    title: 'شفافية يمكنك الوثوق بها.',
    text: [
      'Virufy هي منظمة غير ربحية 501(c)(3). تبرعاتك قابلة للخصم الضريبي حيثما ينطبق ذلك. نحن ملتزمون بالشفافية والمساءلة، مما يضمن أن تبرعك يدعم بشكل مباشر الأبحاث والابتكار ووصول المرضى.',
    ],
  },
};

export default sevensupportus;
