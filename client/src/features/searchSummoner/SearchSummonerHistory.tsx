import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { HistorySearchItem } from '@src/store/summoner';
import { fonts, colors } from '@src/themes';
import { MouseEvent } from 'react';

interface SearchSummonerHistoryPropTypes {
  keywords: HistorySearchItem[];
  onSelectSearchHistory: (name: string) => void;
  onRemoveSearchHistory: (id: string) => void;
}

export function SearchSummonerHistory({
  keywords,
  onSelectSearchHistory,
  onRemoveSearchHistory,
}: SearchSummonerHistoryPropTypes) {
  const handleMouseDown = (e: MouseEvent<HTMLInputElement>) => e.preventDefault();
  return (
    <SearchSummonerHistoryItemWrapper>
      {keywords.length > 0 ? (
        keywords.map((keyword) => {
          return (
            <SearchSummonerHistoryItemStyled key={keyword.id}>
              <SummonerName
                onClick={() => onSelectSearchHistory(keyword.keyword)}
                onMouseDown={handleMouseDown}
              >
                {keyword.keyword}
              </SummonerName>
              <RightItem>
                <FavoriteIcon>
                  <img src={ICON_LIST.iconFavoriteOff} alt={'favorite_icon_off'} />
                </FavoriteIcon>
                <DeleteHistory
                  onClick={() => onRemoveSearchHistory(keyword.id)}
                  onMouseDown={handleMouseDown}
                >
                  <img src={ICON_LIST.iconHistoryDelete} alt={'history_delete_icon'} />
                </DeleteHistory>
              </RightItem>
            </SearchSummonerHistoryItemStyled>
          );
        })
      ) : (
        <EmptySearchSummonerHistoryWrapper>
          <div>
            <img src={ICON_LIST.historyInfo} alt="Info" />
          </div>
          <div>최근에 본 소환사가 없습니다.</div>
        </EmptySearchSummonerHistoryWrapper>
      )}
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

const EmptySearchSummonerHistoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 20px;
  width: 100%;
  > div {
    font-size: 12px;
    line-height: 15px;
    color: #666666;
    > img {
      width: 16px;
      height: 16px;
    }
  }
`;
