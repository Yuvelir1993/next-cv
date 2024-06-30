'use client';

import React, { useEffect, useState } from 'react';
import { fetchPassedCourses } from '@/app/lib/skillsData';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPassedCourses();
      setCourses(data);
    }
    fetchData();
  }, []);

  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <h3 className="mb-4 text-lg font-semibold">Passed Courses</h3>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li key={course.id}>
            <p className="font-semibold">{course.title}</p>
            <p className="text-sm text-gray-500">{course.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
