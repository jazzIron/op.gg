import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Tag, TAG_THEME } from '@src/components/tag';
import { colors, fonts } from '@src/themes';
import MatchData from './match.Data.json';
import { isEmpty } from 'lodash';

const sampleData = {
  stats: MatchData.games[0].stats,
  champion: MatchData.games[0].champion,
};

export function MatchStats() {
  const {
    assist,
    contributionForKillRate,
    cs,
    csPerMin,
    death,
    kdaString,
    kill,
    largestMultiKillString,
    opScoreBadge,
  } = sampleData.stats.general;
  const { level } = sampleData.champion;

  return (
    <>
      <MatchStatsWrapper>
        <KdaWrapper>
          <span>{kill} </span>/<span> {death} </span>/<span> {assist}</span>
        </KdaWrapper>
        <RatioWrapper>
          <span>{kdaString}</span> 평점
        </RatioWrapper>
        <MatchTagsWrapper>
          {!isEmpty(largestMultiKillString) && (
            <Tag theme={TAG_THEME.REDDISH} label={largestMultiKillString} />
          )}
          {!isEmpty(opScoreBadge) && <Tag theme={TAG_THEME.PURPLE} label={opScoreBadge} />}
        </MatchTagsWrapper>
      </MatchStatsWrapper>
      <StatsWrapper>
        <LevelStyed>레벨{level}</LevelStyed>
        <CsStyled>
          {cs} ({csPerMin}) CS
        </CsStyled>
        <KillParticipation>킬관여 {contributionForKillRate}</KillParticipation>
      </StatsWrapper>
    </>
  );
}

const MatchStatsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const KdaWrapper = styled.div`
  font-family: 'HelveticaBold';
  font-size: 15px;
  letter-spacing: -0.58px;
  font-weight: bold;
  color: ${colors.warm_grey_three};
  > span:nth-of-type(2) {
    color: ${colors.scarlet};
  }
`;
const RatioWrapper = styled.div`
  margin-top: 6px;
  ${fonts.textStyle04};
  font-weight: bold;
  color: ${colors.gunmetal};
  > span {
    color: ${colors.black};
  }
`;

const MatchTagsWrapper = styled.div`
  display: inline-flex;
  gap: 4px;
  margin-top: 10px;
`;

const StatsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  ${fonts.textStyle04};
  color: ${colors.gunmetal};
  letter-spacing: -0.42px;
  padding-left: 33px;
`;
const LevelStyed = styled.div``;
const CsStyled = styled.div``;
const KillParticipation = styled.div`
  color: ${colors.scarlet};
`;
