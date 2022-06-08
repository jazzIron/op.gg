import styled from '@emotion/styled';
import { NavBar } from '@src/components/navBar';
import { HistorySearchItem } from '@src/store/user';
import { colors } from '@src/themes';
import { HISTORY_OPTIONS } from '@src/utils/match';
import { useState } from 'react';
import { SearchSummonerFavorite } from './SearchSummonerFavorite';
import { SearchSummonerHistory } from './SearchSummonerHistory';

interface SearchHistoryContentsPropTypes {
  keywords: HistorySearchItem[];
  onSelectSearchHistory: (name: string) => void;
  onRemoveSearchHistory: (id: string) => void;
}

export function SearchHistoryContents({
  keywords,
  onSelectSearchHistory,
  onRemoveSearchHistory,
}: SearchHistoryContentsPropTypes) {
  const [activeNav, setActiveNav] = useState('SEARCH');
  const handleChangeNav = (id: string) => {
    setActiveNav(id);
  };

  return (
    <SearchHistoryContentsWrapper>
      <NavBar options={HISTORY_OPTIONS} activeId={activeNav} onChange={handleChangeNav} />
      {activeNav === 'SEARCH' ? (
        <SearchSummonerHistory
          keywords={keywords}
          onSelectSearchHistory={onSelectSearchHistory}
          onRemoveSearchHistory={onRemoveSearchHistory}
        />
      ) : (
        <SearchSummonerFavorite></SearchSummonerFavorite>
      )}
    </SearchHistoryContentsWrapper>
  );
}

const SearchHistoryContentsWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 260px;
  top: 36px;
  right: 0px;
  background-color: ${colors.white_two};
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
  overflow: hidden;
  z-index: 2;
  > div {
    z-index: 3;
  }
`;

// const SearchSummonerHistoryTabWrapper = styled.div`
//   display: flex;
//   text-align: center;
//   align-items: center;
//   height: 40px;
//   > div {
//     ${fonts.textStyle08};
//     width: 50%;
//   }
//   > div:nth-of-type(1) {
//     padding: 10px 0px;
//     color: rgb(74, 74, 74);
//     background-color: rgb(255, 255, 255);
//     cursor: pointer;
//   }
//   > div:nth-of-type(2) {
//     padding: 10px 0px;
//     color: rgb(156, 156, 156);
//     background-color: rgb(227, 227, 227);
//     cursor: pointer;
//   }
// `;
