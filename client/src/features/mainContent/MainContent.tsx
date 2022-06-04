import styled from '@emotion/styled';
import { MatchList } from '../gameMatchList/MatchList';
import { GameSummary } from '../gameSummary/GameSummary';

export function MainContent() {
  return (
    <MainContentWrapper>
      <GameSummary />
      <MatchList />
    </MainContentWrapper>
  );
}

const MainContentWrapper = styled.div``;
