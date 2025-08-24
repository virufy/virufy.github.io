'use client';
import { useEffect } from 'react';

const VirumapMsgRedirect = () => {
  useEffect(() => {
    window.location.href = '/en/virumap-msg';
  }, []);

  return <p>Redirecting to message...</p>;
};

export default VirumapMsgRedirect;
