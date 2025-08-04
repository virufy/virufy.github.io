'use client';
import RedirectWithSpinner from '@/app/[lang]/components/RedirectWithSpinner';

const ApplyPage = () => {
  return (
    <RedirectWithSpinner
      targetUrl={`https://docs.google.com/forms/d/e/1FAIpQLSdmlecMmXr3FqO1HajJFBmfpji8Blyjfs9U5jK3WT6BrSmDAA/viewform`}
    />
  );
};
export default ApplyPage;
