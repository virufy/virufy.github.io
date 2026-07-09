// Need to be translated to AR
import type { PublicationsPage } from '../types/publications';

const PublicationsContent: PublicationsPage = {
  hero: {
    title: 'منشورات Virufy',
    subtitle:
      'استكشف أبحاثنا المحكمة، المنشورات الأكاديمية، والدراسات العلمية التي تدفع مجال الكشف عن أمراض الجهاز التنفسي باستخدام الذكاء الاصطناعي من خلال تقنية تحليل السعال المبتكرة.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'بحث',
    tagIcon: '/icons/icon-research.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'أخبار' },
      { id: 'publications', label: 'منشورات' },
      { id: 'blogs', label: 'مدونات' },
    ],
    defaultOption: 'publications',
  },

  filters: {
    filterByYearLabel: 'التصفية حسب السنة:',
    allYearsOption: 'كل السنوات',
    sortByLabel: 'الترتيب حسب:',
    newestFirst: 'من الأحدث إلى الأقدم',
    oldestFirst: 'من الأقدم إلى الأحدث',
  },

  section5: {
    title: 'هل أعجبتك النتائج؟ ساهم في تشكيل ما سيأتي بعد ذلك.',
    text: 'انضم إلى الباحثين والمصممين والمهندسين والداعمين الذين يعملون معًا لتعزيز صحة الجهاز التنفسي على مستوى العالم.',
    button: 'انضم إلى فريقنا',
  },

  emptyMessage: 'لم يتم العثور على مقالات إخبارية بالمرشحات المحددة.',

  newsCards: [
    {
      title:
        'التشخيص الصوتي المدعوم بالذكاء الاصطناعي من أجل صحة الجهاز التنفسي العالمية',
      date: 'يونيو 2026',
      subText: '',
      url: '/en/publications/virufy-white-paper-2026',
      contentType: 'publications',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'تحليل السعال بكفاءة في استخدام البيانات من خلال التعلم النشط والتجزئة',
      date: 'مارس 2026',
      subText: '',
      url: 'https://virufy.org/en/publications/data-efficient-cough-ai/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/march_8_2026.png/',
      year: 2026,
    },
    {
      title:
        'تحسين التسجيل في التجارب السريرية لجمع البيانات بالذكاء الاصطناعي المعتمد على الهواتف الذكية: تحليل منهجي للتدخلات القائمة على التوجيه السلوكي (Nudge)',
      date: 'ديسمبر 2025',
      subText: '',
      url: 'https://sabeconomics.org/ojs/index.php/jbep/article/view/232',
      contentType: 'publications',
      image: '/images/sevenNews/publications/December_21_2025.png',
      year: 2025,
    },
    {
      title: 'محول متعدد النماذج الهرمي للكشف التلقائي عن COVID-19',
      date: 'أكتوبر 2022',
      subText: '',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_29_2022.png',
      year: 2022,
    },
    {
      title:
        'آلة حساب COVID-19 -- التأثير الإيجابي على الاقتصاد والمجتمع في الولايات المتحدة',
      date: 'يناير 2022',
      subText: '',
      url: 'https://arxiv.org/abs/2201.11109',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_21_2022.png',
      year: 2022,
    },
    {
      title:
        'استخدام التعلم العميق مع مجموعات بيانات كبيرة مجمعة لتصنيف COVID-19 من السعال',
      date: 'يناير 2022',
      subText: '',
      url: 'https://arxiv.org/abs/2201.01669',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_5_2022.png',
      year: 2022,
    },
    {
      title:
        'التحديات والفرص في نشر أنظمة الذكاء الاصطناعي للكشف عن COVID-19 من السعال',
      date: 'سبتمبر 2021',
      subText: '',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8421112/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/September_7_2021.png',
      year: 2021,
    },
    {
      title:
        'Virufy: إمكانية التطبيق العالمي لمجموعات البيانات السريرية والجمعية من أجل اكتشاف الذكاء الاصطناعي لكوفيد-19 من خلال السعال',
      date: 'نوفمبر 2020',
      subText: '',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      contentType: 'publications',
      image: '/images/sevenNews/publications/November_26_2020.png',
      year: 2020,
    },
    {
      title: 'Fusical: الدمج متعدد الوسائط للمشاعر في الفيديو',
      date: 'أكتوبر 2020',
      subText: '',
      url: 'https://dl.acm.org/doi/abs/10.1145/3382507.3417966',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_22_2020.png',
      year: 2020,
    },
    {
      title: 'التعرف على تعبيرات الوجه باستخدام التعلم العميق',
      date: '2020 أبريل',
      subText: '',
      url: 'https://arxiv.org/abs/2004.11823',
      contentType: 'publications',
      image: '/images/sevenNews/publications/April_8_2020.png',
      year: 2020,
    },
  ],
};

export default PublicationsContent;
