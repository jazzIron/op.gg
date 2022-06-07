import styled from '@emotion/styled';
import { summonerDetailResult } from '@src/store/user/SummonerState';
import { colors, fonts } from '@src/themes';
import { makeLeagueRank } from '@src/utils/common';
import { isEmpty, isNull } from 'lodash';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { RankTypePropTypes } from './Rank_types';
import { UnRank } from './UnRank';

const SEASON = 9;

export function Rank({ rankType }: RankTypePropTypes) {
  const rankTypeName = useMemo(() => {
    return rankType === 'SOLO' ? '솔로랭크' : '자유 5:5 랭크';
  }, []);

  const summonerDetail = useRecoilValue(summonerDetailResult);
  if (isNull(summonerDetail.summonerInfoRes)) return <div>로딩 중..</div>;
  const { summoner } = summonerDetail.summonerInfoRes;
  const { rankInfo, totalGame, winningRateInfo } = useMemo(
    () => makeLeagueRank(rankType, SEASON, summoner),
    [summonerDetail.summonerInfoRes.summoner],
  );

  if (isEmpty(rankInfo.tierRank)) return <UnRank rankType={rankType} />;

  return (
    <RankWrapper>
      <RankImageStyled>
        <img src={rankInfo.tierRank.imageUrl} alt={'rank_img'} />
      </RankImageStyled>
      <RankContent>
        <RankType>{rankTypeName}</RankType>
        <RankPosition>
          <span>탑</span> (총 <span>{totalGame}</span>게임)
        </RankPosition>
        <RankRank>{rankInfo.tierRank.tier}</RankRank>
        <RankInfo>
          <span>{rankInfo.tierRank.rankLp} </span> / {rankInfo.wins}승 {rankInfo.losses}패
        </RankInfo>
        <RankRate>승률 {winningRateInfo}%</RankRate>
      </RankContent>
    </RankWrapper>
  );
}

const RankWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 2px;
  background-color: ${colors.white_four};
  box-shadow: 0 0 0 1px ${colors.silver_three} inset;
`;

const RankImageStyled = styled.div`
  max-width: 104px;
  max-height: 104px;
  img {
    width: 104px;
    height: 104px;
  }
`;
const RankContent = styled.div``;

const RankType = styled.div`
  ${fonts.textStyle09};
  padding-bottom: 4px;
`;
const RankPosition = styled.div`
  padding-bottom: 4px;
  font-size: 12px;
  color: ${colors.dark_grey};
  > span:nth-of-type(1) {
    font-family: AppleSDGothicNeoB;
    font-weight: bold;
  }
  > span:nth-of-type(2) {
    font-family: Helvetica;
  }
`;
const RankRank = styled.div`
  padding-bottom: 6px;
  ${fonts.textStyle10};
`;
const RankInfo = styled.div`
  padding-bottom: 2px;
  > span {
    ${fonts.textStyle02};
    color: ${colors.gunmetal};
  }
  ${fonts.textStyle01};
`;
const RankRate = styled.div`
  ${fonts.textStyle01};
`;
