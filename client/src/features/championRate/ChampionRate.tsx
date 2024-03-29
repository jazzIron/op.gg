import styled from '@emotion/styled';
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
import { getChampionName, kdaStyled, matchSummary, positionItem } from '@src/utils/match';
import { isNull } from 'lodash';
import { ChampionMatchEmpty } from './ChampionMatchEmpty';
import React from 'react';
import { movePageChampionDetailPage } from '@src/utils/common';

interface ChampionRatePropTypes {
  summonerDetail: SummonerDetailResult;
}

export function MemoizedChampionRate({ summonerDetail }: ChampionRatePropTypes) {
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
  const { champions } = summonerDetail.summonerMost;
  return (
    <ChampionRateWrapper>
      {summonerDetail.summonerMost.champions.length > 0 ? (
        champions.map((champion, idx) => {
          const ChampionName = getChampionName(champion.imageUrl);
          const { total } = matchSummary(champion.wins, champion.losses);
          const { positionWinningRateValue, winningRateColor } = positionItem(
            champion.wins,
            champion.games,
            0,
          );
          const { kdaColor, kdaValue } = kdaStyled(
            champion.kills,
            champion.assists,
            champion.deaths,
          );
          return (
            <ChampionBoxWrapper key={idx}>
              <ChampionAvatarWrapper>
                <ChampionAvatarStyled onClick={() => movePageChampionDetailPage(ChampionName)}>
                  <img src={champion.imageUrl} alt={'champion_image'} />
                </ChampionAvatarStyled>
              </ChampionAvatarWrapper>
              <ChampionDetailWrapper>
                <InfoWrapper>
                  <div>{champion.name}</div>
                  <div>CS {champion.cs}</div>
                </InfoWrapper>
                <KdaWrapper kdaColor={kdaColor}>
                  <div>{kdaValue} 평점</div>
                  <div>
                    {champion.kills} / {champion.assists} / {champion.deaths}
                  </div>
                </KdaWrapper>
                <PlayedWrapper winningRateColor={winningRateColor}>
                  <div>{positionWinningRateValue}%</div>
                  <div>{total} 게임</div>
                </PlayedWrapper>
              </ChampionDetailWrapper>
            </ChampionBoxWrapper>
          );
        })
      ) : (
        <ChampionMatchEmpty />
      )}
    </ChampionRateWrapper>
  );
}

function ChampionRatePropsAreEqual(prevProps: any, nextProps: any) {
  return prevProps.summonerDetail === nextProps.summonerDetail;
}
export const ChampionRate = React.memo(MemoizedChampionRate, ChampionRatePropsAreEqual);

const ChampionRateWrapper = styled.div`
  width: 100%;
  background-color: ${colors.white_five};
  > div:last-child {
    border-bottom: 0px;
  }
`;

const ChampionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0px;
  border-bottom: 1px solid ${colors.silver_three};
`;

const ChampionAvatarWrapper = styled.div`
  width: 60px;
  display: inline-flex;
  justify-content: flex-end;
`;

const ChampionAvatarStyled = styled.div`
  max-width: 45px;
  max-height: 45px;
  min-width: 45px;
  min-height: 45px;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
  }
`;

const ChampionDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  > div:nth-of-type(2) {
    width: 75px;
  }
`;
const InfoWrapper = styled.div`
  width: 85px;

  > div:nth-of-type(1) {
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: bold;
    color: ${colors.brownish_grey};
    margin-bottom: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  > div:nth-of-type(2) {
    ${fonts.textStyle05};
  }
`;
const KdaWrapper = styled.div<{ kdaColor: string }>`
  text-align: center;
  > div:nth-of-type(1) {
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: bold;
    color: ${(props) => props.kdaColor};
    margin-bottom: 3px;
  }
  > div:nth-of-type(2) {
    font-family: Helvetica;
    font-size: 11px;
    color: ${colors.grey_temp};
  }
`;
const PlayedWrapper = styled.div<{ winningRateColor: string }>`
  width: 70px;
  text-align: center;
  > div:nth-of-type(1) {
    ${fonts.textStyle11};
    color: ${(props) => props.winningRateColor};
    font-weight: bold;
    margin-bottom: 3px;
  }
  > div:nth-of-type(2) {
    font-family: Helvetica;
    font-size: 11px;
    color: ${colors.grey_temp};
  }
`;
