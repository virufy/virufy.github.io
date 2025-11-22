import { type JobListing } from '../types/jobListing';

const jobListing: JobListing = {
  titleImage: 'تُدار فيروفاي بالكامل بواسطة المتطوعين وشركات الشركاء المتبرعة.',
  modal: {
    text: 'هل تفهم أن هذه كلها وظائف غير مدفوعة، وظائف تطوعية؟',
    yes: 'نعم',
    no: 'لا',
  },
  applyButtonText: 'التقديم',
  jobDetailSectionTitles: {
    responsibilities: 'المسؤوليات',
    desiredSkills: 'المهارات المطلوبة',
    minQualifications: 'المؤهلات الدنيا',
    hours: 'الساعات',
    questions: 'أسئلة؟',
    applyButtonText: 'التقديم على هذا الدور',
  },
  jobList: [
     {
      category: 'عام',
      positions: [
        {
          title: 'طلب وظيفة عامة',
          id: 26,
        },
      ],
    },
    {
      category: 'الهندسة',
      positions: [
        {
          title: 'مهندس برمجيات',
          id: 1,
        },
        {
          title: 'مهندس تعلم الآلة',
          id: 2,
        },
        {
          title: 'مهندس تعلم الآلة (النمذجة)',
          id: 3,
        },
        {
          title: 'مهندس معالجة الإشارة الصوتية',
          id: 4,
        },
        {
          title: 'مهندس ديف أوبس',
          id: 5,
        },
        {
          title: 'مهندس أمن المعلومات',
          id: 6,
        },
      ],
    },
    {
      category: 'البيانات',
      positions: [
        {
          title: 'متدرب خصوصية البيانات',
          id: 7,
        },
        {
          title: 'عالم بيانات مساعد',
          id: 8,
        },
      ],
    },
    {
      category: 'الإدارة',
      positions: [
        {
          title: 'مدير أعمال',
          id: 9,
        },
        {
          title: 'مدير مشروع',
          id: 10,
        },
        {
          title: 'مدير منتج',
          id: 11,
        },
      ],
    },
    {
      category: 'الموارد البشرية',
      positions: [
        {
          title: 'شريك أعمال الموارد البشرية',
          id: 12,
        },
        {
          title: 'مساعد إداري للموارد البشرية',
          id: 13,
        },
        {
          title: 'موظف توظيف تقني',
          id: 14,
        },
      ],
    },
    {
      category: 'القانون',
      positions: [
        {
          title: 'محامي شركة (موجه لتكنولوجيا المعلومات)',
          id: 15,
        },
        {
          title: 'مساعد قانوني',
          id: 16,
        },
      ],
    },
    {
      category: 'تكنولوجيا المعلومات (IT)',
      positions: [
        {
          title: 'محلل أعمال',
          id: 17,
        },
        {
          title: 'مبرمج بايثون',
          id: 18,
        },
        {
          title: 'كاتب تقني',
          id: 19,
        },
        {
          title: 'مهندس ضمان الجودة',
          id: 20,
        },
        {
          title: 'مطور AWS',
          id: 21,
        },
        {
          title: 'معماري AWS',
          id: 22,
        },
        {
          title: 'مهندس AWS',
          id: 23,
        },
        {
          title: 'مهندس سحابي',
          id: 24,
        },
        {
          title: 'مدير أنظمة Unix',
          id: 25,
        },
      ],
    },
    {
      category: 'جمع التبرعات',
      positions: [
        {
          title: 'الكاتب غرانت',
          id: 27,
        },
      ],
    },
  ],
};

export default jobListing;
