import styled from '@emotion/styled';
import { ToolTips } from '@src/components/tooltip';
import { isEmpty, debounce } from 'lodash';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useRecoilValue, useRecoilCallback, useResetRecoilState } from 'recoil';
import { summonerDetailResult, summonerDetailQuery, SummonerData } from './Test_types';
import { v4 as uuidv4 } from 'uuid';
import { useOutsideClick } from '@src/utils/common';
import { duplicationVerifyLocalStorage, removeLocalStorage } from '@src/utils/localStorage';

const LOCAL_STORAGE_SEARCH_NAME = process.env.LOCAL_STORAGE_SEARCH_KEYWORD;

/**
https://www.npmjs.com/package/react-portal-tooltip
 */

interface HistorySearchItem {
  id: string;
  keyword: string;
  data: number;
  hasFavorite: boolean;
}

// 검색 시 토스트 메세지 빈값인 경우 토스트 메세지

export function TestPage2() {
  const outsideRef = useRef(null);
  const [keywords, setKeywords] = useState<HistorySearchItem[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const summonerDetail = useRecoilValue(summonerDetailResult);
  const resetSummonerDetail = useResetRecoilState(summonerDetailResult);

  const outsideCallback = () => {
    resetSummonerDetail();
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
    localStorage.setItem('searchHistory', JSON.stringify(keywords));
  }, [keywords]);

  const searchSummoner = useRecoilCallback(({ snapshot, set }) => async (newValue: string) => {
    setLoading(true);
    const refreshId = Math.random();
    const targetSummoner = isEmpty(newValue) ? 'hide on bush' : newValue;
    const params = {
      summonerName: targetSummoner,
      refreshId: refreshId,
    };
    const response = await snapshot.getPromise(summonerDetailQuery(params));
    set(summonerDetailResult, response);
    setIsHaveInputValue(false);
    setLoading(false);
  });

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setSearchInput(newValue);
    debouncedCallback(newValue);
  };

  const debouncedCallback = useCallback(
    debounce((newValue: string) => searchSummoner(newValue), 500),
    [],
  );

  const searchHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addSearchHistory(searchInput);
    setIsHaveInputValue(false);
    resetSummonerDetail();
    searchSummoner(searchInput);
  };

  const selectSearchItemHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    summoner: SummonerData,
  ) => {
    event.preventDefault();
    console.log('selectSearchItem=======================');
    // NOTE: localStorage 저장하기
    addSearchHistory(summoner.name);
    // NOTE: SearchKeyword 등록 후 매치 API 호출하기
    return true;
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
    <RecoilTesterStyled ref={outsideRef}>
      <input type="text" onChange={handleChange} onClick={searchHistoryHandler} />
      <button onClick={(event) => searchHandler(event)}>검색하기</button>
      {summonerDetail &&
        summonerDetail.summoner.map((summoner) => (
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
    </RecoilTesterStyled>
  );
}

const RecoilTesterStyled = styled.div``;
