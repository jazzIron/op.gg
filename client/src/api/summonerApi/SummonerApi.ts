import { AxiosRequestConfig } from 'axios';
import OP_GG_API from '../constant';
import { api } from '../Instance';

// NOTE: 소환사 기본정보 API
export const getSummonerInfoApi = (summonerName: string) => {
  const apiConfig: AxiosRequestConfig = {
    url: OP_GG_API.GET_SUMMONER_INFO(summonerName),
    method: 'GET',
    params: {},
  };
  return api(apiConfig);
};

// NOTE: 소환사 most info API
export const getSummonerMostInfo = (summonerName: string) => {
  const apiConfig: AxiosRequestConfig = {
    url: OP_GG_API.GET_SUMMONER_MOST_INFO(summonerName),
    method: 'GET',
    params: {},
  };
  return api(apiConfig);
};
