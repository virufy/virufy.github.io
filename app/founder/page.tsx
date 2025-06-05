'use client';
import { i18n } from '@/i18n-config';
import RedirectWithSpinner from '../[lang]/components/RedirectWithSpinner';

const FounderPage = () => {
  return <RedirectWithSpinner targetUrl={`/${i18n.defaultLocale}/founder`} />;
};
export default FounderPage;