import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { MatchItem } from './MatchItem';
import { MatchTeam } from './MatchTeam';

export function MatchList() {
  return (
    <MatchListWrapper>
      <MatchItem />
      <MatchTeam />
    </MatchListWrapper>
  );
}

const MatchListWrapper = styled.div`
  margin-top: 16px;
  background-color: ${colors.white_four};
`;
