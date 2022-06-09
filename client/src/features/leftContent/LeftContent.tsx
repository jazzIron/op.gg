import styled from '@emotion/styled';
import { Tab } from '@src/components/tab/Tab';
import { ChampionRate, ChampionRateSummary } from '../championRate';
import { isNull } from 'lodash';
import { Spinner } from '@src/components/loadingSpinner';
import { SummonerDetailResult } from '@src/store/summoner';
import { WINNING_RATE_OPTION } from '@src/utils/match';
import { Rank } from '../rank';

interface LeftContentPropTypes {
  summonerDetail: SummonerDetailResult;
}

export function LeftContent({ summonerDetail }: LeftContentPropTypes) {
  if (isNull(summonerDetail.summoner) || isNull(summonerDetail.summonerMost))
    return <Spinner onActive={true} fullCover={false} />;

  const tabContents = [
    {
      content: <ChampionRate champions={summonerDetail.summonerMost?.champions} />,
    },
    {
      content: <ChampionRateSummary recentWinRate={summonerDetail.summonerMost?.recentWinRate} />,
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
