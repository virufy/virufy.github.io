import type { Metadata } from 'next';
import SevenNewsClient from './SevenNewsClient';
import { type Locale } from '@/i18n-config';
import { usei18n } from '../../i18n';

export const metadata: Metadata = {
  title: 'Virufy | News and Press Releases',
  description:
    'Stay up to date with Virufy’s latest news, press releases, and global achievements in AI-powered respiratory health innovation — from app launches to international recognition.',
};

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { sevenNews } = usei18n(lang);

  return <SevenNewsClient params={{ lang }} content={sevenNews} />;
}
