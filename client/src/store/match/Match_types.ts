// NOTE: 소환자 Match List 정보
interface Champion {
  imageUrl: string;
  level: number;
}

interface Spell {
  imageUrl: string;
}

interface Items {
  imageUrl: string;
}

interface Stats {
  general: {
    kill: number;
    death: number;
    assist: number;
    kdaString: string;
    cs: number;
    csPerMin: number;
    contributionForKillRate: string;
    goldEarned: number;
    totalDamageDealtToChampions: number;
    largestMultiKillString: string;
    opScoreBadge: string;
  };
  ward: {
    sightWardsBought: number;
    visionWardsBought: number;
  };
}

interface MapInfo {
  imageUrl: string;
  mapId: string;
}

export interface Games {
  mmr: number | null;
  champion: Champion;
  spells: Spell[];
  items: Items[];
  needRenew: boolean;
  gameId: number;
  createDate: number;
  gameLength: number;
  gameType: string;
  summonerId: number;
  summonerName: string;
  tierRankShort: string;
  stats: Stats;
  mapInfo: MapInfo;
  peak: string[];
  isWin: boolean;
  teams: { gameId: string; teams: Team[] };
}

interface Position {
  games: number;
  wins: number;
  losses: number;
  position: string;
  positionName: string;
}

interface Summary {
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
  assists: number;
}

export interface MatchesApi {
  champions: Champion[];
  games: Games;
  position: Position[];
  summary: Summary;
}

// ================================================================================================
// NOTE: 소환자 Match 상세정보

interface player {
  champion: {
    imageUrl: string;
    level: 0;
  };
  summonerId: string;
  summonerName: string;
}

interface Team {
  players: player[];
  teamId: number;
}

export interface MatchDetailApi {
  gameId: string;
  teams: Team[];
}

export interface SummonerMatchResultApi {
  champions: Champion;
  games: Games[];
  positions: Position[];
  summary: Summary;
}
