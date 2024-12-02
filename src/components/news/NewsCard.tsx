import React from 'react';

interface NewsCardProps {
  title: string;
  image: string;
  category: string;
  date: string;
}

export function NewsCard({ title, image, category, date }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <button className="text-blue-600 font-medium hover:text-blue-700">
          Read More →
        </button>
      </div>
    </div>
  );
}