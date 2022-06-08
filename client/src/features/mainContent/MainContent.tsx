import styled from '@emotion/styled';
import { NavBar } from '@src/components/navBar';
import { summonerMatchResult, summonerMatchResultQuery } from '@src/store/match/MatchState';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import { MatchList } from '../gameMatchList/MatchList';
import { useEffect, useState } from 'react';
import { GameSummary } from '../gameSummary/GameSummary';
import { OPTIONS } from '@src/utils/match';
import { useMainContent } from './useMainContent';
import { ChampionMatchEmpty } from '../championRate/ChampionMatchEmpty';

export function MainContent() {
  const [activeNav, setActiveNav] = useState('ALL');
  const { matchResult, getMatchResult } = useMainContent();
  useEffect(() => {
    getMatchResult(activeNav);
  }, [activeNav]);

  const handleChangeNav = (id: string) => setActiveNav(id);
  return (
    <MainContentWrapper>
      <NavBar options={OPTIONS} activeId={activeNav} onChange={handleChangeNav} />
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
