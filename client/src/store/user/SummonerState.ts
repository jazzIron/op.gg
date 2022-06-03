import { getSummonerInfoApi, getSummonerMostInfo } from '@src/api/summonerApi/SummonerApi';
import { atomFamily, atom } from 'recoil';
import { SummonerApi, MostInfoApi } from './Summoner_types';

interface summonerParams {
  [key: string]: string | number;
  summonerName: string;
  refreshId: number;
}

export const summonerInfoQuery = atomFamily<SummonerApi, summonerParams>({
  key: 'summonerInfoQuery',
  default: async ({ summonerName, refreshId }) => {
    const summonerMost: SummonerApi = await getSummonerInfoApi(summonerName);
    return summonerMost;
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

export const summonerMatchDetailResult = atom<MostInfoApi | null>({
  key: 'summonerMatchDetailResult',
  default: null,
});
