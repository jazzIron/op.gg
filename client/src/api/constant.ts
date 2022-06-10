import { ROOT_URL } from './urlConfig';

const OP_GG_API = {
  // 소환사 기본 정보 API
  GET_SUMMONER_INFO: (summonerName: string) => `${ROOT_URL}/${summonerName}`,
  // 소환사 most info API
  GET_SUMMONER_MOST_INFO: (summonerName: string) => `${ROOT_URL}/${summonerName}/mostInfo`,
  // 소환사 match list API
  GET_SUMMONER_MATCH: (summonerName: string) => `${ROOT_URL}/${summonerName}/matches`,
  // 소환사 match 상세정보 API
  GET_SUMMONER_MATCH_DETAIL: (summonerName: string, gameId: string) =>
    `${ROOT_URL}/${summonerName}/matchDetail/${gameId}`,
  GET_ITEMS: `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`,
};

export default OP_GG_API;

// const { url, results } = mock.email;
// type ITestResult = typeof results;
