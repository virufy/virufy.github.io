import { type Donate } from '../types/donate';

const donate: Donate = {
  heroSection: {
    title: [
      {
        text: 'معًا، يمكننا إحداث ثورة في الصحة التنفسية العالمية. ',
      },
      {
        text: 'كل مساهمة تقرّبنا من توفير أدوات تشخيصية مدعومة بالذكاء الاصطناعي للمرضى والمجتمعات المحتاجة.',
      },
    ],
  },
  donateSection: {
    title: 'تبرعك يترك أثرًا دائمًا.',
    text: 'يساعد كل تبرع Virufy على إتاحة تقنيات الصحة التنفسية للأشخاص والمجتمعات الأكثر حاجة. بدعمك لنا، تُسرّع الابتكار وتمنح المرضى الأدوات لحماية صحتهم.',
    contentBlocks: [
      {
        title: 'توسيع الوصول',
        text: 'توفير أدوات فحص صحية مدعومة بالذكاء الاصطناعي للمجتمعات المحرومة حول العالم.',
      },
      {
        title: 'تعزيز البحوث',
        text: 'دعم الدراسات المتقدمة التي تُحسّن من الاكتشاف المبكر وعلاج الأمراض التنفسية.',
      },
      {
        title: 'تمكين المرضى',
        text: 'مساعدة الأفراد على السيطرة على صحتهم من خلال رؤى علمية ميسّرة.',
      },
    ],
    optionsTitle: 'اختر طريقة التبرع:',
    optionsText:
      'دعمك مهم بغض النظر عن الطريقة. اختر أحد خيارات التبرع أدناه للبدء',
    DonationsOptionsBlock: [
      {
        optionTitle: 'التبرع عبر GoFundMe',
        optionText:
          'ساهم في حملتنا الحالية وساعدنا في الوصول إلى المزيد من الأشخاص بسرعة أكبر.',
        buttonText: 'GoFundMe',
      },
      {
        optionTitle: 'التبرع عبر PayPal',
        optionText: 'قم بتقديم تبرع آمن لمرة واحدة أو متكرر مباشرة عبر PayPal.',
        buttonText: 'PayPal',
      },
    ],
  },
  donationTransparencyBlock: {
    title: 'Transparency you can trust',
    text: 'Virufy is a 501(c)(3) nonprofit organization. Your donations are tax-deductible where applicable. We are committed to transparency and accountability, ensuring that your gift directly supports research,innovation, and patient access.',
  },
};

export default donate;
