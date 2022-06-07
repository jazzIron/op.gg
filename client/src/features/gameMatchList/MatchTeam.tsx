import styled from '@emotion/styled';
import { Teams } from '@src/store/match/Match_types';
import { colors } from '@src/themes';
import { makeMatchTeam } from '@src/utils/match';

interface MatchTeamPropTypes {
  teams: Teams;
  summonerName: string;
}

export function MatchTeam({ teams, summonerName }: MatchTeamPropTypes) {
  const { redTeam, blueTeam } = makeMatchTeam(teams);
  return (
    <MatchTeamWrapper>
      <MatchTeamItemWrapper>
        {redTeam[0].players.map((player) => {
          const targetSummoner = player.summonerName === summonerName ? true : false;
          return (
            <MatchTeamItem
              key={player.summonerId}
              champion={player.champion}
              summonerName={player.summonerName}
              targetSummoner={targetSummoner}
            />
          );
        })}
      </MatchTeamItemWrapper>
      <MatchTeamItemWrapper>
        {blueTeam[0].players.map((player) => {
          const targetSummoner = player.summonerName === summonerName ? true : false;
          return (
            <MatchTeamItem
              key={player.summonerId}
              champion={player.champion}
              summonerName={player.summonerName}
              targetSummoner={targetSummoner}
            />
          );
        })}
      </MatchTeamItemWrapper>
    </MatchTeamWrapper>
  );
}

const MatchTeamWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 13px;
`;
const MatchTeamItemWrapper = styled.ul`
  > li:last-child() {
    margin-bottom: 0px;
  }
`;

const MatchTeamItem = ({
  champion,
  summonerName,
  targetSummoner,
}: {
  champion: { imageUrl: string; level: number };
  summonerName: string;
  targetSummoner: boolean;
}) => {
  const TeamItemStyled = styled.li`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 2px;
  `;

  const ChampionAvatarWrapper = styled.div`
    max-width: 16px;
    max-height: 16px;
    min-width: 16px;
    min-height: 16px;
    overflow: hidden;
    img {
      width: 16px;
      height: 16px;
    }
  `;

  const SummonerInfoWrapper = styled.div<{ targetSummoner: boolean }>`
    font-family: AppleSDGothicNeo;
    font-size: 11px;
    letter-spacing: -0.42px;
    color: ${colors.greyish_brown};
    font-weight: ${(props) => (props.targetSummoner ? 'bold' : 'normal')};
    max-width: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  return (
    <TeamItemStyled>
      <ChampionAvatarWrapper>
        <img src={champion.imageUrl} alt="summoner_champion_img" />
      </ChampionAvatarWrapper>
      <SummonerInfoWrapper targetSummoner={targetSummoner}>{summonerName}</SummonerInfoWrapper>
    </TeamItemStyled>
  );
};
