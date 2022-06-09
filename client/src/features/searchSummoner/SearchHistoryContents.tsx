import styled from '@emotion/styled';
import { NavBar } from '@src/components/navBar';
import { HistorySearchItem } from '@src/store/summoner';
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
        <SearchSummonerFavorite />
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
