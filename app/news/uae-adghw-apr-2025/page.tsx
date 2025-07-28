'use client';
import { i18n } from '@/i18n-config';
import RedirectWithSpinner from '@/app/[lang]/components/RedirectWithSpinner';

const NewsRedirect = () => {
  return (
    <RedirectWithSpinner
      targetUrl={`/${i18n.defaultLocale}/news/uae-adghw-apr-2025`}
    />
  );
};
export default NewsRedirect;
