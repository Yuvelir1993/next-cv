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
      className={clsx('flex flex-col py-4', {
        'border-t': index !== 0, // Add border-t conditionally
      })}
    >
      <div className="flex items-center">
        <TechIcon
          name={skill.name}
          icon={skill.icon}
          imageUrl={skill.image_url}
          size={32}
        />
        <h2 className="ml-4 text-lg font-semibold">{skill.name}</h2>
      </div>
      <p className="mt-2 text-sm text-gray-500">{skill.personal_experience}</p>
    </div>
  );
};

export default SkillComponent;
