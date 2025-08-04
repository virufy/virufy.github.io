'use client';
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
      router.replace(`/${langCode}`);
    }
  }, [router]);

  return null;
};

export default RootPage;
