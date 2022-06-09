import OP_GG_API from '@src/api/constant';
import { ICON_LIST } from '@src/components/icon';
import { Items, SummonerMatchResultApi, Teams } from '@src/store/match/Match_types';
import { colors } from '@src/themes';
import axios from 'axios';
import itemData from '../json/items.json';
import { isEmpty, isNull } from 'lodash';
import { MostInfoApi, SummonerApi } from '@src/store/user/Summoner_types';

const ITEM_AREA_LENGTH = 6;
export const SEASON = 9;

export const OPTIONS = [
  {
    id: 'ALL',
    text: '전체',
  },
  {
    id: 'SOLO',
    text: '솔로게임',
  },
  {
    id: 'FREE',
    text: '자유랭크',
  },
];

export const HISTORY_OPTIONS = [
  {
    id: 'SEARCH',
    text: '최근검색',
  },
  {
    id: 'FAVORITE',
    text: '즐겨찾기',
  },
];

export const getMatchParser = async (
  summonerName: string,
  rankType: string,
  summonerMatchRes: SummonerMatchResultApi,
) => {
  const checkRankType = rankType === 'ALL' ? '' : rankType === 'SOLO' ? '솔랭' : '자유 5:5 랭크';
  const targetMatch = isEmpty(checkRankType)
    ? summonerMatchRes.games
    : summonerMatchRes.games.filter((game) => game.gameType === checkRankType);
  const result = await Promise.all(
    targetMatch.map((game: any) => {
      const gameId = game.gameId;
      return axios
        .get(OP_GG_API.GET_SUMMONER_MATCH_DETAIL(summonerName, gameId)) // [C]
        .then((res) => {
          return res.data;
        });
    }),
  );

  const summonerMatch = targetMatch.map((game, idx) => {
    return {
      ...game,
      teams: result[idx],
    };
  });
  return summonerMatch;
};

export const matchSummary = (wins: number, losses: number) => {
  const totalMatch = wins + losses;
  return {
    total: `${totalMatch}`,
    win: `${wins}승`,
    lose: `${losses}패`,
  };
};

export const kdaStyled = (kills: number, assists: number, deaths: number) => {
  const kdaValue = Number(((kills + assists) / deaths).toFixed(2));
  switch (true) {
    case kdaValue >= 5:
      return { kdaColor: colors.yellow_ochre, kdaValue };
    case kdaValue <= 4:
      return { kdaColor: colors.bluey_green, kdaValue };
    case kdaValue <= 3:
      return { kdaColor: colors.bluish, kdaValue };
    default:
      return { kdaColor: colors.brownish_grey_two, kdaValue };
  }
};

export const winningRate = (wins: number, losses: number) => {
  const totalGame = wins + losses;
  const winningRateValue =
    isNaN(wins) || isNaN(totalGame) ? 0 : Math.round((wins / totalGame) * 100);
  const winningRateColor = winningRateValue >= 60 ? colors.reddish : colors.black;
  return { winningRateColor, winningRateValue };
};

export const positionItem = (wins: number, games: number, positionTotalGame: number) => {
  const positionWinningRateValue =
    isNaN(wins) || isNaN(games) ? 0 : Math.round((wins / games) * 100);
  const positionWinningTotalRateValue =
    isNaN(games) || isNaN(positionTotalGame) ? 0 : Math.round((games / positionTotalGame) * 100);
  const winningRateColor = positionWinningRateValue >= 60 ? colors.reddish : colors.black;
  return {
    positionWinningRateValue,
    positionWinningTotalRateValue,
    winningRateColor,
  };
};

export const positionInfo = (positionName: string) => {
  switch (positionName) {
    case 'Support':
      return {
        icon: ICON_LIST.mid,
        label: '서포터',
      };
    case 'Bottom':
      return {
        icon: ICON_LIST.adc,
        label: '바텀',
      };
    case 'Jungle':
      return {
        icon: ICON_LIST.jng,
        label: '정글',
      };
    default:
      return {
        icon: ICON_LIST.top,
        label: '탑',
      };
  }
};

export const getLargestMultiKillString = (killString: string) => {
  return killString === 'Double Kill' ? '더블킬' : '트리플킬';
};

export const makeChampionItems = (items: Items[], isWin: boolean) => {
  const wardImg = isWin ? ICON_LIST.wardBlue : ICON_LIST.wardRed;
  const itemAllList = items.map((item, idx) => {
    return idx === items.length - 1
      ? { index: idx, type: 'WARD', ...item }
      : { index: idx, type: 'ITEM', ...item };
  });
  const itemList = itemAllList.filter((item) => item.type === 'ITEM');
  const wardItem = itemAllList.filter((item) => item.type === 'WARD');
  const emptyCount =
    ITEM_AREA_LENGTH - (itemAllList.length > 0 ? itemAllList.length - 1 : itemAllList.length);
  const buildItem = isWin ? ICON_LIST.buildBlue : ICON_LIST.buildRed;
  const emptyItem = new Array(emptyCount).fill(1);
  return {
    wardImg,
    itemList,
    wardItem,
    buildItem,
    emptyItem,
  };
};

export const makeMatchTeam = ({ teams }: Teams) => {
  const redTeam = teams.filter((team) => team.teamId === 1);
  const blueTeam = teams.filter((team) => team.teamId === 2);
  return {
    redTeam,
    blueTeam,
  };
};

export const getChampionName = (championImageUrl: string) => {
  const ChampionImageUrlStr = championImageUrl.split('/');
  const ChampionName = ChampionImageUrlStr[ChampionImageUrlStr.length - 1].replace(/\.png/g, '');
  return ChampionName;
};

export const getItemName = (imageUrl: string) => {
  const itemImageUrlStr = imageUrl.split('/');
  const itemId = itemImageUrlStr[itemImageUrlStr.length - 1].replace(/\.png/g, '');
  const itemDataInfo: typeof itemData.data = itemData.data;
  const selectedItems = Object.entries(itemDataInfo)
    .filter(([key, value]) => {
      return key === itemId;
    })
    .map((item) => item[1]);
  return selectedItems ? selectedItems[0] : null;
};

export const getRankTypeName = (rankType: string) => {
  return rankType === 'SOLO' ? '솔로랭크' : '자유 5:5 랭크';
};

export const searchSummonerResult = (summonerDetail: SummonerApi | null) => {
  if (isNull(summonerDetail)) return [];
  return summonerDetail ? Object.entries(summonerDetail).map((item) => item[1]) : [];
};

export const searchSummonerMostResult = (summonerMost: MostInfoApi | null) => {
  const champions = isNull(summonerMost)
    ? []
    : summonerMost.champions.sort((a, b) => b.games - a.games);
  const recentWinRate = isNull(summonerMost)
    ? []
    : summonerMost.recentWinRate.sort((a, b) => b.wins + b.losses - (a.wins + a.losses));
  return {
    champions,
    recentWinRate,
  };
};
