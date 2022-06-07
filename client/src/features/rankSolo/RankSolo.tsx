import styled from '@emotion/styled';
import { summonerDetailResult } from '@src/store/user/SummonerState';
import { Ieague } from '@src/store/user/Summoner_types';
import { colors, fonts } from '@src/themes/';
import { makeLeagueRank } from '@src/utils/common';
import { parenthesisExtraction, winningRate } from '@src/utils/formatter';
import { isNull } from 'lodash';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

const LEAGUE_TYPE = '솔랭';
const SEASON = 9;
export function RankSolo() {
  const summonerDetail = useRecoilValue(summonerDetailResult);
  if (isNull(summonerDetail.summonerInfoRes)) return <div>로딩 중..</div>;
  const { summoner } = summonerDetail.summonerInfoRes;
  const { rankInfo, rankLp, totalGame, winningRateInfo } = useMemo(
    () => makeLeagueRank(LEAGUE_TYPE, SEASON, summoner),
    [summonerDetail.summonerInfoRes.summoner],
  );

  return (
    <RankSoloWrapper>
      <RankSoloImageStyled>
        <img src={rankInfo.tierRank.imageUrl} alt={'rank_img'} />
      </RankSoloImageStyled>
      <RankSoloContent>
        <RankSoloType>솔로 랭크</RankSoloType>
        <RankSoloPosition>
          <span>탑</span> (총 <span>{totalGame}</span>게임)
        </RankSoloPosition>
        <RankSoloRank>{rankInfo.tierRank.tier}</RankSoloRank>
        <RankSoloInfo>
          <span>{rankLp} </span> / {rankInfo.wins}승 {rankInfo.losses}패
        </RankSoloInfo>
        <RankSoloRate>승률 {winningRateInfo}%</RankSoloRate>
      </RankSoloContent>
    </RankSoloWrapper>
  );
}

const RankSoloWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 2px;
  background-color: ${colors.white_four};
  box-shadow: 0 0 0 1px ${colors.silver_three} inset;
`;

const RankSoloImageStyled = styled.div`
  max-width: 104px;
  max-height: 104px;
  img {
    width: 104px;
    height: 104px;
  }
`;
const RankSoloContent = styled.div``;

const RankSoloType = styled.div`
  ${fonts.textStyle09};
  padding-bottom: 4px;
`;
const RankSoloPosition = styled.div`
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
const RankSoloRank = styled.div`
  padding-bottom: 6px;
  ${fonts.textStyle10};
`;
const RankSoloInfo = styled.div`
  padding-bottom: 2px;
  > span {
    ${fonts.textStyle02};
    color: ${colors.gunmetal};
  }
  ${fonts.textStyle01};
`;
const RankSoloRate = styled.div`
  ${fonts.textStyle01};
`;
