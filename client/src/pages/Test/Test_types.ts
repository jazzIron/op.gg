import { api } from '@src/api/Instance';
import { AxiosRequestConfig } from 'axios';
import { isNull } from 'lodash';
import { atom, atomFamily } from 'recoil';

export const ROOT_URL = `https://codingtest.op.gg/api/summoner/`;

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
}

export interface summonerParams {
  [key: string]: string | number;
  summonerName: string;
  refreshId: number;
}

export interface SummonerDetailResult {
  summoner: SummonerData[] | [];
}

export const summonerDetailResult = atom<SummonerDetailResult>({
  key: 'summonerDetailResult2',
  default: {
    summoner: [],
  },
});

export const getSummonerInfoApi = (summonerName: string) => {
  const apiConfig: AxiosRequestConfig = {
    url: `${ROOT_URL}${summonerName}`,
    method: 'GET',
    params: {},
  };
  return api(apiConfig);
};

export const summonerDetailQuery = atomFamily<SummonerDetailQuery, Readonly<summonerParams>>({
  key: 'summonerDetailQuery2',
  default: async ({ summonerName, refreshId }) => {
    const [summonerInfoRes]: [summonerInfoRes: SummonerApi] = await Promise.all([
      getSummonerInfoApi(summonerName),
    ]);
    const summonerSearchResult = searchSummonerResult(summonerInfoRes);
    return {
      summoner: summonerSearchResult,
    };
  },
});

const searchSummonerResult = (summonerDetail: SummonerApi | null) => {
  if (isNull(summonerDetail)) return [];
  return summonerDetail ? Object.entries(summonerDetail).map((item) => item[1]) : [];
};
