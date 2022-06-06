export const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key);
};
export const setLocalStorageSetItem = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorageItem = (key: string) => {
  return window.localStorage.getItem(key);
};
