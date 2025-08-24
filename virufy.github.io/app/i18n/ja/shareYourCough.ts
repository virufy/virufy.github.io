import VirufyLogo from '@/public/logos/virufy.svg';
import { type ShareYourCough } from '../types/shareYourCough';

const shareYourCough: ShareYourCough = {
  // type cast to remove unsafe assignment error when importing svg
  image: VirufyLogo as string,
  title: 'Covid-19咳データ収集調査',
  text: '独立非営利研究機関',
  linkUrl: 'https://virufy.org/study/welcome',
  linkText: 'さあ、始めましょう！',
};

export default shareYourCough;
