import styled from '@emotion/styled';
import { colors } from '@src/themes';

export function MatchEmpty() {
  return <MatchEmptyWrapper>기록된 전적이 없습니다.</MatchEmptyWrapper>;
}

const MatchEmptyWrapper = styled.div`
  border: 1px solid ${colors.silver_three};
  box-shadow: 0 1px #dcdfdf;
  background: #f2f2f2;
  border-radius: 2px;
  padding: 126px 0 60px;
  text-align: center;
  background: url('https://s-lol-web.op.gg/static/images/site/common/bg-noData.png') 50% 50px
    no-repeat;
  font-size: 16px;
  color: ${colors.gunmetal};
`;
