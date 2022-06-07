import { SummonerDetailResult } from '@src/store/user/SummonerState';

export interface RankTypePropTypes {
  rankType: 'SOLO' | 'FREE';
  summonerDetail: SummonerDetailResult;
}
