import styled from '@emotion/styled';
import { GraphBar } from '@src/components/graphBar';
import { colors, fonts } from '@src/themes';

export function ChampionRateSummary() {
  return (
    <ChampionRateSummaryWrapper>
      <ChampionBoxWrapper>
        <ChampionAvatarWrapper>
          <img
            src="https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_30&v=1"
            alt="ChampionAvatarImg"
          />
        </ChampionAvatarWrapper>
        <ChampionDetailWrapper>
          <InfoWrapper>신지드</InfoWrapper>
          <RateWrapper>69%</RateWrapper>
          <RateGraphWrapper>
            <GraphBar leftValue={23} leftLabel={'6승'} rightLabel={'4패'} />
          </RateGraphWrapper>
        </ChampionDetailWrapper>
      </ChampionBoxWrapper>
    </ChampionRateSummaryWrapper>
  );
}

const ChampionRateSummaryWrapper = styled.div`
  background-color: ${colors.white_five};
  padding: 4px 8px 4px 15px;
  width: 100%;
  > div:last-child {
    border-bottom: 0px;
  }
`;

const ChampionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid ${colors.silver_three};
`;

const ChampionAvatarWrapper = styled.div`
  max-width: 45px;
  max-height: 45px;
  min-width: 45px;
  min-height: 45px;
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
`;

const InfoWrapper = styled.div`
  min-width: 61px;
  > div {
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: bold;
    color: ${colors.brownish_grey};
  }
`;

const RateWrapper = styled.div`
  width: 27px;
  ${fonts.textStyle11}
  font-weight: bold;
`;

const RateGraphWrapper = styled.div`
  min-width: 111px;
  padding-left: 12px;
`;
