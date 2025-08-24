'use client';
import { useEffect } from 'react';

const VirumapMsgJPRedirect = () => {
  useEffect(() => {
    window.location.href = '/ja/virumap-msg-jp';
  }, []);

  return <p>Redirecting to Japanese message...</p>;
};

export default VirumapMsgJPRedirect;
