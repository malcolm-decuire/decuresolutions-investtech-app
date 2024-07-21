'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo'; // Adjust the import path as necessary

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-solid border-0 border-b border-gray-200`,
        {
          'border-solid border-0 border-b border-gray-200 bg-white-500/75 backdrop-blur-lg': scrolled,
          'border-solid border-0 border-b border-gray-200 bg-white-500': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden no-underline text-black-500"
          >
            <Logo className="w-8 h-8" /> {/* Use Logo component here with specific dimensions */}
            <span className="font-bold text-xl">DecureLabs</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <Logo className="w-12 h-12" /> {/* Use Logo component here with specific dimensions */}
        </div>
      </div>
    </div>
  );
};

export default Header;
