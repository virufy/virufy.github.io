'use client';
import { useEffect } from 'react';

const VirumapSlidesRedirect = () => {
  useEffect(() => {
    window.location.href = '/en/virumap-slides';
  }, []);

  return <p>Redirecting to slides...</p>;
};

export default VirumapSlidesRedirect;
