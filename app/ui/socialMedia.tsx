import React from 'react';
import { FaLinkedin, FaMedium, FaHackerNews } from 'react-icons/fa';

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <FaLinkedin className="h-8 w-8 text-blue-600 hover:text-blue-800" />
        <span className="text-lg text-gray-700 hover:text-gray-900">
          LinkedIn
        </span>
      </a>
      <a
        href="https://medium.com/@your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <FaMedium className="h-8 w-8 text-black hover:text-gray-700" />
        <span className="text-lg text-gray-700 hover:text-gray-900">
          Medium
        </span>
      </a>
      <a
        href="https://hackernoon.com/u/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <FaHackerNews className="h-8 w-8 text-green-500 hover:text-green-700" />
        <span className="text-lg text-gray-700 hover:text-gray-900">
          Hackernoon
        </span>
      </a>
    </div>
  );
};

export default SocialMedia;
