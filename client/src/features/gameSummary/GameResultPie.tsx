import styled from '@emotion/styled';
import { colors, fonts } from '@src/themes';
import { PieChart } from 'react-minimal-pie-chart';

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
                color: '#1f8ecd',
              },
            ]}
            reveal={65}
            lineWidth={30}
            background={'#ee5a52'}
            lengthAngle={360}
            // paddingAngle={-20}
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
