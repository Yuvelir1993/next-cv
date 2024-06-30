// components/TextSection.tsx
import React from 'react';

const TextSection: React.FC = () => {
  return (
    <section className="mt-6 flex flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-2xl font-bold">DevOps & Platform Engineer</h2>
      <p className="max-w-2xl text-lg text-gray-700">
        With over 6 years of combined experience in DevOps, software
        development, and platform engineering, I bring a robust skill set and a
        proven track record of delivering high-quality solutions. My journey has
        taken me from customizing products as a Solutions Engineer to creating
        scalable, efficient infrastructure as a DevOps and Platform Engineer.
      </p>
    </section>
  );
};

export default TextSection;
