import styled from '@emotion/styled';
import { SearchSummoner } from '@src/features/searchSummoner/SearchSummoner';
import { theme } from '@src/themes';

export function Header() {
  return (
    <HeaderStyled>
      <SearchInputWrapper>
        <SearchSummoner />
      </SearchInputWrapper>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  position: relative;
  width: 100%;
  height: 97px;
  background-color: ${theme.colors.azure};
`;

const SearchInputWrapper = styled.div`
  position: absolute;
  right: 128px;
  bottom: 12px;
`;
