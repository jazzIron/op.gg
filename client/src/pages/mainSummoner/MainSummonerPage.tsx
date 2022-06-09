import styled from '@emotion/styled';
import { MainSummoner } from '@src/features/mainSummoner/MainSummoner';

export function MainSummonerPage() {
  return (
    <MainSummonerPageWrapper>
      <MainSummoner />
    </MainSummonerPageWrapper>
  );
}

const MainSummonerPageWrapper = styled.div``;
