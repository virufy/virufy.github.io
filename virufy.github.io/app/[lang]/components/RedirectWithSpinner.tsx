'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Spinner from './Spinner';

const RedirectWithSpinner = ({ targetUrl }: { targetUrl: string }) => {
  const router = useRouter();
  useEffect(() => {
    // start redirect after component mounts
    router.push(targetUrl);
  }, [router, targetUrl]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-4">
      <div className="text-lg">Redirecting..</div>
      <Spinner />
    </div>
  );
};

export default RedirectWithSpinner;
