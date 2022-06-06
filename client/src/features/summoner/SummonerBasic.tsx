import styled from '@emotion/styled';
import { fonts } from '@src/themes';
import { colors } from '@src/themes/index';

export function SummonerBasic() {
  return (
    <SummonerBasicWrapper>
      <TierTag />
      <SummonerBasicStyled>
        <SummonerAvatar>
          <img src={'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg'} />
          <img src={'https://opgg-static.akamaized.net/images/borders2/challenger.png'} />
          <div>
            <span>32</span>
          </div>
        </SummonerAvatar>
        <SummonerInfoWrapper>
          <div>플레이어 아이디</div>
          <div>
            <span>레더 랭킹</span> <span>363,499</span>위 <span>(상위 40.7%)</span>
          </div>
        </SummonerInfoWrapper>
      </SummonerBasicStyled>
    </SummonerBasicWrapper>
  );
}

const SummonerBasicWrapper = styled.div`
  border-bottom: 1px solid ${colors.white_three};
  padding: 15px 200px 12px 200px;
  min-width: 1000px;
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

const TierTag = () => {
  const TierTagWrapper = styled.ul`
    padding-bottom: 6px;
    > li:last-of-type {
      margin-right: 0px;
    }
  `;
  const TierTagStyled = styled.li`
    display: inline;
    height: 20px;
    padding: 3px 5px;
    border-radius: 2px;
    border: solid 1px ${colors.silver_two};
    background-color: ${colors.silver};
    margin-right: 7px;
    ${fonts.textStyle06}
    > span {
      ${fonts.textStyle05}
      font-weight: bold;
    }
  `;

  return (
    <TierTagWrapper>
      <TierTagStyled>
        <span>S3</span> Bronze
      </TierTagStyled>
      <TierTagStyled>
        <span>S3</span> Bronze
      </TierTagStyled>
      <TierTagStyled>
        <span>S3</span> Bronze
      </TierTagStyled>
      <TierTagStyled>
        <span>S3</span> Bronze
      </TierTagStyled>
      <TierTagStyled>
        <span>S3</span> Bronze
      </TierTagStyled>
      <TierTagStyled>
        <span>S3</span> Bronze
      </TierTagStyled>
    </TierTagWrapper>
  );
};
