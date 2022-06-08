import styled from '@emotion/styled';
import { NavBar } from '@src/components/navBar';
import { summonerMatchResult, summonerMatchResultQuery } from '@src/store/match/MatchState';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import { MatchList } from '../gameMatchList/MatchList';
import { useEffect, useState } from 'react';
import { GameSummary } from '../gameSummary/GameSummary';
import { MatchEmpty } from './MatchEmpty';
import { OPTIONS } from '@src/utils/match';
import { Spinner } from '@src/components/loadingSpinner';

export function MainContent() {
  const [activeNav, setActiveNav] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const matchResult = useRecoilValue(summonerMatchResult);
  const getMatchResult = useRecoilCallback(({ snapshot, set }) => async () => {
    try {
      const refreshId = Math.random();
      const summonerName = 'hide on bush';
      const response = await snapshot.getPromise(
        summonerMatchResultQuery({ summonerName, rankType: activeNav, refreshId }),
      );
      set(summonerMatchResult, response);
      setLoading(false);
    } catch (error) {
      // TODO: 에러 페이지로 보내기
      console.error(`[ERROR] getMatchResult: ${error}`);
    }
  });

  useEffect(() => {
    setLoading(true);
    getMatchResult();
  }, [activeNav]);

  const handleChangeNav = (id: string) => {
    setActiveNav(id);
  };
  if (loading) return <Spinner onActive={true} fullCover={false} />;

  // TODO: 전적이 없는 경우 화면 생성
  return (
    <MainContentWrapper>
      <NavBar options={OPTIONS} activeId={activeNav} onChange={handleChangeNav} />
      {matchResult ? (
        <>
          <GameSummary />
          <MatchList />
        </>
      ) : (
        <MatchEmpty />
      )}
    </MainContentWrapper>
  );
}

const MainContentWrapper = styled.div``;
