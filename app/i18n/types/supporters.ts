import { type StaticImageData } from 'next/image';

export interface supporters {
  introSection: {
    tag: string;
    title: string[];
    text: string;
  };
  banner: {
    title: string;
    buttontext: string;
    text: string[];
    link: string;
  };
  SupporterImg: {
    img: string | StaticImageData;
    alt: string;
    link: string;
  }[];
}
