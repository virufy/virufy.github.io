import {} from '@/public/images/story';
import { type Story } from '../types/story';

const story: Story = {
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
    title: 'مهمتنا',
    texts: [
      [
        {
          type: 'text',
          text: 'Some people may be wondering, "why are we here?" and "why have so many people supported Virufy?"',
        },
      ],
      [
        {
          type: 'text',
          text: "Virufy's mission and goal is to transform global health.",
        },
      ],
      [
        {
          type: 'text',
          text: 'We aim to give everyone in the world access to a web app to detect respiratory diseases like COVID, flu, RSV, COPD, asthma, lung cancer, in seconds.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We would like a billion people in developing nations to be empowered to protect the health of themselves and loved ones.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Here is a listing of disclosed ',
        },
        {
          type: 'link',
          url: '/advisors',
          text: 'advisors',
        },
        {
          type: 'text',
          text: ' and we have had 1,300+ volunteers to date.',
        },
      ],
      [
        {
          type: 'text',
          text: "Thank you for being part of the mission and let's make it happen.",
        },
      ],
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
