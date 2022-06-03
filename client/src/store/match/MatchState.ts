import { getSummonerMatchApi, getSummonerMatchDetailApi } from '@src/api/match/summonerMatchApi';
import { atom, atomFamily } from 'recoil';
import { MatchesApi, MatchDetailApi } from './Match_types';

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

export const summonerMatchResult = atom<MatchesApi | null>({
  key: 'summonerMatchResult',
  default: null,
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
