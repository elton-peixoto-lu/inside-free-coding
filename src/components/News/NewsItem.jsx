import React from 'react';
import { Link } from 'react-router-dom';

export function NewsItem({title, date, id}) {
  return (
    <article className="mb-4">
      <h3 className="text-xl font-bold text-[#E94E1B]">
        <Link to={`/news/${id}`} className="hover:underline">{title}</Link>
      </h3>
      <time className="text-sm text-gray-800">{date}</time>
    </article>
  );
}  
