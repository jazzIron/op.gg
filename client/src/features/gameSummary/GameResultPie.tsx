import styled from '@emotion/styled';
import { colors, fonts } from '@src/themes';
import { PieChart } from 'react-minimal-pie-chart';

const kdaStyled = (kills: number, assists: number, deaths: number) => {
  //KDA 공식 : kills + assists / deaths
  const kda = (kills + assists / deaths).toFixed(2);
  console.log(kda);
};

//NOTE: kills/ assists/ deaths
export function GameResultPie() {
  return (
    <GameResultPieWrapper>
      <TitleWrapper>20전 11승 9패</TitleWrapper>
      <ContentWrapper>
        <PieStyled>
          <PieChart
            animate={true}
            animationDuration={500}
            animationEasing="ease-out"
            data={[
              {
                value: 65,
                color: colors.bluish,
              },
            ]}
            reveal={65}
            lineWidth={30}
            background={colors.coral}
            lengthAngle={360}
            label={({ dataEntry }: any) => `${dataEntry.value}%`}
            labelStyle={{
              fontFamily: 'Helvetica',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#555555',
            }}
            labelPosition={0}
          ></PieChart>
        </PieStyled>
        <ResultSummaryWrapper>
          <KdaWrapper>
            <span>25.9</span> / <span>15.8</span> / <span>14.1</span>
          </KdaWrapper>
          <KdaRatioWrapper>
            <span>3.45:1</span>
            <span> (58%)</span>
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
  gap: 35px;
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

const KdaRatioWrapper = styled.div`
  width: 92px;
  font-family: 'Helvetica';
  font-size: 16px;
  margin-top: 6px;
  > span:nth-of-type(1) {
    font-weight: bold;
    color: ${colors.bluey_green};
  }
  > span:nth-of-type(2) {
    color: ${colors.reddish};
  }
`;
