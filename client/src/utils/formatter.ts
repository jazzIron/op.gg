import { isNil, isEmpty } from 'lodash';

export const parenthesisExtraction = (value: string) => {
  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(value);
  return isNil(matches) ? '' : matches[1];
};

export const numberMark = (value: string, mark?: string): string => {
  const markStr = mark ? mark : ',';
  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  return value.toString().replace(regExp, markStr);
};
