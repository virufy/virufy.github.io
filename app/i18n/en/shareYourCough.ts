import { type ShareYourCough } from '../types/shareYourCough';

const shareYourCough: ShareYourCough = {
  // type cast to remove unsafe assignment error when importing svg
  image: './../public/logos/virufy.svg',
  title: 'Covid-19 Cough Data Collection Study',
  text: 'An Independent Nonprofit Research Organization',
  linkUrl: 'https://virufy.org/study/welcome',
  linkText: "Let's Start!",
};

export default shareYourCough;
