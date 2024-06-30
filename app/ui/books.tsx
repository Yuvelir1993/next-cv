'use client';

import React, { useEffect, useState } from 'react';
import { fetchReadBooks } from '@/app/lib/skillsData';
import { FaBookOpen } from 'react-icons/fa'; // Import the book icon

const Books: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchReadBooks();
      setBooks(data);
    }
    fetchData();
  }, []);

  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <div className="mb-4 flex items-center">
        <FaBookOpen className="mr-2 text-xl text-gray-700" />
        <h3 className="text-lg font-semibold">Read Books</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {books.map((book) => (
          <div key={book.id} className="rounded bg-white p-2 shadow">
            <p className="font-semibold">{book.title}</p>
            <p className="text-sm text-gray-500">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
