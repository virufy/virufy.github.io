import { i18n, type Locale } from '@/i18n-config';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Virufy: Developing Cutting Edge AI Technology in Healthcare',
  description:
    'Virufy is building an App for early detection symptoms analyzing vocal patterns in minutes. Our goal is a healthier world at your fingertips.',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={lang}>
      <body className={nunitoSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
