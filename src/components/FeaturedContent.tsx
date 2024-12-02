import React from 'react';
import { Trophy, Users, Gamepad2, TrendingUp } from 'lucide-react';

export function FeaturedContent() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Trophy className="h-8 w-8 text-blue-600" />}
            title="Latest Tournaments"
            description="Stay updated with ongoing tournaments and competitions"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-blue-600" />}
            title="Player Database"
            description="Comprehensive database of player stats and abilities"
          />
          <FeatureCard
            icon={<Gamepad2 className="h-8 w-8 text-blue-600" />}
            title="Game Guides"
            description="In-depth tutorials and gameplay strategies"
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
            title="Market Analysis"
            description="Player market trends and transfer insights"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}