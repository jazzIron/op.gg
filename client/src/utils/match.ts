import { SummonerMatchResultApi } from '@src/store/match/Match_types';
import axios from 'axios';

export const getMatchParser = async (
  summonerName: string,
  summonerMatchRes: SummonerMatchResultApi,
) => {
  const result = await Promise.all(
    summonerMatchRes.games.map((game: any) => {
      return axios
        .get(`https://codingtest.op.gg/api/summoner/${summonerName}/matchDetail/${game.gameId}`) // [C]
        .then((res) => {
          const summonerMatch = summonerMatchRes.games.map((game) => {
            const gameId = game.gameId;
            return {
              ...game,
              teams: res.data,
            };
          });
          const result = {
            ...summonerMatchRes,
            games: summonerMatch,
          };
          return result;
        });
    }),
  );
  return result;
};
