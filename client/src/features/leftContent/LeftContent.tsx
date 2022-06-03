import styled from '@emotion/styled';
import { ChampionRate } from '../championRate/ChampionRate';
import { RankFree } from '../rankFree/RankFree';
import { RankSolo } from '../rankSolo/RankSolo';

export function LeftContent() {
  return (
    <LeftContentWrapper>
      <RankSolo />
      <RankFree />
      <ChampionRate />
    </LeftContentWrapper>
  );
}

const LeftContentWrapper = styled.div`
  background-color: blue;
  > div {
    margin-bottom: 8px;
  }
  > div:last-of-type {
    margin-bottom: 0px;
  }
`;
