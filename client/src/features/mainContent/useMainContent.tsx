import { RouteList } from '@src/routes/RouteList';
import { SummonerMatchResult } from '@src/store/match';
import { summonerMatchResultQuery, summonerMatchResult } from '@src/store/match/MatchState';
import { summonerDetailResult } from '@src/store/summoner';
import { isNull } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useRecoilCallback, useRecoilValue } from 'recoil';

const isSummonerMatchQueryResult = (res: SummonerMatchResult): res is SummonerMatchResult => {
  return (res as SummonerMatchResult).error === false;
};

export function useMainContent() {
  const navigate = useNavigate();
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

      if (response.error) navigate(RouteList.ERROR);

      if (isSummonerMatchQueryResult(response)) {
        set(summonerMatchResult, response);
      } else {
        throw new Error(`[ERROR] getMatchResult`);
      }
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
