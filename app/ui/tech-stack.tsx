import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { fetchSkills } from '@/app/lib/data';
import TechIcon from '@/app/ui/techIcon';

interface TechStackProps {
  type: 'dev' | 'ops';
}

export default async function TechStack({ type }: TechStackProps) {
  const skills = await fetchSkills(type);

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        {type === 'ops' ? 'Ops' : 'Dev'}
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center">
                <TechIcon
                  name={skill.name}
                  imageUrl={skill.image_url}
                  size={32}
                />
                <div className="ml-4 min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {skill.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {skill.personal_experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
