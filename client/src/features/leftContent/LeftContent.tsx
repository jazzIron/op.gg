import styled from '@emotion/styled';
import { Tab } from '@src/components/tab/Tab';
import { ChampionRate, ChampionRateSummary } from '../championRate';
import { SummonerDetailResult } from '@src/store/summoner';
import { WINNING_RATE_OPTION } from '@src/utils/match';
import { Rank } from '../rank';

interface LeftContentPropTypes {
  summonerDetail: SummonerDetailResult;
}

export function LeftContent({ summonerDetail }: LeftContentPropTypes) {
  const tabContents = [
    {
      content: <ChampionRate summonerDetail={summonerDetail} />,
    },
    {
      content: <ChampionRateSummary summonerDetail={summonerDetail} />,
    },
  ];

  return (
    <LeftContentWrapper>
      <Rank rankType={'SOLO'} summonerDetail={summonerDetail} />
      <Rank rankType={'FREE'} summonerDetail={summonerDetail} />
      <Tab tabItem={WINNING_RATE_OPTION} tabContent={tabContents} />
    </LeftContentWrapper>
  );
}

const LeftContentWrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
  > div:last-of-type {
    margin-bottom: 0px;
  }
`;
