import { type sevenAi } from '../types/sevenai';
import { CarouselImg1, CarouselImg2, CarouselImg3 } from '@/public/images/ai/index';
import AcousticIcon from '@/public/icons/icon-ai-acoustic.png';
import FeatureIcon from '@/public/icons/icon-ai-feature.png';
import ModelIcon from '@/public/icons/icon-ai-model.png';
import SoundIcon from '@/public/icons/icon-ai-sound.png';
import ValidationIcon from '@/public/icons/icon-ai-validation.png';

const sevenai: sevenAi = {
  heroSection: {
    tag: "Tecnología sanitaria impulsada por IA",
    title: [
      { type: 'text', text: 'La ' },
      { type: 'span', text: 'Ciencia ' },
      { type: 'text', text: 'Detrás de Virufy' },
    ],
    text: 'Nuestra tecnología de inteligencia artificial detecta patrones sutiles en el sonido de la tos, lo que ayuda a detectar posibles enfermedades respiratorias de manera temprana y no invasiva.',
    aiSlides: [
      {
        title: "Recopilación de datos",
        text: "Simplemente registre una tos breve usando nuestra aplicación web fácil de usar. La interfaz lo guía para capturar una muestra de tos natural de alta calidad en condiciones constantes, lo que garantiza un audio óptimo para un análisis respiratorio preciso.",
        image: CarouselImg1,
      },
      {
        title: "Procesamiento de señales",
        text: "Utilizamos algoritmos de ML para identificar y aislar con precisión los sonidos de la tos. Nuestras herramientas limpian el ruido de fondo y analizan biomarcadores digitales convirtiendo ondas sonoras en características cuantificables llamadas características de biomarcadores acústicos.",
        image: CarouselImg2,
      },
      {
        title: "Análisis de aprendizaje automático",
        text: "Las características de los biomarcadores acústicos extraídas luego se introducen en un modelo de aprendizaje automático previamente entrenado, el modelo compara el perfil de características de la nueva tos entrante con los patrones que aprendió durante el entrenamiento.",
        image: CarouselImg3,
      },
    ],
  },
  aiSection: {
    title: "Cómo aprende la IA de Virufy",
    text: "La Inteligencia Artificial (IA) es capaz de detectar diferencias mínimas en los patrones vocales para detectar la presencia de enfermedades. El algoritmo examina varios elementos de la tos, como la duración, la frecuencia y el tono. Aprovechando una base de datos completa, la IA compara meticulosamente los patrones de tos registrados con indicadores conocidos de enfermedades respiratorias, lo que permite la detección temprana de posibles problemas de salud.",
    aiCards: [
      {
        title: "Captura de sonido",
        text: "Los usuarios registran muestras de tos breves y anónimas a través de la aplicación Virufy.",
        icon: SoundIcon,
        style: "shadow-xl w-full h-full",
      },
      {
        title: "Procesamiento acústico",
        text: "Cada tos se convierte en un mapa de sonido visual o espectrograma.",
        icon: AcousticIcon,
        style: "shadow-xl h-full",
      },
      {
        title: "Extracción de características",
        text: "La IA identifica patrones sutiles y biomarcadores acústicos en los datos.",
        icon: FeatureIcon,
        style: "shadow-xl w-full h-full",
      },
      {
        title: "Entrenamiento modelo",
        text: "Los algoritmos aprenden de conjuntos de datos globales para mejorar la precisión y la equidad.",
        icon: ModelIcon,
        style: "shadow-xl h-full",
      },
      {
        title: "Validación y conocimiento",
        text: "Los resultados de los usuarios se prueban para garantizar una mejora y eficacia continuas.",
        icon: ValidationIcon,
        style: "shadow-xl w-full h-full",
      },
    ],
  },
  banner: {
    title: '¿Listo para marcar la diferencia?',
    text: "Tenemos la misión de hacer que los exámenes de salud sean tan simples como toser. Comuníquese para descubrir cómo sus contribuciones financieras aceleran directamente nuestra investigación clínica y el despliegue de nuestra tecnología de IA accesible en comunidades de todo el mundo.",
    buttonText: 'Apóyanos',
    url: '/donate',
  }
};

export default sevenai;