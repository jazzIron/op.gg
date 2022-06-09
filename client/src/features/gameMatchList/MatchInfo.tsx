import styled from '@emotion/styled';
import { colors, fonts } from '@src/themes';
import { isWinLabel, gameLengthLabel } from '@src/utils/match';
import moment from 'moment';
import 'moment/locale/ko';

interface MatchInfoPropTypes {
  createDate: number;
  gameLength: number;
  gameType: string;
  isWin: boolean;
}

export function MatchInfo({ createDate, gameLength, gameType, isWin }: MatchInfoPropTypes) {
  return (
    <MatchInfoWrapper>
      <MatchTypeStyled>{gameType}</MatchTypeStyled>
      <MatchDateStyled>{moment(createDate).startOf('day').fromNow()}</MatchDateStyled>
      <BarStyled isWin={isWin}></BarStyled>
      <MatchResult isWin={isWin}>{isWinLabel(isWin)}</MatchResult>
      <MatchTime>{gameLengthLabel(gameLength)}</MatchTime>
    </MatchInfoWrapper>
  );
}

const MatchInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  gap: 4px;
`;

const MatchTypeStyled = styled.div`
  ${fonts.textStyle09};
  color: ${colors.greyish_brown};
  font-weight: bold;
  letter-spacing: -0.42px;
`;
const MatchDateStyled = styled.div`
  ${fonts.textStyle09};
  color: ${colors.greyish_brown};
  letter-spacing: -0.42px;
`;
const MatchResult = styled.div<{ isWin: boolean }>`
  ${fonts.textStyle09};
  color: ${(props) => (props.isWin ? colors.ugly_blue : colors.scarlet)};
  font-weight: bold;
  letter-spacing: -0.42px;
`;
const MatchTime = styled.div`
  ${fonts.textStyle09};
  color: ${colors.greyish_brown};
  letter-spacing: -0.42px;
`;

const BarStyled = styled.div<{ isWin: boolean }>`
  display: block;
  width: 27px;
  height: 1px;
  background: ${(props) => (props.isWin ? colors.light_grey_blue_two : colors.pinkish_grey_three)};
`;
