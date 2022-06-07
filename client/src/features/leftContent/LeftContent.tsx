import styled from '@emotion/styled';
import { Tab } from '@src/components/tab/Tab';
import { summonerDetailResult } from '@src/store/user/SummonerState';
import { useRecoilValue } from 'recoil';
import { ChampionRate, ChampionRateSummary } from '../championRate';
import { RankFree } from '../rankFree/RankFree';
import { RankSolo } from '../rankSolo/RankSolo';
import { isNull } from 'lodash';

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

  console.log('[INFO] LeftContent==============');
  console.log(summonerDetail);
  console.log(isNull(summonerDetail));

  if (isNull(summonerDetail.summonerInfoRes)) return <div>로딩 중..</div>;

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
