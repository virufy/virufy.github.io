'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const supportedLanguages = ['ja', 'en', 'es', 'ar'];

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hasRedirected = localStorage.getItem('lang-redirected');
    if (hasRedirected && localStorage.getItem('lang-redirect-code') != null) {
      //double checked to make sure it will not route to null
      if (localStorage.getItem('lang-redirect-code') != null) {
        const langCode = localStorage.getItem('lang-redirect-code');
        router.replace(`/${langCode}`);
      }
    }
    if (!hasRedirected || localStorage.getItem('lang-redirect-code') == null) {
      //first fallback
      let userLang = navigator.language || navigator.languages[0] || 'en';
      userLang = userLang.toLowerCase();

      const langCode =
        supportedLanguages.find((lang) => userLang.startsWith(lang)) || 'en';

      localStorage.setItem('lang-redirected', 'true');
      localStorage.setItem('lang-redirect-code', langCode);
      router.replace(`/${langCode}`);
    } else {
      router.replace(`/${'en'}`); //brute force
    }
  }, [router]);

  return null;
};

export default RootPage;
