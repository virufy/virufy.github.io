import { type HomeType } from '../types/home';

const home: HomeType = {
  introSection: {
    text: 'Bienvenido a Virufy',
    text2: 'Tu Compañero de Salud Digital',
    subText: [
      [
        {
          type: 'text',
          text: 'Presentamos ',
        },
        {
          type: 'span',
          text: 'Virufy',
        },
        {
          type: 'text',
          text: ', la aplicación de vanguardia que utiliza algoritmos avanzados de audio e IA generativa para analizar tus patrones de respiración y proporcionar información sobre posibles síntomas de infección.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Nuestro enfoque innovador tiene como objetivo ofrecer una detección previa superior de enfermedades respiratorias para pacientes, médicos y gobiernos, especialmente en países de bajos ingresos.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Aspiramos a ser la organización sin fines de lucro líder en la identificación de enfermedades mediante tecnología, transformando la atención médica global e inspirando a otros a apoyar e invertir en esta misión con nosotros.',
        },
      ],
    ],
    buttonText: 'Pruebe nuestra demostración',
    disclaimers: [
      '*Cualquier dispositivo con un navegador web y micrófono (por ejemplo, iPhone, Android, laptop, iPad).',
      '*La aplicación aún está en desarrollo, apóyanos contribuyendo con tus sonidos de tos en nuestra aplicación de recolección de datos.',
    ],
    mainText2: 'Cómo Funciona',
    subText2: [
      {
        type: 'text',
        text: 'Con solo una simple tos intencional en el micrófono de tu dispositivo, ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: ' aprovecha el poder de la inteligencia artificial para detectar patrones de sonido únicos asociados con enfermedades respiratorias, como COVID-19, neumonía, gripe, RSV, EPOC y asma.',
      },
    ],
  },
  section2: {
    text: 'Tu Salud, Nuestra Prioridad',
    subtext:
      'En Virufy, tu bienestar está en el centro de todo lo que hacemos. Priorizamos la privacidad, asegurando que tus datos se mantengan seguros y confidenciales.',
    title: ['Análisis Instantáneo', 'Anonimato en Casa', 'Interfaz Amigable'],
    sub: [
      'Retroalimentación rápida sobre las características de tu tos y el perfil de anomalía basado en el patrón de sonido de tu tos.',
      'Siéntete seguro sabiendo que tus resultados son solo para ti.',
      'Diseño intuitivo para facilitar la navegación y una experiencia de usuario fluida.',
    ],
    disclaimer:
      '*Virufy no reemplazará a un médico y te recuerda que es tu responsabilidad buscar asesoramiento médico de tu doctor.',
    buttonText: 'Nuestra Tecnología',
  },
};

export default home;
