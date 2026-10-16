import type { Donate } from '../types/donate';

const donate: Donate = {
  introSection: {
    tag: 'Apoye nuestra misión',
    title: ['Juntos podemos revolucionar', 'salud respiratoria global'],
    text: 'Cada contribución nos acerca a la entrega de herramientas de diagnóstico basadas en inteligencia artificial a pacientes y comunidades de todo el mundo que ofrecen equidad en salud.',
    buttonText: 'Cómo contribuir',
  },
  impactSection: {
    title: 'Su donación crea un impacto duradero.',
    description:
      'Cada donación ayuda a Virufy a llevar tecnología de salud digital accesible a comunidades desatendidas. Al apoyarnos, está acelerando la innovación y brindando a los pacientes las herramientas para proteger su salud.',
  },

  pillars: [
    {
      title: 'Ampliar acceso',
      description:
        'Lleve herramientas y ventajas de detección de salud impulsadas por IA a comunidades desatendidas en todo el mundo.',
      icon: '/icons/icon-expand-access.png',
    },
    {
      title: 'Investigación avanzada',
      description:
        'Apoyar estudios de vanguardia que mejoren la detección temprana de enfermedades respiratorias.',
      icon: '/icons/icon-advance-research.png',
    },
    {
      title: 'Empoderar a los pacientes',
      description:
        'Ayude a las personas a tomar el control de su salud con información accesible y basada en la ciencia.',
      icon: '/icons/icon-empower-patients.png',
    },
  ],
  donateOptions: {
    title: 'Elige cómo te gustaría donar.',
    subtitle:
      'Tu apoyo importa. Seleccione una de las opciones de donación a continuación para comenzar.',
    options: [
      {
        name: 'GoFundMe',
        description:
          'Las contribuciones se dirigen a través de la campaña GoFundMe de Virufy.',
        buttonText: 'Donar a través de GoFundMe',
        url: 'https://www.gofundme.com/f/donate-virufy',
        icon: '/icons/icon-donate.png',
      },
      {
        name: 'PayPal',
        description:
          'Las contribuciones se procesan directamente a través de la cuenta PayPal de Virufy.',
        buttonText: 'Donar a través de PayPal',
        url: 'https://www.paypal.com/us/fundraiser/charity/4348461',
        icon: '/icons/icon-donate.png',
      },
    ],
  },
  banner: {
    title: 'Transparencia en la que puedes confiar.',
    text: [
      'Virufy es una organización sin fines de lucro 501(c)(3). Sus donaciones son deducibles de impuestos cuando corresponda. Estamos comprometidos con la transparencia y la responsabilidad, garantizando que su donación apoye directamente la investigación, la innovación y el acceso de los pacientes.',
    ],
  },
};
export default donate;
