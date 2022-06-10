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
import { fonts } from '@src/themes';
import { numberMark } from '@src/utils/formatter';
import { isNull } from 'lodash';
import TierTag from './TierTag';
import React from 'react';
interface SummonerBasicPropTypes {
  summonerDetail: SummonerDetailResult;
}

export function MemoizedSummonerBasic({ summonerDetail }: SummonerBasicPropTypes) {
  if (summonerDetail.loading || isNull(summonerDetail.summoner)) {
    return (
      <SkeletonLoadingWrapper>
        <Skeleton gap={16} padding={40} bordered={false}>
          <SkeletonImgWrapper>
            <SkeletonImg imageSize={100} />
          </SkeletonImgWrapper>
          <SkeletonInfo>
            <SkeletonContentItem size={SKELETON_SIZE.MEDIUM} />
            <SkeletonContentItem size={SKELETON_SIZE.MEDIUM} />
            <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
          </SkeletonInfo>
        </Skeleton>
      </SkeletonLoadingWrapper>
    );
  }

  const { ladderRank, name, level, profileBorderImageUrl, profileImageUrl, previousTiers } =
    summonerDetail.summoner;

  return (
    <SummonerBasicWrapper>
      <TierTagWrapper>
        <TierTag previousTiers={previousTiers} />
      </TierTagWrapper>

      <SummonerBasicStyled>
        <SummonerAvatar>
          <img src={profileImageUrl} alt={'summoner_profile_image'} />
          <img src={profileBorderImageUrl} alt={'summoner_profile_border_image'} />
          <div>
            <span>{level}</span>
          </div>
        </SummonerAvatar>
        <SummonerInfoWrapper>
          <div>{name}</div>
          <div>
            <span>레더 랭킹</span> <span>{numberMark(String(ladderRank.rank), ',')}</span>위
            <span> (상위 {ladderRank.rankPercentOfTop.toFixed(1)}%)</span>
          </div>
        </SummonerInfoWrapper>
      </SummonerBasicStyled>
    </SummonerBasicWrapper>
  );
}

function SummonerBasicPropsAreEqual(prevProps: any, nextProps: any) {
  return prevProps.summonerDetail === nextProps.summonerDetail;
}
export const SummonerBasic = React.memo(MemoizedSummonerBasic, SummonerBasicPropsAreEqual);

const SkeletonLoadingWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const SummonerBasicWrapper = styled.div`
  display: flex;
  width: 1080px;
  height: 175px;
  min-height: 175px;
  margin: 0px auto;
  flex-direction: column;
  margin-top: 15px;
`;

const TierTagWrapper = styled.div`
  margin-left: 12px;
`;

const SummonerBasicStyled = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 6px;
`;

const SummonerAvatar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
  overflow: hidden;
  > img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  > img:first-of-type {
    width: 100px;
    height: 100px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 24px;
    ${fonts.textStyle08};
    background: url(https://s-lol-web.op.gg/static/images/site/summoner/bg-levelbox.png);
    > span {
    }
  }
`;

const SummonerInfoWrapper = styled.div`
  > div:nth-of-type(1) {
    ${fonts.textStyle03}
  }
  > div:nth-of-type(2) {
    ${fonts.textStyle04}
    > span:nth-of-type(1) {
      ${fonts.textStyle04}
    }
    > span:nth-of-type(2) {
      ${fonts.textStyle05}
      font-weight: bold;
    }
    > span:nth-of-type(3) {
      ${fonts.textStyle06}
    }
  }
`;
