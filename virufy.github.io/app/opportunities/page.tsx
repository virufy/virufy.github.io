'use client';
import { i18n } from '@/i18n-config';
import RedirectWithSpinner from '../[lang]/components/RedirectWithSpinner';

const OpportunitiesPage = () => {
  return <RedirectWithSpinner targetUrl={`/${i18n.defaultLocale}/join-us`} />;
};
export default OpportunitiesPage;