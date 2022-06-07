import styled from '@emotion/styled';
import { ToolTips } from '@src/components/tooltip';

/**
https://www.npmjs.com/package/react-portal-tooltip
 */
export function TestPage2() {
  return (
    <RecoilTesterStyled>
      <ToolTips label="테스트영역">Hover</ToolTips>
    </RecoilTesterStyled>
  );
}

const RecoilTesterStyled = styled.div``;
