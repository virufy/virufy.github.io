import { type Ai } from '../types/ai';

const ai: Ai = {
  heroSection: {
    title: [
      {
        type: 'text',
        text: 'La ciencia detrás de ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
    ],
    text: 'La inteligencia artificial (IA) puede identificar diferencias sutiles en la tos y los sonidos de la respiración asociados con condiciones respiratorias.',
    url: '/publications',
    linkText: 'Nuestra investigación',
  },
  aiSection: {
    title: '¿Cómo funciona la IA?',
    aiCards: [
      {
        title: '01',
        text: 'Nuestra innovadora aplicación utiliza tecnología de inteligencia artificial de vanguardia para analizar sonidos de tos y respiración mediante algoritmos de aprendizaje profundo y técnicas de procesamiento de señales de audio.',
        style: 'tracking-widest text-[2.5rem] sm:text-6xl',
      },
      {
        title: '02',
        text: 'El algoritmo examina diversos elementos de la tos, como la duración, la frecuencia y el tono. Aprovechando una base de datos integral, la IA compara meticulosamente los patrones de tos registrados con indicadores conocidos de enfermedades respiratorias, lo que permite identificar señales asociadas con condiciones respiratorias.',
        style: 'text-[2.5rem] sm:text-6xl',
      },
    ],
  },
};

export default ai;
