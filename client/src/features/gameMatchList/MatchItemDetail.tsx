import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getItemName } from '@src/utils/match';
import { isNull } from 'lodash';
import { useMemo } from 'react';

interface MatchItemDetailPropTypes {
  imageUrl: string;
}

interface ItemData {
  name: string;
  plaintext: string;
  colloq: string;
  gold: {
    base: number;
    purchasable: boolean;
    sell: number;
    total: number;
  };
  description: string;
}

const isAccessory = (colloq: string) => {
  return colloq.replace(/ /g, '').split(';').includes('장신구');
};

export function MatchItemDetail({ imageUrl }: MatchItemDetailPropTypes) {
  const itemData = useMemo(() => getItemName(imageUrl), [imageUrl]);
  if (isNull(itemData))
    return (
      <MatchItemDetailEmptyWrapper>아이템 정보가 존재하지 않습니다.</MatchItemDetailEmptyWrapper>
    );
  const { colloq, name, description, gold, plaintext }: ItemData = itemData;
  const checkAccessory = useMemo(() => isAccessory(colloq), [imageUrl]);
  return (
    <MatchItemDetailWrapper>
      <ItemNameStyled checkAccessory={checkAccessory} dangerouslySetInnerHTML={{ __html: name }} />
      <ItemPlainTextStyled dangerouslySetInnerHTML={{ __html: plaintext }} />
      <ItemDescriptionStyled dangerouslySetInnerHTML={{ __html: description }} />
      {!checkAccessory && (
        <ItemGoldStyled>
          가격 : {gold.total} ({gold.base})
        </ItemGoldStyled>
      )}
    </MatchItemDetailWrapper>
  );
}

const MatchItemDetailWrapper = styled.div`
  color: rgb(242, 242, 242);
  font-size: 11px;
  line-height: 16px;
  white-space: pre-wrap;
  max-width: 300px;
`;
const MatchItemDetailEmptyWrapper = styled.div``;
const ItemNameStyled = styled.div<{ checkAccessory: boolean }>`
  color: ${(props) => (props.checkAccessory ? css`#ffc659` : css`#00cfbc`)};
  font-weight: bold;
`;
const ItemPlainTextStyled = styled.div`
  margin-top: 8px;
`;
const ItemDescriptionStyled = styled.div``;
const ItemGoldStyled = styled.div`
  margin-top: 8px;
  color: #ffc659;
`;
