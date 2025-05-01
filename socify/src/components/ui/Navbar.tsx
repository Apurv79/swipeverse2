import React from "react";

const Navbar = () => {
  return (
    <nav
      role="navigation"
      className="flex flex-wrap items-center justify-between bg-[#0B0619] px-6 md:px-12 py-4 text-white"
    >
      {/* Left Section - Logo and Subheading */}
      <div className="flex flex-col mb-2 md:mb-0">
        <div className="text-3xl md:text-4xl font-black tracking-wider">SWIPEVERSE</div>
        <div className="text-xs md:text-sm text-gray-500 font-light">UNBIASED DATING APP</div>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="flex space-x-6 md:space-x-12 text-sm md:text-base font-semibold mb-2 md:mb-0 ml-2">
        <a href="/find-love" aria-label="Find Love" className="flex items-center space-x-2 hover:text-gray-400 transition-colors ">
          <span className="text-xl">❤️</span>
          <span className="ml-2">FIND LOVE</span>
        </a>
        <a href="/likes-you" aria-label="Likes You" className="relative flex items-center space-x-2 hover:text-gray-400 transition-colors">
          <span className="text-xl">❤️</span>
          <span>LIKES YOU</span>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            8
          </span>
        </a>
        <a href="/matches" aria-label="Matches" className="relative flex items-center space-x-2 hover:text-gray-400 transition-colors">
          <span className="text-xl">❤️</span>
          <span>MATCHES</span>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </a>
      </div>

      {/* Right Section - User Info */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-sm font-medium">Mohd Zaid</div>
          <div className="text-xs text-gray-400">0x10.121</div>
        </div>
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">MZ</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
