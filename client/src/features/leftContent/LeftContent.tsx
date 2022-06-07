import styled from '@emotion/styled';
import { Tab } from '@src/components/tab/Tab';
import { summonerDetailResult } from '@src/store/user/SummonerState';
import { useRecoilValue } from 'recoil';
import { ChampionRate, ChampionRateSummary } from '../championRate';
import { isNull } from 'lodash';
import { Rank } from '../rank/Rank';
import { Spinner } from '@src/components/loadingSpinner';

const tabItems = [
  {
    id: 1,
    label: '챔피언 승률',
  },
  {
    id: 2,
    label: '7일간 랭크 승률',
  },
];

const tabContents = [
  {
    content: <ChampionRate />,
  },
  {
    content: <ChampionRateSummary />,
  },
];

export function LeftContent() {
  const summonerDetail = useRecoilValue(summonerDetailResult);
  if (isNull(summonerDetail.summonerInfoRes)) return <Spinner onActive={true} fullCover={false} />;

  return (
    <LeftContentWrapper>
      <Rank rankType={'SOLO'} summonerDetail={summonerDetail} />
      <Rank rankType={'FREE'} summonerDetail={summonerDetail} />
      <Tab tabItem={tabItems} tabContent={tabContents} />
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
