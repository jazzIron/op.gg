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
  > div:nth-of-type(1) {
    width: 40%;
  }
  > div:nth-of-type(2) {
    width: 35%;
    border-left: 1px solid ${colors.silver_three};
    border-right: 1px solid ${colors.silver_three};
  }
  > div:nth-of-type(3) {
    width: 25%;
  }
`;
