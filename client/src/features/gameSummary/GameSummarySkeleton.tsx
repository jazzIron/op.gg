import styled from '@emotion/styled';
import { Skeleton } from '@src/components/skeleton';
import {
  SkeletonImgWrapper,
  SkeletonImg,
  SkeletonInfo,
  SkeletonContentItem,
  SKELETON_SIZE,
} from '@src/components/skeleton/skeleton_styled';

export function GameSummarySkeleton() {
  return (
    <GameSummarySkeletonWrapper>
      <GameResultPieWrapper>
        <Skeleton gap={8} padding={10} bordered={false}>
          <SkeletonImgWrapper>
            <SkeletonImg imageSize={80} />
          </SkeletonImgWrapper>
          <SkeletonInfo>
            <SkeletonContentItem size={SKELETON_SIZE.MEDIUM} />
            <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
          </SkeletonInfo>
        </Skeleton>
      </GameResultPieWrapper>
      <FavoriteChampionWrapper>
        {new Array(2).fill(1).map((_, i) => {
          return (
            <Skeleton gap={8} padding={10} key={i} bordered={false}>
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
        })}
      </FavoriteChampionWrapper>
      <FavoritePositionWrapper>
        {new Array(1).fill(1).map((_, i) => {
          return (
            <Skeleton gap={8} padding={10} key={i} bordered={false}>
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
        })}
      </FavoritePositionWrapper>
    </GameSummarySkeletonWrapper>
  );
}

const GameSummarySkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cdd2d2;
  border-radius: 2px;
`;

const GameResultPieWrapper = styled.div`
  min-width: 260px;
  margin: auto;
`;
const FavoriteChampionWrapper = styled.div`
  min-width: 240px;
  margin: auto;
`;
const FavoritePositionWrapper = styled.div`
  min-width: 184px;
  margin: auto;
`;
