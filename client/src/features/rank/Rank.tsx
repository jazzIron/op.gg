import styled from '@emotion/styled';
import { colors, fonts } from '@src/themes';
import { makeLeagueRank } from '@src/utils/common';
import { getRankTypeName, SEASON } from '@src/utils/match';
import { isEmpty, isNull } from 'lodash';
import React, { useMemo } from 'react';
import { RankTypePropTypes } from './Rank_types';
import { UnRank } from './UnRank';
import {
  SkeletonImgWrapper,
  SkeletonImg,
  SkeletonInfo,
  SkeletonContentItem,
  SKELETON_SIZE,
} from '@src/components/skeleton/skeleton_styled';
import { Skeleton } from '@src/components/skeleton';

export function MemoizedRank({ rankType, summonerDetail }: RankTypePropTypes) {
  if (summonerDetail.loading || isNull(summonerDetail.summoner)) {
    return (
      <Skeleton gap={8} padding={20}>
        <SkeletonImgWrapper>
          <SkeletonImg imageSize={80} />
        </SkeletonImgWrapper>
        <SkeletonInfo>
          <SkeletonContentItem size={SKELETON_SIZE.MEDIUM} />
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
        </SkeletonInfo>
      </Skeleton>
    );
  }

  const rankTypeName = useMemo(() => getRankTypeName(rankType), [rankType]);
  const { summoner } = summonerDetail;
  const { rankInfo, totalGame, winningRateValue } = useMemo(
    () => makeLeagueRank(rankType, SEASON, summoner),
    [summonerDetail.summoner],
  );
  return (
    <RankWrapper>
      {isEmpty(rankInfo.tierRank.tier) ? (
        <UnRank rankType={rankType} />
      ) : (
        <>
          <RankImageStyled>
            <img src={rankInfo.tierRank.imageUrl} alt={'rank_img'} />
          </RankImageStyled>
          <RankContent>
            <RankType>{rankTypeName}</RankType>
            <RankPosition>
              (총 <span>{totalGame}</span>게임)
            </RankPosition>
            <RankRank>{rankInfo.tierRank.tier}</RankRank>
            <RankInfo>
              <span>{rankInfo.tierRank.rankLp} </span> / {rankInfo.wins}승 {rankInfo.losses}패
            </RankInfo>
            <RankRate>승률 {winningRateValue}%</RankRate>
          </RankContent>
        </>
      )}
    </RankWrapper>
  );
}

function RankPropsAreEqual(prevProps: any, nextProps: any) {
  return (
    prevProps.summonerDetail === nextProps.summonerDetail &&
    prevProps.rankType === nextProps.rankType
  );
}
export const Rank = React.memo(MemoizedRank, RankPropsAreEqual);

const RankWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 2px;
  background-color: ${colors.white_four};
  box-shadow: 0 0 0 1px ${colors.silver_three} inset;
`;

const RankImageStyled = styled.div`
  max-width: 104px;
  max-height: 104px;
  img {
    width: 104px;
    height: 104px;
  }
`;
const RankContent = styled.div``;

const RankType = styled.div`
  ${fonts.textStyle09};
  padding-bottom: 4px;
`;
const RankPosition = styled.div`
  padding-bottom: 4px;
  font-size: 12px;
  color: ${colors.dark_grey};
  > span:nth-of-type(1) {
    font-family: AppleSDGothicNeoB;
    font-weight: bold;
  }
  > span:nth-of-type(2) {
    font-family: Helvetica;
  }
`;
const RankRank = styled.div`
  padding-bottom: 6px;
  ${fonts.textStyle10};
`;
const RankInfo = styled.div`
  padding-bottom: 2px;
  > span {
    ${fonts.textStyle02};
    color: ${colors.gunmetal};
  }
  ${fonts.textStyle01};
`;
const RankRate = styled.div`
  ${fonts.textStyle01};
`;
