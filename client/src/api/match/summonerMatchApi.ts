import { AxiosRequestConfig } from 'axios';
import OP_GG_API from '../constant';
import { api } from '../Instance';

// 소환사 match list API
export const getSummonerMatchApi = (summonerName: string) => {
  const apiConfig: AxiosRequestConfig = {
    url: OP_GG_API.GET_SUMMONER_MATCH(summonerName),
    method: 'GET',
    params: {},
  };
  return api(apiConfig);
};

// 소환사 match 상세정보 API
export const getSummonerMatchDetailApi = (summonerName: string, gameId: string) => {
  const apiConfig: AxiosRequestConfig = {
    url: OP_GG_API.GET_SUMMONER_MATCH_DETAIL(summonerName, gameId),
    method: 'GET',
    params: {},
  };
  return api(apiConfig);
};
