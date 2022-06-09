import styled from '@emotion/styled';
import { SummonerBasic } from '@src/features/summoner/SummonerBasic';
import { Content } from '@src/layout/content/Content';
import { Header } from '@src/layout/header/Header';
import { colors } from '@src/themes';

export function MainPage() {
  return (
    <MainPageStyled>
      <Header />
      <SummonerBasicWrapper>
        <SummonerBasic />
      </SummonerBasicWrapper>
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div``;

const SummonerBasicWrapper = styled.div`
  border-bottom: 1px solid ${colors.white_three};
`;

const ContentWrapper = styled.div`
  margin-top: 10px;
`;
