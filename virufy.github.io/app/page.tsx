import { i18n } from '@/i18n-config';
import RedirectWithSpinner from './[lang]/components/RedirectWithSpinner';

const RootPage = () => {
  return <RedirectWithSpinner targetUrl={`/${i18n.defaultLocale}`} />;
};

export default RootPage;
