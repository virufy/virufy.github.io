import { type Publications } from '../types/publications';

const publications: Publications = {
  publicationsSection: {
    title: 'المنشورات',
    texts: [
      'يمكنك العثور أدناه على العديد من أوراقنا التي تعرض التطور والعلم وراء قوة Virufy',
    ],
  },
  publicationsCards: [
    {
      title:
        'محول متعدد النماذج الهرمي للكشف التلقائي عن COVID-19',
      date: 'أكتوبر 2022',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      linkText: 'اقرأ المزيد',
    },
    {
      title: 'آلة حساب COVID-19 -- التأثير الإيجابي على الاقتصاد والمجتمع في الولايات المتحدة',
      date: 'يناير 2022',
      url: 'https://arxiv.org/abs/2201.11109',
      linkText: 'اقرأ المزيد',
    },
    {
      title:
        'استخدام التعلم العميق مع مجموعات بيانات كبيرة مجمعة لتصنيف COVID-19 من السعال',
      date: 'يناير 2022',
      url: 'https://arxiv.org/abs/2201.01669',
      linkText: 'اقرأ المزيد',
    },
    {
      title:
        'التحديات والفرص في نشر أنظمة الذكاء الاصطناعي للكشف عن COVID-19 من السعال',
      date: 'سبتمبر 2021',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421112/',
      linkText: 'اقرأ المزيد',
    },
    {
      title:
        'Virufy: إمكانية التطبيق العالمي لمجموعات البيانات السريرية والجمعية من أجل اكتشاف الذكاء الاصطناعي لكوفيد-19 من خلال السعال',
      date: 'نوفمبر 2020',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      linkText: 'اقرأ المزيد',
    },
  ],
  collaborateSection: {
    title: 'هل ترغب في التعاون البحثي؟',
    linkText: 'انضم إلى فريقنا',
  },
};

export default publications;
