import { TooltipProps } from 'react-tooltip';

export interface ToolTip {
  title: string | JSX.Element | JSX.Element[];
  children: string | JSX.Element | JSX.Element[];
  type?: TooltipProps['type'];
  place?: TooltipProps['place'];
}
