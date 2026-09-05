// Need to be translated to ES
import type { PublicationsPage } from '../types/publications';

const PublicationsContent: PublicationsPage = {
  hero: {
    title: 'Publicaciones de Virufy',
    subtitle:
      'Explora nuestra investigación revisada por pares, publicaciones académicas y estudios científicos que avanzan en el campo de la detección de enfermedades respiratorias impulsada por IA mediante tecnología innovadora de análisis de la tos.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'Investigación',
    tagIcon: '/icons/icon-research.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'Noticias' },
      { id: 'publications', label: 'Publicaciones' },
      { id: 'blogs', label: 'Blogs' },
    ],
    defaultOption: 'publications',
  },

  filters: {
    filterByYearLabel: 'Filtrar por año:',
    allYearsOption: 'Todos los años',
    sortByLabel: 'Ordenar por:',
    newestFirst: 'Del más nuevo al más antiguo',
    oldestFirst: 'Del más antiguo al más nuevo',
  },

  section5: {
    title: '¿Te inspiró el trabajo? Ayuda a dar forma a lo que viene después.',
    text: 'Únete a investigadores, diseñadores, ingenieros y defensores que trabajan juntos para promover la salud respiratoria global.',
    button: 'Únete a nuestro equipo',
  },

  emptyMessage:
    'No se encontraron artículos de noticias con los filtros seleccionados.',

  newsCards: [
    {
      title:
        'Soporte organizativo y de liderazgo y su relación con la motivación de los voluntarios en una startup sin fines de lucro con enfoque remoto',
      date: 'Julio 2026',
      subText: '',
      url: 'https://link.springer.com/article/10.1186/s43093-026-00914-6',
      contentType: 'news',
      linkText: 'Leer más',
    },
    {
      title:
        'Transformando las Lecciones de Startup en Ciencia: Nuestra Experiencia en NSF I-Corps Es Ahora una Publicación Revisada por Pares. El Descubrimiento de Clientes No Es Solo Validación—Puede Transformar un Negocio Entero',
      date: 'Julio de 2026',
      subText: '',
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/jsc.70107',
      contentType: 'news',
      linkText: 'Leer más',
    },
    {
      title:
        'Diagnóstico acústico impulsado por IA para la salud respiratoria global',
      date: 'Junio de 2026',
      subText: '',
      url: '/en/publications/virufy-white-paper-2026',
      contentType: 'publications',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'Análisis de tos eficiente en datos mediante aprendizaje activo y segmentación',
      date: 'Marzo de 2026',
      subText: '',
      url: 'https://virufy.org/en/publications/data-efficient-cough-ai/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/march_8_2026.png/',
      year: 2026,
    },
    {
      title:
        'Mejorando la inscripción en ensayos clínicos para la recolección de datos de IA basada en teléfonos inteligentes: Un análisis metodológico de intervenciones basadas en incentivos conductuales (nudges)',
      date: 'Diciembre 2025',
      subText: '',
      url: 'https://sabeconomics.org/ojs/index.php/jbep/article/view/232',
      contentType: 'publications',
      image: '/images/sevenNews/publications/December_21_2025.png',
      year: 2025,
    },
    {
      title:
        'Transformador Multimodal Jerárquico para Detección Automática de COVID-19',
      date: 'Octubre 2022',
      subText: '',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_29_2022.png',
      year: 2022,
    },
    {
      title:
        'Calculadora de Covid 19: impacto socioeconómico positivo en EE. UU.',
      date: 'Enero 2022',
      subText: '',
      url: 'https://arxiv.org/abs/2201.11109',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_21_2022.png',
      year: 2022,
    },
    {
      title:
        'Uso del aprendizaje profundo con grandes conjuntos de datos agregados para la clasificación de COVID-19 a partir de la tos',
      date: 'Enero 2022',
      subText: '',
      url: 'https://arxiv.org/abs/2201.01669',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_5_2022.png',
      year: 2022,
    },
    {
      title:
        'Desafíos y oportunidades en la implementación de sistemas de inteligencia artificial para la tos COVID-19',
      date: 'Septiembre 2021',
      subText: '',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8421112/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/September_7_2021.png',
      year: 2021,
    },
    {
      title:
        'Virufy: Aplicabilidad global de conjuntos de datos clínicos y de colaboración colectiva para la detección mediante IA de COVID-19 a partir de la tos',
      date: 'Noviembre 2020',
      subText: '',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      contentType: 'publications',
      image: '/images/sevenNews/publications/November_26_2020.png',
      year: 2020,
    },
    {
      title:
        'Fusical: Fusión multimodal para análisis de sentimientos en video',
      date: 'Octubre 2020',
      subText: '',
      url: 'https://dl.acm.org/doi/abs/10.1145/3382507.3417966',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_22_2020.png',
      year: 2020,
    },
    {
      title: 'Reconocimiento de expresiones faciales con aprendizaje profundo',
      date: 'Abril 2020',
      subText: '',
      url: 'https://arxiv.org/abs/2004.11823',
      contentType: 'publications',
      image: '/images/sevenNews/publications/April_8_2020.png',
      year: 2020,
    },
  ],
};

export default PublicationsContent;
