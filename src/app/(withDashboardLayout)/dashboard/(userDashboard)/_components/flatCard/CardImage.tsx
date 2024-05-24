import React from 'react';
import Image from 'next/image';

interface CardImageProps {
  src: string;
  alt: string;
  //   width?: string | 'full';
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return <Image alt={alt} src={src} width={800} height={150} />;
};

export default CardImage;
