import Image from 'next/image';
import React from 'react';
import backgroundImage from '/public/header.jpg';
import avatarImage from '/public/avatar.jpg';
import SocialMedia from './socialMedia';

const Header: React.FC = () => {
  return (
    <header className="relative h-52 w-full overflow-hidden bg-gray-200">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute left-8 flex flex-col items-center space-y-4">
          <SocialMedia />
        </div>
        <div className="relative h-40 w-40 rounded-full border-4 border-white bg-gray-300">
          <Image
            src={avatarImage}
            alt="Avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
