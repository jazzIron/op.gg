import styled from '@emotion/styled';
import { fonts, colors } from '@src/themes';

export function SearchSummonerHistory() {
  const deleteHistoryHandler = () => {
    return true;
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
          <DeleteHistory onClick={deleteHistoryHandler}>
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
