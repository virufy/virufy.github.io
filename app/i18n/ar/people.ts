import {
  AyomideOwoyemi,
  FaisalCheema,
  FumihikoYokota,
  HiroyukiKunishima,
  JureLeskovec,
  JesseBump,
  KaraMeister,
  KhwajaShaik,
  KutsunaSatoshi,
  LesAtlas,
  MadhavDatt,
  AdamLeipzig,
  KoheiWakamiya,
  MarkHaseltine,
  MayXu,
  MelissaDyrdahl,
  MertPilanci,
  NobuyoOzawa,
  RafiAzimKhan,
  RichardNall,
  RokSosic,
  RonanDunlop,
  ShirinHasan,
  TamerFahmy,
  TetsujiMadarame,
  TsutomuIto,
  VictorWang,
  YukitoshiNakatani,
  ZafarShahid,
} from '@/public/images/advisors';
import { type People } from '../types/people';

const people: People = {
  titleImage:
    'نتحد من جميع أنحاء العالم لهزيمة الأمراض المعدية مع كل سعال في وقت واحد.',
  sectionMeetOurFounder: {
    titleMeetOurFounder: 'تعرف على مؤسسنا',
    titleAmil: 'أميل خانزادا',
    textAmil:
      'مرشح دكتوراه في الهندسة، جامعة فوكوي، اليابان. طالب سابق في برنامج الماجستير في إدارة الأعمال وماجستير الهندسة (علوم البيانات) في جامعة كاليفورنيا، بيركلي.',
    button: `اقرأ قصة أميل`,
  },
  sectionAdvisors: {
    title: 'المستشارين',
    advisors: [
      {
        img: KaraMeister,
        name: 'كارا ميستر، دكتور في الطب',
        role: 'مستشارة طبية',
        texts: [
          'أستاذ مساعد في الطب الأنف والأذن والحنجرة - كلية الطب بجامعة ستانفورد',
        ],
        link: 'https://www.linkedin.com/in/kara-meister-200335110/',
      },
      {
        img: JureLeskovec,
        name: 'الدكتور يور ليشكوفيتش',
        role: 'مستشار في الذكاء الاصطناعي',
        texts: [
          'كبير العلماء - Pinterest',
          'أستاذ مشارك في الذكاء الاصطناعي - جامعة ستانفورد',
        ],
        link: 'https://www.linkedin.com/in/leskovec/',
      },
      {
        img: MelissaDyrdahl,
        name: 'ميليسا ديرداهل',
        role: 'مستشارة تسويق تنفيذية',
        texts: [
          'مديرة التسويق السابقة - Adobe',
          'عضو مجلس إدارة - CommonSpirit Health',
        ],
        link: 'https://dci.stanford.edu/melissa-dyrdahl/',
      },
      {
        img: KutsunaSatoshi,
        name: 'كوتسونا ساتوشي',
        role: 'مستشار طبي تنفيذي',
        texts: ['أستاذ في مكافحة العدوى والوقاية - جامعة أوساكا'],
        link: 'https://www.med.osaka-u.ac.jp/eng/introduction/research/special/infection',
      },
      {
        img: MadhavDatt,
        name: 'مادهف دات',
        role: 'مستشار تنفيذي غير ربحي',
        texts: [
          'مؤسس - Green the Gene',
          'الممثل العالمي السابق للشباب - الأمم المتحدة EP',
          'ماجستير في إدارة الأعمال، كلية هارفارد للأعمال',
        ],
        link: 'https://www.linkedin.com/in/madhavdatt/',
      },
      {
        img: MayXu,
        name: 'ماي شو',
        role: 'مستشارة استراتيجية بيانات ومنتجات الذكاء الاصطناعي',
        texts: ['مؤسسة / مدربة تنفيذية', 'ماجستير - جامعة ستانفورد'],
        link: 'https://www.linkedin.com/in/may-xu-bb06934',
      },
      {
        img: ZafarShahid,
        name: 'ظفر شهيد',
        role: 'مستشار CTO التنفيذي',
        texts: ['المؤسس/الرئيس التنفيذي - iCodeGuru', 'دكتوراه – جامعة مونبلييه'],
        link: 'https://zafarshahid.com/',
      },
      {
        img: RafiAzimKhan,
        name: 'رافي أزيم خان',
        role: 'مستشار قانوني تنفيذي',
        texts: [
          'شريك، IP/IT ورئيس خصوصية البيانات أوروبا - Pillsbury Winthrop Shaw Pittman LLP',
        ],
        link: 'https://www.pillsburylaw.com/en/lawyers/rafi-azim-khan.html',
      },
      {
        img: RonanDunlop,
        name: 'رونان دونلوب',
        role: 'مستشار تسويق تنفيذي',
        texts: [
          'رئيس التسويق السابق - Pivotal/VMWare',
          'نائب رئيس التسويق - Cohuman',
        ],
        link: 'https://www.linkedin.com/in/rdunlop/',
      },
      {
        img: MarkHaseltine,
        name: 'مارك هاسلتين',
        role: 'مستشار تنفيذي',
        texts: ['CTO / CPO السابق - edX، GoDaddy', 'خريج علوم الكمبيوتر - MIT'],
        link: 'https://www.linkedin.com/in/mhaseltine/',
      },
      {
        img: FaisalCheema,
        name: 'فيصل شيمة',
        role: 'مستشار طبي تنفيذي',
        texts: [
          'أستاذ مشارك في العلوم الطبية الحيوية والسريرية، كلية الطب Tilman J. Fertitta، جامعة هيوستن',
        ],
        link: 'https://www.linkedin.com/in/doccheema/',
      },
      {
        img: MertPilanci,
        name: 'مارت بيلانجي',
        role: 'مستشار في الذكاء الاصطناعي',
        texts: [
          'أستاذ مساعد في الذكاء الاصطناعي - جامعة ستانفورد، الهندسة الكهربائية',
        ],
        link: 'https://stanford.edu/~pilanci/',
      },
      {
        img: TetsujiMadarame,
        name: 'تتسوجي مادارامي',
        role: 'زميل رئيسي، تخطيط تقني، السكك الحديدية الشحن اليابانية',
        texts: [
          'مجلس استشاري استثماري، theDOCK، VC تقنيات الشحن واللوجستيات',
          'MBA - جامعة ستانفورد لإدارة الأعمال',
        ],
        link: 'https://www.linkedin.com/in/tetsuji-madarame-6a337916b',
      },
      {
        img: YukitoshiNakatani,
        name: 'يوكيتوشي ناكاتاني',
        role: 'مستشار تنفيذي في اليابان',
        texts: [
          'الرئيس التنفيذي، IT Value Consulting',
          'مدير سابق، أكسنتشر اليابان',
        ],
        link: 'https://www.facebook.com/nakatani.yukitoshi',
      },
      {
        img: VictorWang,
        name: 'فيكتور وانغ',
        role: 'مستشار تنفيذي',
        texts: [
          'مؤسس ورئيس - China Silicon Valley',
          'MBA - جامعة ستانفورد لإدارة الأعمال',
        ],
        link: 'https://www.linkedin.com/in/executivestanfordvictorwang/',
      },
      {
        img: AdamLeipzig,
        name: "آدم لايبزيغ",
        role: "المستشار التنفيذي",
        texts: [
          "الرئيس التنفيذي لشركة Entertainment Media Partners",
          "الرئيس السابق لشركة National Geographic Films",
          "عضو هيئة التدريس المحترف بمدرسة الأعمال بجامعة بيركلي هاس"
        ],
        "link": "https://www.linkedin.com/in/adamleipzig/"
      },
      {
        img: RokSosic,
        name: 'روك سوسي',
        role: 'مستشار في الذكاء الاصطناعي',
        texts: ['مهندس أبحاث أول', 'جامعة ستانفورد كلية الهندسة'],
        link: 'https://scholar.google.com/citations?user=xlZ4YJcAAAAJ&hl=en&oi=ao',
      },
      {
        img: RichardNall,
        name: 'ريتشارد نال',
        role: 'مستشار تسويق',
        texts: [
          'الرئيس التنفيذي - The Brand Garden',
          `ماجستير في القيادة التنظيمية - Henley`,
        ],
        link: 'https://www.linkedin.com/in/richardnall/',
      },
      {
        img: KhwajaShaik,
        name: 'خواجة شيك',
        role: 'الرئيس التنفيذي للتكنولوجيا - IBM',
        texts: [
          'MOSH، نائب رئيس مجلس الإدارة، عضو مجلس الإدارة',
          'عضو مجلس إدارة - جامعة شمال فلوريدا لتكنولوجيا المعلومات',
        ],
        link: 'https://www.linkedin.com/in/khwajashaik/',
      },
      {
        img: AyomideOwoyemi,
        name: 'أيومي دي أووييمي',
        role: 'مستشار طبي تنفيذي',
        texts: [
          'دكتوراه في العلوم الطبية الحيوية - جامعة إلينوي شيكاغو',
          'سفير - One Young World نيجيريا',
        ],
        link: 'https://www.linkedin.com/in/ayomide-owoyemi/',
      },
      {
        img: TsutomuIto,
        name: 'تسوتومو إيتو',
        role: 'مستشار تنفيذي مستقبلي',
        texts: ['مؤسس - Tannan FM Radio', 'المدير المعماري، قطار الرصاصة'],
        link: 'http://tannan.fm/contents/about-us.html',
      },
      {
        img: LesAtlas,
        name: 'الدكتور ليس أطلس',
        role: 'مستشار الصوت والتعلم الآلي',
        texts: [
          'أستاذ الهندسة الكهربائية وعلوم الكمبيوتر - جامعة واشنطن',
          'دكتوراه في الهندسة الكهربائية، جامعة ستانفورد',
        ],
        link: 'https://people.ece.uw.edu/atlas/',
      },
      {
        img: JesseBump,
        name: 'جيسي بامب، دكتوراه، ماجستير فى الصحة العامة ، زميل الجمعية الملكية للفنون.',
        role: '. مستشار صحة السكان',
        texts: [
          '. قسم وزارة الصحة العالمية والسكان',
          '. كلية هارفارد تي إتش تشان للصحة العامة ',
        ],
        link: 'https://www.hsph.harvard.edu/jesse-bump/',
      },
      {
        img: NobuyoOzawa,
        name: 'نوبويو أوزاوا',
        role: 'قائد تطوير سريري في اليابان',
        texts: ['مدير مجموعة قسم تطوير السريري، CRO'],
        link: 'https://www.linkedin.com/in/nobuyo-ozawa-223707113',
      },
      {
        img: HiroyukiKunishima,
        name: 'هيرويوكي كونيشما',
        role: 'مستشار أمراض معدية',
        texts: ['قسم الأمراض المعدية، مستشفى جامعة سانت ماريانا'],
        link: 'http://www.k-icnet.org/profile.html',
      },
      {
        img: FumihikoYokota,
        name: 'فوميهيكو يوكوتا',
        role: 'مستشار الصحة العامة',
        texts: ['أستاذ مساعد في الوبائيات، جامعة كيوشو'],
        link: 'https://q-aos.kyushu-u.ac.jp/en/staff/members/yokota-fumihiko',
      },
      {
        img: KoheiWakamiya,
        name: "كوهي واكاميا",
        role: "مستشار الذكاء الاصطناعي الصوتي",
        texts: [
          "أستاذ مساعد تصميم الصوتيات",
          "جامعة كيوشو"
        ],
        link: "https://hyoka.ofc.kyushu-u.ac.jp/html/100021188_en.html"
      },
      {
        img: TamerFahmy,
        name: 'تامر فهمي',
        role: 'مستشار سوق الشرق الأوسط وأفريقيا',
        texts: [
          'مدير سابق في Dräger/Philips MedTech - رعاية النوم والجهاز التنفسي',
          'ماجستير في إدارة الأعمال، كلية إس بي جين لإدارة الأعمال العالمية',
          'بكالوريوس في الهندسة الطبية الحيوية، جامعة القاهرة',
        ],
        link: 'https://ae.linkedin.com/in/tamer-fahmy-b4468614',
      },
      {
        img: ShirinHasan,
        name: 'شيرين حسن',
        role: 'مستشار الشؤون السريرية والطبية والتنظيمية',
        texts: [
          'الرئيس السابق للشؤون السريرية، مدترونيك',
          'ماجستير، الكيمياء الحيوية، جامعة سان خوزيه  / ستانفورد',
        ],
        link: 'https://www.linkedin.com/in/shirinhasan/',
      },
    ],
  },
};

export default people;
