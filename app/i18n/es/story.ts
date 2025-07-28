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
    title: 'Nuestra Misión',
    statement:
      'En Virufy, nuestra misión es salvar vidas haciendo que la prevención y la detección de enfermedades sean gratuitas, privadas y accesibles para todos, en todas partes. Nos dedicamos a:',
    texts: [
      'Ofrecemos soluciones rápidas de detección previa de enfermedades respiratorias basadas en inteligencia artificial para pacientes, médicos y gobiernos, especialmente en comunidades marginadas.',
      'Aprovechar el poder de la tecnología y la colaboración global para transformar la atención médica en un sistema más asequible, eficiente e inclusivo para todos.',
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
