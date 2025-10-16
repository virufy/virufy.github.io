import type { Metadata } from 'next';
import NewsClient from './NewsClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <NewsClient params={params} />;
}
