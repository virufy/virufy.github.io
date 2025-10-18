import type { Metadata } from 'next';
import NewsClient from './NewsClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: 'Virufy | News and Press Releases',
  description:
    'Stay up to date with Virufy’s latest news, press releases, and global achievements in AI-powered respiratory health innovation — from app launches to international recognition.',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <NewsClient params={params} />;
}
