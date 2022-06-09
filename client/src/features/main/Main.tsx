import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { SearchSummoner } from '../searchSummoner/SearchSummoner';

export function Main() {
  return (
    <InitMainWrapper>
      <img
        src="https://opgg-static.akamaized.net/logo/20220607053053.e823d8574562487b9f640b1716c5323c.png?image=q_auto,f_webp,w_auto&amp;v=1654691863540"
        alt="OP.GG logo (녹턴, 피해망상)"
        title="녹턴, 피해망상"
      />
    </InitMainWrapper>
  );
}

const InitMainWrapper = styled.div`
  height: calc(100vh - 97px);
  background-color: ${colors.azure};
  display: flex;
  align-items: center;
  flex-direction: column;
  > img {
    width: 90% auto;
  }
`;
