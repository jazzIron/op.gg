import { getSummonerInfoApi, getSummonerMostInfo } from '@src/api/summonerApi/SummonerApi';
import { searchSummonerResult } from '@src/utils/match';
import { atomFamily, atom } from 'recoil';
import {
  SummonerApi,
  MostInfoApi,
  SummonerDetailQuery,
  SummonerDetailResult,
} from './Summoner_types';

interface summonerParams {
  [key: string]: string | number;
  summonerName: string;
  refreshId: number;
}

export const summonerInfoQuery = atomFamily<SummonerApi | null, summonerParams>({
  key: 'summonerInfoQuery',
  default: async ({ summonerName, refreshId }) => {
    const summonerInfo: SummonerApi = await getSummonerInfoApi(summonerName);
    return summonerInfo;
  },
});

export const summonerInfoResult = atom<SummonerApi | null>({
  key: 'summonerInfoResult',
  default: null,
});

export const summonerMostInfoQuery = atomFamily<MostInfoApi, summonerParams>({
  key: 'summonerInfoQuery',
  default: async ({ summonerName, refreshId }) => {
    const summonerMostInfo: MostInfoApi = await getSummonerMostInfo(summonerName);
    return summonerMostInfo;
  },
});

export const summonerMostInfoResult = atom<MostInfoApi | null>({
  key: 'summonerMostInfoResult',
  default: null,
});

export const summonerDetailQuery = atomFamily<SummonerDetailQuery, Readonly<summonerParams>>({
  key: 'summonerDetailQuery',
  default: async ({ summonerName, refreshId }) => {
    const [summoner, summonerMost]: [summoner: SummonerApi, summonerMost: MostInfoApi] =
      await Promise.all([getSummonerInfoApi(summonerName), getSummonerMostInfo(summonerName)]);

    const summonerSearchResult = searchSummonerResult(summoner);
    return {
      summoner: summonerSearchResult,
      summonerMost,
    };

    // return {
    //   summonerInfoRes,
    //   summonerMostInfoRes,
    // };
  },
});

export const summonerDetailResult = atom<SummonerDetailResult>({
  key: 'summonerDetailResult',
  default: {
    summoner: null,
    summonerMost: null,
    loading: true,
    error: false,
  },
});
