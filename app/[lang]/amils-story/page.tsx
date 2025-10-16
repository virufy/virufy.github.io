import type { Metadata } from 'next';
import AmilClient from './AmilClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: "Virufy Amil's Story | Global Experts Supporting AI in Healthcare",
  description: '',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <AmilClient params={params} />;
}
