import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { FavoriteChampion } from '@src/store/match/Match_types';
import { colors, fonts } from '@src/themes';
import { matchSummary, positionItem, kdaStyled } from '@src/utils/match';
import { isNull } from 'lodash';

const FAVORITE_CHAMPION_COUNT = 3;

const FavoriteChampionEmpty = ({ championsCount }: { championsCount: number }) => {
  const ChampionRateEmptyStyled = styled.div`
    ${fonts.textStyle04};
    color: ${colors.warm_grey_two};
  `;
  const emptyCount = FAVORITE_CHAMPION_COUNT - championsCount;
  const emptyItem = new Array(emptyCount).fill(1);
  return (
    <>
      {emptyItem.map((item, idx) => {
        return (
          <ChampionBoxWrapper key={idx}>
            <ChampionAvatarWrapper>
              <img src={ICON_LIST.groupChampion} alt="ChampionAvatarImg" />
            </ChampionAvatarWrapper>
            <ChampionRateEmptyStyled>챔피언 정보가 없습니다.</ChampionRateEmptyStyled>
          </ChampionBoxWrapper>
        );
      })}
    </>
  );
};
interface FavoriteChampionPropTypes {
  champions: FavoriteChampion[] | null;
}

export function FavoriteChampions({ champions }: FavoriteChampionPropTypes) {
  if (isNull(champions)) return <></>;
  return (
    <FavoriteChampionWrapper>
      {champions.map((champion) => {
        const { win, lose } = matchSummary(champion.wins, champion.losses);
        const { positionWinningRateValue, winningRateColor } = positionItem(
          champion.wins,
          champion.games,
          0,
        );
        const { kdaColor, kdaValue } = kdaStyled(champion.kills, champion.assists, champion.deaths);
        return (
          <ChampionBoxWrapper key={champion.id}>
            <ChampionAvatarWrapper>
              <img src={champion.imageUrl} alt="ChampionAvatarImg" />
            </ChampionAvatarWrapper>
            <ChampionDetailWrapper>
              <ChampionLabelStyled>{champion.name}</ChampionLabelStyled>
              <ChampionRateStyled>
                <WinLoseStyled winningRateColor={winningRateColor}>
                  <span>{positionWinningRateValue}% </span>
                  <span>
                    ({win} {lose})
                  </span>
                </WinLoseStyled>
                <KdaStyled kdaColor={kdaColor}>{kdaValue} 평점</KdaStyled>
              </ChampionRateStyled>
            </ChampionDetailWrapper>
          </ChampionBoxWrapper>
        );
      })}
      <FavoriteChampionEmpty championsCount={champions.length} />
    </FavoriteChampionWrapper>
  );
}

const FavoriteChampionWrapper = styled.div`
  padding: 16px;
  background-color: transparent;
  > div {
    margin-bottom: 12px;
  }
  > div:last-of-type {
    margin-bottom: 0px;
  }
`;

const ChampionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChampionAvatarWrapper = styled.div`
  max-width: 34px;
  max-height: 34px;
  min-width: 34px;
  min-height: 34px;
  border-radius: 70%;
  overflow: hidden;
  img {
    width: 34px;
    height: 34px;
    object-fit: cover;
  }
`;

const ChampionDetailWrapper = styled.div``;

const ChampionLabelStyled = styled.div`
  font-family: 'NanumBarunGothic';
  font-size: 14px;
  letter-spacing: 0px;
  margin-bottom: 3px;
  color: ${colors.black};
`;
const ChampionRateStyled = styled.div`
  display: flex;
  align-items: center;
  > span:nth-of-type(2)::before {
    display: inline-block;
    margin-left: 6px;
    margin-right: 6px;
    content: '';
    border-left: 1px solid ${colors.silver_three};
    height: 12px;
    vertical-align: middle;
  }
`;

const WinLoseStyled = styled.span<{ winningRateColor: string }>`
  > span:nth-of-type(1) {
    ${fonts.textStyle11};
    color: ${(props) => props.winningRateColor};
    font-weight: bold;
  }
  > span:nth-of-type(2) {
    ${fonts.textStyle11};
    color: ${colors.greyish_brown};
  }
`;

const KdaStyled = styled.span<{ kdaColor: string }>`
  ${fonts.textStyle05};
  color: ${(props) => props.kdaColor};
  font-weight: bold;
`;
