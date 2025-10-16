import type { Metadata } from 'next';
import PublicationClient from './PublicationClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: 'Virufy Publications | Global Experts Supporting AI in Healthcare',
  description: '',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <PublicationClient params={params} />;
}
