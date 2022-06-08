import styled from '@emotion/styled';
import { PreviousTier } from '@src/store/user/Summoner_types';
import { colors, fonts } from '@src/themes';
import React from 'react';

interface TierTagPropTypes {
  previousTiers: PreviousTier[];
}

function TierTag({ previousTiers }: TierTagPropTypes) {
  return (
    <TierTagWrapper>
      {previousTiers.map((tier, idx) => {
        return (
          <TierTagStyled key={idx}>
            <span>{tier.shortString}</span> {tier.tier}
          </TierTagStyled>
        );
      })}
    </TierTagWrapper>
  );
}

const TierTagWrapper = styled.ul`
  display: flex;
  > li:last-of-type {
    margin-right: 0px;
  }
`;
const TierTagStyled = styled.li`
  display: inline;
  height: 20px;
  padding: 3px 5px;
  border-radius: 2px;
  border: solid 1px ${colors.silver_two};
  background-color: ${colors.silver};
  margin-right: 7px;
  ${fonts.textStyle06}
  > span {
    ${fonts.textStyle05}
    font-weight: bold;
  }
`;

export default React.memo(
  TierTag,
  (prevProps, nextProps) => prevProps.previousTiers === nextProps.previousTiers,
);
