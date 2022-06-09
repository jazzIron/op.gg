import styled from '@emotion/styled';
import { summonerMatchResult } from '@src/store/match/MatchState';
import { colors } from '@src/themes';
import { useRecoilValue } from 'recoil';
import { FavoriteChampions } from './FavoriteChampions';
import { FavoritePosition } from './FavoritePosition';
import { GameResultPie } from './GameResultPie';

export function GameSummary() {
  const matchResult = useRecoilValue(summonerMatchResult);
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
  background-color: ${colors.white_four};
  border-radius: 2px;
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
