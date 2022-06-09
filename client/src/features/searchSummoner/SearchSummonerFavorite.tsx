import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { FavoriteSummonerItem, HistorySearchItem } from '@src/store/summoner';
import { colors, fonts } from '@src/themes';
import { getLocalStorage, removeLocalStorage } from '@src/utils/localStorage';
import { MouseEvent, useEffect, useState } from 'react';

export function SearchSummonerFavorite() {
  const favoriteHistoryList: HistorySearchItem[] = getLocalStorage('favoriteHistory');
  const handleMouseDown = (e: MouseEvent<HTMLInputElement>) => e.preventDefault();

  return (
    <SearchSummonerFavoriteWrapper>
      {favoriteHistoryList.length > 0 ? (
        favoriteHistoryList.map((keyword) => {
          return (
            <SearchSummonerFavoriteItemStyled key={keyword.id}>
              <SummonerName
                // onClick={() => onSelectSearchHistory(keyword.keyword)}
                onMouseDown={handleMouseDown}
              >
                {keyword.keyword}
              </SummonerName>
              <RightItem>
                <DeleteHistory
                  // onClick={() => removeSearchHistoryHandler(keyword.id)}
                  onMouseDown={handleMouseDown}
                >
                  <img src={ICON_LIST.iconHistoryDelete} alt={'history_delete_icon'} />
                </DeleteHistory>
              </RightItem>
            </SearchSummonerFavoriteItemStyled>
          );
        })
      ) : (
        <EmptySearchSummonerFavoriteWrapper>
          <div>
            <img src={ICON_LIST.historyInfo} alt="info" />
          </div>
          <div>
            관심있는 소환사에 <img src={ICON_LIST.iconFavoriteStarGray} alt="favorite_icon" />
            즐겨찾기를 하여 편리하게 정보를 받아보세요.
          </div>
        </EmptySearchSummonerFavoriteWrapper>
      )}
    </SearchSummonerFavoriteWrapper>
  );
}

const SearchSummonerFavoriteWrapper = styled.div`
  padding: 8px 0px;
`;

const SearchSummonerFavoriteItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: pointer;
  :hover {
    background-color: ${colors.light_blue_grey};
  }
`;

const SummonerName = styled.div`
  ${fonts.textStyle01};
  color: ${colors.black};
  cursor: pointer;
  flex-grow: 2;
`;
const RightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const DeleteHistory = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const EmptySearchSummonerFavoriteWrapper = styled.div`
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
