import styled from '@emotion/styled';
import { NavBar } from '@src/components/navBar';
import { MatchList } from '../gameMatchList/MatchList';
import { GameSummary } from '../gameSummary/GameSummary';
import { OPTIONS } from '@src/utils/match';
import { ChampionMatchEmpty } from '../championRate/ChampionMatchEmpty';
import { useRecoilState } from 'recoil';
import { activeMatchTypeState, SummonerMatchResultApi } from '@src/store/match';

interface MainContentProps {
  matchResult: SummonerMatchResultApi | null;
}

export function MainContent({ matchResult }: MainContentProps) {
  const [activeMatchType, setActiveMatchType] = useRecoilState(activeMatchTypeState);
  const handleChangeNav = (id: string) => setActiveMatchType(id);

  return (
    <MainContentWrapper>
      <NavBar options={OPTIONS} activeId={activeMatchType} onChange={handleChangeNav} />
      {matchResult ? (
        <>
          <GameSummary />
          <MatchList />
        </>
      ) : (
        <ChampionMatchEmpty />
      )}
    </MainContentWrapper>
  );
}

const MainContentWrapper = styled.div``;
