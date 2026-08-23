import type { Metadata } from 'next';
import SevenNewsClient from './SevenNewsClient';
import { type Locale } from '@/i18n-config';
import enNewsContent from '@/app/i18n/en/news';
import esNewsContent from '@/app/i18n/es/news';
import jaNewsContent from '@/app/i18n/ja/news';
import arNewsContent from '@/app/i18n/ar/news';

const newsContentMap: Record<Locale, typeof enNewsContent> = {
  en: enNewsContent,
  es: esNewsContent,
  ja: jaNewsContent,
  ar: arNewsContent,
};

export const metadata: Metadata = {
  title: 'Virufy | News and Press Releases',
  description:
    'Stay up to date with Virufy’s latest news, press releases, and global achievements in AI-powered respiratory health innovation — from app launches to international recognition.',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return (
    <SevenNewsClient params={params} content={newsContentMap[params.lang]} />
  );
}
