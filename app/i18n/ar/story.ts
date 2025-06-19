import {} from '@/public/images/story';
import { type Story } from '../types/story';

const story: Story = {
  aboutUsSection: {
    title: 'معلومات عنا',
    texts: [
      'نهدف من خلال نهجنا المبتكر إلى تقديم فحص أولي للأمراض التنفسية للمرضى والأطباء والحكومات، خاصة في البلدان ذات الدخل المنخفض.',
      'نطمح أن نكون المنظمة غير الربحية الرائدة في مجال التعرف على الأمراض باستخدام التكنولوجيا، ونعمل على تحويل الرعاية الصحية العالمية وإلهام الآخرين لدعم هذه المهمة والاستثمار فيها معنا.',
    ],
  },
  storySection: {
    title: 'كيف بدأت الفكرة ',
    texts: [
      [
        {
          type: 'text',
          text: 'عندما ضربت الجائحة،',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'مؤسس فيروفي، أميل خانزادا',
        },
        {
          type: 'text',
          text: 'كان يعلم أن الهواتف الذكية موجودة في كل مكان وأن COVID-19 يؤثر على الأنف والحلق والرئتين.',
        },
      ],
      [
        {
          type: 'text',
          text: 'افترض أن أصوات التنفس والسعال يمكن تحليلها باستخدام التعلم الآلي لاكتشاف أنماط كوفيد.',
        },
      ],
      [
        {
          type: 'text',
          text: 'ورغبة منه في إحداث تأثير إيجابي، قام أميل بتنظيم دراسة سريرية شملت 362 مريضًا في مستشفى جامعي مرموق. بدأ فريق Virufy الأصلي مع طلاب خريجي الذكاء الاصطناعي في جامعة ستانفورد وتوسع ليشمل متطوعين من الجامعات على مستوى العالم.',
        },
      ],
    ],
  },
  MissionSection: {
    title: 'Our Mission',
    statement:
      'At Virufy, our mission is to save lives by making disease prevention and detection free, private, and accessible to everyone, everywhere. We are dedicated to:',
    texts: [
      'Delivering rapid, AI-powered respiratory disease pre-screening solutions for patients, clinicians, and governments—especially in underserved communities.',
      'Harnessing the power of technology and global collaboration to transform healthcare into a more affordable, efficient, and inclusive system for all.',
    ],
  },
  privacySection: {
    title: 'التزامنا بالخصوصية',
    texts: [
      'يأخذ Virufy خصوصية وحماية معلوماتك الشخصية على محمل الجد. قام فريقنا القانوني بإعداد سياسة خصوصية مفصلة وسياسة ملفات تعريف الارتباط لحماية المعلومات الشخصية التي تشاركها معنا من خلال استخدام موقعنا.',
    ],
  },
};

export default story;
