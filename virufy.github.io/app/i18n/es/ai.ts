import { type Ai } from '../types/ai';

const ai: Ai = {
  heroSection: {
    title: [
      {
        type: 'text',
        text: 'La Ciencia detrás de ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
    ],
    text: 'La Inteligencia Artificial (IA) es capaz de detectar diferencias mínimas en los patrones vocales para detectar la presencia de enfermedades.',
    url: '/publications',
    linkText: 'Vea nuestra Investigación',
  },
  aiSection: {
    title: '¿Cómo funciona la Inteligencia Artificial (IA)?',
    aiCards: [
      {
        title: '01',
        text: 'Nuestra revolucionaria aplicación CoughCheck emplea tecnología de inteligencia artificial de vanguardia. Con solo toser en su teléfono, nuestra aplicación captura y analiza distintos patrones de tos utilizando sofisticados algoritmos de aprendizaje automático y redes neuronales.',
        style: 'tracking-widest',
      },
      {
        title: '02',
        text: 'El algoritmo examina varios elementos de la tos, como la duración, la frecuencia y la intensidad. Aprovechando una base de datos completa, AI compara meticulosamente los patrones de tos registrados con indicadores conocidos de enfermedades respiratorias, lo que permite la detección temprana de posibles problemas de salud.',
        style: 'text-[2.5rem] sm:text-6xl',
      },
    ],
  },
};

export default ai;
