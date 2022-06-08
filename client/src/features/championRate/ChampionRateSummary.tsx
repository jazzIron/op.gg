import styled from '@emotion/styled';
import { GraphBar } from '@src/components/graphBar';
import { RecentWinRate } from '@src/store/user';
import { colors, fonts } from '@src/themes';
import { positionItem } from '@src/utils/match';
import { ChampionMatchEmpty } from './ChampionMatchEmpty';

// id: 246
// imageUrl: "https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png?image=w_30&v=1"
// key: "Qiyana"
// losses: 9
// name: "키아나"
// wins: 16

interface ChampionRateSummaryPropTypes {
  recentWinRate: RecentWinRate[];
}

export function ChampionRateSummary({ recentWinRate }: ChampionRateSummaryPropTypes) {
  return (
    <ChampionRateSummaryWrapper>
      {recentWinRate.length > 0 ? (
        recentWinRate.map((champion, idx) => {
          const games = champion.wins + champion.losses;
          const { positionWinningRateValue, winningRateColor } = positionItem(
            champion.wins,
            games,
            0,
          );
          return (
            <ChampionBoxWrapper key={idx}>
              <ChampionBoxStyled>
                <ChampionAvatarWrapper>
                  <ChampionAvatarStyled>
                    <img src={champion.imageUrl} alt="ChampionAvatarImg" />
                  </ChampionAvatarStyled>
                </ChampionAvatarWrapper>
                <InfoWrapper>{champion.name}</InfoWrapper>
                <RateWrapper winningRateColor={winningRateColor}>
                  {positionWinningRateValue}%
                </RateWrapper>
                <RateGraphWrapper>
                  <GraphBar
                    leftValue={positionWinningRateValue}
                    leftLabel={`${champion.wins}승`}
                    rightLabel={`${champion.losses}패`}
                  />
                </RateGraphWrapper>
              </ChampionBoxStyled>
            </ChampionBoxWrapper>
          );
        })
      ) : (
        <ChampionMatchEmpty />
      )}
    </ChampionRateSummaryWrapper>
  );
}

const ChampionRateSummaryWrapper = styled.div`
  background-color: ${colors.white_five};
  width: 100%;
  > div:last-child {
    border-bottom: 0px;
  }
`;

const ChampionBoxWrapper = styled.div`
  border-bottom: 1px solid ${colors.silver_three};
`;

const ChampionBoxStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 4px 8px 15px;
`;

const ChampionAvatarWrapper = styled.div``;

const ChampionAvatarStyled = styled.div`
  min-width: 32px;
  min-height: 32px;
  border-radius: 70%;
  overflow: hidden;
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }
`;

const InfoWrapper = styled.div`
  width: 55px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.brownish_grey};
`;

const RateWrapper = styled.div<{ winningRateColor: string }>`
  width: 27px;
  font-weight: bold;
  ${fonts.textStyle11};
  color: ${(props) => props.winningRateColor};
`;

const RateGraphWrapper = styled.div`
  min-width: 111px;
  padding-left: 12px;
`;
