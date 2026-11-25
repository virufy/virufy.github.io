import type { Metadata } from 'next';
import { type Locale } from '@/i18n-config';
import SevenPublicationsClient from './SevenPublicationsClient';
import enPublicationsContent from '@/app/i18n/en/publications';
import esPublicationsContent from '@/app/i18n/es/publications';
import jaPublicationsContent from '@/app/i18n/ja/publications';
import arPublicationsContent from '@/app/i18n/ar/publications';

const publicationsContentMap: Record<Locale, typeof enPublicationsContent> = {
  en: enPublicationsContent,
  es: esPublicationsContent,
  ja: jaPublicationsContent,
  ar: arPublicationsContent,
};

export const metadata: Metadata = {
  title: 'Virufy Publications | Global Experts Supporting AI in Healthcare',
  description: '',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return (
    <SevenPublicationsClient
      params={params}
      content={publicationsContentMap[params.lang]}
    />
  );
}
