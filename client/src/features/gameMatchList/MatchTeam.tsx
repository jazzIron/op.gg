import styled from '@emotion/styled';
import { colors } from '@src/themes';
import sampleData from './matchTeam.Data.json';

// TODO: 검색한 소환사 아이디 색이 다름!
export function MatchTeam() {
  const redTeam = sampleData.teams.filter((team) => team.teamId === 1);
  const blueTeam = sampleData.teams.filter((team) => team.teamId === 2);

  console.group('MatchTeam');
  console.log(sampleData);
  console.log(redTeam);
  console.log(blueTeam);
  console.groupEnd();

  return (
    <MatchTeamWrapper>
      <MatchTeamItemWrapper>
        {redTeam[0].players.map((player) => (
          <MatchTeamItem
            key={player.summonerId}
            champion={player.champion}
            summonerName={player.summonerName}
          />
        ))}
      </MatchTeamItemWrapper>
      <MatchTeamItemWrapper>
        {blueTeam[0].players.map((player) => (
          <MatchTeamItem
            key={player.summonerId}
            champion={player.champion}
            summonerName={player.summonerName}
          />
        ))}
      </MatchTeamItemWrapper>
    </MatchTeamWrapper>
  );
}

const MatchTeamWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 13px;
`;
const MatchTeamItemWrapper = styled.ul``;

const MatchTeamItem = ({
  champion,
  summonerName,
}: {
  champion: { imageUrl: string; level: number };
  summonerName: string;
}) => {
  const TeamItemStyled = styled.li`
    display: flex;
    align-items: center;
    gap: 4px;
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

  const SummonerInfoWrapper = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 11px;
    letter-spacing: -0.42px;
    color: ${colors.greyish_brown};
  `;

  return (
    <TeamItemStyled>
      <ChampionAvatarWrapper>
        <img src={champion.imageUrl} alt="summoner_champion_img" />
      </ChampionAvatarWrapper>
      <SummonerInfoWrapper>{summonerName}</SummonerInfoWrapper>
    </TeamItemStyled>
  );
};
