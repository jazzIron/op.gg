import { getSummonerInfoApi, getSummonerMostInfo } from '@src/api/summonerApi/SummonerApi';
import { atomFamily, atom } from 'recoil';
import { SummonerApi, MostInfoApi } from './Summoner_types';

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

export interface SummonerDetailResult {
  summonerInfoRes: SummonerApi | null;
  summonerMostInfoRes: MostInfoApi | null;
}

export const summonerDetailQuery = atomFamily<SummonerDetailResult, Readonly<summonerParams>>({
  key: 'summonerDetailQuery',
  default: async ({ summonerName, refreshId }) => {
    const [summonerInfoRes, summonerMostInfoRes]: [
      summonerInfoRes: SummonerApi,
      summonerMostInfoRes: MostInfoApi,
    ] = await Promise.all([getSummonerInfoApi(summonerName), getSummonerMostInfo(summonerName)]);
    return {
      summonerInfoRes,
      summonerMostInfoRes,
    };
  },
});

export const summonerDetailResult = atom<SummonerDetailResult>({
  key: 'summonerDetailResult',
  default: {
    summonerInfoRes: null,
    summonerMostInfoRes: null,
  },
});
