import styled from '@emotion/styled';
import { MatchList } from '../gameMatchList/MatchList';
import { GameSummary } from '../gameSummary/GameSummary';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { NavBar } from '@src/components/navBar';
import { SummonerMatchResultApi, activeMatchTypeState } from '@src/store/match';
import { titleBarLabelCustom } from '@src/utils/common';
import { OPTIONS } from '@src/utils/match';
import { ChampionMatchEmpty } from '../championRate/ChampionMatchEmpty';

interface MainContentProps {
  matchResult: SummonerMatchResultApi | null;
}

export function MainContent({ matchResult }: MainContentProps) {
  const [activeMatchType, setActiveMatchType] = useRecoilState(activeMatchTypeState);
  const handleChangeNav = (id: string) => setActiveMatchType(id);
  useEffect(() => {
    return () => titleBarLabelCustom('');
  }, []);

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
