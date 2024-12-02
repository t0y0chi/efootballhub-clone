import { PlayerStats } from '../types/player';

type StatWeights = {
  [key: string]: {
    attacking: number;
    defending: number;
    physical: number;
  };
};

const positionWeights: StatWeights = {
  'CF': { attacking: 0.6, defending: 0.1, physical: 0.3 },
  'SS': { attacking: 0.6, defending: 0.1, physical: 0.3 },
  'LWF': { attacking: 0.5, defending: 0.2, physical: 0.3 },
  'RWF': { attacking: 0.5, defending: 0.2, physical: 0.3 },
  'AMF': { attacking: 0.5, defending: 0.2, physical: 0.3 },
  'CMF': { attacking: 0.4, defending: 0.3, physical: 0.3 },
  'DMF': { attacking: 0.2, defending: 0.5, physical: 0.3 },
  'LMF': { attacking: 0.4, defending: 0.3, physical: 0.3 },
  'RMF': { attacking: 0.4, defending: 0.3, physical: 0.3 },
  'LB': { attacking: 0.2, defending: 0.5, physical: 0.3 },
  'CB': { attacking: 0.1, defending: 0.6, physical: 0.3 },
  'RB': { attacking: 0.2, defending: 0.5, physical: 0.3 },
  'GK': { attacking: 0.1, defending: 0.7, physical: 0.2 },
};

const calculateCategoryRating = (stats: Record<string, number>): number => {
  const values = Object.values(stats);
  return values.reduce((acc, val) => acc + val, 0) / values.length;
};

export const calculateOverallRating = (playerData: PlayerStats): number => {
  const weights = positionWeights[playerData.position] || positionWeights['CMF'];
  
  const attackingRating = calculateCategoryRating(playerData.stats.attacking);
  const defendingRating = calculateCategoryRating(playerData.stats.defending);
  const physicalRating = calculateCategoryRating(playerData.stats.physical);

  const weightedRating = 
    (attackingRating * weights.attacking) +
    (defendingRating * weights.defending) +
    (physicalRating * weights.physical);

  return Math.round(weightedRating);
};