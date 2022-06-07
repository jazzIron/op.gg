import { isNil, isEmpty } from 'lodash';

export const parenthesisExtraction = (value: string) => {
  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(value);
  return isNil(matches) ? '' : matches[1];
};

export const winningRate = (wins: number, totalGame: number) => {
  return isNaN(wins) || isNaN(totalGame) ? 0 : Math.ceil((wins / totalGame) * 100);
};
