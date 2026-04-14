'use client';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarDropdownProps {
  label: string;
  subtext?: string[];
  links: { label: string; href: string; subtext?: string }[];
  navbar?: boolean; // mobile mode
  activePath?: string; // current pathname from parent
}

export default function NavbarDropdown({
  label,
  links,
  navbar = false,
  activePath = '', // default empty string for safety
}: NavbarDropdownProps) {
  const [open, setOpen] = useState(false);

  const normalizePath = (path: string) => path.replace(/\/$/, '');

  // Parent is active if any child link matches current path
  const isParentActive = links.some(
    (link) => normalizePath(link.href) === normalizePath(activePath)
  );

  const childActive = (linkHref: string) =>
    normalizePath(linkHref) === normalizePath(activePath);

  return (
    <div className="relative inline-block">
      {/* Parent button */}
      <button
        onMouseEnter={() => !navbar && setOpen(true)}
        onMouseLeave={() => !navbar && setOpen(false)}
        onClick={() => navbar && setOpen((prev) => !prev)}
        className={`relative z-10 flex cursor-pointer items-center gap-1 py-2 font-semibold ${
          navbar ? 'text-[18px]' : 'text-[16px] lg:text-[18px]'
        } ${isParentActive ? 'text-blue-600' : 'text-black hover:text-blue-600'}`}
      >
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Hover buffer for desktop */}
      {!navbar && open && (
        <div
          className="absolute left-0 top-full -mt-4 h-10 w-full"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      {open && (
        <div
          className="dropdown-container absolute left-1/2 z-20 mt-2 flex -translate-x-1/2 flex-col rounded-xl bg-white p-3 shadow-xl"
          style={{ minWidth: '200px' }}
          onMouseEnter={() => !navbar && setOpen(true)}
          onMouseLeave={() => !navbar && setOpen(false)}
        >
          <ul className="flex flex-col">
            {links.map((link, idx) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block whitespace-nowrap px-4 pt-2 text-left font-semibold hover:text-sky-800 ${
                    idx === 0 ? 'rounded-t-xl' : ''
                  } ${idx === links.length - 1 ? 'rounded-b-xl' : ''} ${
                    childActive(link.href) ? 'text-blue-600' : 'text-black'
                  }`}
                >
                  {link.label}
                </Link>
                {link.subtext && (
                  <p className="px-4 text-xs text-gray-500 last:pb-2">
                    {link.subtext}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dropdown arrow */}
      <style jsx>{`
        .dropdown-container:before {
          content: '';
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 16px solid #ffffff;
        }
      `}</style>
    </div>
  );
}
