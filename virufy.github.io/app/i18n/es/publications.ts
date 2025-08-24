import { type Publications } from '../types/publications';

const publications: Publications = {
  publicationsSection: {
    title: 'Publicaciones',
    texts: [
      'A continuación puede encontrar varios de nuestros artículos que muestran el desarrollo y la ciencia detrás del poder de Virufy.',
    ],
  },
  publicationsCards: [
    {
      title:
        'Transformador Multimodal Jerárquico para Detección Automática de COVID-19',
      date: 'Octubre 2022',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      linkText: 'Leer más',
    },
    {
      title:
        'Calculadora de Covid 19: impacto socioeconómico positivo en EE. UU.',
      date: 'Enero 2022',
      url: 'https://arxiv.org/abs/2201.11109',
      linkText: 'Leer más',
    },
    {
      title:
        'Uso del aprendizaje profundo con grandes conjuntos de datos agregados para la clasificación de COVID-19 a partir de la tos',
      date: 'Enero 2022',
      url: 'https://arxiv.org/abs/2201.01669',
      linkText: 'Leer más',
    },
    {
      title:
        'Desafíos y oportunidades en la implementación de sistemas de inteligencia artificial para la tos COVID-19',
      date: 'Septiembre 2021',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421112/',
      linkText: 'Leer más',
    },
    {
      title:
        'Virufy: Aplicabilidad global de conjuntos de datos clínicos y de colaboración colectiva para la detección mediante IA de COVID-19 a partir de la tos',
      date: 'Noviembre 2020',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      linkText: 'Leer más',
    },
  ],
  collaborateSection: {
    title: 'Ayudemos al mundo y salvemos vidas registrando tu tos',
    linkText: 'Comparte tu tos',
  },
};

export default publications;
