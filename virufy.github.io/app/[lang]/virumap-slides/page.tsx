'use client';
import { useEffect } from 'react';

const paperURL =
  'https://docs.google.com/presentation/d/1Sb3WXxKrJPbdKkKH9IXV4iWCd3b5iSz5f_92UuJbYZc/edit?usp=sharing';

export default function VirumapSlidesRedirect() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []);

  return <p>Redirecting to English slide deck...</p>;
}
