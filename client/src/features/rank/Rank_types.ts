import { SummonerDetailResult } from '@src/store/summoner/Summoner_types';

export interface RankTypePropTypes {
  rankType: 'SOLO' | 'FREE';
  summonerDetail: SummonerDetailResult;
}
