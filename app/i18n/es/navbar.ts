import { type NavbarType } from '../types/navbar';

export const navbar: NavbarType = {
  home: 'Inicio',
  ourTechnology: {
    section: 'Qué hacemos',
  },
  coughCheckApp: {
    section: 'CoughCheck App',
    covid19: 'Covid-19',
    flu: 'Gripe',
    copd: 'COPD',
    rsv: 'RSV',
  },
  aboutUs: {
    section: 'Quiénes somos',
    advisors: 'Asesores',
    ourFounder: 'Nuestro Fundador',
    ourSupporters: 'Nuestros Apoyantes',

    oneYoungWorld: 'One Young World',
  },
  media: {
    section: 'Medios',
    pressReleases: 'Comunicados de prensa',
    ourResearch: 'Publicaciones',
    blog: 'Blog',
  },
  faq: 'FAQ',
  donate: {
    buttonText: 'Donar',
    optionsTitle: 'Donate Options',
  },
  joinUs: {
    buttonText: 'Únete a Nosotros',
  },
  searchPlaceholder: 'Buscar...',
  noResultsPlaceholder: 'No se encontraron resultados',
};

export default navbar;
