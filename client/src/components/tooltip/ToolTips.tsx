import { ToolTipPropTypes } from './Tooltip_types';
import styled from '@emotion/styled';
import { fonts, colors } from '@src/themes';

export function ToolTips({ label, content }: ToolTipPropTypes) {
  return (
    <ToolTipsWrapper>
      <ToolTipsStyled>
        <ToolTipsLabel>{label}</ToolTipsLabel>
        <ToolTipsContent>{content}</ToolTipsContent>
      </ToolTipsStyled>
    </ToolTipsWrapper>
  );
}

ToolTips.defaultProps = {
  label: '',
  children: '',
};

const ToolTipsWrapper = styled.div``;
const ToolTipsStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: auto;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2.5rem;
  text-decoration: none;
  transition: all 0.15s ease;
  &:hover {
    > div:last-child {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, -110%);
    }
  }
`;

const ToolTipsLabel = styled.div``;
const ToolTipsContent = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  padding: 8px;
  border-radius: 4px;
  ${fonts.textStyle01};
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -100%);
  transition: all 0.3s ease;
  z-index: 3;
  width: 200px;
  max-width: 200px;
  background-color: ${colors.black_two};
  ::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: ${colors.black_two};
    border-bottom: 0;
    margin-left: -4px;
    margin-bottom: -4px;
  }
`;
