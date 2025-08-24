import { redirect } from 'next/navigation';

export default function PressRootPage() {
  redirect('/en/news'); // Redirects to the default language version news page
  return null;
}
