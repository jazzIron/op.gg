import { SummonerDetailResult } from '@src/store/user/Summoner_types';

export interface RankTypePropTypes {
  rankType: 'SOLO' | 'FREE';
  summonerDetail: SummonerDetailResult;
}
