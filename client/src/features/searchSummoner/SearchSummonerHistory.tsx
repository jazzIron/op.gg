import styled from '@emotion/styled';
import { fonts, colors } from '@src/themes';
import { useState, useEffect } from 'react';

interface SearchSummonerHistoryPropTypes {
  keywords: [{ id: number; text: string }];
  onKeyHistoryKeyword: (nextKeyword: [{ id: number; text: string }]) => void;
}

export function SearchSummonerHistory({
  keywords,
  onKeyHistoryKeyword,
}: SearchSummonerHistoryPropTypes) {
  // useEffect(() => {
  //   localStorage.setItem('searchKeywords', JSON.stringify(keywords));
  // }, [keywords]);

  const deleteHistoryHandler = (id: number) => {
    const nextKeyword = keywords.filter(
      (keyword: { id: number; text: string }) => keyword.id !== id,
    );
    //onKeyHistoryKeyword(nextKeyword);
  };

  return (
    <SearchSummonerHistoryItemWrapper>
      <SearchSummonerHistoryItemStyled>
        <SummonerName>리신신신</SummonerName>
        <RightItem>
          <FavoriteIcon>
            <img
              src="https://s-lol-web.op.gg/images/icon/icon-favorite-off.png"
              alt={'favorite_icon'}
            />
          </FavoriteIcon>
          <DeleteHistory onClick={() => deleteHistoryHandler(1)}>
            <img
              src="https://s-lol-web.op.gg/images/site/icon-history-delete.png?v=1654157118674"
              alt={'history_delete_icon'}
            />
          </DeleteHistory>
        </RightItem>
      </SearchSummonerHistoryItemStyled>
    </SearchSummonerHistoryItemWrapper>
  );
}

const SearchSummonerHistoryItemWrapper = styled.div`
  padding: 8px 0px;
`;

const SearchSummonerHistoryItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const SummonerName = styled.div`
  ${fonts.textStyle01};
  color: ${colors.black};
  cursor: pointer;
`;
const RightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const FavoriteIcon = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const DeleteHistory = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
