export interface PlayerStats {
  name: string;
  rating: number;
  position: string;
  height: string;
  weight: string;
  age: number;
  nationality: string;
  team: {
    name: string;
    logo: string;
  };
  league: {
    name: string;
    logo: string;
  };
  stats: {
    attacking: Record<string, number>;
    defending: Record<string, number>;
    physical: Record<string, number>;
  };
}