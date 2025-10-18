import type { Metadata } from 'next';
import AiClient from './AiClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: 'Virufy | The Science Behind AI Disease Detection',
  description:
    'Explore how Virufy’s advanced AI analyzes cough and breathing patterns using deep learning to identify early signs of respiratory diseases.',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <AiClient params={params} />;
}
