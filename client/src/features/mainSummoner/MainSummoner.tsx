import styled from '@emotion/styled';
import { Content } from '@src/layout/content/Content';
import { summonerDetailResult } from '@src/store/summoner';
import { colors } from '@src/themes';
import { useRecoilValue } from 'recoil';
import { LeftContent } from '../leftContent';
import { MainContent } from '../mainContent';
import { SummonerBasic } from '../summoner/SummonerBasic';
import { summonerMatchResult } from '@src/store/match';

export function MainSummoner() {
  const summonerDetail = useRecoilValue(summonerDetailResult);
  const matchResult = useRecoilValue(summonerMatchResult);
  return (
    <>
      <SummonerBasicWrapper>
        <SummonerBasic summonerDetail={summonerDetail} />
      </SummonerBasicWrapper>
      <MainSummonerWrapper>
        <ContentWrapper>
          <Content>
            <LeftContent summonerDetail={summonerDetail} />
            <MainContent matchResult={matchResult} />
          </Content>
        </ContentWrapper>
      </MainSummonerWrapper>
    </>
  );
}

const MainSummonerWrapper = styled.div`
  display: block;
  width: 1080px;
  min-width: 1080px;
  margin: 0px auto;
`;

const SummonerBasicWrapper = styled.div`
  border-bottom: 1px solid ${colors.white_three};
`;
const ContentWrapper = styled.div`
  margin-top: 10px;
`;
