import { type StaticImageData } from 'next/image';

export type Supporters = {
  title: string;
  buttontext: string;
  supportersList: SupporterImg[];
  contactusform: ContactUs;
  oursupporters: string;
};

interface ContactUs {
  title: string;
  content: string;
  nametitle: string;
  emailtitle: string;
  texttitle: string;
  textplaceholder: string;
  submitButtonText: string;
}

type SupporterImg = {
  img: string | StaticImageData;
  alt: string;
  link: string;
};
