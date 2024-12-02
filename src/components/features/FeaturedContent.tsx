import React from 'react';
import { Trophy, Users, Gamepad2, TrendingUp } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function FeaturedContent() {
  const features = [
    {
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
      title: "Latest Tournaments",
      description: "Stay updated with ongoing tournaments and competitions"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Player Database",
      description: "Comprehensive database of player stats and abilities"
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-blue-600" />,
      title: "Game Guides",
      description: "In-depth tutorials and gameplay strategies"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Market Analysis",
      description: "Player market trends and transfer insights"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}