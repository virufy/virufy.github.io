import { type ShareYourCough } from '../types/shareYourCough';

const shareYourCough: ShareYourCough = {
  // type cast to remove unsafe assignment error when importing svg
  image: './../public/logos/virufy.svg',
  title: 'Estudio de recopilación de datos sobre la tos de Covid-19',
  text: 'Una organización de investigación independiente sin fines de lucro',
  linkUrl: 'https://virufy.org/study/welcome',
  linkText: '¡Empecemos!',
};

export default shareYourCough;
