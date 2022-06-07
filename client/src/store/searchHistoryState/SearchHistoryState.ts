import { isNull } from 'lodash';
import { atom } from 'recoil';
import { StorageData } from './SearchHistory_types';

export const searchHistoryStorageState = atom({
  key: 'searchHistoryStorageState',
  default: {
    uuid: '',
    summonerName: '',
    hasFavorite: false,
    registerDate: Date.now(),
  },
  effects_UNSTABLE: [
    ({ setSelf, onSet, trigger }) => {
      const searchKeywordJson = localStorage.getItem('searchKeyword');
      const parsing: StorageData<'searchKeyword'> = searchKeywordJson
        ? JSON.parse(searchKeywordJson)
        : [];
      // const uuid = parsing ? parsing.uuid : '';
      // const summonerName = parsing ? parsing.summonerName : '';
      // const hasFavorite = parsing ? parsing.hasFavorite : false;
      // const registerDate = parsing ? parsing.registerDate : Date.now();
      // setSelf({ uuid, summonerName, hasFavorite, registerDate });
      // setSelf(parsing);
      onSet((newValue, _, isReset) => {
        if (!isReset) {
          localStorage.setItem('searchKeyword', JSON.stringify(newValue));
        }
        // else {
        //   window.localStorage.clear();
        // }
      });
    },
  ],
});
