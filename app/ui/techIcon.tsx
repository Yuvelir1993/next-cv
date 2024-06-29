// components/TechIcon.tsx
import Image from 'next/image';
import React from 'react';

interface TechIconProps {
  name: string;
  icon?: React.ElementType;
  imageUrl?: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({
  name,
  icon: IconComponent,
  imageUrl,
  size = 32,
}) => {
  return IconComponent ? (
    <IconComponent style={{ width: size, height: size }} />
  ) : imageUrl ? (
    <Image src={imageUrl} alt={name} width={size} height={size} />
  ) : null;
};

export default TechIcon;
