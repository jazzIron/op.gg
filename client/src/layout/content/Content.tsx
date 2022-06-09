import styled from '@emotion/styled';
import { LeftContent } from '@src/features/leftContent/LeftContent';
import { MainContent } from '@src/features/mainContent/MainContent';
import { SearchSummonerEmpty } from '@src/features/searchSummoner/SearchSummonerEmpty';

export function Content() {
  return (
    <ContentWrapper>
      <LeftContent />
      <MainContent />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 1080px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;

  > div:nth-of-type(1) {
    flex-shrink: 0;
    max-width: 300px;
    min-width: 300px;
  }
  > div:nth-of-type(2) {
    flex-grow: 1;
    min-width: 690px;
    max-width: 690px;
    margin-left: 10px;
  }
`;
