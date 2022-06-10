import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';

type FavoriteType = 'POSITION' | 'CHAMPION';
interface FavoritePositionEmptyPropType {
  type: FavoriteType;
}

export function FavoritePositionEmpty({ type }: FavoritePositionEmptyPropType) {
  const title = type === 'POSITION' ? '포지션 정보가 없습니다.' : '챔피언 정보가 없습니다.';

  return (
    <FavoritePositionEmptyWrapper>
      <IconItemStyled>
        <img src={ICON_LIST.iconMostpositionNone} alt="Mostposition_None" />
      </IconItemStyled>
      <ContentStyled>{title}</ContentStyled>
    </FavoritePositionEmptyWrapper>
  );
}

const FavoritePositionEmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const IconItemStyled = styled.div``;
const ContentStyled = styled.div`
  line-height: 12px;
  font-size: 11px;
  color: rgb(153, 153, 153);
`;
