import styled from '@emotion/styled';
import { SummonerData } from '@src/store/user';
import { fonts } from '@src/themes';

interface SearchSummonerAutoCompletePropTypes {
  summoners: SummonerData[];
  onSelectSummoner: (event: React.MouseEvent<HTMLDivElement>, summoner: SummonerData) => void;
}

const checkCurrentTier = (summoner: SummonerData) => {
  const leagues = summoner.leagues.filter((league) => league.tierRank.name === '솔랭');
  if (summoner.leagues.length === 0 || leagues.length === 0) return `Level ${summoner.level}`;
  return `${leagues[0].tierRank.tier} ${leagues[0].tierRank.shortString.slice(-1)} - ${
    leagues[0].tierRank.lp
  }LP`;
};

export function SearchSummonerAutoComplete({
  summoners,
  onSelectSummoner,
}: SearchSummonerAutoCompletePropTypes) {
  return (
    <SearchSummonerAutoCompleteWrapper>
      {summoners &&
        summoners.map((summoner) => (
          <SummonerBox key={summoner.name} onClick={(event) => onSelectSummoner(event, summoner)}>
            <SummonerProfileImageStyled>
              <img src={summoner.profileImageUrl} alt={'profile_image'} />
            </SummonerProfileImageStyled>
            <SummonerProfileInfoStyled>
              <SummonerNameStyled>{summoner.name}</SummonerNameStyled>
              <SummonerLevelStyled> {checkCurrentTier(summoner)}</SummonerLevelStyled>
            </SummonerProfileInfoStyled>
          </SummonerBox>
        ))}
    </SearchSummonerAutoCompleteWrapper>
  );
}

const SearchSummonerAutoCompleteWrapper = styled.div`
  position: absolute;
  background: rgb(255, 255, 255);
  top: 34px;
  width: 100%;
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
  overflow: hidden;
  z-index: 3;
`;

const SummonerBox = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  height: 53px;
  box-sizing: border-box;
  cursor: pointer;
`;

const SummonerProfileImageStyled = styled.div`
  border-radius: 50%;
  overflow: hidden;
  > img {
    object-fit: cover;
    width: 36px;
    height: 36px;
  }
`;
const SummonerProfileInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 14px;
`;
const SummonerNameStyled = styled.div`
  ${fonts.textStyle08};
  color: #d31a45;
`;
const SummonerLevelStyled = styled.div`
  ${fonts.textStyle01};
  color: #666666;
`;
