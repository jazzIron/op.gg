import styled from '@emotion/styled';
import { SearchInput } from '@src/components/searchInput/SearchInput';
import { summonerDetailQuery, summonerDetailResult } from '@src/store/user/SummonerState';
import { colors, fonts } from '@src/themes';
import { useOutsideClick } from '@src/utils/common';
import { useState, useCallback, useRef, useEffect } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { SearchSummonerHistory } from './SearchSummonerHistory';
import { debounce, isEmpty } from 'lodash';
import { Spinner } from '@src/components/loadingSpinner';

export function SearchSummoner() {
  const outsideRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [summonerDetail, setSummonerDetail] = useRecoilState(summonerDetailResult);
  const [loading, setLoading] = useState(false);
  const [isHaveInputValue, setIsHaveInputValue] = useState(false); //dropdown 표시 유무
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('searchKeywords') || '[]'),
  );

  const handleClick = () => {
    setIsHaveInputValue(true);
  };

  const outsideCallback = () => {
    setIsHaveInputValue(false);
  };
  useOutsideClick(outsideRef, outsideCallback);

  const searchSummoner = useRecoilCallback(({ snapshot, set }) => async (newValue: string) => {
    setLoading(true);
    const refreshId = Math.random();
    const targetSummoner = isEmpty(newValue) ? 'hide on bush' : newValue;
    const params = {
      summonerName: targetSummoner,
      refreshId: refreshId,
    };
    const response = await snapshot.getPromise(summonerDetailQuery(params));
    setIsHaveInputValue(false);
    set(summonerDetailResult, response);
    setLoading(false);
  });

  const debouncedCallback = useCallback(
    debounce((newValue: string) => searchSummoner(newValue), 500),
    [],
  );

  const handleChange = (newValue: string) => {
    setSearchInput(newValue);
    debouncedCallback(newValue);
  };

  const handleAddKeyword = (text: string) => {
    console.log('text', text);
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleKeyHistoryKeyword = (nextKeyword: any) => {
    setKeywords(nextKeyword);
  };

  return (
    <SearchSummonerWrapper ref={outsideRef}>
      <SearchInput
        inputValue={searchInput}
        onChange={handleChange}
        onClick={handleClick}
        onSubmit={searchSummoner}
      />
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
      )}
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
