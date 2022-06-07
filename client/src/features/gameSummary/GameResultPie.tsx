import styled from '@emotion/styled';
import { colors, fonts } from '@src/themes';
import { PieChart } from 'react-minimal-pie-chart';
import React, { useMemo } from 'react';
import { SummonerMatchResultApi } from '@src/store/match/Match_types';
import { kdaStyled, matchSummary, winningRate } from '@src/utils/match';

interface GameResultPiePropTypes {
  matchResult: SummonerMatchResultApi;
}

//NOTE: kills/ assists/ deaths
export function GameResultPie({ matchResult }: GameResultPiePropTypes) {
  const { kills, assists, deaths, wins, losses } = matchResult.summary;
  const { kdaColor, kdaValue } = useMemo(() => kdaStyled(kills, assists, deaths), [matchResult]);
  const { winningRateColor, winningRateValue } = useMemo(
    () => winningRate(wins, losses),
    [matchResult],
  );
  const { total, win, lose } = useMemo(() => matchSummary(wins, losses), [matchResult]);

  return (
    <GameResultPieWrapper>
      <TitleWrapper>
        <span>{total}</span>
        <span> {win}</span>
        <span> {lose}</span>
      </TitleWrapper>
      <ContentWrapper>
        <PieStyled>
          <PieChart
            animate={true}
            animationDuration={500}
            animationEasing="ease-out"
            data={[
              {
                value: winningRateValue,
                color: colors.bluish,
              },
            ]}
            reveal={winningRateValue}
            lineWidth={30}
            background={colors.coral}
            lengthAngle={360}
            label={({ dataEntry }: any) => `${dataEntry.value}%`}
            labelStyle={{
              fontFamily: 'Helvetica',
              fontSize: '14px',
              fontWeight: 'bold',
              color: colors.greyish_brown,
            }}
            labelPosition={0}
          ></PieChart>
        </PieStyled>
        <ResultSummaryWrapper>
          <KdaWrapper>
            <span>{kills}</span> / <span>{assists}</span> / <span>{deaths}</span>
          </KdaWrapper>
          <KdaRatioWrapper kdaColor={kdaColor} winningRateColor={winningRateColor}>
            <span>{kdaValue}:1</span>
            <span> ({winningRateValue}%)</span>
          </KdaRatioWrapper>
        </ResultSummaryWrapper>
      </ContentWrapper>
    </GameResultPieWrapper>
  );
}

const GameResultPieWrapper = styled.div`
  padding: 16px 35px;
  background-color: ${colors.white_four};
`;

const TitleWrapper = styled.div`
  ${fonts.textStyle01}
  color: ${colors.brownish_grey_two};
  margin-bottom: 14px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PieStyled = styled.div`
  width: 90px;
  height: 90px;
`;
const ResultSummaryWrapper = styled.div``;

const KdaWrapper = styled.div`
  ${fonts.textStyle05}
  font-weight:bold;
  color: ${colors.warm_grey_two};
  > span:nth-of-type(1) {
    color: ${colors.black};
  }
  > span:nth-of-type(2) {
    color: ${colors.reddish};
  }
  > span:nth-of-type(3) {
    color: ${colors.black};
  }
`;

const KdaRatioWrapper = styled.div<{ kdaColor: string; winningRateColor: string }>`
  width: 103px;
  font-family: 'Helvetica';
  font-size: 16px;
  margin-top: 6px;
  > span:nth-of-type(1) {
    font-weight: bold;
    color: ${(props) => props.kdaColor};
  }
  > span:nth-of-type(2) {
    color: ${(props) => props.winningRateColor};
  }
`;

// export default React.memo(
//   GameResultPie,
//   (prevProps, nextProps) => prevProps.matchResult === nextProps.matchResult,
// );
