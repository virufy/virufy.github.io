import {
  BgHeader,
  GlobeIcon,
  MonitorIcon,
  PhoneInHandIcon,
  PrivacyIcon,
  QuestionMarkIcon,
  RecycleIcon,
  SearchIcon,
} from '@/public/images/faq';

import { type FAQ } from '../types/faq';

const faq: FAQ = {
  headerSection: {
    img: BgHeader,
    altText: '',
    title: [
      {
        type: 'text',
        text: '¿Cómo podemos ',
      },
      {
        type: 'span',
        text: 'ayudar ',
      },
      {
        type: 'text',
        text: 'a ti?',
      },
    ],
    input: {
      placeholder: 'Comienza a escribir tu búsqueda...',
      img: SearchIcon,
      altText: 'ícono de búsqueda',
    },
    texts: [
      {
        type: 'text',
        text: 'O ',
      },
      {
        type: 'span',
        text: 'elige ',
      },
      {
        type: 'text',
        text: 'una opción a continuación para ayudar a encontrar lo que buscas.',
      },
    ],
  },
  topicsSection: {
    title: 'Temas de Preguntas Frecuentes',
    cards: [
      {
        title: 'Preguntas Comunes',
        img: QuestionMarkIcon,
        altText: '',
      },
      {
        title: 'Aplicación Virufy',
        img: PhoneInHandIcon,
        altText: '',
      },
      {
        title: 'Acerca de Virufy',
        img: GlobeIcon,
        altText: '',
      },
      {
        title: 'Acerca de la IA',
        img: RecycleIcon,
        altText: '',
      },
      {
        title: 'Finanzas',
        img: MonitorIcon,
        altText: '',
      },
      {
        title: 'Privacidad',
        img: PrivacyIcon,
        altText: '',
      },
      {
        title: 'Otros',
        img: QuestionMarkIcon,
        altText: '',
      },
    ],
  },
  questionsSection: {
    topicTitle: 'Preguntas Comunes',
    noResultsTitle: 'No Se Encontraron Resultados',
    questionsByTopic: {
      'Aplicación Virufy': [
        {
          question:
            '¿Cuándo y cómo la aplicación dará resultados de predicción de infecciones de las vías respiratorias superiores?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Actualmente, nuestra aplicación solo se utiliza para la recopilación de datos. No podemos lanzar una aplicación de predicción de infecciones de las vías respiratorias superiores sin la aprobación de los departamentos de salud pública de cada país y estudios clínicos para validar la tecnología de IA en las condiciones locales. Este proceso puede tardar semanas o meses, dependiendo de la rapidez del socio gubernamental. Virufy agradece la colaboración de funcionarios de salud y hospitales para ofrecer la tecnología de forma gratuita a la población y optimizar el uso de las costosas pruebas PCR solo cuando sea necesario.',
                },
              ],
            },
          ],
        },
        {
          question: '¿Está disponible tu aplicación para iOS o Android?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Nuestra aplicación está diseñada como una aplicación web, por lo que puede usarse desde el navegador web en cualquier dispositivo móvil. No requiere una descarga o instalación separada.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿Estará la aplicación disponible de forma gratuita y en todo el mundo?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Como organización sin fines de lucro 501(c)(3), podríamos tener que cobrar una tarifa nominal para financiar nuestras operaciones en caso de no poder recaudar fondos suficientes. Sin embargo, nuestra intención es que la aplicación sea gratuita para beneficio de los países de bajos ingresos.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿Planean extender esta aplicación en una startup con fines de lucro?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy es una organización sin fines de lucro. Es posible que nos asociemos con empresas si es necesario para acelerar el despliegue de la aplicación para el beneficio de la gente.',
                },
              ],
            },
          ],
        },
      ],
      'Acerca de Virufy': [
        {
          question: '¿Cómo se creó la iniciativa?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Cuando la pandemia golpeó, el fundador de Virufy, Amil, sabía que los smartphones estaban presentes en todas partes y que el COVID afectaba la nariz, la garganta y los pulmones. Hipotetizó que los sonidos de la respiración y la tos podrían analizarse con aprendizaje automático para detectar patrones de COVID. Querido hacer un impacto positivo, orquestó un estudio clínico con 362 pacientes en un hospital universitario de renombre. El equipo original de Virufy, comenzando con estudiantes de AI graduados de Stanford, se expandió a voluntarios de universidades de todo el mundo. Como embajador de One Young World Japón, que ha viajado a más de 25 países, Amil entiende la perspectiva global y cómo una solución basada en smartphone puede ser utilizada por personas de todo el mundo.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿En qué se diferencia Virufy de otras iniciativas que trabajan en proyectos similares?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Debido a que Virufy es una organización sin fines de lucro 501(c)(3), podemos reclutar profesionales altamente talentosos como voluntarios. Nuestro equipo es global, abarcando cinco continentes, y nuestra organización tiene empatía global incorporada. No nos preocupamos por generar ganancias, por lo que podemos trabajar en países en desarrollo. Nuestras densas redes de alumni universitarios y profesionales nos brindan acceso a contactos de alto nivel en cada país del mundo. El mentorazgo está integrado en nuestra organización, ya que decenas de jóvenes profesionales en nuestro equipo se benefician de los sabios consejos de expertos senior, lo que lleva a una actividad rápida y creativa enfocada en la dirección correcta.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿En qué fase de la investigación se encuentran? ¿Hay una fecha límite para participar?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Hemos puesto un esfuerzo considerable para formar asociaciones, construir nuestra aplicación móvil, registrar nuestra entidad sin fines de lucro en California y construir nuestras políticas para cumplir con las leyes de privacidad de datos en docenas de países. Nuestra aplicación de recolección de datos está en la etapa de avances, ya que hemos abordado la mayoría de las preocupaciones sobre la privacidad de los datos en la atención médica y los aspectos técnicos para permitir el lanzamiento. Ya hemos implementado privacidad de datos, seguridad de la información y UI/UX para nuestra aplicación móvil de recolección de datos, junto con una infraestructura backend escalable en AWS. Ya hemos recolectado grandes volúmenes de datos, superando los 250,000 pacientes, y con la ayuda de IA estamos construyendo la solución. No hay fecha límite, y siempre damos la bienvenida a socios que puedan proporcionar financiamiento de subvenciones, servicios voluntarios y recolección de datos clínicos.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿Qué tiene de especial Virufy en comparación con otras organizaciones?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Como una organización joven con un equipo diverso y global que incluye alumni de más de 25 universidades, estamos guiados por profesionales de alto nivel en la industria. Nuestro equipo multidisciplinario tiene experiencia en derecho, aprendizaje automático, medicina, seguridad de la información y desarrollo de aplicaciones móviles. Nuestra red de One Young World nos permite conectarnos con socios de confianza en cada país. Damos la bienvenida a todos, y ser una organización sin fines de lucro 501(c)(3) permite que los voluntarios se unan. Como una organización sin fines de lucro dirigida por voluntarios, somos independientes y tenemos menos burocracia.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿Cuánta inversión se realizó para hacer posible la iniciativa Virufy?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Más de 1,000 voluntarios han invertido miles de horas para hacer posible el proyecto. Varias empresas nos han apoyado con software gratuito, incluyendo plataformas de correo electrónico, almacenamiento y mensajería, junto con computación en la nube. Algunos softwares como videoconferencias y herramientas de gestión de proyectos no han sido gratuitos, por lo que, lamentablemente, deben ser pagados con los limitados ahorros del fundador Amil. Creemos que si tenemos éxito, nuestros costos de computación en la nube aumentarán, pero podremos atraer financiamiento amplio de',
                },
              ],
            },
          ],
        },
      ],
      'Acerca de la IA': [
        {
          question:
            '¿Por qué se distinguen las toses causadas por infecciones de las vías respiratorias superiores?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Las infecciones de las vías respiratorias superiores dañan la garganta y los pulmones, creando diferencias detectables en los patrones de tos. Por consiguiente, los sonidos de la tos pueden analizarse para detectar infecciones de las vías respiratorias superiores. A nivel mundial, esta idea está siendo investigada activamente por varias instituciones prestigiosas, como Carnegie Mellon (CMU), MIT y Cambridge. Por ejemplo, una investigación realizada por la Universidad de Cambridge demostró que un clasificador binario simple de aprendizaje automático es capaz de clasificar a pacientes positivos de COVID-19 mediante sonidos de respiración y tos con alta precisión. De igual manera, investigadores de la CMU identificaron 18 características de voz que distinguen a pacientes positivos de COVID-19 y entrenaron un modelo académico para detectar la COVID-19 con alta precisión.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿Cuál fue la principal dificultad al recopilar y procesar los datos? ¿Hubo alguna región donde la inteligencia artificial fuera menos precisa, por ejemplo?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'El proceso es lento y engorroso al recopilar datos de hospitales, ya que requiere formularios de estudios clínicos y aprobaciones del IRB. Con la supervisión de varios asesores médicos, incluidos de Harvard y Stanford, hemos inscrito a más de 250,000 pacientes en nuestros estudios clínicos en 5 países. Para recopilar directamente de los usuarios, dedicamos importantes esfuerzos con abogados expertos pro bono para garantizar el cumplimiento de las leyes de privacidad de datos, incluidas la LGPD, GDPR y CCPA. Como se describe en nuestro artículo de investigación, algunas de las dificultades que encontramos al procesar los datos incluyeron ruidos de fondo excesivos y grabaciones incorrectas de tos enviadas por los usuarios, lo que requirió que los desarrolladores de IA limpiaran manualmente las muestras de audio antes de entrenar los modelos de IA.',
                },
              ],
            },
          ],
        },
        {
          question: '¿Se pueden detectar casos asintomáticos?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Sí, la detección asintomática ha sido demostrada en investigaciones del MIT y otros grupos. Es especialmente importante para personas en sus 20 y 30 años que tienen más probabilidades de ser asintomáticas.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿La aplicación utilizará inteligencia artificial desarrollada por terceros o creada solo para este propósito?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy cuenta con su propio equipo de investigación en IA con tecnología patentada. Estamos abiertos a la colaboración, el desarrollo conjunto y la integración de algoritmos de IA de otros grupos de investigación.',
                },
              ],
            },
          ],
        },
      ],
      Finanzas: [
        {
          question:
            '¿Necesito hacer alguna contribución financiera para donar mi tos?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy actualmente solo está recolectando toses de ciertos países, los cuales se pueden encontrar en nuestra app: ',
                },
                {
                  type: 'link',
                  text: 'https://virufy.org/study',
                  href: 'https://virufy.org/study',
                },
                {
                  type: 'text',
                  text: '.',
                },
              ],
            },
          ],
        },
        {
          question: '¿Cuántos donantes han tenido en total?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Tenemos más de 5,000 grabaciones de tos de más de 10 países, principalmente en Sudamérica y el sur de Asia. Algunas de estas son clínicas y otras han sido aportadas directamente por individuos a través de nuestra app.',
                },
              ],
            },
          ],
        },
        {
          question: '¿Cuáles son los gastos operativos de la organización?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Actualmente funcionamos completamente con voluntarios. Nuestras principales necesidades presupuestarias son para marketing y estudios clínicos para la recopilación de datos de tos. También necesitaríamos fondos para computación una vez que escalemos a una gran base de usuarios.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿El equipo recibe financiamiento? Si es así, ¿de dónde y cuánto? ¿En qué se utiliza?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Nos asociamos con varias universidades para solicitar subvenciones de I+D aprovechando nuestro estatus 501(c)(3).',
                },
              ],
            },
          ],
        },
      ],
      Privacidad: [
        {
          question: '¿Cómo almacenará Virufy mis datos de forma segura?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Usamos Amazon Web Services (AWS) para la recopilación de datos de estudios de investigación. AWS almacena los datos en una aplicación segura con acceso y controles restringidos. Tus datos se almacenarán en AWS hasta que los descarguemos. Los almacenaremos en una base de datos con acceso restringido. Si deseas más información sobre cómo AWS almacena tus datos, por favor visita sus respectivas políticas de privacidad en ',
                },
                {
                  type: 'link',
                  text: 'https://aws.amazon.com/en/privacy',
                  href: 'https://aws.amazon.com/en/privacy',
                },
                {
                  type: 'text',
                  text: '. Si deseas saber más, consulta la política de privacidad de Virufy.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿Está mi privacidad en riesgo cuando dono mi tos a Virufy?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Nuestros sólidos equipos legales y de seguridad de la información han desarrollado una DPIA para abordar posibles riesgos y amenazas a tu privacidad. Solo almacenaremos tus datos personales en forma anonimizada (donde no se te pueda identificar de ninguna manera) y en una base de datos segura con acceso restringido. Si deseas más información, consulta la Política de Privacidad de Virufy.',
                },
              ],
            },
          ],
        },
        {
          question: '¿Virufy tiene una política de privacidad y de cookies?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufy toma en serio la privacidad y protección de tu información personal. Nuestro equipo legal ha preparado una Política de Privacidad y una Política de Cookies detalladas para proteger la información personal que compartes con nosotros a través del uso de nuestro sitio web, la participación en nuestro estudio de donación de tos, el contacto con nosotros y las solicitudes de voluntariado. Consulta el pie de página para acceder a la Política de Privacidad y la Política de Cookies detalladas.',
                },
              ],
            },
          ],
        },
        {
          question: '¿Se compartirán mis datos con terceros?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Si optas por compartir tu información de contacto (por ejemplo, correo electrónico y número de teléfono) con nosotros, no distribuiremos ninguno de estos datos personales identificables a ningún tercero. Sin embargo, podemos compartir tu información anonimizada, como los sonidos de tu tos, con terceros para acelerar los esfuerzos de investigación global para detener la pandemia de COVID-19 y otras futuras propagaciones de enfermedades. Puedes encontrar más detalles en nuestra Política de Privacidad y el Formulario de Consentimiento del estudio de recopilación de datos.',
                },
              ],
            },
          ],
        },
      ],
      Otros: [
        {
          question: '¿Cómo puedo apoyar más a Virufy?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Puedes unirte a nuestro equipo hoy y consultar la página de ',
                },
                {
                  type: 'relative-link',
                  text: 'Ofertas de Trabajo',
                  href: '/join-us',
                },
                {
                  type: 'text',
                  text: ' para más información. También puedes apoyarnos en GoFundMe. Además, puedes contactarnos para colaborar en una alianza.',
                },
              ],
            },
          ],
        },
        {
          question:
            '¿Cómo funciona la distribución y cómo se expandirá Virufy?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'La app será ofrecida para beneficiar a personas en países de bajos ingresos y probablemente se dará a conocer y se expandirá rápidamente.',
                },
              ],
            },
          ],
        },
        {
          question: '¿Qué pasa si tengo más preguntas?',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Puedes encontrar más detalles en nuestra Política de Privacidad, Política de Cookies y el formulario de consentimiento, los cuales están integrados en la aplicación de recopilación de datos. Para preguntas relacionadas con el estudio de recopilación de datos, por favor envíanos un correo a ',
                },
                {
                  type: 'link',
                  text: 'study@virufy.org',
                  href: 'mailto:study@virufy.org',
                },
                {
                  type: 'text',
                  text: '. Para consultas relacionadas con los datos, puedes escribirnos a ',
                },
                {
                  type: 'link',
                  text: 'open-data@virufy.org',
                  href: 'mailto:open-data@virufy.org',
                },
                {
                  type: 'text',
                  text: '. Para todas las demás consultas, puedes contactarnos a través de ',
                },
                {
                  type: 'link',
                  text: 'info@virufy.org',
                  href: 'mailto:info@virufy.org',
                },
                {
                  type: 'text',
                  text: '.',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export default faq;
