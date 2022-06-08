import { colors, fonts } from '@src/themes';
import { useMemo } from 'react';
import styled from '@emotion/styled';
import { Items } from '@src/store/match/Match_types';
import { getItemName, makeChampionItems } from '@src/utils/match';

interface MatchItemPropTypes {
  items: Items[];
  ward: {
    sightWardsBought: number;
    visionWardsBought: number;
  };
  isWin: boolean;
}

export function MatchItem({ items, ward, isWin }: MatchItemPropTypes) {
  const { wardImg, itemList, wardItem, buildItem, emptyItem } = useMemo(
    () => makeChampionItems(items, isWin),
    [items, isWin],
  );

  return (
    <MatchItemWrapper>
      <ItemWrapper>
        <ItemStyled>
          {itemList.map((item, idx) => {
            const itemInfo = getItemName(item.imageUrl);
            // NOTE: 마우스 오버 효과 툴팁
            //console.log(itemInfo);
            return (
              <ItemImageStyled key={idx}>
                <img src={item.imageUrl} alt={'item_img'} />
              </ItemImageStyled>
            );
          })}
          {emptyItem.map((item, idx) => {
            return <ItemEmptyStyled key={idx} isWin={isWin} />;
          })}
        </ItemStyled>
        <EtcItemStyled>
          <ItemImageStyled>
            {wardItem.length === 0 ? (
              <ItemEmptyStyled isWin={isWin} />
            ) : (
              <img src={wardItem[0].imageUrl} alt={'ward_img'} />
            )}
          </ItemImageStyled>
          <ItemImageStyled>
            <img src={buildItem} alt={'build_img'} />
          </ItemImageStyled>
        </EtcItemStyled>
      </ItemWrapper>
      <WardWrapper>
        <img src={wardImg} alt={'ward_icon'} />
        <div> 제어 와드 {ward.visionWardsBought}</div>
      </WardWrapper>
    </MatchItemWrapper>
  );
}

const MatchItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 9px;
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 72px;
  gap: 2px;
`;

const ItemImageStyled = styled.div`
  border-radius: 2px;
  width: 22px;
  height: 22px;
  overflow: hidden;
  > img {
    max-width: 22px;
    max-height: 22px;
    object-fit: cover;
  }
`;

const ItemEmptyStyled = styled.div<{ isWin: boolean }>`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 2px;
  overflow: hidden;
  background-color: ${(props) => (props.isWin ? colors.greyblue : colors.pinkish_grey_four)};
`;

const EtcItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const WardWrapper = styled.div`
  display: flex;
  align-items: center;
  ${fonts.textStyle04};
  color: ${colors.black_two};
  letter-spacing: -0.42px;
  > div {
    margin-left: 4px;
  }
`;
