import styled from '@emotion/styled';
import { SearchInput } from '@src/components/searchInput/SearchInput';
import { summonerDetailQuery, summonerDetailResult } from '@src/store/user/SummonerState';
import { colors, fonts } from '@src/themes';
import { useOutsideClick } from '@src/utils/common';
import { useState, useCallback, useRef, useEffect } from 'react';
import { useRecoilCallback } from 'recoil';
import { debounce, isEmpty } from 'lodash';
import { Spinner } from '@src/components/loadingSpinner';
import { HistorySearchItem, SummonerData } from '@src/store/user/Summoner_types';
import { duplicationVerifyLocalStorage, removeLocalStorage } from '@src/utils/localStorage';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_SEARCH_NAME = process.env.LOCAL_STORAGE_SEARCH_KEYWORD;

type SEARCH_TYPE = 'SEARCH_SUBMIT' | 'SEARCH_AUTO';

export function SearchSummoner() {
  const outsideRef = useRef(null);
  const [keywords, setKeywords] = useState<HistorySearchItem[]>([]);
  const [autoCompleteData, setAutoCompleteData] = useState<SummonerData[] | []>();
  const [searchInput, setSearchInput] = useState('');
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);

  const outsideCallback = () => {
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

  const searchSummoner = useRecoilCallback(
    ({ snapshot, set }) =>
      async (newValue: string, searchType: SEARCH_TYPE) => {
        setAutoCompleteData([]);
        setIsHaveInputValue(false);
        const refreshId = Math.random();
        const targetSummoner = isEmpty(newValue) ? 'hide on bush' : newValue;
        const params = {
          summonerName: targetSummoner,
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

  const selectSearchItemHandler = (
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

  const searchHistoryHandler = () => {
    setIsHaveInputValue(true);
  };

  const removeSearchHistoryHandler = (id: string) => {
    const newLocalStorageData = removeLocalStorage('searchHistory', id);
    setKeywords([...newLocalStorageData]);
  };

  return (
    <SearchSummonerWrapper ref={outsideRef}>
      <SearchInput
        inputValue={searchInput}
        onChange={handleChange}
        onClick={searchHistoryHandler}
        onSubmit={(event) => searchHandler(event)}
      />
      {/*
      {!loading && isHaveInputValue && (
        <SearchSummonerHistoryWrapper>
          <SearchSummonerHistoryTabWrapper>
            <div>최근검색</div>
            <div>즐겨찾기</div>
          </SearchSummonerHistoryTabWrapper>
          <SearchSummonerHistory
            keywords={keywords}
            onKeyHistoryKeyword={handleKeyHistoryKeyword}
          />
        </SearchSummonerHistoryWrapper>
      )} */}
      {autoCompleteData &&
        autoCompleteData.map((summoner) => (
          <div key={summoner.name} onClick={(event) => selectSearchItemHandler(event, summoner)}>
            {summoner.name}
          </div>
        ))}
      {isHaveInputValue &&
        keywords.map((data) => {
          return (
            <div key={data.id} onClick={() => removeSearchHistoryHandler(data.id)}>
              {data.keyword}
            </div>
          );
        })}
    </SearchSummonerWrapper>
  );
}

const SearchSummonerWrapper = styled.div`
  position: relative;
`;

const SearchSummonerHistoryWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 260px;
  top: 36px;
  right: 0px;
  background-color: ${colors.white_two};
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
  overflow: hidden;
`;

const SearchSummonerHistoryTabWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 40px;
  ${fonts.textStyle08};
  > div {
    width: 50%;
  }
  > div:nth-of-type(1) {
    padding: 10px 0px;
    color: rgb(74, 74, 74);
    background-color: rgb(255, 255, 255);
  }
  > div:nth-of-type(2) {
    padding: 10px 0px;
    color: rgb(156, 156, 156);
    background-color: rgb(227, 227, 227);
  }
`;
