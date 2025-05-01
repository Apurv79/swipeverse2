// src/components/ui/quote-card.tsx

import React from 'react';

interface QuoteCardProps {
  text: string;
}

export default function QuoteCard({ text }: QuoteCardProps) {
  return (
    <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md w-64">
      <p className="italic">"{text}"</p>
    </div>
  );
}
