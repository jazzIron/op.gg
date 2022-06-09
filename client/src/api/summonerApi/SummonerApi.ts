import { AxiosRequestConfig } from 'axios';
import OP_GG_API from '../constant';
import { api } from '../Instance';

export const getSummonerInfoApi = (summonerName: string) => {
  const apiConfig: AxiosRequestConfig = {
    url: OP_GG_API.GET_SUMMONER_INFO(summonerName),
    method: 'GET',
    params: {},
  };
  return api(apiConfig);
};

export const getSummonerMostInfo = (summonerName: string) => {
  const apiConfig: AxiosRequestConfig = {
    url: OP_GG_API.GET_SUMMONER_MOST_INFO(summonerName),
    method: 'GET',
    params: {},
  };
  return api(apiConfig);
};
