import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { colors, fonts } from '@src/themes';

export function RankFree() {
  return (
    <RankFreeWrapper>
      <RankFreeImageStyled>
        <img src={ICON_LIST.unranked} />
      </RankFreeImageStyled>
      <RankSoloContent>
        <RankSoloType>자유 5:5 랭크</RankSoloType>
        <RankSoloInfo>Unranked</RankSoloInfo>
      </RankSoloContent>
    </RankFreeWrapper>
  );
}

const RankFreeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 28px;
  border-radius: 2px;
  background-color: ${colors.white_four};
  box-shadow: 0 0 0 1px ${colors.silver_three} inset;
  gap: 28px;
`;

const RankFreeImageStyled = styled.div`
  max-width: 64;
  max-height: 64px;
  img {
    width: 64px;
    height: 64px;
  }
`;

const RankSoloContent = styled.div``;
const RankSoloType = styled.div`
  ${fonts.textStyle09};
  padding-bottom: 4px;
`;
const RankSoloInfo = styled.div`
  ${fonts.textStyle11};
`;
