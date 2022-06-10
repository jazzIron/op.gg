import { ORIGIN_URL_CHAMPIONS, ORIGIN_URL_SUMMONERS } from '@src/api';
import { SummonerApi } from '@src/store/summoner/Summoner_types';
import { isEmpty, isUndefined } from 'lodash';
import { useEffect } from 'react';
import { parenthesisExtraction } from './formatter';
import { winningRate } from './match';

/**
 * 랭크 티어 초기값 설정
 */
const initTierRank = {
  imageUrl: '',
  lp: 0,
  name: '',
  season: 0,
  tier: '',
  shortString: '',
  rankLp: '',
};

export const movePageChampionDetailPage = (searchKeyword: string) => {
  window.open(`${ORIGIN_URL_CHAMPIONS}/${searchKeyword}`, '_blank');
};

export const movePageSummonerDetailPage = (searchKeyword: string) => {
  window.open(`${ORIGIN_URL_SUMMONERS}/${searchKeyword}`, '_blank');
};

// 소환사 검색 PATH 체크
export const isSearchSummonerPath = (pathList: string[]) => {
  return pathList.includes('summoners') && pathList.length === 2 ? true : false;
};

/**
 * 특정 DOM 요소의 외부 클릭 이벤트를 처리 함수
 * @param ref container useRef
 * @param handlerCallback 콜백 함수
 */
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

/**
 * 소환사 랭크 정보 생성
 * @param type  매치 타입 'SOLO' | 'FREE'
 * @param season  시즌 (default : 9 [최근 시즌 설정])
 * @param SummonerApi 소환사 정보
 * @returns rankInfo, totalGame, winningRateColor, winningRateValue
 */
export const makeLeagueRank = (type: string, season: number, SummonerApi: SummonerApi) => {
  const rankType = type === 'SOLO' ? '솔랭' : '자유 5:5 랭크';
  const rankSeason = SummonerApi.previousTiers
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
  const rankFilter = SummonerApi.leagues.filter((info) => {
    return info.tierRank.name === rankType;
  });
  const leagueRank = {
    ...rankFilter[0],
    tierRank: !isEmpty(rankSeason) ? rankSeason[0] : initTierRank,
    totalGame: rankFilter ? rankFilter[0].wins + rankFilter[0].losses : 0,
    winningRateInfo: rankFilter
      ? winningRate(rankFilter[0].wins, rankFilter[0].wins + rankFilter[0].losses)
      : 0,
  };
  const rankInfo = leagueRank;
  const totalGame = rankInfo.wins + rankInfo.losses;
  const { winningRateColor, winningRateValue } = winningRate(rankInfo.wins, totalGame);
  return {
    rankInfo,
    totalGame,
    winningRateColor,
    winningRateValue,
  };
};

export const titleBarLabelCustom = (titleLabel: string | undefined) => {
  const defaultTitleLabel = `롤 전적 검색 OP.GG - 전적 검색, 관전, 리플레이, 챔피언 공략, 카운터, 랭킹`;

  document.title =
    !isEmpty(titleLabel) && !isUndefined(titleLabel)
      ? `${titleLabel} - ${defaultTitleLabel}`
      : defaultTitleLabel;
};
