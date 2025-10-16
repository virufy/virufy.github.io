import type { Metadata } from 'next';
import FAQClient from './FAQClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title:
    'Virufy Frequently Asked Questions | Global Experts Supporting AI in Healthcare',
  description: '',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <FAQClient params={params} />;
}
