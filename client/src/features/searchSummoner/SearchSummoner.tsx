import styled from '@emotion/styled';
import { SearchInput } from '@src/components/searchInput/SearchInput';
import { summonerDetailQuery, summonerDetailResult } from '@src/store/user/SummonerState';
import { useOutsideClick } from '@src/utils/common';
import { useState, useCallback, useRef, useEffect } from 'react';
import { useRecoilCallback } from 'recoil';
import { debounce, isEmpty } from 'lodash';
import { HistorySearchItem, SummonerData } from '@src/store/user/Summoner_types';
import { duplicationVerifyLocalStorage, removeLocalStorage } from '@src/utils/localStorage';
import { v4 as uuidv4 } from 'uuid';
import { SEARCH_TYPE } from './SearchSummoner_types';
import { SearchSummonerAutoComplete } from './SearchSummonerAutoComplete';
import { SearchHistoryContents } from './SearchHistoryContents';
import { ToastHook, TOAST_OPTION_POSITION, TOAST_TYPE } from '@src/components/toast';

const LOCAL_STORAGE_SEARCH_NAME = process.env.LOCAL_STORAGE_SEARCH_KEYWORD;

export function SearchSummoner() {
  const { toastMake } = ToastHook();
  const outsideRef = useRef(null);
  const [keywords, setKeywords] = useState<HistorySearchItem[]>([]);
  const [autoCompleteData, setAutoCompleteData] = useState<SummonerData[] | []>();
  const [searchInput, setSearchInput] = useState('');
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const outsideCallback = () => {
    setAutoCompleteData([]);
    setIsHaveInputValue(false);
  };

  useOutsideClick(outsideRef, outsideCallback);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem(LOCAL_STORAGE_SEARCH_NAME!) || '[]';
      setKeywords(JSON.parse(result));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_NAME!, JSON.stringify(keywords));
  }, [keywords]);

  const checkSearchKeyword = useCallback(() => {
    toastMake({
      content: '소환사 이름을 입력 해 주세요.',
      type: TOAST_TYPE.ERROR,
      options: {
        autoClose: true,
        position: TOAST_OPTION_POSITION.TOP_LEFT,
      },
    });
    return false;
  }, []);

  const searchSummoner = useRecoilCallback(
    ({ snapshot, set }) =>
      async (newValue: string, searchType: SEARCH_TYPE) => {
        if (isEmpty(newValue)) return checkSearchKeyword();
        setAutoCompleteData([]);
        setIsHaveInputValue(false);
        const refreshId = Math.random();
        // const targetSummoner = isEmpty(newValue) ? 'hide on bush' : newValue;
        const params = {
          summonerName: newValue,
          refreshId: refreshId,
        };
        const response = await snapshot.getPromise(summonerDetailQuery(params));
        console.log('====================searchSummoner===============');
        console.log(response);
        if (searchType === 'SEARCH_AUTO') {
          setAutoCompleteData(response.summoner);
        } else {
          if (response.summoner) {
            const summonerDetailResultData = {
              summoner: response.summoner[0],
              summonerMost: response.summonerMost,
              loading: false,
              error: false,
            };
            set(summonerDetailResult, summonerDetailResultData);
            addSearchHistory(response.summoner[0].name);
          }
        }
        setSearchInput('');
      },
  );

  const handleChange = (inputValue: string) => {
    setSearchInput(inputValue);
    debouncedCallback(inputValue);
  };

  const debouncedCallback = useCallback(
    debounce((newValue: string) => searchSummoner(newValue, 'SEARCH_AUTO'), 500),
    [],
  );

  const searchHandler = (searchInput: string) => {
    setIsHaveInputValue(false);
    searchSummoner(searchInput, 'SEARCH_SUBMIT');
  };

  const selectSummonerHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    summoner: SummonerData,
  ) => {
    event.preventDefault();
    addSearchHistory(summoner.name);
    searchSummoner(summoner.name, 'SEARCH_SUBMIT');
  };

  const addSearchHistory = (searchKeyword: string) => {
    const newKeyword = {
      id: uuidv4(),
      keyword: searchKeyword,
      data: Date.now(),
      hasFavorite: false,
    };
    const searchHistory = duplicationVerifyLocalStorage(
      LOCAL_STORAGE_SEARCH_NAME!,
      'keyword',
      searchKeyword,
    );
    searchHistory.unshift(newKeyword);
    setKeywords([...searchHistory]);
  };

  const inputFocusHandler = () => {
    setAutoCompleteData([]);
    setIsHaveInputValue(true);
  };

  const inputBlurHandler = () => {
    setIsHaveInputValue(false);
  };

  const removeSearchHistoryHandler = (id: string) => {
    const newLocalStorageData = removeLocalStorage('searchHistory', id);
    setKeywords([...newLocalStorageData]);
  };

  const selectSearchHistoryHandler = (keyword: string) => {
    searchSummoner(keyword, 'SEARCH_SUBMIT');
  };

  return (
    <SearchSummonerWrapper ref={outsideRef}>
      <SearchInput
        inputValue={searchInput}
        onChange={handleChange}
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
