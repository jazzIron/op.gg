import styled from '@emotion/styled';
import { theme } from '@src/themes';

export function Header() {
  return <HeaderStyled></HeaderStyled>;
}

const HeaderStyled = styled.div`
  width: 100%;
  height: 97px;
  background-color: ${theme.colors.azure};
`;
