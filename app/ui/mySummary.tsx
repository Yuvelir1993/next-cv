'use client';

import React from 'react';

const MySummary: React.FC = () => {
  return (
    <div className="mt-6 w-full rounded-lg bg-gray-100 p-4">
      <div className="text-center">
        <h2 className="relative mb-4 inline-block text-2xl font-bold">
          My Experience
          <span className="mx-auto mt-1 block w-1/2 border-b-2 border-gray-400"></span>
        </h2>
      </div>

      <div className="mb-6 mt-4">
        <h3 className="text-xl font-semibold">Solutions Engineer</h3>
        <p className="mb-2 italic text-gray-600">Experience: 2 years</p>
        <p className="text-base text-gray-700">
          Started as a Solutions Engineer, I was delivering product
          customizations built on already existing platforms for 2 years.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Fullstack Software Engineer</h3>
        <p className="mb-2 italic text-gray-600">Experience: 2 years</p>
        <p className="text-base text-gray-700">
          After I joined platform team, where we were focusing more on product's
          platform components, like REST APIs or multitenant application set up.
          And still investing some resources on delivering custom solutions.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">DevOps Engineer</h3>
        <p className="mb-2 italic text-gray-600">Experience: 2 years</p>
        <p className="text-base text-gray-700">
          At some point, I was invited to join Austrian team in a DevOps role
          which brought me next experiences in doing more Ops-oriented things
          and taking care of software operating on scale of product and
          solutions teams from different countries.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Platform Engineer</h3>
        <p className="mb-2 italic text-gray-600">Experience: 0.5 years</p>
        <p className="text-base text-gray-700">
          Gaining Ops and working with multiple teams experience, I grew more
          into Platform Developer role, where one of my strongest
          responsibilities are delivering organization-scale libraries, plugins
          and evolving quality-supportive software and creating custom
          frameworks if needed. With this, still keeping lowest possible entry
          level from people of multiple teams with diverse responsibilities by
          providing clear documentations, guides, techtalk presentations and
          hands on workshops.
        </p>
      </div>
    </div>
  );
};

export default MySummary;
