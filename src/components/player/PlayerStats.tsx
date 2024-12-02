import React, { useState } from 'react';
import { EditableStatBar } from './EditableStatBar';
import { Flag } from 'lucide-react';
import { PlayerStats as PlayerStatsType } from '../../types/player';
import { initialPlayerData } from '../../data/playerData';
import { calculateOverallRating } from '../../utils/statsCalculator';

export function PlayerStats() {
  const [playerData, setPlayerData] = useState<PlayerStatsType>(initialPlayerData);

  const updateStat = (category: keyof PlayerStatsType['stats'], stat: string, value: number) => {
    setPlayerData(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [category]: {
          ...prev.stats[category],
          [stat]: value
        }
      }
    }));
  };

  const rating = calculateOverallRating(playerData);

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Player Card */}
        <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2a2f3e] rounded-2xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-5xl font-bold">{rating}</span>
                <span className="text-2xl text-blue-400">{playerData.position}</span>
              </div>
              <h1 className="text-2xl font-bold mb-1">{playerData.name}</h1>
              <div className="flex items-center space-x-4 text-gray-300">
                <Flag className="h-4 w-4" />
                <span>{playerData.nationality}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div className="flex flex-col">
              <span className="text-gray-400">身長</span>
              <span>{playerData.height}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">体重</span>
              <span>{playerData.weight}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">年齢</span>
              <span>{playerData.age}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <img src={playerData.team.logo} alt={playerData.team.name} className="h-8 w-8" />
            <img src={playerData.league.logo} alt={playerData.league.name} className="h-8" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1f2e] to-[#2a2f3e] rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Attacking Stats */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">攻撃</h3>
              {Object.entries(playerData.stats.attacking).map(([key, value]) => (
                <EditableStatBar
                  key={key}
                  label={key}
                  value={value}
                  color="green"
                  onChange={(newValue) => updateStat('attacking', key, newValue)}
                />
              ))}
            </div>

            {/* Defending Stats */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">守備</h3>
              {Object.entries(playerData.stats.defending).map(([key, value]) => (
                <EditableStatBar
                  key={key}
                  label={key}
                  value={value}
                  color="red"
                  onChange={(newValue) => updateStat('defending', key, newValue)}
                />
              ))}
            </div>

            {/* Physical Stats */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">運動</h3>
              {Object.entries(playerData.stats.physical).map(([key, value]) => (
                <EditableStatBar
                  key={key}
                  label={key}
                  value={value}
                  color="yellow"
                  onChange={(newValue) => updateStat('physical', key, newValue)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}