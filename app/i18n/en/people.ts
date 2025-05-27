import {
  AdamLeipzig,
  AyomideOwoyemi,
  FaisalCheema,
  FumihikoYokota,
  GlennMuschert,
  HiroyukiKunishima,
  JureLeskovec,
  JesseBump,
  KaraMeister,
  KhwajaShaik,
  KoheiWakamiya,
  KutsunaSatoshi,
  LesAtlas,
  MadhavDatt,
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
  ThomasMahoney,
  TsutomuIto,
  VictorWang,
  YukitoshiNakatani,
  ZafarShahid,
} from '@/public/images/advisors';
import { type People } from '../types/people';

const people: People = {
  titleImage:
    'We unite from across the world to defeat infectious diseases one cough at a time.',
  sectionMeetOurFounder: {
    titleMeetOurFounder: 'Meet Our Founder',
    titleAmil: 'Amil Khanzada',
    textAmil:
      'Doctorate of Engineering Candidate, University of Fukui, Japan. Former MBA & Master of Engineering (Data Science) Joint-Degree Student, UC Berkeley.',
    button: `Read Amil's Story`,
  },
  sectionAdvisors: {
    title: 'Advisors',
    advisors: [
      {
        img: KaraMeister,
        name: 'Kara Meister, M.D.',
        role: 'Clinical Advisor',
        texts: [
          'Clinical Assistant Professor of ENT Stanford School of Medicine',
        ],
        link: 'https://www.linkedin.com/in/kara-meister-200335110/',
      },
      {
        img: JureLeskovec,
        name: 'Dr. Jure Leskovec',
        role: 'Artificial Intelligence Advisor',
        texts: [
          'Chief Scientist - Pinterest',
          'Associate Professor of AI - Stanford',
        ],
        link: 'https://www.linkedin.com/in/leskovec/',
      },
      {
        img: MelissaDyrdahl,
        name: 'Melissa Dyrdahl',
        role: 'Executive Marketing Advisor',
        texts: ['Former CMO - Adobe', 'Board Member - CommonSpirit Health'],
        link: 'https://dci.stanford.edu/melissa-dyrdahl/',
      },
      {
        img: KutsunaSatoshi,
        name: 'Kutsuna Satoshi',
        role: 'Executive Clinical Advisor',
        texts: [
          'Infection Control and Prevention Professor - Osaka University',
        ],
        link: 'https://www.med.osaka-u.ac.jp/eng/introduction/research/special/infection',
      },
      {
        img: GlennMuschert,
        name: 'Prof. Glenn Muschert',
        role: 'Social Science & Public Policy Advisor',
        texts: [
          'Professor, Public Health & Epidemiology, Khalifa University, UAE',
          'Ph.D. Sociology - University of Colorado, Boulder',
        ],
        link: 'https://www.ku.ac.ae/college-people/glenn-muschert',
      },
      {
        img: ThomasMahoney,
        name: 'Thomas Mahoney',
        role: 'Business & Public Health Advisor',
        texts: [
          'Department Associate, Infectious Diseases Department, Harvard University',
          'MBA, The Wharton School, University of Pennsylvania',
        ],
        link: 'https://hsph.harvard.edu/profile/thomas-mahoney/',
      },
      {
        img: MadhavDatt,
        name: 'Madhav Datt',
        role: 'Executive Nonprofit Advisor',
        texts: [
          'Founder - Green the Gene',
          'Former Global Representative for Youth - UN EP',
          'MBA, Harvard Business School',
        ],
        link: 'https://www.linkedin.com/in/madhavdatt/',
      },
      {
        img: MayXu,
        name: 'May Xu',
        role: 'Data and AI Product Strategy Advisor',
        texts: ['Founder / Executive Coach', 'M.S. - Stanford University'],
        link: 'https://www.linkedin.com/in/may-xu-bb06934',
      },
      {
        img: ZafarShahid,
        name: 'Zafar Shahid',
        role: 'Technology Advisor',
        texts: [
          'Green AI Leader - ex-NVIDIA, ex-Meta',
          'Ph.D. Multimedia Forensics, University of Montpellier',
        ],
        link: 'https://zafarshahid.com/',
      },
      {
        img: RafiAzimKhan,
        name: 'Rafi Azim-Khan',
        role: 'Executive Legal Advisor',
        texts: [
          'Partner, Head of Digital Law, Europe', 'Crowell & Moring LLP',
        ],
        link: 'https://www.pillsburylaw.com/en/lawyers/rafi-azim-khan.html',
      },
      {
        img: RonanDunlop,
        name: 'Ronan Dunlop',
        role: 'Executive Marketing Advisor',
        texts: [
          'Former Head of Marketing - Pivotal/VMWare',
          'VP of Marketing - Cohuman',
        ],
        link: 'https://www.linkedin.com/in/rdunlop/',
      },
      {
        img: MarkHaseltine,
        name: 'Mark Haseltine',
        role: 'Executive Advisor',
        texts: [
          'Former CTO/CPO - edX, GoDaddy',
          'Computer Science alumnus - MIT',
        ],
        link: 'https://www.linkedin.com/in/mhaseltine/',
      },
      {
        img: FaisalCheema,
        name: 'Faisal Cheema',
        role: 'Executive Clinical Advisor',
        texts: [
          'Associate Professor of Biomedical & Clinical Sciences, Tilman J. Fertitta College of Medicine, University of Houston',
        ],
        link: 'https://www.linkedin.com/in/doccheema/',
      },
      {
        img: MertPilanci,
        name: 'Mert Pilanci',
        role: 'Artificial Intelligence Advisor',
        texts: [
          'Asst. Professor of AI - Stanford University, Electrical Engineering',
        ],
        link: 'https://stanford.edu/~pilanci/',
      },
      {
        img: TetsujiMadarame,
        name: 'Tetsuji Madarame',
        role: 'Principal Fellow, Tech Planning, Japan Freight Railway',
        texts: [
          'Investment Advisory Board, theDOCK, Maritime and Logistics Tech VC',
          'MBA - Stanford GSB',
        ],
        link: 'https://www.linkedin.com/in/tetsuji-madarame-6a337916b',
      },
      {
        img: YukitoshiNakatani,
        name: 'Yukitoshi Nakatani',
        role: 'Japan Executive Advisor',
        texts: ['CEO, IT Value Consulting', 'Former Director, Accenture Japan'],
        link: 'https://www.facebook.com/nakatani.yukitoshi',
      },
      {
        img: VictorWang,
        name: 'Victor Wang',
        role: 'Executive Advisor',
        texts: [
          'Founder & Chairman - China Silicon Valley',
          'MBA - Stanford GSB',
        ],
        link: 'https://www.linkedin.com/in/executivestanfordvictorwang/',
      },
      {
        img: AdamLeipzig,
        name: 'Adam Leipzig',
        role: 'Executive Advisor',
        texts: [
          'CEO, Entertainment Media Partners',
          'Former President, National Geographic Films',
          'Professional Faculty, Berkeley Haas School of Business',
        ],
        link: 'https://www.linkedin.com/in/adamleipzig/',
      },
      {
        img: RokSosic,
        name: 'Rok Sosic',
        role: 'Artificial Intelligence Advisor',
        texts: ['Senior Research Engineer', 'Stanford School of Engineering'],
        link: 'https://scholar.google.com/citations?user=xlZ4YJcAAAAJ&hl=en&oi=ao',
      },
      {
        img: RichardNall,
        name: 'Richard Nall',
        role: 'Marketing Advisor',
        texts: [
          'CEO - The Brand Garden',
          `Master's Organizational Leadership - Henley`,
        ],
        link: 'https://www.linkedin.com/in/richardnall/',
      },
      {
        img: KhwajaShaik,
        name: 'Khwaja Shaik',
        role: 'Chief Technology Officer - IBM',
        texts: [
          'MOSH, Vice Chair, Board Member',
          'Board Member - University of North Florida Computing',
        ],
        link: 'https://www.linkedin.com/in/khwajashaik/',
      },
      {
        img: AyomideOwoyemi,
        name: 'Ayomide Owoyemi',
        role: 'Executive Clinical Advisor',
        texts: [
          'PhD Biomedical Sciences - University of Illinois Chicago',
          'Ambassador - One Young World Nigeria',
        ],
        link: 'https://www.linkedin.com/in/ayomide-owoyemi/',
      },
      {
        img: TsutomuIto,
        name: 'Tsutomu Ito',
        role: 'Executive Visionary Advisor',
        texts: ['Founder - Tannan FM Radio', 'Lead Architect, Bullet Train'],
        link: 'http://tannan.fm/contents/about-us.html',
      },
      {
        img: LesAtlas,
        name: 'Dr. Les Atlas',
        role: 'Audio and Machine Learning Advisor',
        texts: [
          'Professor of Electrical and Computer Engineering - University of Washington',
          'Ph.D. Electrical Engineering, Stanford',
        ],
        link: 'https://people.ece.uw.edu/atlas/',
      },
      {
        img: JesseBump,
        name: 'Jesse Bump, Ph.D., MPH, FRSA',
        role: 'Population Health Advisor',
        texts: [
          'Department of Global Health and Population',
          'Harvard T.H. Chan School of Public Health',
        ],
        link: 'https://www.hsph.harvard.edu/jesse-bump/',
      },
      {
        img: NobuyoOzawa,
        name: 'Nobuyo Ozawa',
        role: 'Japan Clinical Development Lead',
        texts: ['Clinical Development Department Group Manager, CRO'],
        link: 'https://www.linkedin.com/in/nobuyo-ozawa-223707113',
      },
      {
        img: HiroyukiKunishima,
        name: 'Hiroyuki Kunishima',
        role: 'Infectious Diseases Advisor',
        texts: [
          'Department of Infectious Diseases, St. Marianna University Hospital',
        ],
        link: 'http://www.k-icnet.org/profile.html',
      },
      {
        img: FumihikoYokota,
        name: 'Fumihiko Yokota',
        role: 'Public Health Advisor',
        texts: ['Associate Professor of Epidemiology, Kyushu University'],
        link: 'https://q-aos.kyushu-u.ac.jp/en/staff/1770/',
      },
      {
        img: KoheiWakamiya,
        name: 'Kohei Wakamiya',
        role: 'Audio AI Advisor',
        texts: ['Acoustic Design Assistant Professor', 'Kyushu University'],
        link: 'https://hyoka.ofc.kyushu-u.ac.jp/html/100021188_en.html',
      },
      {
        img: TamerFahmy,
        name: 'Tamer Fahmy',
        role: 'Middle East & Africa Market Advisor',
        texts: [
          'Former Dräger/Philips MedTech - Sleep & Respiratory Care',
          'MBA, SP Jain School of Global Management',
          'BSc Biomedical Engineering, Cairo University',
        ],
        link: 'https://ae.linkedin.com/in/tamer-fahmy-b4468614',
      },
      {
        img: ShirinHasan,
        name: 'Shirin Hasan',
        role: 'Clinical, Medical, Regulatory Affairs Advisor',
        texts: [
          'Former Head of Clinical Affairs, Medtronic',
          'M.S., Biochemistry, SJSU/Stanford',
        ],
        link: 'https://www.linkedin.com/in/shirinhasan/',
      },
    ],
  },
};

export default people;
