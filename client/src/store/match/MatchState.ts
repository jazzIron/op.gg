import { getSummonerMatchApi } from '@src/api/match/summonerMatchApi';
import { getMatchParser } from '@src/utils/match';
import { atom, atomFamily } from 'recoil';
import { IApiResponse } from '../summoner';
import {
  SummonerMatchResult,
  SummonerMatchResultApi,
  SummonerMatchResultQuery,
  summonerMatchResultQueryParam,
  SummonerMatchResultRes,
} from './Match_types';

const isSummonerMatchRes = (
  res: SummonerMatchResultRes,
): res is IApiResponse<SummonerMatchResultApi> => {
  return (
    (res as IApiResponse<SummonerMatchResultApi>).status === 200 &&
    (res as IApiResponse<SummonerMatchResultApi>).data !== null
  );
};

export const summonerMatchResultQuery = atomFamily<
  SummonerMatchResultQuery,
  Readonly<summonerMatchResultQueryParam>
>({
  key: 'summonerMatchResultQuery',
  default: async ({ summonerName, rankType, refreshId }) => {
    const summonerMatchRes = await getSummonerMatchApi(summonerName);
    if (isSummonerMatchRes(summonerMatchRes)) {
      const games = await getMatchParser(summonerName, rankType, summonerMatchRes.data);
      return {
        ...summonerMatchRes.data,
        games,
        loading: false,
        error: false,
      };
    }
    return {
      champions: null,
      games: null,
      positions: null,
      summary: null,
      loading: true,
      error: true,
    };
  },
});

export const summonerMatchResult = atom<SummonerMatchResult>({
  key: 'summonerMatchResult',
  default: {
    champions: null,
    games: null,
    positions: null,
    summary: null,
    loading: true,
    error: true,
  },
});

export const activeMatchTypeState = atom({
  key: 'activeMatchTypeState',
  default: 'ALL',
});
