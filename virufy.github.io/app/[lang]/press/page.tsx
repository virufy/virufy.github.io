import { redirect } from 'next/navigation';
import { type Locale } from '@/i18n-config';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'ar' }, { lang: 'ja' }];
}

const PressPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  redirect(`/${lang}/news`);
};

export default PressPage;
