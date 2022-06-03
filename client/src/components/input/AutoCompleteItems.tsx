import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@src/themes';
import { AutoCompleteItems } from './AutoComplete_types';

export function AutoCompleteItems({
  dropDownList,
  dropDownItemIndex,
  onClickDropDownItem,
  onMouseOver,
}: AutoCompleteItems) {
  return (
    <AutoCompleteItemsStyled>
      <DropDownBox>
        {dropDownList.length === 0 && (
          <DropDownItem selectItem={false}>해당하는 단어가 없습니다</DropDownItem>
        )}
        {dropDownList.map((dropDownItem: any, idx: number) => {
          const selectItem = dropDownItemIndex === idx ? true : false;
          return (
            <DropDownItem
              key={idx}
              selectItem={selectItem}
              onClick={() => onClickDropDownItem(dropDownItem)}
              onMouseOver={() => onMouseOver(idx)}
            >
              {dropDownItem.label}
            </DropDownItem>
          );
        })}
      </DropDownBox>
    </AutoCompleteItemsStyled>
  );
}

const AutoCompleteItemsStyled = styled.div``;

const DropDownBox = styled.ul`
  position: fixed;
  display: block;
  margin: 0 auto;
  background-color: #fff;
  ${theme.fonts.body_03}
  color: #000;
  border-top: none;
  list-style-type: none;
  z-index: 3;
  min-width: 140px;
  margin-top: 2px;
  overflow-y: auto;
  max-height: 300px;
  box-shadow: 0 8px 28px 0 rgba(0, 0, 0, 0.12);
`;

const DropDownItem = styled.li<{ selectItem: boolean }>`
  cursor: pointer;
  padding: 5px 12px;
  ${(props) =>
    props.selectItem
      ? css`
          background-color: red;
        `
      : css``};
`;
