// NOTE: 소환사 기본 정보 API
interface IadderRank {
  rank: number;
  rankPercentOfTop: number;
}

export interface Ieague {
  hasResults: boolean;
  losses: number;
  tierRank: {
    division: string;
    imageUrl: string;
    lp: number;
    name: string;
    season: number;
    shortString: string;
    string: string;
    tier: string;
    tierDivision: string;
    tierRankPoint: number;
  };
  wins: number;
}

export interface PreviousTier {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface SummonerData {
  ladderRank: IadderRank;
  leagues: Ieague[];
  level: number;
  name: string;
  previousTiers: PreviousTier[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export interface SummonerApi {
  summoner: SummonerData;
}

export interface SummonerDetailQuery {
  summoner: SummonerData[] | [];
  summonerMost: MostInfoApi | null;
}

export interface SummonerDetailResult {
  summoner: SummonerData | null;
  summonerMost: MostInfoApi | null;
  loading: boolean;
  error: boolean;
}

// ===============================================================================
// NOTE: 소환사 most info API
interface Champion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

interface RecentWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface MostInfoApi {
  champions: Champion[];
  recentWinRate: RecentWinRate[];
}

export interface HistorySearchItem {
  id: string;
  keyword: string;
  data: number;
  hasFavorite: boolean;
}
