import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { MatchChampion } from './MatchChampion';
import { MatchInfo } from './MatchInfo';
import { MatchItem } from './MatchItem';
import { MatchStats } from './MatchStats';
import { MatchTeam } from './MatchTeam';
import MatchData from './match.Data.json';
import { ICON_LIST } from '@src/components/icon';

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
  padding: 8px 14px 14px 16px;
`;
const ChampionWrapper = styled.div`
  padding: 15px 24px 13px 0px;
`;
const StatusWrapper = styled.div`
  padding-top: 13px;
  margin-right: 30px;
`;
const ItemWrapper = styled.div`
  padding-top: 15px;
  margin-right: 11px;
`;
const TeamWrapper = styled.div`
  padding: 4px 0px;
  margin-right: 14px;
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
