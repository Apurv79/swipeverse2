'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="p-12">
      {/* Profile Card */}
      <div className="w-full max-w-4xl bg-[#0c081b] p-6">
        {/* Profile Header */}
        <div className="flex-col justify-center items-center border border-white p-6 mb-8  rounded-3xl bg-pink-500 ">
          <h1 className="text-5xl font-extrabold mb-2 text-center ">Laila</h1>
          <p className="italic text-sm text-gray-400 leading-snug mb-8 text-center mt-2 ">
            ❝ I am not here for hookups ❞
          </p>

          {/* User Info */}

          <div className=" mx-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-300 mb-10  ">
            <span className="flex items-center gap-2">📅 23</span>
            <span className="flex items-center gap-2">👩 Woman</span>
            <span className="flex items-center gap-2">🔗 Straight</span>
            <span className="flex items-center gap-2">📍 Sector 2</span>
            <span className="flex items-center gap-2">📏 5'4"</span>
            <span className="flex items-center gap-2">🍷 No</span>
            <span className="flex items-center gap-2">🐾 Yes</span>
            <span className="flex items-center gap-2">🍹 No</span>
            <span className="flex items-center gap-2">🍹 No</span>
            <span className="flex items-center gap-2">🐾 Cat</span>
            <span className="flex items-center gap-2">🍹 Don't Want</span>
          </div>
        </div>

        {/* Yoga Quotes & Images */}
        <div className="bg-[#0c081b]  rounded-xl border border-white shadow-lg mt-8">
          <div className="flex flex-wrap justify-center items-start gap-16">
            {[
              {
                quote:
                  '❝ Yoga: The journey of the self, through the self, to the self ❞',
                img: 'yoga1.png',
              },
              {
                quote: '❝ Breathe in peace, breathe out stress ❞',
                img: 'yoga2.png',
              },
              {
                quote: '❝ Yoga is the art of waking up ❞',
                img: 'yoga3.png',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center w-[280px]">
                {/* Fixed height quote box for alignment */}
                <div className="h-[60px] flex items-center justify-center text-center mb-3">
                  <p className="text-sm text-white leading-snug">
                    {item.quote}
                  </p>
                </div>

                <Image
                  src={`/images/${item.img}`}
                  alt={`Yoga ${idx + 1}`}
                  width={260}
                  height={260}
                  className="rounded-xl object-cover w-[260px] h-[260px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center w-full max-w-4xl mt-10 px-6">
        <button className="text-5xl text-red-500 hover:scale-110 transition-transform duration-200">
          ❌
        </button>
        <button className="text-5xl text-green-400 hover:scale-110 transition-transform duration-200">
          ✅
        </button>
      </div>
    </div>
  );
}
