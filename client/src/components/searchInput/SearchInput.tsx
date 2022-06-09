import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { MouseEvent } from 'react';
import { ICON_LIST } from '@src/components/icon';

export interface SearchInputPropTypes {
  inputValue: string;
  placeholder: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onSubmit: (value: string) => void;
}

export function SearchInput({
  inputValue,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onSubmit,
}: SearchInputPropTypes) {
  const handleMouseDown = (e: MouseEvent<HTMLInputElement>) => e.preventDefault();
  const handleSearchSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return onSubmit(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    onChange(value);
  };

  const handleCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSubmit(inputValue);
  };

  return (
    <SearchInputWrapper>
      <SearchInputFormWrapper>
        <SearchInputStyled
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={handleCheckEnter}
        />
        <SearchIconStyled onClick={handleSearchSubmit} onMouseDown={handleMouseDown}>
          <img src={ICON_LIST.iconGg} alt={'search_input_icon'} />
        </SearchIconStyled>
      </SearchInputFormWrapper>
    </SearchInputWrapper>
  );
}

SearchInput.defaultProps = {
  placeholder: '소환사명, 챔피언...',
  inputValue: '',
};

const SearchInputWrapper = styled.div`
  width: 260px;
`;

const SearchInputFormWrapper = styled.div`
  display: flex;
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
  flex-grow: 2;
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
