import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-[#0F0B1E] text-white py-4">
      {/* Top Section: Logo and User Info */}
      <div className="flex items-center justify-between w-full px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/window.svg" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold tracking-wide">SWIPEVERSE</h1>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium">Mohd Zaid</p>
            <p className="text-xs text-gray-400">0x10.121</p>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">MZ</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-8 mt-4">
        <Link href="/find-love" className="hover:text-gray-400">❤️ FIND LOVE ❤️</Link>
        <Link href="/likes-you" className="hover:text-gray-400">❤️ LIKES YOU ❤️</Link>
        <Link href="/matches" className="hover:text-gray-400">❤️ MATCHES ❤️</Link>
      </nav>
    </header>
  );
}