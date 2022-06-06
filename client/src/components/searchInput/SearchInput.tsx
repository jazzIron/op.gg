import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { MouseEvent, useState, useRef, useEffect } from 'react';

export interface SearchInputPropTypes {
  inputValue: string;
  placeholder: string;
  onChange: (value: string) => void;
  onClick: () => void;
  onSubmit: () => void;
}

export function SearchInput({
  inputValue,
  placeholder,
  onChange,
  onClick,
  onSubmit,
}: SearchInputPropTypes) {
  const handleMouseDown = (e: MouseEvent<HTMLInputElement>) => e.preventDefault();
  const handleSearchSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    onChange(value);
  };

  const handleClick = () => onClick();

  return (
    <SearchInputWrapper>
      <SearchInputStyled
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleClick}
      />
      <SearchIconStyled onClick={handleSearchSubmit} onMouseDown={handleMouseDown}>
        <img
          src="https://s-lol-web.op.gg/images/icon/icon-gg.svg?v=1654157118862"
          alt={'search_input_icon'}
        />
      </SearchIconStyled>
    </SearchInputWrapper>
  );
}

SearchInput.defaultProps = {
  placeholder: '소환사명, 챔피언...',
  inputValue: '',
};

const SearchInputWrapper = styled.div`
  width: 260px;
  display: inline-flex;
  padding: 9px 12px 8px 14px;
  border-radius: 2px;
  background-color: ${colors.white_two};
  justify-content: space-between;
`;
const SearchInputStyled = styled.input`
  font-family: 'AppleSDGothicNeoB';
  font-size: 12px;
  letter-spacing: 0px;
  color: ${colors.warm_grey};
  border: none;
  :focus {
    outline: none;
  }
`;
const SearchIconStyled = styled.span`
  cursor: pointer;
  width: 31px;
  height: 14px;
  > img {
    width: 31px;
    height: 14px;
  }
`;
