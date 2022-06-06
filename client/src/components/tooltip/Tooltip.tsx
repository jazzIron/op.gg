import styled from '@emotion/styled';
// import ReactTooltip from 'react-tooltip';
import { v4 as uuidv4 } from 'uuid';

import { ToolTip } from './Tooltip_types';

/**
 * https://wwayne.github.io/react-tooltip/
 */

export function Tooltip({ title, children, type, place }: ToolTip) {
  const dataFor = uuidv4();

  return (
    <ToolTipWrapper>
      <ToolTipTitle data-tip data-for={dataFor}>
        {title}
      </ToolTipTitle>
      {/* <ReactTooltip id={dataFor} type={type} place={place}>
        {children}
      </ReactTooltip> */}
    </ToolTipWrapper>
  );
}

Tooltip.defaultProps = {
  title: '',
  toolTipItem: '',
  type: 'light',
  place: 'top',
};

const ToolTipWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;
const ToolTipTitle = styled.div`
  display: inline-block;
`;
