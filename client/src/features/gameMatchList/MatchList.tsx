import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { MatchBox } from './MatchBox';

export function MatchList() {
  return (
    <MatchListWrapper>
      <MatchBox />
    </MatchListWrapper>
  );
}

const MatchListWrapper = styled.div`
  margin-top: 16px;
  background-color: ${colors.white_four};
  > div {
    margin-bottom: 8px;
  }
  > div:last-child {
    margin-bottom: 0px;
  }
`;
