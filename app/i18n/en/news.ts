import type { SevenNewsPage } from '../types/news';

const sevenNewsContent: SevenNewsPage = {
  hero: {
    title: 'Virufy in the News',
    subtitle:
      'Stay updated with the latest news, press releases, and media coverage about Virufy’s mission to democratize healthcare through AI-powered respiratory health screening.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'Media Coverage',
    tagIcon: '/icons/icon-media.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'News' },
      { id: 'publications', label: 'Publications' },
      { id: 'blogs', label: 'Blogs' },
    ],
    defaultOption: 'news',
  },

  filters: {
    filterByYearLabel: 'Filter by Year:',
    allYearsOption: 'All Years',
    sortByLabel: 'Sort by:',
    newestFirst: 'Newest to Oldest',
    oldestFirst: 'Oldest to Newest',
  },

  section5: {
    title: 'Inspired by the work? Help shape what comes next.',
    text: 'Join researchers, designers, engineers, and advocates working together to advance global respiratory health.',
    button: 'Join Our Team',
  },

  emptyMessage: 'No news articles found for the selected filters.',

  newsCards: [
    {
      title: 'Article published on Wiley Online Library',
      date: 'July 2026',
      subText:
        'Turning Startup Lessons into Science: Our NSF I-Corps Experience Is Now a Peer-Reviewed Publication. Customer Discovery Isn’t Just Validation—It Can Transform an Entire Venture.',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/jsc.70107',
      year: 2026,
    },
    {
      title:
        'Three university ventures from Switzerland, the USA and Egypt move into active pilots and commercial stages in Dubai',
      date: 'May 2026',
      subText: '',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      url: 'https://www.prototypesforhumanity.com/press-releases/press/Universityventures',
      year: 2026,
    },
    {
      title:
        'FPH UI Explores Strategic Collaboration with Virufy to Develop AI Technology in Respiratory Health',
      date: 'June 2026',
      subText: '',
      image: '/images/sevenNews/Placeholder-Card.png',
      contentType: 'news',
      url: 'https://fkm.ui.ac.id/en/fph-ui-explores-strategic-collaboration-with-virufy-to-develop-ai-technology-in-respiratory-health/',
      year: 2026,
    },
    {
      title:
        'A Message from our Founder, Amil Khanzada From Silicon Valley to the Classroom: My First Lecture at the University of Fukui',
      date: 'June 2026',
      contentType: 'news',
      image: '/images/news/Amil-Classroom-1.jpg',
      subText: '',
      url: '/en/news/amil-june-2026',
      year: 2026,
    },
    {
      title:
        'Advancing Pediatric Care with AI: Virufy x Emirates Health Services (EHS) at WHX Dubai 2026!',
      date: 'April 2026',
      subText: '',
      image: '/images/sevenNews/Placeholder-Card.png',
      contentType: 'news',
      url: '/en/news/whx-dubai-2026',
      year: 2026,
    },
    {
      title: 'GITEX Global 2025 - Dubai Health',
      date: 'October 2025',
      subText:
        'How a strategic Dubai Health partnership is advancing AI cough analysis for scalable, clinically validated respiratory screening.',
      url: '/en/news/gitex-global-2025-dubai',
      contentType: 'news',
      image: '/images/sevenNews/news/oct_2025.png',
      year: 2025,
    },
    {
      title: 'Virufy’s Respiratory screening Success at Abu Dhabi',
      date: 'June 2025',
      subText:
        'How Virufy’s AI screening platform gained global traction among policymakers and innovators across 95 countries.',
      url: '/en/news/uae-adghw-apr-2025',
      contentType: 'news',
      image: '/images/sevenNews/news/june_2025.png',
      year: 2025,
    },

    {
      title:
        'Virufy to Showcase Innovative COVID-19 Screening Technology at Prototypes for Humanity 2024 in Dubai',
      date: 'November 2024',
      subText: '',
      url: '/en/news/press-release-dubai',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2024,
    },
    {
      title:
        'Virufy Beta App Launched in Colombia, Providing At-Home COVID-19 Detection to 4,500 Users',
      date: 'February 2023',
      subText: '',
      url: '/en/news/beta-app-release-2023',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2023,
    },
    {
      title:
        'BARDA supports development of novel AI/ML-based digital apps for visual and auditory symptomatic infectious disease detection',
      date: 'November 2022',
      subText: 'Medical Countermeasures, United States',
      url: 'https://medicalcountermeasures.gov/newsroom/2022/ai_ml/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2022,
    },
    {
      title:
        'Esta app busca diagnosticar Covid-19 con sólo toser frente al teléfono',
      date: 'February 2021',
      subText: 'Forbes, Mexico',
      url: 'https://www.forbes.com.mx/emprendedores-app-diagnostico-covid-19-toser-telefono/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title:
        'COVID-19: Aplicativo Virufy puede diagnosticar el virus mediante el análisis de la tos',
      date: 'January 2021',
      subText: 'MSN',
      url: 'https://www.americatv.com.pe/noticias/actualidad/covid-19-aplicativo-virufy-puede-diagnosticar-virus-mediante-analisis-tiene-precision-80-y-no-reemplazara-pruebas-diagnostico-grado-hospitalario-tos-n433332',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title:
        'VIRUFY: plataforma que permite detectar si estamos contagiados con COVID-19',
      date: 'October 2020',
      subText: 'Expreso, Lima, Peru',
      url: 'https://www.expreso.com.pe/actualidad/virufy-plataforma-que-permite-detectar-si-estamos-contagiados-con-covid-19/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'One Young World Japan Ambassador Targets COVID-19 Using A.I.',
      date: 'May 2020',
      subText: 'One Young World, Tokyo, Japan',
      url: 'https://oywj.org/ambassadors-in-action/2020/05/oywj-ambassador-targets-covid-19-using-ai/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title:
        'North American Ambassadors on the Frontlines of the COVID-19 Response',
      date: '2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/north-american-ambassadors-frontlines-covid-19-response',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'Ambassadors of the Month July',
      date: 'July 2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/july-2020-ambassadors-month',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title:
        "Thousands attend OYW's global digital events in July: A recap of what you've missed",
      date: 'July 2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/thousands-attend-oyws-global-digital-events-july-recap-what-youve-missed',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'One Young World Tokyo 2020 Caucus',
      date: '2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/event/one-young-world-tokyo-caucus-2020',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'Virufy Presentation to One Young World Tokyo 2020 Cacus',
      date: '2020',
      subText: 'One Young World, Tokyo, Japan',
      url: 'https://youtu.be/UZU3rPTEPfU',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
  ],
};

export default sevenNewsContent;
