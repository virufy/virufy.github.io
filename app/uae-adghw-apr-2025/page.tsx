'use client';
import { i18n } from '@/i18n-config';
import RedirectWithSpinner from '../[lang]/components/RedirectWithSpinner';

const NewsRedirect = () => {
  return (
    <RedirectWithSpinner
      targetUrl={`/${i18n.defaultLocale}/news/Abu-Dhabi-June-2025`}
    />
  );
};
export default NewsRedirect;
