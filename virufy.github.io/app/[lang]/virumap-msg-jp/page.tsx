'use client';
import { useEffect } from 'react';

const paperURL =
  'https://docs.google.com/document/d/1HLQ7ZNMR1wO3BdaWnfQw3_yyhBfNBJGYz8zWN25gA8o/edit?usp=sharing';

export default function VirumapMsgJPRedirect() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []);

  return <p>Redirecting to Japanese message document...</p>;
}
