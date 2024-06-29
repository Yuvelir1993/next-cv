import Image from 'next/image';
import React from 'react';
import { getIcon } from '@/app/lib/getIcon';

interface TechIconProps {
  name: string;
  imageUrl: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, imageUrl, size = 32 }) => {
  const IconComponent = getIcon(name);

  return IconComponent ? (
    <IconComponent className={`h-${size} w-${size}`} />
  ) : (
    <Image src={imageUrl} alt={name} width={size} height={size} />
  );
};

export default TechIcon;
