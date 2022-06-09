import { getSummonerInfoApi, getSummonerMostInfo } from '@src/api/summonerApi/SummonerApi';
import { searchSummonerMostResult, searchSummonerResult } from '@src/utils/match';
import { atomFamily, atom } from 'recoil';
import {
  SummonerDetailQuery,
  SummonerDetailResult,
  summonerParams,
  IApiResponse,
  SummonerMostApi,
  SummonerApi,
  SummonerMostRes,
  SummonerRes,
} from './Summoner_types';

const isSummonerRes = (res: SummonerRes): res is IApiResponse<SummonerApi> => {
  return (
    (res as IApiResponse<SummonerApi>).status === 200 &&
    (res as IApiResponse<SummonerApi>).data !== null
  );
};
const isSummonerMostRes = (res: SummonerMostRes): res is IApiResponse<SummonerMostApi> => {
  return (
    (res as IApiResponse<SummonerMostApi>).status === 200 &&
    (res as IApiResponse<SummonerMostApi>).data !== null
  );
};

export const summonerDetailQuery = atomFamily<SummonerDetailQuery, Readonly<summonerParams>>({
  key: 'summonerDetailQuery',
  default: async ({ summonerName, refreshId }) => {
    const [summonerRes, summonerMostRes]: [
      summoner: SummonerRes,
      summonerMostRes: SummonerMostRes,
    ] = await Promise.all([getSummonerInfoApi(summonerName), getSummonerMostInfo(summonerName)]);
    if (isSummonerRes(summonerRes) && isSummonerMostRes(summonerMostRes)) {
      const summoner = searchSummonerResult(summonerRes.data);
      const summonerMost = searchSummonerMostResult(summonerMostRes.data);
      return {
        summoner,
        summonerMost,
        loading: false,
        error: false,
      };
    }
    return {
      summoner: null,
      summonerMost: null,
      loading: false,
      error: true,
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
