'use client';

import React from 'react';
import { FaGlassCheers, FaUniversity, FaHome, FaSearch } from 'react-icons/fa';
import { PiBriefcaseLight } from 'react-icons/pi';
import { GiLoveMystery, GiCat } from 'react-icons/gi';
import { IoWomanOutline } from 'react-icons/io5';
import { MdOutlineStraighten } from 'react-icons/md';
import Navbar from "@/components/ui/Navbar";
import ProfileCard from "@/components/ui/ProfileCard";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#100c1e] flex flex-col"> {/* Added flex-col to ensure proper stacking */}
      <Navbar />

      <div className="flex-grow bg-black text-white flex justify-end pr-20 pt-10"> {/* Adjusted flex-grow for proper spacing */}
        <div className="max-w-md w-full">
          <ProfileCard />
        </div>
      </div>

      <div className="bg-[#14101C] text-white px-6 md:px-12 py-8"> {/* Removed min-h-screen to avoid unnecessary height */}
        {/* Bottom Icons */}
        <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base mt-10">
          <div className="flex items-center space-x-2"><PiBriefcaseLight /> <span>Chartered Accountant</span></div>
          <div className="flex items-center space-x-2"><FaUniversity /> <span>University of Delhi</span></div>
          <div className="flex items-center space-x-2"><GiLoveMystery /> <span>Hindu</span></div>
          <div className="flex items-center space-x-2"><FaHome /> <span>Noida</span></div>
          <div className="flex items-center space-x-2"><FaSearch /> <span>English, Hindi</span></div>
          <div className="flex items-center space-x-2"><FaSearch /> <span>Long-term relationship</span></div>
        </div>
      </div>
    </div>
  );
}

    
export default ProfilePage;


