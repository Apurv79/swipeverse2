'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, href, className, onClick }) => {
  const baseStyles = 'px-6 py-3 font-medium rounded-lg transition-all hover:opacity-90 no-underline';

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className || ''}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={`${baseStyles} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;



