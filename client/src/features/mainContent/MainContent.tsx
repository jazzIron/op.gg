import styled from '@emotion/styled';
import { NavBar } from '@src/components/navBar';
import { MatchList } from '../gameMatchList/MatchList';
import { GameSummary } from '../gameSummary/GameSummary';

const options = [
  {
    id: 'tab1',
    text: '전체',
  },
  {
    id: 'tab2',
    text: '솔로게임',
  },
  {
    id: 'tab3',
    text: '자유랭크',
  },
];

export function MainContent() {
  return (
    <MainContentWrapper>
      <NavBar options={options} activeId={'tab1'} />
      <GameSummary />
      <MatchList />
    </MainContentWrapper>
  );
}

const MainContentWrapper = styled.div``;
