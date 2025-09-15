import { i18n, type Locale } from '@/i18n-config';
import Footer from './Footer';
import Navbar from './Navbar';
import SearchProvider from './SearchProvider';
import ModalCookie from './components/ModalCookie';
import { Suspense } from 'react';

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
      <SearchProvider>
        <Suspense fallback={null}>
          <Navbar lang={lang} />
        </Suspense>
        <ModalCookie lang={lang} />
        <section>{children}</section>
        <Footer lang={lang} />
      </SearchProvider>
    </>
  );
}
