import { i18n, type Locale } from '@/i18n-config';
import Footer from './Footer';
import Navbar from './Navbar';
import SearchProvider from './SearchProvider';
import ModalCookie from './components/ModalCookie';
import { Suspense } from 'react';
import Script from 'next/script';

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
      {/* Google Tag Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-350868067"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-350868067');
        `}
      </Script>

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
