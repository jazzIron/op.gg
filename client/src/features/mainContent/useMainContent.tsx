import { summonerMatchResultQuery, summonerMatchResult } from '@src/store/match/MatchState';
import { summonerDetailResult } from '@src/store/user';
import { isNull } from 'lodash';
import { useRecoilCallback, useRecoilValue } from 'recoil';

export function useMainContent() {
  const matchResult = useRecoilValue(summonerMatchResult);
  const summonerDetail = useRecoilValue(summonerDetailResult);
  const getMatchResult = useRecoilCallback(({ snapshot, set }) => async (activeNav: string) => {
    if (isNull(summonerDetail.summoner)) return false;
    try {
      const refreshId = Math.random();
      const summonerName = summonerDetail.summoner.name;
      const response = await snapshot.getPromise(
        summonerMatchResultQuery({ summonerName, rankType: activeNav, refreshId }),
      );
      set(summonerMatchResult, response);
    } catch (error) {
      console.error(`[ERROR] getMatchResult: ${error}`);
    }
  });

  return {
    summonerDetail,
    matchResult,
    getMatchResult,
  };
}
