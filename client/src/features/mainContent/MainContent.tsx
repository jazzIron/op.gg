import styled from '@emotion/styled';
import { NavBar } from '@src/components/navBar';
import { summonerMatchResult, summonerMatchResultQuery } from '@src/store/match/MatchState';
import { isEmpty, isNull, isNil } from 'lodash';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import { MatchList } from '../gameMatchList/MatchList';
import { useEffect, useState } from 'react';
import { GameSummary } from '../gameSummary/GameSummary';

const options = [
  {
    id: 'ALL',
    text: '전체',
  },
  {
    id: 'SOLO',
    text: '솔로게임',
  },
  {
    id: 'FREE',
    text: '자유랭크',
  },
];

export function MainContent() {
  const [activeNav, setActiveNav] = useState('ALL');
  const matchResult = useRecoilValue(summonerMatchResult);
  const getMatchResult = useRecoilCallback(({ snapshot, set }) => async () => {
    try {
      const refreshId = Math.random();
      const summonerName = 'hide on bush';
      const response = await snapshot.getPromise(
        summonerMatchResultQuery({ summonerName, refreshId }),
      );

      console.log(response);
      set(summonerMatchResult, response);
    } catch (error) {
      console.error(`[ERROR] getMatchResult: ${error}`);
    }
  });

  useEffect(() => {
    getMatchResult();
  }, [activeNav]);

  console.log(matchResult);

  const handleChangeNav = (id: string) => {
    setActiveNav(id);
  };
  if (isNull(matchResult)) return <div>로딩 중..</div>;

  return (
    <MainContentWrapper>
      <NavBar options={options} activeId={activeNav} onChange={handleChangeNav} />
      <GameSummary />
      <MatchList />
    </MainContentWrapper>
  );
}

const MainContentWrapper = styled.div``;
