import styled from '@emotion/styled';
import { Spinner } from '@src/components/loadingSpinner';
import { summonerDetailResult } from '@src/store/user/SummonerState';
import { fonts } from '@src/themes';
import { colors } from '@src/themes/index';
import { numberMark } from '@src/utils/formatter';
import { isNull } from 'lodash';
import { useRecoilValue } from 'recoil';
import TierTag from './TierTag';

export function SummonerBasic() {
  const summonerDetail = useRecoilValue(summonerDetailResult);
  if (isNull(summonerDetail.summonerInfoRes))
    return (
      <SummonerBasicLoadingWrapper>
        <Spinner onActive={true} fullCover={false} />
      </SummonerBasicLoadingWrapper>
    );

  const { ladderRank, name, level, profileBorderImageUrl, profileImageUrl, previousTiers } =
    summonerDetail.summonerInfoRes.summoner;

  return (
    <SummonerBasicWrapper>
      <TierTag previousTiers={previousTiers} />
      <SummonerBasicStyled>
        <SummonerAvatar>
          <img src={profileImageUrl} alt={'summoner_profile_image'} />
          <img src={profileBorderImageUrl} alt={'summoner_profile_border_image'} />
          <div>
            <span>{level}</span>
          </div>
        </SummonerAvatar>
        <SummonerInfoWrapper>
          <div>{name}</div>
          <div>
            <span>레더 랭킹</span> <span>{numberMark(String(ladderRank.rank), ',')}</span>위
            <span> (상위 {ladderRank.rankPercentOfTop.toFixed(1)}%)</span>
          </div>
        </SummonerInfoWrapper>
      </SummonerBasicStyled>
    </SummonerBasicWrapper>
  );
}

const SummonerBasicLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.white_three};
  padding: 15px 200px 12px 200px;
  min-width: 1000px;
  height: 175px;
  min-height: 175px;
`;

const SummonerBasicWrapper = styled.div`
  border-bottom: 1px solid ${colors.white_three};
  padding: 15px 200px 12px 200px;
  min-width: 1000px;
  height: 175px;
  min-height: 175px;
`;
const SummonerBasicStyled = styled.div`
  display: flex;
  gap: 16px;
`;

const SummonerAvatar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
  overflow: hidden;
  > img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  > img:first-of-type {
    width: 100px;
    height: 100px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 24px;
    ${fonts.textStyle08};
    background: url(https://s-lol-web.op.gg/static/images/site/summoner/bg-levelbox.png);
    > span {
    }
  }
`;

const SummonerInfoWrapper = styled.div`
  > div:nth-of-type(1) {
    ${fonts.textStyle03}
  }
  > div:nth-of-type(2) {
    ${fonts.textStyle04}
    > span:nth-of-type(1) {
      ${fonts.textStyle04}
    }
    > span:nth-of-type(2) {
      ${fonts.textStyle05}
      font-weight: bold;
    }
    > span:nth-of-type(3) {
      ${fonts.textStyle06}
    }
  }
`;
