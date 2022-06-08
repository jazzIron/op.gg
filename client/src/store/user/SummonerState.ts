import { getSummonerInfoApi, getSummonerMostInfo } from '@src/api/summonerApi/SummonerApi';
import { searchSummonerResult } from '@src/utils/match';
import { atomFamily, atom } from 'recoil';
import {
  SummonerApi,
  MostInfoApi,
  SummonerDetailQuery,
  SummonerDetailResult,
  summonerParams,
} from './Summoner_types';

export const summonerDetailQuery = atomFamily<SummonerDetailQuery, Readonly<summonerParams>>({
  key: 'summonerDetailQuery',
  default: async ({ summonerName, refreshId }) => {
    const [summonerRes, summonerMost]: [summoner: SummonerApi, summonerMost: MostInfoApi] =
      await Promise.all([getSummonerInfoApi(summonerName), getSummonerMostInfo(summonerName)]);
    const summoner = searchSummonerResult(summonerRes);
    return {
      summoner,
      summonerMost,
    };
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
