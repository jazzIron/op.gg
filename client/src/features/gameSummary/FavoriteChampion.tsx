import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { colors, fonts } from '@src/themes';

export function FavoriteChampion() {
  return (
    <FavoriteChampionWrapper>
      <ChampionBoxWrapper>
        <ChampionAvatarWrapper>
          <img
            src="https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_30&v=1"
            alt="ChampionAvatarImg"
          />
        </ChampionAvatarWrapper>
        <ChampionDetailWrapper>
          <ChampionLabelStyled>제이스</ChampionLabelStyled>
          <ChampionRateStyled>
            <span>
              70% <span>(7승 3패)</span>
            </span>
            <span>13.01 평점</span>
          </ChampionRateStyled>
        </ChampionDetailWrapper>
      </ChampionBoxWrapper>
      <ChampionBoxWrapper>
        <ChampionAvatarWrapper>
          <img
            src="https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_30&v=1"
            alt="ChampionAvatarImg"
          />
        </ChampionAvatarWrapper>
        <ChampionDetailWrapper>
          <ChampionLabelStyled>제이스</ChampionLabelStyled>
          <ChampionRateStyled>
            <span>
              70% <span>(7승 3패)</span>
            </span>
            <span>13.01 평점</span>
          </ChampionRateStyled>
        </ChampionDetailWrapper>
      </ChampionBoxWrapper>

      <ChampionBoxWrapper>
        <ChampionAvatarWrapper>
          <img src={ICON_LIST.groupChampion} alt="ChampionAvatarImg" />
        </ChampionAvatarWrapper>
        <ChampionRateEmptyStyled>챔피언 정보가 없습니다.</ChampionRateEmptyStyled>
      </ChampionBoxWrapper>
    </FavoriteChampionWrapper>
  );
}

const FavoriteChampionWrapper = styled.div`
  padding: 16px;
  background-color: ${colors.white_four};

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
  font-family: 'Helvetica';
  font-size: 14px;
  letter-spacing: 0px;
  margin-bottom: 3px;
  color: ${colors.black};
`;
const ChampionRateStyled = styled.div`
  display: flex;
  align-items: center;
  > span:nth-of-type(1) {
    ${fonts.textStyle11};
    color: ${colors.reddish};
    font-weight: bold;
    > span {
      color: ${colors.greyish_brown};
      font-weight: normal;
    }
  }
  > span:nth-of-type(2) {
    ${fonts.textStyle05};
    color: ${colors.brownish_grey_two};
  }
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

const ChampionRateEmptyStyled = styled.div`
  ${fonts.textStyle04};
  color: ${colors.warm_grey_two};
`;