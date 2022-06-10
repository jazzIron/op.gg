import styled from '@emotion/styled';
import { Position } from '@src/store/match/Match_types';
import { colors, fonts } from '@src/themes';
import { positionItem, positionInfo } from '@src/utils/match';
import { isNull } from 'lodash';
import { FavoritePositionEmpty } from './FavoritePositionEmpty';

interface FavoritePositionPropTypes {
  positions: Position[] | null;
}
export function FavoritePosition({ positions }: FavoritePositionPropTypes) {
  if (isNull(positions)) return <FavoritePositionEmpty type={'POSITION'} />;

  const positionTotalGame = positions.reduce((acc, cur) => acc + cur.games, 0);
  return (
    <FavoritePositionWrapper>
      <TitleWrapper>선호 포지션 (랭크)</TitleWrapper>
      {positions.map((position, idx) => {
        const { positionWinningRateValue, positionWinningTotalRateValue, winningRateColor } =
          positionItem(position.wins, position.games, positionTotalGame);
        const positionStyled = positionInfo(position.positionName);
        return (
          <ContentWrapper key={idx}>
            <PositionImgWrapper>
              <img src={positionStyled.icon} alt="position_img" />
            </PositionImgWrapper>
            <PositionDetailWrapper>
              <PositionLabelStyled>{positionStyled.label}</PositionLabelStyled>
              <PositionRateStyled winningRateColor={winningRateColor}>
                <span>{positionWinningTotalRateValue}%</span>
                <span>
                  승률 <span>{positionWinningRateValue}%</span>
                </span>
              </PositionRateStyled>
            </PositionDetailWrapper>
          </ContentWrapper>
        );
      })}
    </FavoritePositionWrapper>
  );
}

const FavoritePositionWrapper = styled.div`
  padding: 16px;
  background-color: transparent;
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
const PositionRateStyled = styled.div<{ winningRateColor: string }>`
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
      color: ${(props) => props.winningRateColor};
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
