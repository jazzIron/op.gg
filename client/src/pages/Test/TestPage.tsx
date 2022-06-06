import styled from '@emotion/styled';
import { summonerInfoQuery } from '@src/store/user/SummonerState';
import { debounce, isEmpty } from 'lodash';
import { useRecoilCallback } from 'recoil';
import { useCallback, useState } from 'react';
import { SummonerApi } from '@src/store/user/Summoner_types';

export function TestPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState<SummonerApi>();

  const searchSummoner = useRecoilCallback(({ snapshot, set }) => async (newValue: string) => {
    console.log(searchInput);
    if (isEmpty(newValue)) return false;
    const refreshId = Math.random();
    const params = {
      summonerName: newValue,
      refreshId: refreshId,
    };
    const response = await snapshot.getPromise(summonerInfoQuery(params));
    console.log(response);
    setSearchResult(response);
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

  console.log(searchResult);

  return (
    <TestPageWrapper>
      <input type="text" value={searchInput} onChange={handleChange} />
    </TestPageWrapper>
  );
}

const TestPageWrapper = styled.div``;
