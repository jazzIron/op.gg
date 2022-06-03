import styled from '@emotion/styled';
import { LeftContent } from '@src/features/leftContent/LeftContent';
import { MainContent } from '@src/features/mainContent/MainContent';

export function Content() {
  return (
    <ContentWrapper>
      <LeftContent />
      <MainContent />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  background-color: yellow;
  padding: 10px 180px;
  height: calc(100vh - 97px - 175px);
  display: flex;
  flex-direction: row;

  > div:nth-of-type(1) {
    flex-shrink: 0;
    width: 300px;
  }
  > div:nth-of-type(2) {
    flex-grow: 1;
  }
`;
