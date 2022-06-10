import styled from '@emotion/styled';
import { Champion, Spell } from '@src/store/match/Match_types';
import { fonts, colors } from '@src/themes';
import { movePageChampionDetailPage } from '@src/utils/common';
import { getChampionName } from '@src/utils/match';
import { useMemo } from 'react';

interface MatchChampionPropTypes {
  champion: Champion;
  spells: Spell[];
  peak: string[];
}

export function MatchChampion({ champion, spells, peak }: MatchChampionPropTypes) {
  const ChampionName = useMemo(() => getChampionName(champion.imageUrl), [champion]);
  return (
    <MatchChampionWrapper>
      <MatchChampionStyled>
        <ChampionIconStyled onClick={() => movePageChampionDetailPage(ChampionName)}>
          <img src={champion.imageUrl} alt={'pick_Champion_Img'} />
        </ChampionIconStyled>
        <SpellsWrapper>
          {spells.map((spell, idx) => (
            <SpellItem key={idx}>
              <img src={spell.imageUrl} alt={'pick_spell'} />
            </SpellItem>
          ))}
        </SpellsWrapper>
        <PeakWrapper>
          {peak.map((peak, idx) => (
            <PeakItem key={idx}>
              <img src={peak} alt={'pick_peak'} />
            </PeakItem>
          ))}
        </PeakWrapper>
      </MatchChampionStyled>
      <ChampionNameStyled>{ChampionName}</ChampionNameStyled>
    </MatchChampionWrapper>
  );
}

const MatchChampionWrapper = styled.div`
  width: 100px;
`;

const MatchChampionStyled = styled.div`
  display: flex;
  gap: 4px;
`;

const ChampionIconStyled = styled.div`
  margin-right: 2px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  > img {
    object-fit: cover;
    max-width: 46px;
    max-height: 46px;
  }
`;
const SpellsWrapper = styled.div`
  > div:last-child {
    margin-top: 2px;
  }
`;
const PeakWrapper = styled.div`
  > div:last-child {
    margin-top: 2px;
  }
`;

const SpellItem = styled.div`
  border-radius: 2px;
  overflow: hidden;
  > img {
    max-width: 22px;
    max-height: 22px;
  }
`;
const PeakItem = styled.div`
  border-radius: 50%;
  overflow: hidden;
  > img {
    max-width: 22px;
    max-height: 22px;
  }
`;

const ChampionNameStyled = styled.div`
  ${fonts.textStyle04};
  color: ${colors.greyish_brown};
  letter-spacing: -0.42px;
  text-align: center;
  margin-top: 9px;
`;
