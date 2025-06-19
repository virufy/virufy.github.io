'use client';

import Link from 'next/link';
import { ButtonSize, ButtonType } from '../themes';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Button({
  size,
  type,
  label,
  style,
  radius,
  gradientBackground,
  path,
  width,
  height,
  onClick = () => {},
}) {
  return (
    <>
      <Link href={path}>
        <button
          onClick={onClick}
          className={`${ButtonType?.[type]} ${ButtonSize?.[size]} text-xl font-semibold ${style}`}
          style={{
            background: gradientBackground,
            borderRadius: radius,
            width: width,
            height: height,
          }}
        >
          {label}
        </button>
      </Link>
    </>
  );
}
