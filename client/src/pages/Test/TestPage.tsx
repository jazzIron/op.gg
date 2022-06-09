import styled from '@emotion/styled';
import './test.scss';

export function TestPage() {
  return (
    <TestPageWrapper>
      {new Array(10).fill(1).map((_, i) => {
        return <Skeleton key={i} />;
      })}
    </TestPageWrapper>
  );
}

const TestPageWrapper = styled.div`
  margin-top: 300px;
`;

const Skeleton = () => {
  const SkeletonItem = styled.li`
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    position: relative;
  `;

  const SkeletonImgWrapper = styled.div``;

  const SkeletonImg = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f2f2f2;
    position: relative;
    overflow: hidden;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 100%;
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      animation: loading 5s infinite linear;
    }
  `;

  const SkeletonInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  `;

  const SkeletonName = styled.div`
    width: 40%;
    height: 18px;
    background: #f2f2f2;
    position: relative;
    overflow: hidden;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      animation: loading 2s infinite linear;
    }
  `;

  const SkeletonEmail = styled.div`
    width: 55%;
    height: 18px;
    background: #f2f2f2;
    margin-top: 3px;
    position: relative;
    overflow: hidden;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 55%;
      height: 100%;
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      animation: loading 2s infinite linear;
    }
  `;

  return (
    <SkeletonItem>
      <SkeletonImgWrapper>
        <SkeletonImg />
      </SkeletonImgWrapper>
      <SkeletonInfo>
        <SkeletonName />
        <SkeletonEmail />
      </SkeletonInfo>
    </SkeletonItem>
  );
};
