'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const supportedLanguages = ['ja', 'en', 'es', 'ar'];
('use client');
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const supportedLanguages = ['ja', 'en', 'es', 'ar'];

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hasRedirected = localStorage.getItem('lang-redirected');

    if (!hasRedirected) {
      let userLang = navigator.language || navigator.languages[0] || 'en';
      userLang = userLang.toLowerCase();

      const langCode =
        supportedLanguages.find((lang) => userLang.startsWith(lang)) || 'en';

      localStorage.setItem('lang-redirected', 'true');
      localStorage.setItem('lang-redirect-code', langCode);
      router.replace(`/${langCode}`);
    }
    if (hasRedirected) {
      const langCode = localStorage.getItem('lang-redirect-code');
      router.replace(`/${langCode}`);
    } else {
      router.replace(`/${'en'}`);
    }
  }, [router]);

  return null;
};

export default RootPage;
