import { TOAST_TYPE, TOAST_OPTION_POSITION, ToastHook } from '@src/components/toast';
import {
  HistorySearchItem,
  SummonerApi,
  summonerDetailQuery,
  summonerDetailResult,
} from '@src/store/summoner';
import {
  duplicationVerifyLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '@src/utils/localStorage';
import { debounce, isEmpty, isUndefined } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilCallback, useResetRecoilState } from 'recoil';
import { SEARCH_TYPE } from './SearchSummoner_types';
import { v4 as uuidv4 } from 'uuid';
import { LOCAL_STORAGE_SEARCH_NAME } from '@src/utils/match';
import { summonerMatchResult } from '@src/store/match';
import { RouteList } from '@src/routes/RouteList';
import { useNavigate } from 'react-router-dom';

export function useSearchSummoner() {
  const [keywords, setKeywords] = useState<HistorySearchItem[]>([]);
  const [autoCompleteData, setAutoCompleteData] = useState<SummonerApi[] | null>();
  const [searchInput, setSearchInput] = useState('');
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const resetMatchResult = useResetRecoilState(summonerMatchResult);
  const resetSummonerDetail = useResetRecoilState(summonerDetailResult);
  const { toastMake } = ToastHook();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = window.localStorage.getItem(LOCAL_STORAGE_SEARCH_NAME!) || '[]';
      setKeywordItem(JSON.parse(result));
    }
  }, []);
  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_SEARCH_NAME!, JSON.stringify(keywords));
  }, [keywords]);

  const outsideCallback = () => {
    setAutoCompleteData([]);
    setIsHaveInputValue(false);
  };

  const setKeywordItem = (keywordItem: HistorySearchItem[]) => setKeywords(keywordItem);

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

  const handleChangeInput = (inputValue: string) => {
    setSearchInput(inputValue);
    debouncedCallback(inputValue);
  };

  const debouncedCallback = useCallback(
    debounce((newValue: string) => searchSummonerCallback(newValue, 'SEARCH_AUTO'), 500),
    [],
  );

  const searchHandler = (searchInput: string) => {
    if (isUndefined(searchInput)) return false;
    setIsHaveInputValue(false);
    searchSummoner(searchInput, 'SEARCH_SUBMIT');
  };

  const selectSummonerHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    summoner: SummonerApi,
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
    setKeywordItem([...searchHistory]);
  };

  const inputFocusHandler = () => {
    setAutoCompleteData([]);
    setIsHaveInputValue(true);
  };

  const inputBlurHandler = () => setIsHaveInputValue(false);

  const removeSearchHistoryHandler = (id: string) => {
    const newLocalStorageData = removeLocalStorage('searchHistory', id);
    setKeywordItem([...newLocalStorageData]);
  };

  const selectSearchHistoryHandler = (keyword: string) => searchSummoner(keyword, 'SEARCH_SUBMIT');

  const searchSummoner = async (newValue: string, searchType: SEARCH_TYPE) => {
    if (searchType === 'SEARCH_SUBMIT' && isEmpty(newValue)) return checkSearchKeyword();
    await resetSummonerDetail;
    await resetMatchResult();
    await searchSummonerCallback(newValue, searchType);
  };

  const searchSummonerCallback = useRecoilCallback(
    ({ snapshot, set }) =>
      async (newValue: string, searchType: SEARCH_TYPE) => {
        if (isEmpty(newValue)) return false;
        setAutoCompleteData([]);
        setIsHaveInputValue(false);
        const refreshId = Math.random();
        const params = {
          summonerName: newValue,
          refreshId: refreshId,
        };
        const response = await snapshot.getPromise(summonerDetailQuery(params));

        if (response.error) navigate(RouteList.ERROR);

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
            setSearchInput('');
          }
        }
      },
    [],
  );

  return {
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
  };
}
