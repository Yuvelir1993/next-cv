import React from 'react';
import { socialMediaLinks } from '@/app/lib/socialMediaData';

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 rounded-md bg-gray-800 bg-opacity-10"
        >
          <link.icon className={`h-8 w-8 ${link.colorClass}`} />
          <span className="text-lg text-gray-900 hover:text-slate-50">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
