import styled from '@emotion/styled';
import { ToolTips } from '@src/components/tooltip';
import { MatchItemDetail } from '@src/features/gameMatchList/MatchItemDetail';
import { colors, fonts } from '@src/themes';
import { getItemName } from '@src/utils/match';

export function TestPage() {
  const isWin = false;
  const wardImg =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJwcmVmaXhfX2EiIGQ9Ik0wIDAuMDMyTDAgNC4xODQgNC4xNTcgNC4xODQgNC4xNTcgMC4wMzIgMCAwLjAzMnoiLz4NCiAgICAgICAgPHBhdGggaWQ9InByZWZpeF9fYyIgZD0iTTAuMTQ1IDUuMjE3TDMuMDcxIDUuMjE3IDMuMDcxIDAuMDQ1IDAuMTQ1IDAuMDQ1eiIvPg0KICAgIDwvZGVmcz4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiNDODMxMUUiIHJ4PSI4Ii8+DQogICAgICAgIDxnPg0KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTUuNDQ0IDBMNC45NDEuMDAxIDQuNDM4IDAgMy4yNTQgMS40MTMgNC4wMzQgMi4xMzMgNC45MzMgMi4xMzMgNC45NDkgMi4xMzMgNS44NDggMi4xMzMgNi42MjggMS40MTN6TTUuODQ1IDIuMzA2TDQuOTUgMi4zMDYgNC45MzMgMi4zMDYgNC4wMzcgMi4zMDYgMy44ODUgMi41OTkgNC4yNzQgMi43ODYgNC45MzMgMi43ODYgNC45NSAyLjc4NiA1LjYwOCAyLjc4NiA1Ljk5NyAyLjU5OXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgNC41KSIvPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyA0LjUpIHRyYW5zbGF0ZSgwIDEuMTYyKSI+DQogICAgICAgICAgICAgICAgPG1hc2sgaWQ9InByZWZpeF9fYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3ByZWZpeF9fYSIvPg0KICAgICAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNNCAzLjQxNmwuMTE3LS4wMTZjLjA0My0uMzcuMDQ2LS43Ny4wMzMtMS4xMzgtLjMyLS4xNC0uNzIyLS40My0xLjA5NS0xLjAyNyAwIDAtLjk5Mi41MzktMy0xLjIwM0wwIDEuMDUzcy4wODUgMS41NTQgMS40MDQgMi4zNDJjMS4xOTcuNzE2IDEuNTI0Ljc4OSAxLjUyNC43ODlzMC0uNiAxLjA3My0uNzY4IiBtYXNrPSJ1cmwoI3ByZWZpeF9fYikiLz4NCiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNOS44MjguMDMyQzcuODIgMS43NzQgNi44MjYgMS4yMzQgNi44MjYgMS4yMzRjLS4zNzIuNTk5LS43NzMuODg5LTEuMDk0IDEuMDI4LS4wMTMuMzY4LS4wMS43NjcuMDMzIDEuMTM4bC4xMTcuMDE2YzEuMDcyLjE2OCAxLjA3Mi43NjggMS4wNzIuNzY4cy4zMjYtLjA3MyAxLjUyNC0uNzg5YzEuMzE5LS43ODggMS40MDQtMi4zNDIgMS40MDQtMi4zNDJMOS44MjguMDMyeiIvPg0KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMzMzIDEuMzkxKSI+DQogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJwcmVmaXhfX2QiIGZpbGw9IiNmZmYiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcHJlZml4X19jIi8+DQogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIuMjg3IDIuMjU0QzIuMTQzIDEuMzQ4IDIuMzQuMTIgMi4zNC4xMkwxLjYxNi4wNDZWLjA0NUgxLjZ2LjAwMUwuODc1LjEycy4xOTggMS4yMjguMDUzIDIuMTM0Qy43ODQgMy4xNTkuMTMgNC40MDguMTQ1IDQuNzVjLjAxNi4zNDMuMTc2LjQ2Ny4xNzYuNDY3aDIuNTc0cy4xNi0uMTI0LjE3NS0uNDY3Yy4wMTYtLjM0My0uNjM5LTEuNTkyLS43ODMtMi40OTciIG1hc2s9InVybCgjcHJlZml4X19kKSIvPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg0K';
  const buildItem =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABNBJREFUWAnFV2tsVEUUPjNz9+6rla0tVGwrbI1QaG3QBokGSkGxDTGaSsIvY0xqIDGRYH8LMV1FCdoSY4KPxGh8/DAaoyHVRARiJGCQCE0QbZCaPlILYrds93Gf45y73Mu2e+/dVavOnzv3nJnvO/M68w2BMssbbW2B1O9TD1DCH+ZA1gDhdZzDYuxOCFwBTiYI8LMmJ59X1tQe2XnmjFYONCnV6GA8XmtytY8DPEYp1WRJqmSUUAAKlOa7m6bwggmGyU1V11OmaQaE531K5L27R0am/Dg8A/iouVkezyT3iFE+EwwEJEEcJGKo5RQuOolAFEXTdNFloD4SS2w/f1516+uKmB+1PsgYaQrJcoSWSTyfwBSB5FQ1Yxj8J0qkrW6zURTAwXh9qwH8KzHqqqAUCMwH/Tv/iq5pYjamGZAtu0fGhwox5gSAIzdAHQoHgksCEits94/rmm5AVlMuM5BbC2dCbKZ8wTU3uT6II19ocmRATMRGDuS6TguSXcENxxhrKnfaa1ruhNq77hZHkMCi5XGoaW6BL558AtRUyoYs+iK2YZhNY5nkXuF8FhtYS2BNPVd/qQiHo34bjgWDcMcj3VDdtAomvz8NlwYPWyQN7R3Q8dIB+GDjfWBq/scfN+ZsNptmRL4dl8KaAcNUEkFZlvzIkWlF9zYIRKOgzCShoX0jLNu0GWLxRqhetRq+O7C/JDliIAcea1VT+8TvToIZbvbqb8nKcDhS6pzfuu5e2Pr2u4gzp+C0f7hpPejZ7By71w/miVQ2m6moviXGOmTWyRjtFlGFvDrY9tTEOEiRsLX2tm364kX4uncXzApfuQUHqhlGJpee/YH0L687JKZ/h8h0zokoBSSFw0AlCUxdt0YdqqqCDX0viL2xGk4knoOxb46XgsBMaSqq+qaEF0s+t/v3YaEQtCf2wW0dm2H0+FG4euFHK4CbVzZB/MEuCEQiFsCW1w7BkV1PiTbHfAGRE7nJK/G60Wgw3CAMvh3u738V4p1dvm1sZy6ZhI8f6oTc9LRtKvqKiwvSSnaMiv2w2L7VilpdNyy9Z13Z5NglFItBa88OLzjLjpwWN/4RvE19yspt23287q4V3Y9aQsHde4MTj+UVQ4TiV5auXevndvWFYlVWznB1CiNyIjdFJYNiwq+Eq2v83J4+ypxM79JGcApuXImzqGRcWjim3PQfTr3cCh5RLZP2bK4b3ERuihoOZZRnS+GYOHXSz+3qG/70E9/UrBlCugluigISNRymR69y7q3XQc/lvNxF9vET38LJF58vstsG5EJO5GaHJyfNrthNy8SOaJGY+6Lheb48dA7q129wEo4NVvjFVH164GU4tX8fcLEEXgX1ogjgvacv/PzZX7qOqVBoS1rXQKyxUezwCgtfS89CemoKZn69BNdGR704Hfv869hJf/3xugSjrDcSDOZzqtNlYSsZRckYptHfOzKxB5GdCwilM6pXFJALS3kDDbGRA7lsqxMA6naUzqheUUAudEFMxEaOwjeCEwASokRC6YzqdSFnArHyihhl+dyXkrMHCkf8Xz5MXMX/l8lkuqeu4Z0ZNSurmt4mguOMUqmUZLMHYT/NsoqicOAD9dFFj/cMD1+z/YVf1xkobJCfjf/hcVoYBNb/ref5n/l1VrBuk2+rAAAAAElFTkSuQmCC';
  const wardItem = [
    {
      imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png',
      index: 4,
      type: 'WARD',
    },
  ];
  const emptyItem = [1, 1, 1];

  const itemList = [
    {
      imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3198.png',
    },
    {
      imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png',
    },
    {
      imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1026.png',
    },
  ];

  const ward = {
    sightWardsBought: 3,
    visionWardsBought: 3,
  };

  return (
    <TestPageWrapper>
      <MatchItemWrapper>
        <ItemWrapper>
          <ItemStyled>
            {itemList.map((item, idx) => {
              const itemInfo = getItemName(item.imageUrl);
              return (
                <ToolTips
                  key={idx}
                  content={<MatchItemDetail imageUrl={item.imageUrl} />}
                  label={
                    <ItemImageStyled key={idx}>
                      <img src={item.imageUrl} alt={'item_img'} />
                    </ItemImageStyled>
                  }
                />
              );
            })}
            {emptyItem.map((item, idx) => {
              return <ItemEmptyStyled key={idx} isWin={isWin} />;
            })}
          </ItemStyled>
          <EtcItemStyled>
            {wardItem.length === 0 ? (
              <ItemImageStyled>
                <ItemEmptyStyled isWin={isWin} />
              </ItemImageStyled>
            ) : (
              <ToolTips
                content={<MatchItemDetail imageUrl={wardItem[0].imageUrl} />}
                label={
                  <ItemImageStyled>
                    <img src={wardItem[0].imageUrl} alt={'ward_img'} />
                  </ItemImageStyled>
                }
              />
            )}
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
    </TestPageWrapper>
  );
}

const TestPageWrapper = styled.div`
  margin-top: 300px;
`;

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

interface ToolTipPropTypes {
  label: string | JSX.Element | JSX.Element[];
  content: string | JSX.Element | JSX.Element[];
}
