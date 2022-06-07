import styled from '@emotion/styled';
import { ToolTip } from '@src/components/tooltip';

export function TestPage2() {
  return (
    <RecoilTesterStyled>
      <ToolTip label="테스트영역">Hover</ToolTip>
    </RecoilTesterStyled>
  );
}

const RecoilTesterStyled = styled.div``;
