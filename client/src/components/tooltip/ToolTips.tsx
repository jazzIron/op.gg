import { ToolTipPropTypes } from './Tooltip_types';
import styled from '@emotion/styled';
import ToolTip from 'react-portal-tooltip';
import { useState } from 'react';

export function ToolTips({ label, children }: ToolTipPropTypes) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);

  const handleShowTooltip = () => setIsTooltipActive(true);
  const handleHideTooltip = () => setIsTooltipActive(false);

  return (
    <TooltipWrapper>
      <ToolTipLabel>{label}</ToolTipLabel>
      <ToolTipContent>{children}</ToolTipContent>

      <p id="text" onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltip}>
        This is a cool component
      </p>
      <ToolTip active={isTooltipActive} position="bottom" arrow="center" parent="#text">
        <div>
          <p>This is the content of the tooltip</p>
        </div>
      </ToolTip>
    </TooltipWrapper>
  );
}

ToolTips.defaultProps = {
  label: '',
  children: '',
};

const TooltipWrapper = styled.div`
  position: relative;
`;

const ToolTipLabel = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover {
    & + span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;
const ToolTipContent = styled.span`
  position: absolute;
  background-color: green;
  border-radius: 0.4em;
  padding: 5px;
  /* visibility: hidden;
  opacity: 0; */
  transition: all 0.5s;
  left: 0px;
  top: 0px;
  transform: translate(0%, -40px);
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top-color: green;
    border-bottom: 0;
    margin-left: -6px;
    margin-bottom: -6px;
  }
`;
