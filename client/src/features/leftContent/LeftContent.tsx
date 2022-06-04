import styled from '@emotion/styled';
import { Tab } from '@src/components/tab/Tab';
import { ChampionRate, ChampionRateSummary } from '../championRate';
import { RankFree } from '../rankFree/RankFree';
import { RankSolo } from '../rankSolo/RankSolo';

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
  return (
    <LeftContentWrapper>
      <RankSolo />
      <RankFree />
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
