import styled from '@emotion/styled';
import { SummonerBasic } from '@src/features/summoner/SummonerBasic';
import { Content } from '@src/layout/content/Content';
import { Header } from '@src/layout/header/Header';

export function MainPage() {
  return (
    <MainPageStyled>
      <Header />
      <SummonerBasic />
      <Content />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div``;
