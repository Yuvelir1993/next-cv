import React from 'react';
import { inter, lusitana } from '@/app/ui/fonts';

const TextSection: React.FC = () => {
  return (
    <section className="mt-6 flex flex-col items-center justify-center text-center">
      <h2 className={`${lusitana.className} mb-2 text-2xl font-bold`}>DevOps & Platform Engineer</h2>
      <p className={`${inter.className} max-w-2xl text-lg text-gray-700`}>
        Hello! Let me to introduce myself through the skills I have acquired and continue to improve throughout my career, which includes experience in Software Engineering, DevOps and Platform Development.
      </p>
    </section>
  );
};

export default TextSection;
