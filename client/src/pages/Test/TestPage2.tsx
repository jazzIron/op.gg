import styled from '@emotion/styled';
import { ToolTips } from '@src/components/tooltip';
import { isEmpty, debounce } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import { summonerDetailResult, summonerDetailQuery, SummonerData } from './Test_types';
import { v4 as uuidv4 } from 'uuid';

/**
https://www.npmjs.com/package/react-portal-tooltip
 */

interface HistorySearchItem {
  id: string;
  keyword: string;
  data: number;
  hasFavorite: boolean;
}

export function TestPage2() {
  const [keywords, setKeywords] = useState<HistorySearchItem[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const summonerDetail = useRecoilValue(summonerDetailResult);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('searchHistory') || '[]';
      setKeywords(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    console.log('================================= setItem useEffect====================');
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
    console.log(`[INFO] ======handleChange====`);
    const newValue = e.target.value;
    setSearchInput(newValue);
    debouncedCallback(newValue);
  };

  const debouncedCallback = useCallback(
    debounce((newValue: string) => searchSummoner(newValue), 500),
    [],
  );

  const searchHandler = () => {
    console.log(`[INFO] ======handleClick====`);
    console.log(searchInput);
    console.log(summonerDetail);
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
    const searchHistory = duplicationVerifyLocalStorage('searchHistory', searchKeyword);
    searchHistory.unshift(newKeyword);
    setKeywords([...searchHistory]);
  };

  const duplicationVerifyLocalStorage = (localStorageName: string, value: string) => {
    const localStorageData = JSON.parse(localStorage.getItem(localStorageName) || '[]');
    const hasDuplication = localStorageData.some((data: any) => data.keyword === value);
    if (hasDuplication) return localStorageData.filter((data: any) => data.keyword !== value);
    return localStorageData;
  };
  return (
    <RecoilTesterStyled>
      {/* <ToolTips label="테스트영역">Hover</ToolTips> */}

      <input type="text" onChange={handleChange} />
      <button onClick={searchHandler}>검색하기</button>
      {summonerDetail &&
        summonerDetail.summoner.map((summoner) => (
          <div key={summoner.name} onClick={(event) => selectSearchItemHandler(event, summoner)}>
            {summoner.name}
          </div>
        ))}
    </RecoilTesterStyled>
  );
}

const RecoilTesterStyled = styled.div``;
