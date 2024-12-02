import { PlayerStats } from '../types/player';

export const initialPlayerData: PlayerStats = {
  name: "Ruben Loftus-Cheek",
  rating: 84,
  position: "CMF",
  height: "191cm",
  weight: "88kg",
  age: 28,
  nationality: "England",
  team: {
    name: "AC Milan",
    logo: "/milan-logo.png"
  },
  league: {
    name: "Serie A",
    logo: "/serie-a-logo.png"
  },
  stats: {
    attacking: {
      "オフェンスセンス": 74,
      "ボールコントロール": 83,
      "ドリブル": 80,
      "ボールキープ": 85,
      "グラウンダーパス": 79,
      "フライパス": 75,
      "決定力": 81,
      "ヘッダー": 66,
      "プレースキック": 76
    },
    defending: {
      "ディフェンスセンス": 60,
      "守備意識": 61,
      "ボールを奪取": 66,
      "アグレッシブネス": 73,
      "ゴールキーピング": 40,
      "キャッチング": 40,
      "クリアリング": 40,
      "コラプシング": 40,
      "ディフレクティング": 40
    },
    physical: {
      "スピード": 73,
      "瞬発力": 69,
      "キック力": 76,
      "ジャンプ": 71,
      "フィジカルコンタクト": 80,
      "ボディバランス": 71,
      "スタミナ": 74
    }
  }
};