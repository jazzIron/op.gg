import styled from '@emotion/styled';
import { fonts, colors } from '@src/themes';

export function GraphBar({
  leftValue,
  leftLabel,
  rightLabel,
}: {
  leftValue: number;
  leftLabel: string;
  rightLabel: string;
}) {
  const leftWidth = Math.floor(leftValue);
  const rightWidth = 100 - leftWidth;

  return (
    <GraphBarWrapper leftWidth={leftWidth} rightWidth={rightWidth}>
      <div>{leftLabel}</div>
      <div>{rightLabel}</div>
    </GraphBarWrapper>
  );
}

const GraphBarWrapper = styled.div<{ leftWidth: number; rightWidth: number }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 24px;
  min-width: 123px;
  min-height: 24px;
  border-radius: 2px;
  align-items: center;
  ${fonts.textStyle02}
  color: ${colors.white_two};
  > div:nth-of-type(1) {
    padding: 4px;
    width: ${(props) => props.leftWidth}%;
    min-width: 30%;
    border-radius: 2px 0px 0px 2px;
    background-color: ${colors.bluish};
  }
  > div:nth-of-type(2) {
    padding: 4px;
    width: ${(props) => props.rightWidth}%;
    min-width: 30%;
    border-radius: 0px 2px 2px 0px;
    background-color: ${colors.coral};
    text-align: right;
  }
`;
