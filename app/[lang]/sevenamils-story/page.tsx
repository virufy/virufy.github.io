import type { Metadata } from 'next';
import AmilClient from './AmilClient';
import { type Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: "Virufy Amil's Story | Global Experts Supporting AI in Healthcare",
  description:
    'Discover the inspiring journey of Amil, founder of Virufy — from his early life and global career in software engineering to pioneering AI-powered healthcare solutions that transform lives worldwide.',
};

export default function Page({ params }: { params: { lang: Locale } }) {
  return <AmilClient params={params} />;
}
