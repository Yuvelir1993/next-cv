import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import { Skill, fetchSkills } from '@/app/lib/skillsData';
import SkillComponent from '@/app/ui/skill';

interface SkillsProps {
  type: 'dev' | 'ops';
}

export default async function Skills({ type }: SkillsProps) {
  const skills: Skill[] = await fetchSkills(type);
  const devDescription = 'Pure software development and programming skills.';
  const opsDescription = 'Expertise in operations and infrastructure management.';

  return (
    <div className="flex w-full flex-col items-center md:col-span-4">
      <h2 className={`${lusitana.className} text-center text-xl md:text-2xl`}>{type === 'ops' ? 'Ops' : 'Dev'}</h2>
      <p className="mt-2 text-center text-sm text-gray-500">{type === 'ops' ? opsDescription : devDescription}</p>
      <div className="mt-4 flex w-full grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {skills.map((skill, i) => (
            <SkillComponent key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
