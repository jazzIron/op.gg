import styled from '@emotion/styled';
import { RankFree } from '../rankFree/RankFree';
import { RankSolo } from '../rankSolo/RankSolo';

export function LeftContent() {
  return (
    <LeftContentWrapper>
      <RankSolo />
      <RankFree />
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
