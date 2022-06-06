import { colors } from '@src/themes';
import { MatchChampion } from './MatchChampion';
import { MatchInfo } from './MatchInfo';
import { MatchItem } from './MatchItem';
import { MatchStats } from './MatchStats';
import { MatchTeam } from './MatchTeam';
import MatchData from './match.Data.json';
import { ICON_LIST } from '@src/components/icon';
import styled from '@emotion/styled';

const sampleData = {
  isWin: MatchData.games[0].isWin,
};

export function MatchBox() {
  console.log(sampleData.isWin);

  const viewDetailImg = sampleData.isWin ? ICON_LIST.viewDetailBlue : ICON_LIST.viewDetailRed;
  return (
    <MatchBoxWrapper isWin={sampleData.isWin}>
      <InfoWrapper>
        <MatchInfo />
      </InfoWrapper>
      <ChampionWrapper>
        <MatchChampion />
      </ChampionWrapper>
      <StatusWrapper>
        <MatchStats />
      </StatusWrapper>
      <ItemWrapper>
        <MatchItem />
      </ItemWrapper>
      <TeamWrapper>
        <MatchTeam />
      </TeamWrapper>
      <SuffixWrapper isWin={sampleData.isWin}>
        <ViewDetailBtnStyled>
          <img src={viewDetailImg} alt={'view_detail_button_img'} />
        </ViewDetailBtnStyled>
      </SuffixWrapper>
    </MatchBoxWrapper>
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
