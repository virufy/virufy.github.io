import type { Story } from '../types/story';

const sevenwhoweare: Story = {
  introSection: {
    title: [
      'Redefiniendo',
      'la Detección Temprana',
      'a Través de la IA y el Sonido',
    ],
    text: 'Nuestra tecnología de inteligencia artificial escucha patrones sutiles en el sonido de la tos, ayudando a detectar posibles enfermedades respiratorias de forma temprana y no invasiva.',
    tag: 'Sobre Virufy',
  },
  section2: {
    title: 'De sus Inicios a un Movimiento Global',
    text: [
      'Virufy fue fundada en 2020 durante los primeros días de la pandemia de COVID-19, cuando el acceso limitado a pruebas y los sistemas de salud sobrecargados dejaron a millones sin respuestas oportunas. Un grupo de estudiantes de Stanford reconoció la creciente brecha entre la necesidad de detección temprana y las herramientas disponibles para la mayoría de las personas en todo el mundo.',

      'Al mismo tiempo, investigaciones emergentes en inteligencia artificial sugerían que los sonidos respiratorios, como la tos y los patrones de respiración, podían revelar signos de enfermedad. Sabiendo que el COVID-19 afecta directamente la nariz, la garganta y los pulmones, el equipo exploró si el aprendizaje automático podía analizar estas señales utilizando algo que casi todos ya tenían: un teléfono inteligente.',

      'Lo que comenzó como un esfuerzo de investigación estudiantil creció rápidamente hasta incluir el reclutamiento global de voluntarios y estudios clínicos, sentando las bases del trabajo actual de Virufy. El proyecto evolucionó hasta convertirse en una organización sin fines de lucro enfocada en avanzar en la detección de la salud respiratoria de manera rápida, accesible y escalable para comunidades de todo el mundo.',
    ],
  },
  section3: {
    title: 'Nuestros Valores',
    subtitle:
      'Estos son los principios que guían nuestro trabajo y definen nuestro compromiso con el mundo.',
    StoryCard: [
      {
        title: 'Equidad Global',
        text: 'Creemos que el acceso a la detección de la salud debe estar disponible para todos, sin importar la ubicación geográfica o el nivel económico.',
        icon: './icons/Icon-story-globe.png',
        style: '',
      },
      {
        title: 'Rigor Científico',
        text: 'Cada algoritmo, conjunto de datos y colaboración se basa en investigaciones revisadas por pares y validación clínica.',
        icon: './icons/Icon-story-globe.png',
        style: '',
      },
      {
        title: 'Privacidad Primero',
        text: 'Los datos de los usuarios se anonimizan, se cifran y se gestionan con los más altos estándares de ética en el manejo de datos.',
        icon: './icons/Icon-story-globe.png',
        style: '',
      },
      {
        title: 'Colaboración Abierta',
        text: 'Colaboramos con universidades, ONG y gobiernos para impulsar la investigación y maximizar el impacto global.',
        icon: './icons/Icon-story-globe.png',
        style: '',
      },
    ],
  },
  section4: {
    title: 'Nuestro Impacto en un Vistazo',
    subtitle:
      'Construyendo el conjunto de datos abiertos de audio de tos más grande del mundo para avanzar en la investigación de la salud respiratoria a nivel global.',
    cardtitle: ['250K+', '5+', '250+', '10+'],
    cardtext: [
      'Muestras de tos recopiladas',
      'Países alcanzados',
      'Voluntarios activos',
      'Socios de investigación',
    ],
    cardsubtext: [
      'Contribuyendo a la investigación global',
      'Construyendo un conjunto de datos verdaderamente global',
      'Estudiantes e investigadores',
      'Universidades e instituciones',
    ],
  },
  banner: {
    title: '¿Listo para marcar la diferencia?',
    buttontext: 'Contáctanos',
    text: [
      'Ya sea que desees ser voluntario, colaborar con nosotros o apoyar nuestra misión, nos encantaría saber de ti y explorar cómo podemos trabajar juntos para generar un impacto significativo.',
    ],
    link: '',
  },
};
export default sevenwhoweare;
