// components/TextSection.tsx
import React from 'react';

const TextSection: React.FC = () => {
  return (
    <section className="mt-6 flex flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-2xl font-bold">DevOps Engineer</h2>
      <p className="max-w-2xl text-lg text-gray-700">
        I am a DevOps Engineer with extensive experience in automating and
        optimizing mission-critical deployments in the AWS cloud environment.
        Proficient in containerization and orchestration technologies like
        Docker and Kubernetes, and skilled in Infrastructure as Code with tools
        like Terraform and Jenkins for CI/CD pipelines.
      </p>
    </section>
  );
};

export default TextSection;
