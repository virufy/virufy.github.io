'use client';
import Script from 'next/script';

const GoogleTag = () => (
  <>
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
  </>
);

export default GoogleTag;
