'use client';
import { i18n } from '@/i18n-config';
import RedirectWithSpinner from '../[lang]/components/RedirectWithSpinner';

const PaperPage = () => {
  return <RedirectWithSpinner targetUrl={`/${i18n.defaultLocale}/paper`} />;
};
export default PaperPage;