import styled from '@emotion/styled';
import { colors } from '@src/themes';
import mainBanner from '../../asset/images/banner/mainBanner.gif';

export function Main() {
  return (
    <InitMainWrapper>
      <img src={mainBanner} alt="OP.GG logo " title="한글날 기념" />
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
  pointer-events: none;
`;
