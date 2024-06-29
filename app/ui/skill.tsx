import React from 'react';
import clsx from 'clsx';
import TechIcon from '@/app/ui/techIcon';
import { Skill } from '@/app/lib/skillsData';

interface SkillProps {
  skill: Skill;
  index: number; // Add index as a prop
}

const SkillComponent: React.FC<SkillProps> = ({ skill, index }) => {
  return (
    <div
      className={clsx('flex flex-row items-center justify-between py-4', {
        'border-t': index !== 0, // Use index here instead of i
      })}
    >
      <div className="mb-2 flex items-center sm:mb-0">
        <TechIcon
          name={skill.name}
          icon={skill.icon}
          imageUrl={skill.image_url}
          size={32}
        />
        <p className="ml-2 truncate text-sm font-semibold md:text-base">
          {skill.name}
        </p>
      </div>
      <div className="ml-4 min-w-0">
        <p className="hidden text-sm text-gray-500 sm:block">
          {skill.personal_experience}
        </p>
      </div>
    </div>
  );
};

export default SkillComponent;
