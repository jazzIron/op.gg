import { colors } from '@src/themes';
import { MatchChampion } from './MatchChampion';
import { MatchInfo } from './MatchInfo';
import { MatchItem } from './MatchItem';
import { MatchStats } from './MatchStats';
import { MatchTeam } from './MatchTeam';
import { ICON_LIST } from '@src/components/icon';
import styled from '@emotion/styled';
import { summonerMatchResult } from '@src/store/match/MatchState';
import { isNil } from 'lodash';
import { useRecoilValue } from 'recoil';

export function MatchBox() {
  const matchResult = useRecoilValue(summonerMatchResult);
  if (isNil(matchResult)) return <></>;

  console.log('[INFO]================matchResult==================');
  console.log(matchResult);
  const { games } = matchResult;
  return (
    <>
      {games.map((game) => {
        const {
          createDate,
          gameLength,
          gameType,
          isWin,
          gameId,
          champion,
          spells,
          peak,
          stats,
          items,
          teams,
          summonerName,
        } = game;
        const viewDetailImg = isWin ? ICON_LIST.viewDetailBlue : ICON_LIST.viewDetailRed;
        return (
          <MatchBoxWrapper isWin={isWin} key={gameId}>
            <InfoWrapper>
              <MatchInfo
                createDate={createDate}
                gameLength={gameLength}
                gameType={gameType}
                isWin={isWin}
              />
            </InfoWrapper>
            <ChampionWrapper>
              <MatchChampion champion={champion} spells={spells} peak={peak} />
            </ChampionWrapper>
            <StatusWrapper>
              <MatchStats champion={champion} stats={stats} />
            </StatusWrapper>
            <ItemWrapper>
              <MatchItem items={items} ward={stats.ward} isWin={isWin} />
            </ItemWrapper>
            <TeamWrapper>
              <MatchTeam teams={teams} summonerName={summonerName} />
            </TeamWrapper>
            <SuffixWrapper isWin={isWin}>
              <ViewDetailBtnStyled>
                <img src={viewDetailImg} alt={'view_detail_button_img'} />
              </ViewDetailBtnStyled>
            </SuffixWrapper>
          </MatchBoxWrapper>
        );
      })}
    </>
  );
}

const MatchBoxWrapper = styled.div<{ isWin: boolean }>`
  display: inline-flex;
  border: 1px solid ${(props) => (props.isWin ? colors.light_grey_blue : colors.pinkish_grey_two)};
  background-color: ${(props) => (props.isWin ? colors.light_blue_grey : colors.pinkish_grey)};
`;

const InfoWrapper = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
`;
const ChampionWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;
const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 204px;
  padding-top: 13px;
`;
const ItemWrapper = styled.div`
  padding-top: 15px;
  width: 114px;
`;
const TeamWrapper = styled.div`
  width: 170px;
  padding: 4px 0px;
`;
const SuffixWrapper = styled.div<{ isWin: boolean }>`
  position: relative;
  width: 30px;
  border: 1px solid ${(props) => (props.isWin ? colors.cool_blue : colors.brownish_pink)};
  background-color: ${(props) => (props.isWin ? colors.perrywinkle : colors.pinkish_tan)};
`;

const ViewDetailBtnStyled = styled.div`
  position: absolute;
  bottom: 12px;
  left: 8px;
  width: 13px;
  height: 10px;
`;
