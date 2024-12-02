import React from 'react';

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Season Update 2024 Released",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80",
      category: "Updates",
      date: "Mar 15, 2024"
    },
    {
      id: 2,
      title: "Top Players of the Month",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80",
      category: "Rankings",
      date: "Mar 14, 2024"
    },
    {
      id: 3,
      title: "New Tactical Formation Guide",
      image: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&q=80",
      category: "Guides",
      date: "Mar 13, 2024"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsCard({ title, image, category, date }: {
  title: string;
  image: string;
  category: string;
  date: string;
}) {
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