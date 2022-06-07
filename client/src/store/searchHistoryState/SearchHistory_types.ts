type StorageType = 'searchKeyword' | 'favorite';

// export type StorageData<T extends StorageType> =
//   | (T extends 'searchKeyword' ? StorageSearchKeywords : [])
//   | (T extends 'favorite' ? StorageFavorite : null)
//   | [];

export type StorageData<T extends StorageType> = T extends 'searchKeyword'
  ? StorageSearchKeywords
  : [];

interface StorageSearchKeyword {
  uuid: string;
  summonerName: string;
  hasFavorite: boolean;
  registerDate: number;
}

type StorageSearchKeywords = StorageSearchKeyword[];

interface StorageFavorite {
  uuid: string;
  summonerName: string;
  registerDate: number;
}
