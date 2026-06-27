import type { Metadata } from 'next';
import { type Locale } from '@/i18n-config';
import SevenPublicationsClient from './SevenPublicationsClient';
import sevenPublicationsContent from '@/app/i18n/en/sevenPublications';

export const metadata: Metadata = {
  title: 'Virufy Publications | Global Experts Supporting AI in Healthcare',
  description: '',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <SevenPublicationsClient params={params} content={sevenPublicationsContent}/>;
}
