import { Ieague, SummonerData } from '@src/store/user/Summoner_types';
import { useEffect } from 'react';
import { parenthesisExtraction, winningRate } from './formatter';

const initTierRank = {
  imageUrl: '',
  lp: 0,
  name: '',
  season: 0,
  tier: '',
  shortString: '',
  rankLp: '',
};

export const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  handlerCallback: (event?: CustomEvent<MouseEvent>) => void,
) => {
  useEffect(() => {
    const listener = (event: CustomEvent<MouseEvent>) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handlerCallback(event);
    };
    document.addEventListener('mousedown', listener as EventListener);
    document.addEventListener('touchstart', listener as EventListener);
    return () => {
      document.removeEventListener('mousedown', listener as EventListener);
      document.removeEventListener('touchstart', listener as EventListener);
    };
  }, [ref, handlerCallback]);
};

export const makeLeagueRank = (type: string, season: number, summonerData: SummonerData) => {
  const rankType = type === 'SOLO' ? '솔랭' : '자유 5:5 랭크';
  const rankSeason = summonerData.previousTiers
    .filter((info) => {
      return info.season === season && info.name === rankType;
    })
    .map((previous) => {
      return {
        imageUrl: previous.imageUrl,
        lp: previous.lp,
        name: previous.name,
        season: previous.season,
        tier: previous.tier,
        shortString: previous.shortString,
        rankLp: parenthesisExtraction(previous.string),
      };
    });
  const rankFilter = summonerData.leagues.filter((info) => {
    return info.tierRank.name === rankType;
  });

  console.log(rankFilter);

  const leagueRank = {
    ...rankFilter[0],
    tierRank: rankSeason ? rankSeason[0] : initTierRank,
    totalGame: rankFilter ? rankFilter[0].wins + rankFilter[0].losses : 0,
    winningRateInfo: rankFilter
      ? winningRate(rankFilter[0].wins, rankFilter[0].wins + rankFilter[0].losses)
      : 0,
  };

  console.log(leagueRank);

  const rankInfo = leagueRank;
  const totalGame = rankInfo.wins + rankInfo.losses;
  const winningRateInfo = winningRate(rankInfo.wins, totalGame);
  return {
    rankInfo,
    totalGame,
    winningRateInfo,
  };
};
