import { type JobListing } from '../types/jobListing';

const jobListing: JobListing = {
  titleImage:
    'Virufy es operado completamente por voluntarios y empresas asociadas pro bono.',
  title: 'Nuestra Misión',
  text: '¡Únete a Virufy y sé parte de un esfuerzo global innovador para combatir el COVID-19! Como un consorcio sin fines de lucro innovador, hemos reunido a expertos de más de 25 países para desarrollar una aplicación de vanguardia para teléfonos inteligentes que detecta el virus. Originalmente un proyecto del Laboratorio de Innovación de Respuesta al COVID-19 de la Universidad de Stanford, nuestra solución de diagnóstico impulsada por IA está estableciendo nuevos estándares para pruebas accesibles y gratuitas. Al ofrecer tu voluntariado en Virufy, obtendrás experiencia práctica con herramientas de IA de última generación, ampliarás tu red profesional y contribuirás significativamente a una causa vital. ¡Aprovecha esta oportunidad para estar a la vanguardia de la innovación y ayudar a moldear el futuro de la respuesta pandémica!',
  modal: {
    text: '¿Entiendes que todos estos son puestos no remunerados y de voluntariado?',
    yes: 'Sí',
    no: 'No',
  },
  applyButtonText: 'Postularse',
  jobDetailSectionTitles: {
    responsibilities: 'Responsabilidades',
    desiredSkills: 'Habilidades Deseadas',
    minQualifications: 'Calificaciones Mínimas',
    hours: 'Horas',
    questions: '¿Preguntas?',
    applyButtonText: 'Postularse a este Rol',
  },
  jobList: [
    {
      category: 'Ingeniería',
      positions: [
        {
          title: 'Ingeniero de Software',
          id: 1,
        },
        {
          title: 'Ingeniero de Machine Learning',
          id: 2,
        },
        {
          title: 'Ingeniero de Machine Learning (Modelado)',
          id: 3,
        },
        {
          title: 'Ingeniero de Procesamiento de Señales de Audio',
          id: 4,
        },
        {
          title: 'Ingeniero DevOps',
          id: 5,
        },
        {
          title: 'Ingeniero de Seguridad Informática',
          id: 6,
        },
      ],
    },
    {
      category: 'Datos',
      positions: [
        {
          title: 'Pasante en Privacidad de Datos',
          id: 7,
        },
        {
          title: 'Científico de Datos Asociado',
          id: 8,
        },
      ],
    },
    {
      category: 'Gestión',
      positions: [
        {
          title: 'Gerente de Negocios',
          id: 9,
        },
        {
          title: 'Gerente de Proyectos',
          id: 10,
        },
        {
          title: 'Gerente de Producto',
          id: 11,
        },
      ],
    },
    {
      category: 'Recursos Humanos',
      positions: [
        {
          title: 'Socio de Recursos Humanos',
          id: 12,
        },
        {
          title: 'Asistente Administrativo de Recursos Humanos',
          id: 13,
        },
        {
          title: 'Reclutador Técnico',
          id: 14,
        },
      ],
    },
    {
      category: 'Legal',
      positions: [
        {
          title: 'Abogado Corporativo (Orientado a TI)',
          id: 15,
        },
        {
          title: 'Asistente Legal',
          id: 16,
        },
      ],
    },
    {
      category: 'Tecnología de la Información (TI)',
      positions: [
        {
          title: 'Analista de Negocios',
          id: 17,
        },
        {
          title: 'Programador Python',
          id: 18,
        },
        {
          title: 'Redactor Técnico',
          id: 19,
        },
        {
          title: 'Ingeniero de Aseguramiento de Calidad',
          id: 20,
        },
        {
          title: 'Desarrollador AWS',
          id: 21,
        },
        {
          title: 'Arquitecto AWS',
          id: 22,
        },
        {
          title: 'Ingeniero AWS',
          id: 23,
        },
        {
          title: 'Ingeniero de la Nube',
          id: 24,
        },
        {
          title: 'Administrador Unix',
          id: 25,
        },
      ],
    },
  ],
};

export default jobListing;
