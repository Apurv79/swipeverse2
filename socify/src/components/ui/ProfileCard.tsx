// app/components/ProfileCard.tsx

import React from "react";
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div>
      <div className="flex flex-col items-start justify-center min-h-screen bg-[#0c081b] text-white px-4" style={{ marginLeft: '16rem' }}>
      <div className="w-full max-w-2xl">
        {/* Profile Header */}
        <h1 className="text-6xl font-extrabold mb-4">Laila</h1>
        <p className="italic text-gray-400 mb-8" style={{ fontSize: '10px !important', lineHeight: '1.2rem' }}>❝ I am not here for hookups ❞</p>

        {/* User Info */}
        <div className="space-y-6 mb-16 text-gray-600 text-base"> {/* Adjusted bottom margin */}
          <div className="grid grid-cols-6 gap-x-4 gap-y-4"> {/* Added gap-y-4 for consistent row spacing */}
            <span className="flex items-center gap-2">📅 23</span>
            <span className="flex items-center gap-2">👩 Woman</span>
            <span className="flex items-center gap-2">🔗 Straight</span>
            <span className="flex items-center gap-2">📍 Sector 2</span>
            <span className="flex items-center gap-2">📏 5'4"</span>
            <span className="flex items-center gap-2">🍷 No</span>
            <span className="flex items-center gap-2">🐾 Yes</span>
            <span className="flex items-center gap-2">🍹 No</span>
            <span className="flex items-center gap-2">🍹 No</span>
            <span className="flex items-center gap-2">🐾 cat</span>
            <span className="flex items-center gap-2">🍹 Don't Want</span>
          </div>
        </div>

        {/* Added margin to create gap between user info and the block */}
        <div className="mt-12 bg-[#47445f] p-6 rounded-lg">
        <div className="flex justify-center gap-x-8"> {/* Horizontal alignment with spacing */}
  <div className="flex flex-col items-center">
    <p className="text-center mb-4">❝ Yoga: The journey of the self, through the self, to the self ❞</p>
    <Image
      src="/images/yoga1.png"
      alt="Yoga 1"
      width={350}
      height={350}
      className="rounded-xl object-cover w-[350px] h-[350px]"
    />
  </div>

  <div className="flex flex-col items-center">
    <p className="text-center mb-4">❝ Breathe in peace, breathe out stress ❞</p>
    <Image
      src="/images/yoga2.png"
      alt="Yoga 2"
      width={350}
      height={350}
      className="rounded-xl object-cover w-[350px] h-[350px]"
    />
  </div>

  <div className="flex flex-col items-center">
    <p className="text-center mb-4">❝ Yoga is the art of waking up ❞</p>
    <Image
      src="/images/yoga3.png"
      alt="Yoga 3"
      width={350}
      height={350}
      className="rounded-xl object-cover w-[350px] h-[350px]"
    />
  </div>
</div>

        </div> {/* Closing the main content div */}

        {/* Cross and Tick Buttons */}
        
      </div>
      
    </div>
    <div className="flex items-center justify-between w-full mt-6"> {/* Ensured buttons are at the two ends */}
    {/* Tick */}
    <button className="text-5xl text-green-400 hover:scale-110 transition-transform mb-1000">❌</button>

    {/* Cross */}
    <button className="text-5xl text-red-500  hover:scale-110 transition-transform">✅</button>
  </div>
    </div>
    
  );
}