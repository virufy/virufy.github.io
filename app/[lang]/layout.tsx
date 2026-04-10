import { i18n, type Locale } from '@/i18n-config';
import Navbar from './Navbar';
import SearchProvider from './SearchProvider';
import ClientConsentWrapper from './components/ClientConsentWrapper';
import { Suspense } from 'react';
import ConditionalFooter from './ConditionalFooter';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <>
      <ClientConsentWrapper lang={lang} />
      <SearchProvider>
        <Suspense fallback={null}>
          <Navbar lang={lang} />
        </Suspense>

        <section>{children}</section>
        <ConditionalFooter lang={lang} />
      </SearchProvider>
    </>
  );
}
