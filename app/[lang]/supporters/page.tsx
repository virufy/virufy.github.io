import type { Metadata } from 'next';
import SupportersClient from './SupportersClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: 'Virufy Supporters | Global Experts Supporting AI in Healthcare',
  description:
    'Meet the organizations partnering with Virufy to revolutionize global health through AI-powered respiratory screening. Join us and support our mission to make healthcare accessible worldwide.',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <SupportersClient params={params} />;
}
