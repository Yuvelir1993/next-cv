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
      <h3 className="mb-4 text-lg font-semibold">🎓 Passed Courses</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="rounded bg-white p-2 shadow">
            <p className="font-semibold">{course.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
