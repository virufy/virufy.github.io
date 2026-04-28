// app/i18n/es/sevensupportus.ts
import type { SevenSupportUs } from '../types/sevensupportus';
import {
  DonateIcon,
  ImpowerIcon,
  ExpandAccessIcon,
  AdvanceResearchIcon,
} from '@/public/images/sevenSupportUs';

const sevensupportus: SevenSupportUs = {
  introSection: {
    tag: 'Apoya nuestra misión',
    title: ['Juntos, podemos revolucionar', 'la salud respiratoria global'],
    text: 'Cada contribución nos acerca más a llevar herramientas de diagnóstico basadas en IA a pacientes y comunidades de todo el mundo, logrando equidad en salud.',
    buttonText: 'Cómo contribuir',
  },
  impactSection: {
    title: 'Tu donación crea un impacto duradero.',
    description:
      'Cada donación ayuda a Virufy a llevar tecnología de salud digital accesible a comunidades desatendidas. Al apoyarnos, estás acelerando la innovación y dando a los pacientes las herramientas para proteger su salud.',
  },
  pillars: [
    {
      title: 'Expandir el acceso',
      description:
        'Llevar herramientas de detección de salud basadas en IA y sus ventajas a comunidades desatendidas en todo el mundo.',
      icon: ExpandAccessIcon,
    },
    {
      title: 'Avanzar en la investigación',
      description:
        'Apoyar estudios de vanguardia que mejoren la detección temprana de enfermedades respiratorias.',
      icon: AdvanceResearchIcon,
    },
    {
      title: 'Empoderar a los pacientes',
      description:
        'Ayudar a las personas a tomar el control de su salud con información accesible y basada en la ciencia.',
      icon: ImpowerIcon,
    },
  ],
  donateOptions: {
    title: 'Elige cómo te gustaría donar.',
    subtitle: 'Tu apoyo es importante. Selecciona una opción de donación a continuación para comenzar.',
    options: [
      {
        name: 'GoFundMe',
        description:
          'Las contribuciones se dirigen a través de la campaña de GoFundMe de Virufy.',
        buttonText: 'Donar por GoFundMe',
        url: 'https://www.gofundme.com/f/donate-virufy',
        icon: DonateIcon,
      },
      {
        name: 'PayPal',
        description:
          'Las contribuciones se procesan directamente a través de la cuenta de PayPal de Virufy.',
        buttonText: 'Donar por PayPal',
        url: 'https://www.paypal.com/us/fundraiser/charity/4348461',
        icon: DonateIcon,
      },
    ],
  },
  banner: {
    title: 'Transparencia en la que puedes confiar.',
    text: [
      'Virufy es una organización sin fines de lucro 501(c)(3). Tus donaciones son deducibles de impuestos cuando corresponda. Estamos comprometidos con la transparencia y la rendición de cuentas, asegurando que tu donación apoye directamente la investigación, la innovación y el acceso de los pacientes.',
    ],
  },
};

export default sevensupportus;