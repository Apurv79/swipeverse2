// src/components/ui/info-item.tsx

import React from 'react';

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
}

export default function InfoItem({ icon, label }: InfoItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-lg">{icon}</div>
      <div>{label}</div>
    </div>
  );
}
