import styled from '@emotion/styled';
import { colors, fonts } from '@src/themes';

export function ChampionRate() {
  return (
    <ChampionRateWrapper>
      <ChampionBoxWrapper>
        <ChampionAvatarWrapper>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_30&v=1" />
        </ChampionAvatarWrapper>
        <ChampionDetailWrapper>
          <InfoWrapper>
            <div>신지드</div>
            <div>CS 67.8 (2.4)</div>
          </InfoWrapper>
          <KdaWrapper>
            <div>2.47:1 평점</div>
            <div>4.3 / 6.1 / 10.7</div>
          </KdaWrapper>
          <PlayedWrapper>
            <div>69%</div>
            <div>35게임</div>
          </PlayedWrapper>
        </ChampionDetailWrapper>
      </ChampionBoxWrapper>
    </ChampionRateWrapper>
  );
}

const ChampionRateWrapper = styled.div`
  background-color: ${colors.white_five};
  > div {
    border-bottom: 1px solid ${colors.silver_three};
  }
  > div:nth-last-of-type() {
    border-bottom: 0px;
  }
`;

const ChampionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 15px;
`;

const ChampionAvatarWrapper = styled.div`
  max-width: 45px;
  max-height: 45px;
  border-radius: 70%;
  overflow: hidden;
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
  }
`;

const ChampionDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  > div:nth-of-type(2) {
    padding: 0px 20px;
  }
`;
const InfoWrapper = styled.div`
  > div:nth-of-type(1) {
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: bold;
    color: ${colors.brownish_grey};
    margin-bottom: 3px;
  }
  > div:nth-of-type(2) {
    ${fonts.textStyle05};
  }
`;
const KdaWrapper = styled.div`
  text-align: center;
  > div:nth-of-type(1) {
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: bold;
    color: ${colors.brownish_grey};
    margin-bottom: 3px;
  }
  > div:nth-of-type(2) {
    font-family: Helvetica;
    font-size: 11px;
    color: ${colors.grey_temp};
  }
`;
const PlayedWrapper = styled.div`
  text-align: center;
  > div:nth-of-type(1) {
    ${fonts.textStyle11};
    color: ${colors.brownish_grey};
    font-weight: bold;
    margin-bottom: 3px;
  }
  > div:nth-of-type(2) {
    font-family: Helvetica;
    font-size: 11px;
    color: ${colors.grey_temp};
  }
`;
