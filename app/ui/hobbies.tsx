'use client';

import React from 'react';

const Hobbies: React.FC = () => {
  return (
    <div className="mt-6 w-full rounded-lg bg-gray-100 p-4">
      <div className="text-center">
        <h2 className="relative mb-4 inline-block text-2xl font-bold">
          Hobbies
          <span className="mx-auto mt-1 block w-1/2 border-b-2 border-gray-400"></span>
        </h2>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Photographer</h3>
        <p className="text-base text-gray-700">
          Capturing moments and scenes, experimenting with different angles and
          lighting.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Fragrances</h3>
        <p className="text-base text-gray-700">
          Exploring scents, understanding notes, and collecting unique
          fragrances.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Music - Guitar</h3>
        <p className="text-base text-gray-700">
          Playing guitar, learning new songs, and exploring different music
          genres.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Articles Writing</h3>
        <p className="text-base text-gray-700">
          Writing about technology, hobbies, and personal experiences.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Gym and Other Sports</h3>
        <p className="text-base text-gray-700">
          Staying fit through gym workouts and enjoying various sports
          activities.
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
