import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';

export function ChampionMatchEmpty() {
  return (
    <ChampionMatchEmptyWrapper>
      <div>
        <img src={ICON_LIST.bgNoData} alt="no_data_img" />
      </div>
      <div>기록된 전적이 없습니다.</div>
    </ChampionMatchEmptyWrapper>
  );
}

const ChampionMatchEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  > div {
    font-size: 12px;
    line-height: 15px;
    color: #666666;
    > img {
      width: 62px;
      height: 62px;
    }
  }
`;
