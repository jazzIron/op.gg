import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';

export function SearchSummonerFavorite() {
  return (
    <SearchSummonerFavoriteWrapper>
      <div>
        <img src={ICON_LIST.historyInfo} alt="info" />
      </div>
      <div>
        관심있는 소환사에 <img src={ICON_LIST.iconFavoriteStarGray} alt="favorite_icon" />
        즐겨찾기를 하여 편리하게 정보를 받아보세요.
      </div>
    </SearchSummonerFavoriteWrapper>
  );
}

const SearchSummonerFavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  > div {
    font-size: 12px;
    line-height: 15px;
    color: #666666;
    > img {
      width: 14px;
      height: 14px;
    }
  }
`;
