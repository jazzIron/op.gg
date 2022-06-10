import styled from '@emotion/styled';
import { summonerMatchResult } from '@src/store/match/MatchState';
import { colors } from '@src/themes';
import { isNull } from 'lodash';
import { useRecoilValue } from 'recoil';
import { FavoriteChampions } from './FavoriteChampions';
import { FavoritePosition } from './FavoritePosition';
import { GameResultPie } from './GameResultPie';
import { GameSummarySkeleton } from './GameSummarySkeleton';

export function GameSummary() {
  const matchResult = useRecoilValue(summonerMatchResult);
  if (matchResult.loading || isNull(matchResult)) {
    return <GameSummarySkeleton />;
  }

  return (
    <GameSummaryWrapper>
      <GameResultPie summary={matchResult.summary} />
      <FavoriteChampions champions={matchResult.champions} />
      <FavoritePosition positions={matchResult.positions} />
    </GameSummaryWrapper>
  );
}

const GameSummaryWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.silver_three};
  background-color: transparent;
  border-radius: 2px;
  margin-bottom: 8px;
  > div:nth-of-type(1) {
    min-width: 260px;
  }
  > div:nth-of-type(2) {
    min-width: 240px;
    border-left: 1px solid ${colors.silver_three};
    border-right: 1px solid ${colors.silver_three};
  }
  > div:nth-of-type(3) {
    min-width: 184px;
  }
`;
