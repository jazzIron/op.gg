import styled from '@emotion/styled';
import { GraphBar } from '@src/components/graphBar';
import { Skeleton } from '@src/components/skeleton';
import {
  SkeletonImgWrapper,
  SkeletonImg,
  SkeletonInfo,
  SkeletonContentItem,
  SKELETON_SIZE,
} from '@src/components/skeleton/skeleton_styled';
import { SummonerDetailResult } from '@src/store/summoner';
import { colors, fonts } from '@src/themes';
import { getChampionName, positionItem } from '@src/utils/match';
import { isNull } from 'lodash';
import { ChampionMatchEmpty } from './ChampionMatchEmpty';
import React from 'react';
import { movePageChampionDetailPage } from '@src/utils/common';

interface ChampionRateSummaryPropTypes {
  summonerDetail: SummonerDetailResult;
}

export function MemoizedChampionRateSummary({ summonerDetail }: ChampionRateSummaryPropTypes) {
  if (summonerDetail.loading || isNull(summonerDetail.summonerMost)) {
    return (
      <Skeleton gap={8} padding={10} bordered={false}>
        <SkeletonImgWrapper>
          <SkeletonImg imageSize={40} />
        </SkeletonImgWrapper>
        <SkeletonInfo>
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
        </SkeletonInfo>
      </Skeleton>
    );
  }
  const { recentWinRate } = summonerDetail.summonerMost;

  return (
    <ChampionRateSummaryWrapper>
      {recentWinRate.length > 0 ? (
        recentWinRate.map((champion, idx) => {
          const ChampionName = getChampionName(champion.imageUrl);
          const games = champion.wins + champion.losses;
          const { positionWinningRateValue, winningRateColor } = positionItem(
            champion.wins,
            games,
            0,
          );
          return (
            <ChampionBoxWrapper key={idx}>
              <ChampionBoxStyled>
                <ChampionAvatarWrapper>
                  <ChampionAvatarStyled onClick={() => movePageChampionDetailPage(ChampionName)}>
                    <img src={champion.imageUrl} alt="ChampionAvatarImg" />
                  </ChampionAvatarStyled>
                </ChampionAvatarWrapper>
                <InfoWrapper>{champion.name}</InfoWrapper>
                <RateWrapper winningRateColor={winningRateColor}>
                  {positionWinningRateValue}%
                </RateWrapper>
                <RateGraphWrapper>
                  <GraphBar
                    leftValue={positionWinningRateValue}
                    leftLabel={`${champion.wins}승`}
                    rightLabel={`${champion.losses}패`}
                  />
                </RateGraphWrapper>
              </ChampionBoxStyled>
            </ChampionBoxWrapper>
          );
        })
      ) : (
        <ChampionMatchEmpty />
      )}
    </ChampionRateSummaryWrapper>
  );
}

function ChampionRateSummaryPropsAreEqual(prevProps: any, nextProps: any) {
  return prevProps.summonerDetail === nextProps.summonerDetail;
}
export const ChampionRateSummary = React.memo(
  MemoizedChampionRateSummary,
  ChampionRateSummaryPropsAreEqual,
);

const ChampionRateSummaryWrapper = styled.div`
  background-color: ${colors.white_five};
  width: 100%;
  > div:last-child {
    border-bottom: 0px;
  }
`;

const ChampionBoxWrapper = styled.div`
  border-bottom: 1px solid ${colors.silver_three};
`;

const ChampionBoxStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 4px 8px 15px;
`;

const ChampionAvatarWrapper = styled.div``;

const ChampionAvatarStyled = styled.div`
  min-width: 32px;
  min-height: 32px;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }
`;

const InfoWrapper = styled.div`
  width: 55px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.brownish_grey};
`;

const RateWrapper = styled.div<{ winningRateColor: string }>`
  width: 27px;
  font-weight: bold;
  ${fonts.textStyle11};
  color: ${(props) => props.winningRateColor};
`;

const RateGraphWrapper = styled.div`
  min-width: 111px;
  padding-left: 12px;
`;
