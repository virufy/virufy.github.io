import type { Metadata } from 'next';
import SupportersClient from './SupportersClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: 'Virufy Supporters | Global Experts Supporting AI in Healthcare',
  description: '',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <SupportersClient params={params} />;
}
