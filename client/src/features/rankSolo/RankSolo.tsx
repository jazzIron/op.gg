import styled from '@emotion/styled';
import { colors, fonts } from '@src/themes/';

export function RankSolo() {
  return (
    <RankSoloWrapper>
      <RankSoloImageStyled>
        <img src="https://opgg-static.akamaized.net/images/medals/diamond_1.png" />
      </RankSoloImageStyled>
      <RankSoloContent>
        <RankSoloType>솔로 랭크</RankSoloType>
        <RankSoloPosition>
          <span>탑</span> (총 <span>27</span>게임)
        </RankSoloPosition>
        <RankSoloRank>Platinum 2</RankSoloRank>
        <RankSoloInfo>
          <span>80 LP </span> / 28승 30패
        </RankSoloInfo>
        <RankSoloRate>승률 51%</RankSoloRate>
      </RankSoloContent>
    </RankSoloWrapper>
  );
}

const RankSoloWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 2px;
  background-color: ${colors.white_four};
  box-shadow: 0 0 0 1px ${colors.silver_three} inset;
`;

const RankSoloImageStyled = styled.div`
  max-width: 104px;
  max-height: 104px;
  img {
    width: 104px;
    height: 104px;
  }
`;
const RankSoloContent = styled.div``;

const RankSoloType = styled.div`
  ${fonts.textStyle09};
  padding-bottom: 4px;
`;
const RankSoloPosition = styled.div`
  padding-bottom: 4px;
  font-size: 12px;
  color: ${colors.dark_grey};
  > span:nth-of-type(1) {
    font-family: AppleSDGothicNeoB;
    font-weight: bold;
  }
  > span:nth-of-type(2) {
    font-family: Helvetica;
  }
`;
const RankSoloRank = styled.div`
  padding-bottom: 6px;
  ${fonts.textStyle10};
`;
const RankSoloInfo = styled.div`
  padding-bottom: 2px;
  > span {
    ${fonts.textStyle02};
    color: ${colors.gunmetal};
  }
  ${fonts.textStyle01};
`;
const RankSoloRate = styled.div`
  ${fonts.textStyle01};
`;
