import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { FavoriteChampion } from './FavoriteChampion';
import { FavoritePosition } from './FavoritePosition';
import { GameResultPie } from './GameResultPie';

export function GameSummary() {
  return (
    <GameSummaryWrapper>
      <GameResultPie />
      <FavoriteChampion />
      <FavoritePosition />
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
    min-width: 276px;
  }
  > div:nth-of-type(2) {
    min-width: 228px;
    border-left: 1px solid ${colors.silver_three};
    border-right: 1px solid ${colors.silver_three};
  }
  > div:nth-of-type(3) {
    min-width: 184px;
  }
`;
