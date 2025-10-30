import { type NavbarType } from '../types/navbar';

export const navbar: NavbarType = {
  home: 'Inicio',
  ourTechnology: {
    section: 'Tecnología',
  },
  coughCheckApp: {
    section: 'CoughCheck App',
    covid19: 'Covid-19',
    flu: 'Gripe',
    copd: 'COPD',
    rsv: 'RSV',
  },
  aboutUs: {
    section: 'Sobre Nosotros',
    advisors: 'Asesores',
    ourFounder: 'Nuestro Fundador',
    ourSupporters: 'Nuestros Apoyantes',
    blog: 'Blog',
    oneYoungWorld: 'Un Mundo Joven',
  },
  media: {
    section: 'Medios',
    pressReleases: 'Comunicados de prensa',
    ourResearch: 'Publicaciones',
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
