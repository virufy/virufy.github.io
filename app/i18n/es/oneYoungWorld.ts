import { type OneYoungWorld } from '../types/oneYoungWorld';

const oneYoungWorld: OneYoungWorld = {
  header: {
    text: 'Empresas y organizaciones nos respaldan desde su amplio conocimiento y nos brindan seguridad y certeza en lo que hacemos.',
    image: '/images/oneYoungWorld/bg-header.webp',
    altText: '',
  },
  navbarTexts: {
    oyw: 'One Young World',
    teamLeads: 'Embajadores del equipo',
  },
  oyw: {
    bgImage: '/images/oneYoungWorld/bg-body.webp',
    altText: '',
    virufyAndOyw: {
      title: 'One Young World',
      subTitle: 'Virufy & One Young World',
      texts: [
        'Nuestro mundo necesita un gran liderazgo. La nueva generación es una de las más informadas, educadas y bien conectadas en la historia del mundo. One Young World identifica, promueve y conecta a los líderes jóvenes más impactantes de todo el mundo para crear un mundo mejor: un mundo con un liderazgo más responsable y efectivo.',
        'Virufy ha sido destacada en varias plataformas de OYW, incluidas en las Américas y Japón, embajadores en acción y embajadores en la primera línea de respuesta al COVID-19. También estamos colaborando con OYW coordinando embajadores de diversas regiones para los esfuerzos de divulgación.',
      ],
      videoUrl: 'https://www.youtube.com/embed/hvJgwPNYnZo?si=k_ujoF1pBeYFg65C',
      videoTitle: 'Visión y Llamado a la Acción de Virufy',
    },
    whyOyw: {
      title: '¿Por qué One Young World?',
      cards: [
        {
          title: 'Impulsado por embajadores',
          text: 'Nuestra estructura organizativa coincide con One Young World, con jóvenes embajadores liderando las operaciones en cada país, con embajadores coordinadores regionales.',
          image: '/icons/icon-female.png',
          altText: '',
        },
        {
          title: 'Liderado por jóvenes',
          text: 'Nuestro equipo en crecimiento está dirigido por jóvenes de más de una docena de países y asesorado por líderes globales.',
          image: '/icons/icon-youth-in-circle.png',
          altText: '',
        },
        {
          title: 'Enfocados en el impacto global',
          text: 'Recopilamos datos y proporcionamos soluciones equitativas para personas en países en desarrollo de todo el mundo.',
          image: '/icons/icon-man-lifting-globe.png',
          altText: '',
        },
        {
          title: 'Representación diversa',
          text: 'Nuestro equipo tiene representación de más de 25 universidades y 15 países, e incluye a más de 10 embajadores de One Young World.',
          image: '/icons/icon-globe-with-markers.png',
          altText: '',
        },
      ],
    },
    volunteerStories: {
      title: 'Historias de Voluntarios',
      text: 'Nuestro equipo está dirigido por estudiantes dedicados al bien social de instituciones de renombre como Stanford, Princeton y One Young World. Tenemos una fuerte confianza en los miembros de la comunidad de One Young World y damos la bienvenida a cualquier embajador interesado en unirse.',
      testimonials: [
        {
          name: 'Sebastián Pedraza',
          origin: 'Colombia',
          image: '/images/oneYoungWorld/testimonials/sebastian-square-pic.webp',
          altText: 'Imagen de Sebastián Pedraza',
          testimonial: `“Virufy une el poder de la juventud y la tecnología para transformar el mundo. Esperamos que esta solución llegue a todo el mundo y se convierta en un apoyo para los médicos, especialmente en países de bajos ingresos.”`,
        },
        {
          name: 'Gonzalo Roiffe',
          origin: 'Argentina',
          image:
            './../images/oneYoungWorld/testimonials/gonzalo-square-pic.webp',
          altText: 'Imagen de Gonzalo Roiffe',
          testimonial: `“Virufy tendrá un impacto global, sin importar el origen o el estatus social de los usuarios. Así es como se siente cambiar el statu quo.”`,
        },
        {
          name: 'Marcos Deza',
          origin: 'Argentina',
          image:
            './../images/oneYoungWorld/testimonials/marcos-square-pic.webp',
          altText: 'Imagen de Marcos Deza',
          testimonial: `“Creo que Virufy desarrollará una solución muy precisa y esto será útil para todo el mundo en cada industria. Así que animo a todos a tomar unos minutos y contribuir con nosotros.”`,
        },
      ],
      buttonText: 'Únete a nuestro equipo',
    },
  },
};

export default oneYoungWorld;
