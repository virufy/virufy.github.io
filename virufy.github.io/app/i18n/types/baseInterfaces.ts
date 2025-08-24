import { type StaticImageData } from 'next/image';

export interface TypeText {
  type: string;
  text: string;
  href?: string;
}

export interface ImageText {
  img: StaticImageData;
  altText: string;
}
