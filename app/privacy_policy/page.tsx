'use client';
import { i18n } from '@/i18n-config';
import RedirectWithSpinner from '../[lang]/components/RedirectWithSpinner';

const PrPoPage = () => {
  return <RedirectWithSpinner targetUrl={`/${i18n.defaultLocale}/privacy-policy`} />;
};
export default PrPoPage;