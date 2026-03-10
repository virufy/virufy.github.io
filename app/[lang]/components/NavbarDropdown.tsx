'use client';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarDropdownProps {
  label: string;
  links: { label: string; href: string }[];
  navbar?: boolean; // mobile mode
}

export default function NavbarDropdown({
  label,
  links,
  navbar = false,
}: NavbarDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Main Button */}
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => !navbar && setOpen(false)}
        onClick={() => navbar && setOpen((prev) => !prev)}
        className={`relative z-10 cursor-pointer px-2 py-2 font-semibold ${
          navbar ? 'text-[18px]' : 'text-[16px] lg:text-[18px]'
        }`}
      >
        {label}
      </button>

      {/* Transparent buffer div */}
      {!navbar && open && (
        <div
          className="absolute left-0 top-full h-3 w-full"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      {open && (
        <ul
          className={`dropdown-menu absolute z-20 mt-2 flex-col rounded-xl bg-white shadow-xl`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => !navbar && setOpen(false)}
          style={{ minWidth: '180px' }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block whitespace-nowrap px-4 py-2 text-left hover:bg-gray-100 ${
                  navbar ? 'text-[18px] font-light' : 'text-[16px]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Tail CSS */}
      <style jsx>{`
        .dropdown-menu:before {
          content: '';
          width: 0;
          height: 0;
          position: absolute;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 16px solid #ffffff;
          top: -16px;
          left: 24px;
        }
      `}</style>
    </div>
  );
}
