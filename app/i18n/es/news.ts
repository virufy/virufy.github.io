import type { SevenNewsPage } from '../types/news';

const sevenNewsContent: SevenNewsPage = {
  hero: {
    title: 'Virufy en las noticias',
    subtitle:
      'Manténgase al día con las últimas noticias, comunicados de prensa y cobertura mediática sobre la misión de Virufy de democratizar la atención médica mediante el cribado respiratorio impulsado por IA.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'Cobertura mediática',
    tagIcon: '/icons/icon-media.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'Noticias' },
      { id: 'publications', label: 'Publicaciones' },
      { id: 'blogs', label: 'Blogs' },
    ],
    defaultOption: 'news',
  },

  filters: {
    filterByYearLabel: 'Filtrar por año:',
    allYearsOption: 'Todos los años',
    sortByLabel: 'Ordenar por:',
    newestFirst: 'Más reciente a más antiguo',
    oldestFirst: 'Más antiguo a más reciente',
  },

  section5: {
    title: '¿Te inspira este trabajo? Ayuda a dar forma a lo que viene.',
    text: 'Únete a investigadores, diseñadores, ingenieros y defensores que trabajan juntos para impulsar la salud respiratoria global.',
    button: 'Únete a nuestro equipo',
  },

  emptyMessage:
    'No se encontraron artículos de noticias para los filtros seleccionados.',

  newsCards: [
    {
      title: 'Artículo publicado en Wiley Online Library',
      date: 'Julio de 2026',
      subText:
        'Convertir las lecciones de las startups en ciencia: nuestra experiencia en NSF I-Corps ya es una publicación revisada por pares. El descubrimiento de clientes no es solo validación: puede transformar todo un proyecto empresarial.',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/jsc.70107',
      year: 2026,
    },
    {
      title:
        'Tres empresas universitarias de Suiza, EE. UU. y Egipto avanzan a pilotos activos y fases comerciales en Dubái',
      date: 'Mayo de 2026',
      subText: '',
      contentType: 'news',
      url: 'https://www.prototypesforhumanity.com/press-releases/press/Universityventures',
      year: 2026,
    },
    {
      title:
        'FPH UI explora colaboración estratégica con Virufy para desarrollar tecnología de IA en salud respiratoria',
      date: 'Junio de 2026',
      subText: '',
      contentType: 'news',
      url: 'https://fkm.ui.ac.id/en/fph-ui-explores-strategic-collaboration-with-virufy-to-develop-ai-technology-in-respiratory-health/',
      year: 2026,
    },
    {
      title:
        'Un mensaje de nuestro fundador, Amil Khanzada: de Silicon Valley al aula — mi primera conferencia en la Universidad de Fukui',
      date: 'Junio de 2026',
      contentType: 'news',
      image: '/images/news/Amil-Classroom-1.jpg',
      subText: '',
      url: '/en/news/amil-june-2026',
      year: 2026,
    },
    {
      title:
        'Avanzando la atención pediátrica con IA: Virufy x Emirates Health Services (EHS) en WHX Dubái 2026',
      date: 'Abril de 2026',
      subText: '',
      contentType: 'news',
      url: '/en/news/whx-dubai-2026',
      year: 2026,
    },
    {
      title: 'GITEX Global 2025 - Salud en Dubái',
      date: 'Octubre de 2025',
      subText:
        'Cómo una asociación estratégica con Dubai Health está impulsando el análisis de tos con IA para un cribado respiratorio escalable y clínicamente validado.',
      url: '/es/news/gitex-global-2025-dubai',
      contentType: 'news',
      image: '/images/sevenNews/news/oct_2025.png',
      year: 2025,
    },
    {
      title: 'El éxito del cribado respiratorio de Virufy en Abu Dabi',
      date: 'Junio de 2025',
      subText:
        'Cómo la plataforma de cribado con IA de Virufy ganó impulso internacional entre responsables de políticas e innovadores en 95 países.',
      url: '/es/news/uae-adghw-apr-2025',
      contentType: 'news',
      image: '/images/sevenNews/news/june_2025.png',
      year: 2025,
    },

    {
      title:
        'Virufy presentará tecnología innovadora de detección de COVID-19 en Prototypes for Humanity 2024 en Dubái',
      date: 'Noviembre de 2024',
      subText: '',
      url: '/es/news/press-release-dubai',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2024,
    },
    {
      title:
        'Virufy lanza su app beta en Colombia, brindando detección de COVID-19 en casa a 4.500 usuarios',
      date: 'Febrero de 2023',
      subText: '',
      url: '/es/news/beta-app-release-2023',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2023,
    },
    {
      title:
        'BARDA apoya el desarrollo de nuevas aplicaciones digitales basadas en IA/ML para la detección visual y auditiva de enfermedades infecciosas sintomáticas',
      date: 'Noviembre de 2022',
      subText: 'Contramedidas médicas, Estados Unidos',
      url: 'https://medicalcountermeasures.gov/newsroom/2022/ai_ml/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2022,
    },
    {
      title:
        'Esta app busca diagnosticar Covid-19 con solo toser frente al teléfono',
      date: 'Febrero de 2021',
      subText: 'Forbes, México',
      url: 'https://www.forbes.com.mx/emprendedores-app-diagnostico-covid-19-toser-telefono/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title:
        'COVID-19: La app de Virufy puede diagnosticar el virus mediante el análisis de la tos',
      date: 'Enero de 2021',
      subText: 'MSN',
      url: 'https://www.americatv.com.pe/noticias/actualidad/covid-19-aplicativo-virufy-puede-diagnosticar-virus-mediante-analisis-tiene-precision-80-y-no-reemplazara-pruebas-diagnostico-grado-hospitalario-tos-n433332',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title:
        'VIRUFY: plataforma que permite detectar si estamos contagiados con COVID-19',
      date: 'Octubre de 2020',
      subText: 'Expreso, Lima, Perú',
      url: 'https://www.expreso.com.pe/actualidad/virufy-plataforma-que-permite-detectar-si-estamos-contagiados-con-covid-19/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'Embajador de One Young World Japón combate el COVID-19 con IA',
      date: 'Mayo de 2020',
      subText: 'One Young World, Tokio, Japón',
      url: 'https://oywj.org/ambassadors-in-action/2020/05/oywj-ambassador-targets-covid-19-using-ai/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title:
        'Embajadores de Norteamérica en la primera línea de la respuesta al COVID-19',
      date: '2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/north-american-ambassadors-frontlines-covid-19-response',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'Embajadores del mes de julio',
      date: 'Julio de 2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/july-2020-ambassadors-month',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title:
        'Miles de personas asisten a los eventos digitales globales de OYW en julio: un resumen de lo que te perdiste',
      date: 'Julio de 2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/thousands-attend-oyws-global-digital-events-july-recap-what-youve-missed',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'Caucus de One Young World Tokio 2020',
      date: '2020',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/event/one-young-world-tokyo-caucus-2020',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'Presentación de Virufy en One Young World Tokio 2020 Caucus',
      date: '2020',
      subText: 'One Young World, Tokio, Japón',
      url: 'https://youtu.be/UZU3rPTEPfU',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
  ],
};

export default sevenNewsContent;
