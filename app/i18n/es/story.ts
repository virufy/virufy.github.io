import {} from '@/public/images/story';
import { type Story } from '../types/story';

const story: Story = {
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
    texts: [
      [
        {
          type: 'text',
          text: 'Algunos se preguntarán: "¿Por qué estamos aquí?" y "¿Por qué tanta gente ha apoyado a Virufy?".',
        },
      ],
      [
        {
          type: 'text',
          text: 'La misión y el objetivo de Virufy es transformar la salud mundial.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Nuestro objetivo es brindar a todas las personas del mundo acceso a una aplicación web para detectar enfermedades respiratorias como la COVID-19, la gripe, el VSR, la EPOC, el asma y el cáncer de pulmón en segundos.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Queremos que mil millones de personas en países en desarrollo tengan la capacidad de proteger su salud y la de sus seres queridos.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Aquí encontrará una lista de ',
        },
        {
          type: 'link',
          url: '/advisors',
          text: 'asesores',
        },
        {
          type: 'text',
          text: ' y, hasta la fecha, hemos contado con más de 1300 voluntarios.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Gracias por formar parte de esta misión. ¡Hagámoslo realidad!',
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
