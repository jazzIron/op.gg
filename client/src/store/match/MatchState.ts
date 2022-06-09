import { getSummonerMatchApi, getSummonerMatchDetailApi } from '@src/api/match/summonerMatchApi';
import { getMatchParser } from '@src/utils/match';
import { isEmpty } from 'lodash';
import { atom, atomFamily } from 'recoil';
import { MatchesApi, MatchDetailApi, SummonerMatchResultApi } from './Match_types';

interface summonerMatchParams {
  [key: string]: string | number;
  summonerName: string;
  refreshId: number;
}

export const summonerMatchQuery = atomFamily<MatchesApi, summonerMatchParams>({
  key: 'summonerMatchQuery',
  default: async ({ summonerName, refreshId }) => {
    const summonerMatchList: MatchesApi = await getSummonerMatchApi(summonerName);
    return summonerMatchList;
  },
});

interface summonerMatchDetailParams {
  [key: string]: string | number;
  summonerName: string;
  gameId: string;
  refreshId: number;
}

export const summonerMatchDetailQuery = atomFamily<MatchDetailApi, summonerMatchDetailParams>({
  key: 'summonerMatchDetailQuery',
  default: async ({ summonerName, gameId, refreshId }) => {
    const summonerMatchDetail: MatchDetailApi = await getSummonerMatchDetailApi(
      summonerName,
      gameId,
    );
    return summonerMatchDetail;
  },
});

export const summonerMatchDetailResult = atom<MatchDetailApi | null>({
  key: 'summonerMatchDetailResult',
  default: null,
});

interface summonerMatchResultQueryParam {
  [key: string]: string | number;
  summonerName: string;
  rankType: string;
  refreshId: number;
}

export interface IApiResponse<T> {
  status: number;
  data: T;
}

export type SummonerMatchResultRes = IApiResponse<SummonerMatchResultApi>;

export const summonerMatchResultQuery = atomFamily<
  SummonerMatchResultApi,
  Readonly<summonerMatchResultQueryParam>
>({
  key: 'testQuery',
  default: async ({ summonerName, rankType, refreshId }) => {
    const summonerMatchRes: any = await getSummonerMatchApi(summonerName);
    if (isEmpty(summonerMatchRes)) return [];
    const games = await getMatchParser(summonerName, rankType, summonerMatchRes);
    const result = {
      ...summonerMatchRes,
      games: games,
    };
    return result;
  },
});

export const summonerMatchResult = atom<SummonerMatchResultApi | null>({
  key: 'summonerMatchResult',
  default: null,
});

export const activeMatchTypeState = atom({
  key: 'activeMatchTypeState',
  default: 'ALL',
});
