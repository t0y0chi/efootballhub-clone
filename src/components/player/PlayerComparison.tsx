import React, { useState } from 'react';
import { PlayerStats as PlayerStatsType } from '../../types/player';
import { initialPlayerData } from '../../data/playerData';
import { ComparisonStatBar } from './ComparisonStatBar';
import { PlayerCard } from './PlayerCard';
import { ArrowLeftRight } from 'lucide-react';

export function PlayerComparison() {
  const [player1] = useState<PlayerStatsType>(initialPlayerData);
  const [player2] = useState<PlayerStatsType>({
    ...initialPlayerData,
    name: "Marcus Rashford",
    position: "LWF",
    rating: 86,
    nationality: "England",
    height: "185cm",
    weight: "82kg",
    age: 26,
    team: {
      name: "Manchester United",
      logo: "/man-utd-logo.png"
    },
    league: {
      name: "Premier League",
      logo: "/premier-league-logo.png"
    },
    stats: {
      attacking: {
        "オフェンスセンス": 85,
        "ボールコントロール": 86,
        "ドリブル": 88,
        "ボールキープ": 82,
        "グラウンダーパス": 78,
        "フライパス": 77,
        "決定力": 84,
        "ヘッダー": 70,
        "プレースキック": 75
      },
      defending: {
        "ディフェンスセンス": 55,
        "守備意識": 52,
        "ボールを奪取": 58,
        "アグレッシブネス": 70,
        "ゴールキーピング": 40,
        "キャッチング": 40,
        "クリアリング": 40,
        "コラプシング": 40,
        "ディフレクティング": 40
      },
      physical: {
        "スピード": 92,
        "瞬発力": 90,
        "キック力": 82,
        "ジャンプ": 78,
        "フィジカルコンタクト": 75,
        "ボディバランス": 80,
        "スタミナ": 85
      }
    }
  });

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Player Cards - Side by Side */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-8">
          <div className="flex-1">
            <PlayerCard player={player1} side="left" />
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="lg:rotate-90">
              <ArrowLeftRight className="h-8 w-8 text-gray-400" />
            </div>
          </div>
          <div className="flex-1">
            <PlayerCard player={player2} side="right" />
          </div>
        </div>

        {/* Stats Comparison */}
        <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2a2f3e] rounded-2xl p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ComparisonSection
              title="攻撃"
              stats={player1.stats.attacking}
              compareStats={player2.stats.attacking}
            />
            <ComparisonSection
              title="守備"
              stats={player1.stats.defending}
              compareStats={player2.stats.defending}
            />
            <ComparisonSection
              title="運動"
              stats={player1.stats.physical}
              compareStats={player2.stats.physical}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ComparisonSection({ 
  title, 
  stats, 
  compareStats 
}: { 
  title: string;
  stats: Record<string, number>;
  compareStats: Record<string, number>;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {Object.entries(stats).map(([key, value]) => (
          <ComparisonStatBar
            key={key}
            label={key}
            value1={value}
            value2={compareStats[key]}
          />
        ))}
      </div>
    </div>
  );
}