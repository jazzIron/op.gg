export const duplicationVerifyLocalStorage = (
  localStorageName: string,
  checkKey: string,
  value: string,
) => {
  const localStorageData = getLocalStorage(localStorageName);
  const hasDuplication = localStorageData.some((data: any) => data[checkKey] === value);
  if (hasDuplication) return localStorageData.filter((data: any) => data[checkKey] !== value);
  return localStorageData;
};

export const removeLocalStorage = (localStorageName: string, id: string) => {
  const localStorageData = getLocalStorage(localStorageName);
  const index = localStorageData.findIndex((data: any) => data.id === id);
  if (index > -1) localStorageData.splice(index, 1);
  setLocalStorage(localStorageName, localStorageData);
  return localStorageData;
};

export const getLocalStorage = (localStorageName: string) => {
  return JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
};

export const setLocalStorage = (localStorageName: string, jsonString: string) => {
  window.localStorage.setItem(localStorageName, jsonString);
};

export const clearLocalStorage = (localStorageName: string) => {
  return window.localStorage.removeItem(localStorageName);
};
