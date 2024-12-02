import React from 'react';
import { Flag } from 'lucide-react';
import { PlayerStats } from '../../types/player';

interface PlayerCardProps {
  player: PlayerStats;
  side: 'left' | 'right';
}

export function PlayerCard({ player, side }: PlayerCardProps) {
  const gradientClass = side === 'left' 
    ? 'from-blue-600/20 to-blue-900/20' 
    : 'from-purple-600/20 to-purple-900/20';

  return (
    <div className={`bg-gradient-to-br ${gradientClass} rounded-2xl p-6 backdrop-blur-sm border border-white/10 h-full`}>
      <div className="relative">
        <div className="absolute top-0 right-0 bg-white/10 rounded-full px-4 py-1 text-sm">
          {player.position}
        </div>
        
        <div className="mb-4">
          <div className="text-6xl font-bold mb-2">{player.rating}</div>
          <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
          <div className="flex items-center space-x-2 text-gray-300">
            <Flag className="h-4 w-4" />
            <span>{player.nationality}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm mb-6">
          <div>
            <div className="text-gray-400">身長</div>
            <div>{player.height}</div>
          </div>
          <div>
            <div className="text-gray-400">体重</div>
            <div>{player.weight}</div>
          </div>
          <div>
            <div className="text-gray-400">年齢</div>
            <div>{player.age}歳</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img src={player.team.logo} alt={player.team.name} className="h-8 w-8" />
          <img src={player.league.logo} alt={player.league.name} className="h-8" />
        </div>
      </div>
    </div>
  );
}