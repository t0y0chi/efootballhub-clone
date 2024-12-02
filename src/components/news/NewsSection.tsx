import React from 'react';
import { NewsCard } from './NewsCard';
import { newsData } from '../../data/newsData';

export function NewsSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}