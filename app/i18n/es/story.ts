import { type Story } from '../types/story';

const story: Story = {
  storySection: {
    title: 'Cómo empezó',
    texts: [
      [
        {
          type: 'text',
          text: 'Cuando comenzó la pandemia, ',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'el fundador de Virufy, Amil Khanzada',
        },
        {
          type: 'text',
          text: ' sabía que los teléfonos inteligentes eran omnipresentes y que la COVID afecta el sistema respiratorio.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Él planteó la hipótesis de que los sonidos de la respiración y la tos podían analizarse con aprendizaje automático para detectar patrones de COVID.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Con el objetivo de generar un impacto positivo, Amil organizó un estudio clínico con 362 pacientes en un prestigioso hospital universitario. El equipo original de Virufy comenzó con estudiantes de posgrado en IA de Stanford y se expandió a voluntarios de universidades de todo el mundo.',
        },
      ],
    ],
  },
  MissionSection: {
    title: 'Nuestra misión',
    texts: [
      [
        {
          type: 'text',
          text: 'Algunas personas pueden preguntarse: "¿por qué estamos aquí?" y "¿por qué tantas personas han apoyado a Virufy?"',
        },
      ],
      [
        {
          type: 'text',
          text: 'La misión y el objetivo de Virufy es transformar la salud global.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Nuestro objetivo es brindar a las personas de todo el mundo acceso a una herramienta web que pueda ayudar a detectar posibles condiciones respiratorias como COVID-19, gripe, VSR, EPOC, asma y otras enfermedades pulmonares en cuestión de segundos.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Nuestro objetivo es empoderar a las personas, especialmente en regiones en desarrollo, con herramientas que les permitan tener mayor conciencia de su salud y tomar decisiones informadas para sí mismos y sus seres queridos.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Tenga en cuenta que esta herramienta no está diseñada para proporcionar diagnósticos médicos y no debe reemplazar la consulta con un profesional de la salud calificado.',
        },
        {
          type: 'text',
          text: 'Estamos agradecidos por el apoyo de nuestros asesores y las contribuciones de más de 1,300 voluntarios hasta la fecha.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Gracias por ser parte de esta misión.',
        },
      ],
    ],
  },
  privacySection: {
    title: 'Compromiso con la privacidad',
    texts: [
      'Virufy se toma muy en serio su privacidad. Nuestro equipo legal ha desarrollado políticas detalladas de privacidad y cookies para proteger cualquier información personal que comparta al usar nuestro sitio web.',
    ],
  },
};

export default story;
