import styled from '@emotion/styled';
import { colors } from '@src/themes';

export function MatchItem() {
  return <MatchItemWrapper>매치 상세 아이템</MatchItemWrapper>;
}

const MatchItemWrapper = styled.div`
  background-color: ${colors.pinkish_grey};
  border: 1px solid ${colors.pinkish_grey};
  padding: 4px 16px;
`;

const InfoWrapper = styled.div``;
const ChampionWrapper = styled.div``;
const KdaWrapper = styled.div``;
const StatusWrapper = styled.div``;
const ItemWrapper = styled.div``;
const TeamWrapper = styled.div``;
const SuffixWrapper = styled.div``;
