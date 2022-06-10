import { css } from '@emotion/react';
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
  active: boolean;
  onSelectSearchHistory: (name: string) => void;
  onRemoveSearchHistory: (id: string) => void;
}

export function SearchHistoryContents({
  keywords,
  active,
  onSelectSearchHistory,
  onRemoveSearchHistory,
}: SearchHistoryContentsPropTypes) {
  const [activeNav, setActiveNav] = useState('SEARCH');
  const handleChangeNav = (id: string) => {
    setActiveNav(id);
  };

  return (
    <SearchHistoryContentsWrapper active={active}>
      {active && (
        <>
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
        </>
      )}
    </SearchHistoryContentsWrapper>
  );
}

const SearchHistoryContentsWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  max-width: 260px;
  top: 36px;
  right: 0px;
  background-color: ${colors.white_two};
  overflow: hidden;
  opacity: ${(props) => (props.active ? `1` : `0`)};
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  z-index: 2;
  > div {
    z-index: 3;
  }
`;
