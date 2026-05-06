import { type HomeType } from '../types/home';

const home: HomeType = {
  introSection: {
    text: 'Bienvenido a Virufy',
    text2: 'Tu compañero de salud digital',
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
          text: ', la aplicación de vanguardia que utiliza audio e inteligencia artificial generativa para analizar los sonidos de tu respiración e identificar patrones asociados con síntomas de infecciones.',
        },
      ],
      [
        {
          type: 'text',
          text: ' Nuestro enfoque innovador tiene como objetivo ofrecer una preevaluación de enfermedades respiratorias para pacientes, médicos y gobiernos, especialmente en países de bajos ingresos.',
        },
      ],
      [
        {
          type: 'text',
          text: ' Aspiramos a ser la principal organización sin fines de lucro en identificación de enfermedades mediante tecnología, transformando la atención médica global e inspirando a otros a apoyar e invertir en esta misión con nosotros.',
        },
      ],
    ],
    buttonText: 'Probar nuestra demo',
    disclaimers: [
      '*Cualquier dispositivo con navegador web y micrófono (por ejemplo, iPhone, Android, portátil, iPad).',
      '*La aplicación aún está en desarrollo, apóyanos contribuyendo con tus sonidos de tos a nuestra aplicación de recolección de datos.',
    ],
    mainText2: 'Cómo funciona',
    subText2: [
      {
        type: 'text',
        text: 'Con solo una tos guiada en el micrófono de tu dispositivo, ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: ' aprovecha el poder de la inteligencia artificial para analizar patrones de sonido asociados con enfermedades respiratorias como COVID-19, neumonía, gripe, VSR, EPOC y asma.',
      },
    ],
  },
  section2: {
    text: 'Tu salud, nuestra prioridad',
    subtext:
      'En Virufy, tu bienestar está en el centro de todo lo que hacemos. Priorizamos la privacidad, asegurando que tus datos permanezcan seguros y confidenciales.',
    title: [
      'Análisis instantáneo',
      'Anonimato en casa',
      'Interfaz fácil de usar',
    ],
    sub: [
      'Retroalimentación rápida sobre las características de tu tos y el perfil de anormalidad basado en el patrón de sonido de tu tos',
      'Siéntete seguro sabiendo que tus resultados son solo para tus ojos.',
      'Diseño intuitivo para una navegación fácil y una experiencia de usuario fluida.',
    ],
    disclaimer:
      '*Virufy no sustituye el consejo, diagnóstico o tratamiento médico profesional. Se recomienda a los usuarios consultar a un profesional de la salud con licencia para cualquier inquietud o decisión médica.',
    buttonText: 'Nuestra tecnología',
  },
};

export default home;
