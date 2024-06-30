'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';

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
          My past experience is making both commercial and just-for-myself and
          friends photos. Join my{' '}
          <a
            href="https://photolozovikov-main.web.app/"
            className="text-blue-600 underline hover:text-blue-800"
          >
            photo.lozovikov
          </a>
          web page for more 📸
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Fragrances</h3>
        <p className="text-base text-gray-700">
          I'm quite experienced person in niche fragrances, also having personal
          collection. But no worries, I am not the person who will irritate you
          in the office by applying the whole bottle 😄 Also, sharing my
          knowledges, experience and emotions on my{' '}
          <a
            href="www.youtube.com/@lozovikov"
            className="text-blue-600 underline hover:text-blue-800"
          >
            youtube channel
          </a>
          🎬
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Music - Guitar</h3>
        <p className="text-base text-gray-700">
          Playing guitar for 13+ years. Started as a tryout thing to repeat
          Three Days Grace - Never Too Late cover from unknown guy from youtube,
          continued as instrumental metalcore songwriter, and currently
          exploring djent, blues, jazz and so-called "neo-soul" music styles.
          And just expressing myself through this beautiful instrument and
          learning life through music 🎸
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Articles Writing</h3>
        <p className="text-base text-gray-700">
          Writing about technologies topics I'm excited the most at the moment
          and being confident that my shared knowledges, experiences and ideas
          will help readers to enrich their own approaches 💪
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Gym and Other Sports</h3>
        <p className="text-base text-gray-700">
          Gym is more than a hobby - it is my life framework of doing simple
          thing daily despite of things happening around. It taught me how to
          keep focus, which I'm using in all other life areas.
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
