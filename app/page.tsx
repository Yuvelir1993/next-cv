import React from 'react';
import Skills from '@/app/ui/skills';
import Header from '@/app/ui/header';
import TextSection from '@/app/ui/headerTextSection';
import Courses from '@/app/ui/courses';
import Books from '@/app/ui/books';
import MySummary from '@/app/ui/mySummary';
import Hobbies from '@/app/ui/hobbies';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <Header />
      </div>
      <TextSection />
      <MySummary />
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Skills type="dev" />
        <Skills type="ops" />
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
        <Courses />
        <Books />
      </div>
      <Hobbies />
    </main>
  );
}
