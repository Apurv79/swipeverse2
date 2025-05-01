// src/components/ui/profile-image.tsx

import React from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-md">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}

