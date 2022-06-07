import { Ieague, SummonerData } from '@src/store/user/Summoner_types';
import { useEffect } from 'react';
import { parenthesisExtraction, winningRate } from './formatter';

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
  const rankSeason = summonerData.previousTiers.filter((info) => {
    return info.season === season && info.name === type;
  });

  const rankFilter = summonerData.leagues.filter((info) => {
    console.log(info.tierRank.season);
    return info.tierRank.name === type;
  });

  console.log(rankSeason);

  const rankInfo = rankFilter && rankFilter[0];
  const rankLp = parenthesisExtraction(rankInfo.tierRank.string);
  const totalGame = rankInfo.wins + rankInfo.losses;
  const winningRateInfo = winningRate(rankInfo.wins, totalGame);
  return {
    rankInfo,
    rankLp,
    totalGame,
    winningRateInfo,
  };
};
