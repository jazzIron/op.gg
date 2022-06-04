import styled from '@emotion/styled';
import { colors } from '@src/themes';
import { useState } from 'react';
import { TabContent, TabItem } from './Tab_types';

interface propTypes {
  tabItem: TabItem[];
  tabContent: TabContent[];
}

export function Tab({ tabItem, tabContent }: propTypes) {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <TabWrapper>
      <TabContainer>
        <TabList activeIndex={activeIndex}>
          {tabItem.map((v) => (
            <TabItemStyled key={v.id} onClick={() => toggleTab(v.id)}>
              {v.label}
            </TabItemStyled>
          ))}
        </TabList>
        <TabContentContainer activeIndex={activeIndex}>
          {tabContent.map((v, idx) => (
            <TabContentStyled key={idx}>{v.content}</TabContentStyled>
          ))}
        </TabContentContainer>
      </TabContainer>
    </TabWrapper>
  );
}

const TabWrapper = styled.div``;

const TabContainer = styled.div`
  width: 300px;
  background-color: ${colors.white_four};
  border: 1px solid ${colors.silver_three};
`;

const TabList = styled.ul<{ activeIndex: number }>`
  height: 44px;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  color: ${colors.brownish_grey};
  > li:nth-of-type(${(props) => props.activeIndex}) {
    background: ${colors.white_five};
    font-weight: bold;
    border-bottom: 0px;
  }
`;

const TabItemStyled = styled.li`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white_five};
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid ${colors.silver_three};
  :not(:last-child) {
    border-right: 1px solid ${colors.silver_three};
  }
`;

const TabContentContainer = styled.div<{ activeIndex: number }>`
  > div:nth-of-type(${(props) => props.activeIndex}) {
    display: flex;
  }
`;

const TabContentStyled = styled.div`
  background-color: ${colors.white_five};
  display: none;
`;
