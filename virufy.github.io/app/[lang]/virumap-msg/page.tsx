'use client';
import { useEffect } from 'react';

const paperURL =
  'https://docs.google.com/document/d/1e6p9TAd5NC4W7Lp58oxIp3FhUDGMexXXPL-f4--hhKk/edit?usp=sharing';

export default function VirumapMsgRedirect() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []);

  return <p>Redirecting to English message document...</p>;
}
