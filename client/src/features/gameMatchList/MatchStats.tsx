import { Tag, TAG_THEME } from '@src/components/tag';
import { colors, fonts } from '@src/themes';
import { isEmpty } from 'lodash';
import styled from '@emotion/styled';
import { getLargestMultiKillString } from '@src/utils/match';
import { Champion, Stats } from '@src/store/match/Match_types';

interface MatchStatsPropTypes {
  stats: Stats;
  champion: Champion;
}

export function MatchStats({ stats, champion }: MatchStatsPropTypes) {
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
  } = stats.general;
  const { level } = champion;

  return (
    <>
      <MatchStatsWrapper>
        <KdaWrapper>
          <span>{kill} </span>/<span> {death} </span>/<span> {assist}</span>
        </KdaWrapper>
        <RatioWrapper>
          <span>{kdaString} 평점</span>
        </RatioWrapper>
        <MatchTagsWrapper>
          {!isEmpty(largestMultiKillString) && (
            <Tag
              theme={TAG_THEME.REDDISH}
              label={getLargestMultiKillString(largestMultiKillString)}
            />
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
  text-align: center;
`;
const KdaWrapper = styled.div`
  width: 113.5px;
  font-family: 'HelveticaBold';
  font-size: 15px;
  letter-spacing: -0.58px;
  font-weight: bold;
  color: ${colors.gunmetal};
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
  margin-top: -15px;
  width: 90px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  ${fonts.textStyle04};
  color: ${colors.gunmetal};
  letter-spacing: -0.42px;
`;
const LevelStyed = styled.div`
  ${fonts.textStyle04};
  color: ${colors.gunmetal};
  letter-spacing: -0.42px;
`;
const CsStyled = styled.div`
  ${fonts.textStyle04};
  color: ${colors.gunmetal};
`;
const KillParticipation = styled.div`
  ${fonts.textStyle04};
  color: ${colors.scarlet};
  letter-spacing: -0.42px;
`;
