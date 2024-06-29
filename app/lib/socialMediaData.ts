import { FaLinkedin, FaMedium, FaHackerNews, FaDev } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SocialMediaLink {
  name: string;
  url: string;
  icon: IconType;
  colorClass: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pavlo-lozovikov-8a5209151/',
    icon: FaLinkedin,
    colorClass: 'text-blue-600 hover:text-blue-800',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@plozovikov',
    icon: FaMedium,
    colorClass: 'text-black hover:text-gray-700',
  },
  {
    name: 'Hackernoon',
    url: 'https://hackernoon.com/u/plozovik',
    icon: FaHackerNews,
    colorClass: 'text-green-500 hover:text-green-700',
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/plozovik',
    icon: FaDev,
    colorClass: 'text-black-500 hover:text-black-700',
  },
];
