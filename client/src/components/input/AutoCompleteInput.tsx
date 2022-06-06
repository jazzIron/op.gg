import { ICON_LIST } from '../icon';
import { theme } from '@src/themes';
import { useAutoComplete } from './useAutoComplete';
import { isEmpty } from 'lodash';
import { AutoCompleteItems } from './AutoCompleteItems';
import { AutoComplete } from './AutoComplete_types';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  handlerCallback: (event?: CustomEvent<MouseEvent>) => void,
) => {
  useEffect(() => {
    const listener = (event: CustomEvent<MouseEvent>) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handlerCallback(event);
    };

    const handleScroll = (event: any) => {
      return true;
    };

    document.addEventListener('mousedown', listener as EventListener);
    document.addEventListener('touchstart', listener as EventListener);
    document.addEventListener('scroll', handleScroll as EventListener);
    return () => {
      document.removeEventListener('mousedown', listener as EventListener);
      document.removeEventListener('touchstart', listener as EventListener);
    };
  }, [ref, handlerCallback]);
};

export function AutoCompleteInput({
  searchData,
  defaultValue,
  allowClear,
  placeholder,
  onSelectItem,
}: AutoComplete) {
  const {
    textValue,
    selectedItem,
    isHaveInputValue,
    dropDownList,
    dropDownItemIndex,
    clickDropDownItem,
    changeInputValue,
    setIsHaveInputValue,
    setTextValue,
    handleDropDownKey,
    handleMouseOver,
    handleMouseDown,
    handleClickAllowClear,
    handleClick,
  } = useAutoComplete(searchData, defaultValue);

  const outsideRef = useRef(null);

  //컴포넌트 바깥부분 클릭 시 dropdown 닫기
  const outsideCallback = () => {
    if (isEmpty(selectedItem)) {
      setTextValue('');
    }
    setIsHaveInputValue(false);
  };
  useOutsideClick(outsideRef, outsideCallback);

  useEffect(() => {
    onSelectItem(selectedItem);
    if (selectedItem) {
      setTextValue(selectedItem.label);
    }
  }, [selectedItem]);

  return (
    <AutoCompleteInputStyled ref={outsideRef}>
      <InputWrapper>
        <Input
          type="text"
          value={textValue}
          onChange={(e) => changeInputValue(e.target.value)}
          onKeyUp={handleDropDownKey}
          placeholder={placeholder}
          onClick={handleClick}
        />
        {allowClear && textValue && (
          <IconClearWrapper onClick={handleClickAllowClear} onMouseDown={handleMouseDown}>
            <img src={ICON_LIST['icn_clean']} width={'14px'} alt="icn_clean" />
          </IconClearWrapper>
        )}
      </InputWrapper>
      {isHaveInputValue && (
        <AutoCompleteItems
          dropDownList={dropDownList}
          dropDownItemIndex={dropDownItemIndex}
          onClickDropDownItem={clickDropDownItem}
          onMouseOver={handleMouseOver}
        />
      )}
    </AutoCompleteInputStyled>
  );
}

AutoCompleteInput.defaultProps = {
  searchData: [],
  placeholder: '입력해 주세요.',
  defaultValue: '',
  allowClear: true,
};

const AutoCompleteInputStyled = styled.div``;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  align-items: center;
  height: 32px;
  padding: 5px 12px;
  border-radius: 2px;
  border: 1px solid #000;
  padding: 6px 12px;
  ${theme.fonts.body_03}
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  border-style: none;
  :focus {
    outline: none;
  }
  ${theme.fonts.body_03}
  color: #000;
  ::placeholder {
    ${theme.fonts.body_03}
    color: #000;
  }
`;

const IconClearWrapper = styled.span`
  display: inline-flex;
  cursor: pointer;
`;
