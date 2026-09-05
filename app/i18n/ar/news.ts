import type { SevenNewsPage } from '../types/news';

const sevenNewsContent: SevenNewsPage = {
  hero: {
    title: 'فيروفي في الأخبار',
    subtitle:
      'تابع أحدث الأخبار والبيانات الصحفية والتغطية الإعلامية حول مهمة Virufy في إضفاء الديمقراطية على الرعاية الصحية من خلال فحص صحة الجهاز التنفسي المدعوم بالذكاء الاصطناعي.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'التغطية الإعلامية',
    tagIcon: '/icons/icon-media.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'الأخبار' },
      { id: 'publications', label: 'المنشورات' },
      { id: 'blogs', label: 'المدونات' },
    ],
    defaultOption: 'news',
  },

  filters: {
    filterByYearLabel: 'التصفية بحسب السنة:',
    allYearsOption: 'كل السنوات',
    sortByLabel: 'الترتيب بحسب:',
    newestFirst: 'الأحدث إلى الأقدم',
    oldestFirst: 'الأقدم إلى الأحدث',
  },

  section5: {
    title: 'ألهامك من هذا العمل؟ ساهم في تشكيل ما سيأتي بعده.',
    text: 'انضم إلى الباحثين والمصممين والمهندسين والمدافعين الذين يعملون معًا على تعزيز صحة الجهاز التنفسي على مستوى عالمي.',
    button: 'انضم إلى فريقنا',
  },

  emptyMessage: 'لم يتم العثور على مقالات أخبار للمرشحات المحددة.',

  newsCards: [
    {
      title:
        'الارتقاء برعاية الأطفال باستخدام الذكاء الاصطناعي: Virufy وEmirates Health Services (EHS) في WHX دبي 2026!',
      date: 'أبريل 2026',
      subText: '',
      url: '/ar/news/whx-dubai-2026',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'ثلاثة مشاريع جامعية من سويسرا والولايات المتحدة ومصر تنتقل إلى مراحل تجريبية نشطة ومراحل تجارية في دبي',
      date: 'مايو 2026',
      subText: '',
      url: 'https://www.prototypesforhumanity.com/press-releases/press/Universityventures',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'كلية الصحة العامة بجامعة إندونيسيا تستكشف تعاونًا استراتيجيًا مع Virufy لتطوير تقنية الذكاء الاصطناعي في مجال صحة الجهاز التنفسي',
      date: 'يونيو 2026',
      subText: '',
      url: 'https://fkm.ui.ac.id/en/fph-ui-explores-strategic-collaboration-with-virufy-to-develop-ai-technology-in-respiratory-health/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'رسالة من مؤسسنا أميل خانزادة: من وادي السيليكون إلى قاعة الدراسة: محاضرتي الأولى في جامعة فوكوي',
      date: 'يونيو 2026',
      subText: '',
      url: '/ar/news/amil-june-2026',
      contentType: 'news',
      image: '/images/news/Amil-Classroom-1.jpg',
      year: 2026,
    },
    {
      title: 'معرض جيتكس العالمي 2025 - دبي للصحة',
      date: 'أكتوبر 2025',
      subText: '',
      url: '/ar/news/gitex-global-2025-dubai',
      contentType: 'news',
      image: '/images/sevenNews/news/oct_2025.png',
      year: 2025,
    },
    {
      title:
        'فيروفي تستعرض نجاحها في فحص الجهاز التنفسي باستخدام الذكاء الاصطناعي في أبوظبي',
      date: 'يونيو 2025',
      subText: '',
      url: '/ar/news/uae-adghw-apr-2025',
      contentType: 'news',
      image: '/images/sevenNews/news/june_2025.png',
      year: 2025,
    },
    {
      title:
        'Virufy تعرض تقنية مبتكرة لفحص COVID-19 في معرض Prototypes for Humanity 2024 في دبي',
      date: 'نوفمبر 2024',
      subText: '',
      url: '/ar/news/press-release-dubai',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2024,
    },
    {
      title:
        'تطبيق Virufy Beta يُطلق في كولومبيا، موفرًا الكشف عن COVID-19 في المنزل لـ 4,500 مستخدم',
      date: 'فبراير 2023',
      subText: '',
      url: '/ar/news/beta-app-release-2023',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2023,
    },
    {
      title:
        'BARDA تدعم تطوير تطبيقات رقمية جديدة تعتمد على الذكاء الاصطناعي/التعلم الآلي للكشف عن الأمراض المعدية عبر الأعراض البصرية والسمعية',
      date: 'نوفمبر 2022',
      subText: 'الإجراءات الطبية، الولايات المتحدة',
      url: 'https://medicalcountermeasures.gov/newsroom/2022/ai_ml/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2022,
    },
    {
      title: 'هذا التطبيق يسعى لتشخيص COVID-19 بمجرد السعال أمام الهاتف',
      date: 'فبراير 2021',
      subText: 'Forbes، المكسيك',
      url: 'https://www.forbes.com.mx/emprendedores-app-diagnostico-covid-19-toser-telefono/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title: 'COVID-19: تطبيق Virufy يمكنه تشخيص الفيروس من خلال تحليل السعال',
      date: 'يناير 2021',
      subText: 'MSN',
      url: 'https://www.americatv.com.pe/noticias/actualidad/covid-19-aplicativo-virufy-puede-diagnosticar-virus-mediante-analisis-tiene-precision-80-y-no-reemplazara-pruebas-diagnostico-grado-hospitalario-tos-n433332',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title: 'VIRUFY: منصة تتيح الكشف عما إذا كنا مصابين بـ COVID-19',
      date: 'أكتوبر 2020',
      subText: 'Expreso، ليما، بيرو',
      url: 'https://www.expreso.com.pe/actualidad/virufy-plataforma-que-permite-detectar-si-estamos-contagiados-con-covid-19/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title:
        'سفير One Young World في اليابان يستهدف COVID-19 باستخدام الذكاء الاصطناعي',
      date: 'مايو 2020',
      subText: 'One Young World، طوكيو، اليابان',
      url: 'https://oywj.org/ambassadors-in-action/2020/05/oywj-ambassador-targets-covid-19-using-ai/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'سفراء أمريكا الشمالية في الخطوط الأمامية لمواجهة COVID-19',
      date: '2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/north-american-ambassadors-frontlines-covid-19-response',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'سفراء الشهر يوليو',
      date: 'يوليو 2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/july-2020-ambassadors-month',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'آلاف يحضرون فعاليات OYW الرقمية العالمية في يوليو: ملخص لما فاتك',
      date: 'يوليو 2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/thousands-attend-oyws-global-digital-events-july-recap-what-youve-missed',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'منتدى One Young World طوكيو 2020',
      date: '2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/event/one-young-world-tokyo-caucus-2020',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'عرض Virufy في منتدى One Young World طوكيو 2020',
      date: '2020',
      subText: 'One Young World، طوكيو، اليابان',
      url: 'https://youtu.be/UZU3rPTEPfU',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
  ],
};

export default sevenNewsContent;
