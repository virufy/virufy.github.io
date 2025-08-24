'use client';
import { useEffect } from 'react';

const paperURL =
  'https://docs.google.com/presentation/d/1GqNirFzOrWsLoLaH5hSe8YVXTMMrWZ1gW5d56jICs30/edit?usp=sharing';

export default function VirumapSlideJPRedirect() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []);

  return <p>Redirecting to Japanese slide deck...</p>;
}
