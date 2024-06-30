import Image from 'next/image';
import React from 'react';

interface TechIconProps {
  name: string;
  icon?: React.ElementType;
  imageUrl?: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, icon: IconComponent, imageUrl, size = 32 }) => {
  return (
    <div style={{ width: size, height: size }}>
      {IconComponent ? (
        <IconComponent style={{ width: '100%', height: '100%' }} />
      ) : imageUrl ? (
        <Image src={imageUrl} alt={name} layout="fill" objectFit="contain" />
      ) : null}
    </div>
  );
};

export default TechIcon;
