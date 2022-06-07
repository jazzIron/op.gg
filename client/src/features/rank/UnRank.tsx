import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { colors, fonts } from '@src/themes';
import { useMemo } from 'react';
import { RankTypePropTypes } from './Rank_types';

export function UnRank({ rankType }: RankTypePropTypes) {
  const rankTypeName = useMemo(() => {
    return rankType === 'SOLO' ? '솔로랭크' : '자유 5:5 랭크';
  }, []);
  return (
    <UnRankWrapper>
      <UnRankedImageStyled>
        <img src={ICON_LIST.unranked} />
      </UnRankedImageStyled>
      <UnRankedContentWrapper>
        <RankType>{rankTypeName}</RankType>
        <RankInfo>Unranked</RankInfo>
      </UnRankedContentWrapper>
    </UnRankWrapper>
  );
}

const UnRankWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 28px;
  border-radius: 2px;
  background-color: ${colors.white_four};
  gap: 28px;
`;

const UnRankedImageStyled = styled.div`
  max-width: 64;
  max-height: 64px;
  img {
    width: 64px;
    height: 64px;
  }
`;

const UnRankedContentWrapper = styled.div``;
const RankType = styled.div`
  ${fonts.textStyle09};
  padding-bottom: 4px;
`;
const RankInfo = styled.div`
  ${fonts.textStyle11};
  font-weight: bold;
`;
