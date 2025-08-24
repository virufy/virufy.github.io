import {
  AmbassadorIcon,
  BgBody,
  BgHeader,
  DiverseIcon,
  GlobeIcon,
  GonzaloTestimonial,
  MarcosTestimonial,
  SebastianTestimonial,
  YouthIcon,
} from '@/public/images/oneYoungWorld';
import { type OneYoungWorld } from '../types/oneYoungWorld';

const oneYoungWorld: OneYoungWorld = {
  header: {
    text: 'تدعمنا الشركات والمنظمات بمعرفتها الواسعة وتوفر لنا الأمان واليقين في ما نقوم به.',
    image: BgHeader,
    altText: '',
  },
  navbarTexts: {
    oyw: 'One Young World',
    teamLeads: 'فريق السفراء  v',
  },
  oyw: {
    bgImage: BgBody,
    altText: '',
    virufyAndOyw: {
      title: 'One Young World',
      subTitle: 'Virufy & One Young World',
      texts: [
        'عالمنا يحتاج إلى قيادة عظيمة. الجيل الجديد هو واحد من أكثر الأجيال علمًا وتعليمًا وترابطًا في تاريخ العالم. تقوم وان يونغ وورلد بتحديد وتعزيز وربط أكثر القادة الشباب تأثيرًا عبر العالم لإنشاء عالم أفضل: عالم مع قيادة أكثر مسؤولية وفعالية.',
        'لقد تم عرض Virufy على العديد من منصات OYW، بما في ذلك في الأمريكتين واليابان، والسفراء في العمل، ومؤتمرات المندوبين، والسفراء على الخطوط الأمامية للاستجابة لـCOVID-19. نحن نتعاون أيضًا مع سفراء OYW المنسقين في مختلف المناطق لجهود التوعية.',
      ],
      videoUrl: 'https://www.youtube.com/embed/hvJgwPNYnZo?si=k_ujoF1pBeYFg65C',
      videoTitle: 'رؤية Virufy والدعوة إلى العمل',
    },
    whyOyw: {
      title: 'لماذا وان يونغ وورلد؟',
      cards: [
        {
          title: 'مدفوعة بالسفراء',
          text: 'يتطابق هيكلنا التنظيمي مع One Young World مع سفراء الشباب الذين يقومون بتنسيق العمليات في كل منطقة.',
          image: AmbassadorIcon,
          altText: '',
        },
        {
          title: 'يقودها الشباب',
          text: 'فريقنا المتنامي يقوده محترفون شباب من أكثر من عشرة دول مع إشراف قريب من قادة الصناعة العالميين.',
          image: YouthIcon,
          altText: '',
        },
        {
          title: 'مركزة على التأثير العالمي',
          text: 'هدفنا من اليوم الأول كان تقديم حلول عادلة لجميع الناس في جميع البلدان حول العالم.',
          image: GlobeIcon,
          altText: '',
        },
        {
          title: 'تمثيل متنوع',
          text: 'يضم فريقنا ممثلين من أكثر من 50 جامعة و25 دولة، وقد تلقى الدعم من العشرات من سفراء One Young World.',
          image: DiverseIcon,
          altText: '',
        },
      ],
    },
    volunteerStories: {
      title: 'شهادات المتطوعين',
      text: 'تطوع العديد من السفراء في Virufy وقدموا شهاداتهم. لدينا ثقة قوية في أعضاء مجتمع One Young World ونرحب ترحيبًا حارًا بأي سفراء مهتمين بالمساهمة.',
      testimonials: [
        {
          name: 'سيباستيان بيدرازا',
          origin: 'كولومبيا',
          image: SebastianTestimonial,
          altText: 'صورة سيباستيان بيدرازا',
          testimonial: `“يوحد Virufy قوة الشباب والتكنولوجيا لتحويل العالم. ونأمل أن يصل هذا الحل إلى العالم أجمع، وأن يصبح سندا للأطباء، خاصة في الدول ذات الدخل المنخفض.”`,
        },
        {
          name: 'جونزالو رويفي',
          origin: 'الأرجنتين',
          image: GonzaloTestimonial,
          altText: 'صورة جونزالو رويفي',
          testimonial: `“سيؤثر فيروس Virufy على مستوى العالم، بغض النظر عن خلفية المستخدمين أو حالتهم الاجتماعية. هذا هو ما يبدو عليه تغيير الوضع الراهن.”`,
        },
        {
          name: 'ماركوس ديزا',
          origin: 'الأرجنتين',
          image: MarcosTestimonial,
          altText: 'صورة ماركوس ديزا',
          testimonial: `“أعتقد أن Virufy سوف يطور حلاً دقيقًا للغاية وسيكون مفيدًا للعالم أجمع في كل صناعة. لذلك أشجع الجميع على تخصيص بعض الدقائق والمساهمة معنا.”`,
        },
      ],
      buttonText: 'انضم إلى فريقنا',
    },
  },
};

export default oneYoungWorld;
