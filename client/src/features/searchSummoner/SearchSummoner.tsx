import styled from '@emotion/styled';
import { SearchInput } from '@src/components/searchInput/SearchInput';
import { isSearchSummonerPath, titleBarLabelCustom, useOutsideClick } from '@src/utils/common';
import { SearchSummonerAutoComplete } from './SearchSummonerAutoComplete';
import { SearchHistoryContents } from './SearchHistoryContents';
import { useMainContent } from '../mainContent/useMainContent';
import { useRef, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isNull } from 'lodash';
import { RouteList } from '@src/routes/RouteList';
import { activeMatchTypeState } from '@src/store/match';
import { useRecoilValue } from 'recoil';
import { useSearchSummoner } from './useSearchSummoner';

export function SearchSummoner() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathList = useMemo(
    () => (location.pathname.slice(1) === '' ? [] : location.pathname.slice(1).split('/')),
    [location.pathname],
  );
  const outsideRef = useRef(null);
  const activeMatchType = useRecoilValue(activeMatchTypeState);
  const { summonerDetail, getMatchResult } = useMainContent();
  const {
    keywords,
    autoCompleteData,
    searchInput,
    isHaveInputValue,
    outsideCallback,
    handleChangeInput,
    searchHandler,
    selectSummonerHandler,
    inputFocusHandler,
    inputBlurHandler,
    removeSearchHistoryHandler,
    selectSearchHistoryHandler,
  } = useSearchSummoner();

  useOutsideClick(outsideRef, outsideCallback);

  useEffect(() => {
    if (isSearchSummonerPath(pathList)) searchHandler(pathList[1]);
  }, []);

  useEffect(() => {
    if (!isNull(summonerDetail.summoner)) {
      getMatchResult(activeMatchType);
      titleBarLabelCustom(summonerDetail.summoner.name);
      navigate(`${RouteList.SUMMONERS}/${summonerDetail.summoner.name}`);
    }
  }, [summonerDetail.summoner]);

  useEffect(() => {
    getMatchResult(activeMatchType);
  }, [activeMatchType]);

  return (
    <SearchSummonerWrapper ref={outsideRef}>
      <SearchInput
        inputValue={searchInput}
        onChange={handleChangeInput}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
        onSubmit={(event) => searchHandler(event)}
      />
      <SearchHistoryContents
        keywords={keywords}
        active={isHaveInputValue}
        onSelectSearchHistory={selectSearchHistoryHandler}
        onRemoveSearchHistory={removeSearchHistoryHandler}
      />
      <SearchSummonerAutoComplete
        summoners={autoCompleteData}
        onSelectSummoner={selectSummonerHandler}
      />
    </SearchSummonerWrapper>
  );
}

const SearchSummonerWrapper = styled.div`
  position: relative;
`;
