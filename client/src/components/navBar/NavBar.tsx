import { NavBarOptions } from './navBar_types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@src/themes';

export function NavBar({ options, activeId, onChange }: NavBarOptions) {
  return (
    <NavBarWrapper>
      <NavBarStyled flex={options.length}>
        {options.map((obj) => (
          <NavBarOption
            id={obj.id}
            key={obj.id}
            active={obj.id === activeId}
            onClick={() => onChange(obj.id)}
          >
            {obj.text}
          </NavBarOption>
        ))}
      </NavBarStyled>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.div`
  padding: 16px 16px 0px 16px;
  background-color: ${colors.white_four};
  border: 1px solid ${colors.silver_three};
  margin-bottom: -1px;
  border-radius: 2px 2px 0px 0px;
`;

const NavBarStyled = styled.div<{ flex: number }>`
  display: flex;
  align-items: center;
  > div {
    margin-right: 14px;
    text-align: center;
    padding-bottom: 8px;
  }
  > div:last-child {
    margin-right: 0px;
  }
`;

const NavBarOption = styled.div<{ active: boolean }>`
  max-width: 43px;
  font-family: 'AppleSDGothicNeoR';
  font-size: 12px;
  letter-spacing: 0px;
  cursor: pointer;
  ${({ active }) =>
    active
      ? css`
          font-weight: bold;
          color: ${colors.bluish};
          border-bottom: 2px solid ${colors.bluish};
        `
      : css`
          color: ${colors.greyish_brown};
          border-bottom: 2px solid transparent;
        `}
`;
