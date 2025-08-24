'use client';
import { useEffect } from 'react';

const VirumapSlidesJPRedirect = () => {
  useEffect(() => {
    window.location.href = '/ja/virumap-slide-jp';
  }, []);

  return <p>Redirecting to Japanese slides...</p>;
};

export default VirumapSlidesJPRedirect;
