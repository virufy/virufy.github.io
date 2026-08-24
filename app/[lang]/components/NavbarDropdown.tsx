'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

interface NavbarDropdownProps {
  label: string;
  subtext?: string[];
  links: { label: string; href: string; subtext?: string }[];
  activePath?: string;
}

export default function NavbarDropdown({
  label,
  links,
  activePath = '',
}: NavbarDropdownProps) {
  const [open, setOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const normalizePath = (path: string) => path.replace(/\/$/, '');

  // detect mobile/tablet (<1265px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1265);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ CLICK AWAY LOGIC (fixed)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!open) return;

      const target = e.target as Node;

      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const isParentActive = links.some(
    (link) => normalizePath(link.href) === normalizePath(activePath)
  );

  const isChildActive = (href: string) =>
    normalizePath(href) === normalizePath(activePath);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Parent button */}
      <button
        onMouseEnter={() => !isMobileView && setOpen(true)}
        onMouseLeave={() => !isMobileView && setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex cursor-pointer items-center gap-1 py-2 text-[16px] font-semibold lg:text-[18px] ${
          isParentActive ? 'text-blue-600' : 'text-black hover:text-blue-600'
        }`}
      >
        <span>{label}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 transition-transform duration-200 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Hover buffer (desktop only) */}
      {!isMobileView && open && (
        <div
          className="absolute left-0 top-full -mt-4 h-10 w-full"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        />
      )}

      {/* Dropdown */}
      {open && (
        <div
          className="dropdown-container absolute left-1/2 z-20 mt-2 flex -translate-x-1/2 flex-col rounded-xl bg-white p-3 shadow-xl"
          style={{ minWidth: '200px' }}
          onMouseEnter={() => !isMobileView && setOpen(true)}
          onMouseLeave={() => !isMobileView && setOpen(false)}
        >
          <ul className="flex flex-col">
            {links.map((link, idx) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)} // close on navigation
                  className={`block whitespace-nowrap px-4 pt-2 text-left font-semibold hover:text-sky-800 ${
                    idx === 0 ? 'rounded-t-xl' : ''
                  } ${idx === links.length - 1 ? 'rounded-b-xl' : ''} ${
                    isChildActive(link.href) ? 'text-blue-600' : 'text-black'
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

      {/* Arrow */}
      <style jsx>{`
        .dropdown-container:before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid white;
          filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.08));
        }
      `}</style>
    </div>
  );
}
