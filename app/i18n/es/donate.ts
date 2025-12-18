import { type Donate } from '../types/donate';

const donate: Donate = {
  heroSection: {
    title: [
      {
        text: 'Juntos, podemos revolucionar la salud respiratoria a nivel mundial. ',
      },
      {
        text: 'Cada contribución nos acerca a la posibilidad de ofrecer herramientas de diagnóstico basadas en inteligencia artificial a pacientes y comunidades que las necesitan.',
      },
    ],
  },
  donateSection: {
    title: 'Tu donación genera un impacto duradero.',
    text: 'Cada donación ayuda a Virufy a llevar tecnología accesible para la salud respiratoria a las personas y comunidades que más la necesitan. Al apoyarnos, estás impulsando la innovación y brindando a los pacientes las herramientas para proteger su salud.',
    contentBlocks: [
      {
        title: 'Ampliar el acceso',
        text: 'Llevar herramientas de detección de salud impulsadas por IA a comunidades desatendidas en todo el mundo.',
      },
      {
        title: 'Investigación Avanzada',
        text: 'Apoyamos estudios de vanguardia que mejoran la detección temprana y el tratamiento de las enfermedades respiratorias.',
      },
      {
        title: 'Empoderar a los pacientes',
        text: 'Ayude a las personas a tomar el control de su salud con información accesible y basada en evidencia científica.',
      },
    ],
    optionsTitle: 'Elige cómo deseas donar:',
    optionsText:
      'Tu apoyo es importante. Selecciona una opción de donación a continuación para comenzar.',
    DonationsOptionsBlock: [
      {
        optionTitle: 'Dona a través de GoFundMe',
        optionText:
          'Contribuye a nuestra campaña actual y ayúdanos a llegar a más personas, más rápido.',
        buttonText: 'GoFundMe',
      },
      {
        optionTitle: 'Dona a través de PayPal',
        optionText:
          'Realiza una donación segura, única o recurrente, directamente a través de PayPal.',
        buttonText: 'PayPal',
      },
    ],
  },
};

export default donate;
