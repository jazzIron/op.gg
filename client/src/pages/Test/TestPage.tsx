import styled from '@emotion/styled';
import { summonerInfoQuery, summonerInfoResult } from '@src/store/user/SummonerState';
import { debounce, isEmpty } from 'lodash';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { useCallback, useEffect, useState, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function TestPage() {
  const [searchInput, setSearchInput] = useState('');
  const [summonerInfo, setSummonerInfo] = useRecoilState(summonerInfoResult);
  const [searchType, setSearchType] = useState('KEY_UP');
  const [loading, setLoading] = useState(false);

  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('searchKeyword') || '[]'),
  );

  const searchSummoner = useRecoilCallback(({ snapshot, set }) => async (newValue: string) => {
    console.log(searchInput);
    if (isEmpty(newValue)) return false;
    setLoading(true);
    const refreshId = Math.random();
    const params = {
      summonerName: newValue,
      refreshId: refreshId,
    };
    const response = await snapshot.getPromise(summonerInfoQuery(params));
    set(summonerInfoResult, response);
    setLoading(false);
  });

  const debouncedCallback = useCallback(
    debounce((newValue: string) => searchSummoner(newValue), 500),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.target.value;
    setSearchInput(newValue);
    debouncedCallback(newValue);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchSummoner(searchInput);
    setSearchType('SEARCH');
  };

  useEffect(() => {
    if (!loading && searchType === 'SEARCH') {
      if (summonerInfo) {
        console.log('[INFO] updateSearchStorage');
        console.log(summonerInfo.summoner);
        updateSearchStorage();
      }
    }
  }, [loading, searchType]);

  const updateSearchStorage = () => {
    if (summonerInfo?.summoner) {
      const newKeyword = {
        id: uuidv4(),
        summonerName: summonerInfo.summoner.name,
        hasFavorite: false,
        date: Date.now(),
      };

      const localStorageItem = localStorage.getItem('searchKeyword');
      console.log(newKeyword);

      console.log(localStorageItem);

      //const keywords = [localStorageItem, JSON.stringify(newKeyword)];
      localStorage.setItem('searchKeyword', JSON.stringify(keywords));
    }
  };

  console.log(localStorage.getItem('searchKeyword'));

  return (
    <TestPageWrapper>
      <input type="text" value={searchInput} onChange={handleChange} />
      <button onClick={handleClick}>검색하기</button>
    </TestPageWrapper>
  );
}

const TestPageWrapper = styled.div``;
