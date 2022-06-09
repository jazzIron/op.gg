import styled from '@emotion/styled';
import { SearchInput } from '@src/components/searchInput/SearchInput';
import { titleBarLabelCustom, useOutsideClick } from '@src/utils/common';
import { SearchSummonerAutoComplete } from './SearchSummonerAutoComplete';
import { SearchHistoryContents } from './SearchHistoryContents';
import { useMainContent } from '../mainContent/useMainContent';
import { useSearchSummoner } from './useSearchSummoner';
import { useRef, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty, isNull } from 'lodash';
import { RouteList } from '@src/routes/RouteList';
import { activeMatchTypeState } from '@src/store/match';
import { useRecoilValue } from 'recoil';

// TODO: 스켈레톤 로딩
// TODO: REACT.MEMO, CALLBACK 최적화
// TODO: 스크롤  IntersectionObserver, 해더 따라오기?

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

  useEffect(() => {
    if (!isEmpty(pathList)) searchHandler(pathList[1]);
  }, []);

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
    console.log(summonerDetail);
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
      {isHaveInputValue && (
        <SearchHistoryContents
          keywords={keywords}
          onSelectSearchHistory={selectSearchHistoryHandler}
          onRemoveSearchHistory={removeSearchHistoryHandler}
        />
      )}

      {autoCompleteData && (
        <SearchSummonerAutoComplete
          summoners={autoCompleteData}
          onSelectSummoner={selectSummonerHandler}
        />
      )}
    </SearchSummonerWrapper>
  );
}

const SearchSummonerWrapper = styled.div`
  position: relative;
`;
