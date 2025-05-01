// src/components/ui/card.tsx

import React from 'react';

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg shadow-md p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}

type QuoteCardProps = {
  text: string;
};

export default function QuoteCard({ text }: QuoteCardProps) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md max-w-xs">
      <p className="italic text-sm">{text}</p>
    </div>
  );
}
