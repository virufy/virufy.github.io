import {} from '@/public/images/story';
import { type Story } from '../types/story';

const story: Story = {
  aboutUsSection: {
    title: 'Sobre Nosotros',
    texts: [
      'Nuestro enfoque innovador tiene como objetivo ofrecer una detección previa de COVID superior para pacientes, médicos y gobiernos, especialmente en países de bajos ingresos.',
      'Aspiramos a ser la organización sin fines de lucro líder en la identificación de enfermedades habilitada por la tecnología, transformando la atención médica global e inspirando a otros a apoyar e invertir en esta misión con nosotros.',
    ],
  },
  storySection: {
    title: 'Cómo empezó',
    texts: [
      [
        {
          type: 'text',
          text: 'Cuando llegó la pandemia, ',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'el fundador de Virufy, Amil Khanzada',
        },
        {
          type: 'text',
          text: ', sabía que los teléfonos inteligentes eran omnipresentes y que el COVID afectaba la nariz, la garganta y los pulmones.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Planteó la hipótesis de que los sonidos de la respiración y la tos podrían analizarse con aprendizaje automático para detectar patrones de COVID.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Con el deseo de generar un impacto positivo, orquestó un estudio clínico con 362 pacientes en un prestigioso hospital universitario. El equipo original de Virufy, que comenzó con estudiantes graduados en IA de Stanford, se amplió a voluntarios de universidades de todo el mundo.',
        },
      ],
    ],
  },
  MissionSection: {
    title: 'Our Mission',
    texts: [
      [
        {
          type: 'text',
          text: 'Some people may be wondering, "why are we here?" and "why have so many people supported Virufy?" Virufy\'s mission and goal is to transform global health.',
        }
      ],
      [
        {
          type: 'text',
          text: 'Virufy\'s mission and goal is to transform global health.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We aim to give everyone in the world access to a smartphone app to detect respiratory diseases like COVID, flu, RSV, asthma, lung cancer, in seconds.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We would like a billion people in developing nations to be empowered to protect the health of themselves and loved ones.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Here is a listing of disclosed ',
        },
        {
          type: 'link',
          url: '/advisors',
          text: 'advisors',
        },
        {
          type: 'text',
          text: ' and we have had 1,300+ volunteers to date.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We aim to have UAE as our first country to release the app because of our supporters and the process is much faster and straightforward here than other nations.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Thank you for being part of the mission and let\'s make it happen.',
        },
      ],
    ],
  },
  privacySection: {
    title: 'Nuestro Compromiso con la Privacidad',
    texts: [
      'Virufy se toma en serio la privacidad y protección de su información personal. Nuestro equipo legal ha preparado una Política de Privacidad y una Política de Cookies detalladas para proteger la información personal que comparte con nosotros a través del uso de nuestro sitio web.',
    ],
  },
};

export default story;
