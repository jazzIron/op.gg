import styled from '@emotion/styled';
import { Skeleton } from '@src/components/skeleton';
import {
  SkeletonImgWrapper,
  SkeletonImg,
  SkeletonInfo,
  SkeletonContentItem,
  SKELETON_SIZE,
} from '@src/components/skeleton/skeleton_styled';

export function MatchSkeleton() {
  return (
    <MatchSkeletonWrapper>
      <Skeleton gap={8} padding={10}>
        <SkeletonImgWrapper>
          <SkeletonImg imageSize={40} />
        </SkeletonImgWrapper>
        <SkeletonInfo>
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
          <SkeletonContentItem size={SKELETON_SIZE.SMALL} />
        </SkeletonInfo>
      </Skeleton>
    </MatchSkeletonWrapper>
  );
}

const MatchSkeletonWrapper = styled.div`
  margin-bottom: 8px;
  > div {
    height: 100px;
  }
  > div:last-child {
    margin-bottom: 0px;
  }
`;
