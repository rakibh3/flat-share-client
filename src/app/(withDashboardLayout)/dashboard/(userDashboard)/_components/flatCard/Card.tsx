import React from 'react';
import Link from 'next/link';

interface CardProps {
  href: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block rounded-lg p-2 shadow-sm shadow-indigo-100"
    >
      {children}
    </Link>
  );
};

export default Card;
