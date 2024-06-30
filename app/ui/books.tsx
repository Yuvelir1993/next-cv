'use client';

import React, { useEffect, useState } from 'react';
import { fetchReadBooks } from '@/app/lib/skillsData';

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
      <h3 className="mb-4 text-lg font-semibold">Read Books</h3>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.id}>
            <p className="font-semibold">{book.title}</p>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="text-sm text-gray-500">{book.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
