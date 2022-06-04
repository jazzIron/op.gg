import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { colors, fonts } from '@src/themes';

export function FavoritePosition() {
  return (
    <FavoritePositionWrapper>
      <TitleWrapper>선호 포지션 (랭크)</TitleWrapper>
      <ContentWrapper>
        <PositionImgWrapper>
          <img src={ICON_LIST.mid} alt="positionImg" />
        </PositionImgWrapper>
        <PositionDetailWrapper>
          <PositionLabelStyled>탑</PositionLabelStyled>
          <PositionRateStyled>
            <span>30%</span>
            <span>
              승률 <span>33%</span>
            </span>
          </PositionRateStyled>
        </PositionDetailWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <PositionImgWrapper>
          <img src={ICON_LIST.sup} alt="positionImg" />
        </PositionImgWrapper>
        <PositionDetailWrapper>
          <PositionLabelStyled>정글</PositionLabelStyled>
          <PositionRateStyled>
            <span>30%</span>
            <span>
              승률 <span>33%</span>
            </span>
          </PositionRateStyled>
        </PositionDetailWrapper>
      </ContentWrapper>
    </FavoritePositionWrapper>
  );
}

const FavoritePositionWrapper = styled.div`
  padding: 16px;
  background-color: ${colors.white_four};
  > div {
    margin-bottom: 12px;
  }
  > div:last-of-type {
    margin-bottom: 0px;
  }
`;

const TitleWrapper = styled.div`
  ${fonts.textStyle01};
  color: ${colors.brownish_grey_two};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PositionImgWrapper = styled.div`
  max-width: 28px;
  max-height: 28px;
  min-width: 28px;
  min-height: 28px;
  overflow: hidden;
  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
`;

const PositionDetailWrapper = styled.div``;

const PositionLabelStyled = styled.div`
  font-family: 'Helvetica';
  font-size: 14px;
  letter-spacing: 0px;
  font-weight: bold;
  margin-bottom: 3px;
`;
const PositionRateStyled = styled.div`
  display: flex;
  align-items: center;
  > span:nth-of-type(1) {
    ${fonts.textStyle05};
    color: ${colors.bluish};
    font-weight: bold;
  }
  > span:nth-of-type(2) {
    ${fonts.textStyle05};
    color: ${colors.brownish_grey_two};
    > span {
      color: ${colors.black};
      font-weight: bold;
    }
  }
  > span:nth-of-type(2)::before {
    display: inline-block;
    margin-left: 6px;
    margin-right: 6px;
    content: '';
    border-left: 1px solid ${colors.silver_three};
    height: 12px;
    vertical-align: middle;
    position: relative;
    top: -2px;
  }
`;
