import React from 'react';

// const Navbar = () => {
//   return (
//     <nav
//       role="navigation"
//       className=" flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50 p-4 shadow-lg rounded-full border border-pink-100"
//     >
//       <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-16 space-x-4">
//         {/* Left Section - Logo and Subheading - Stays left */}
//         <div className="flex flex-col md:flex-row md:items-center md:space-x-4 order-1 md:order-none">
//           <div className="text-3xl md:text-4xl font-black tracking-wider bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//             SWIPEVERSE
//           </div>
//           <div className="text-xs md:text-sm text-gray-500 font-light md:ml-2">
//             UNBIASED DATING APP
//           </div>
//         </div>

//         {/* Center Section - Navigation Links - Absolute center */}
//         <div className="flex justify-center items-center space-x-4 order-3 md:order-none">
//           <a
//             href="/find-love"
//             aria-label="Find Love"
//             className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 hover:scale-105 transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-pink-100/50"
//           >
//             <span className="text-xl">❤️</span>
//             <span>FIND LOVE</span>
//           </a>
//           <a
//             href="/likes-you"
//             aria-label="Likes You"
//             className="relative flex items-center space-x-2 text-gray-700 hover:text-pink-500 hover:scale-105 transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-pink-100/50"
//           >
//             <span className="text-xl">💌</span>
//             <span>LIKES YOU</span>
//             <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-md animate-pulse">
//               8
//             </span>
//           </a>
//           <a
//             href="/matches"
//             aria-label="Matches"
//             className="relative flex items-center space-x-2 text-gray-700 hover:text-pink-500 hover:scale-105 transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-pink-100/50"
//           >
//             <span className="text-xl">💖</span>
//             <span>MATCHES</span>
//             <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-md animate-pulse">
//               1
//             </span>
//           </a>
//         </div>

//         {/* Right Section - User Info - Stays right */}
//         <div className="flex justify-end items-center space-x-4 order-2 md:order-none">
//           <div className="text-right">
//             <div className="text-sm font-medium text-gray-700">Mohd Zaid</div>
//             <div className="text-xs text-gray-500">0x10.121</div>
//           </div>
//           <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
//             <span className="text-white font-bold">MZ</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  return (
    <div>
      <nav className="w-full px-4 py-2 bg-pink-900 rounded-xl shadow-md border border-blue-500">
        <div className="flex items-center justify-between text-white">
          {/* Left section */}
          <div className="pl-4">
            <p className="text-xl font-bold">SWIPEVERSE</p>
            <p className="text-xs text-gray-300">UNBIASED DATING APP</p>
          </div>

          {/* Center section */}
          <div className="flex space-x-6 text-sm font-semibold">
            <a
              href="/find-love"
              className="px-3 py-2 rounded-lg hover:bg-pink-800 transition-all duration-200 no-underline  "
            >
              ❤️ FIND LOVE
            </a>
            <a
              href="/likes-you"
              className="px-3 py-2 rounded-lg hover:bg-pink-800 transition-all duration-200 no-underline "
            >
              ❤️ LIKES YOU
            </a>
            <a
              href="/matches"
              className="px-3 py-2 rounded-lg hover:bg-pink-800 transition-all duration-200 no-underline "
            >
              ❤️ MATCHES
            </a>
          </div>

          {/* Right section */}
          <div className="pr-4 text-right">
            <p className="text-sm font-medium">Mohd Zaid</p>
            <p className="text-xs text-gray-300">0x10.121</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
