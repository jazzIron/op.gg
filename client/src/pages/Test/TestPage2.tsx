import styled from '@emotion/styled';
import { summonerMatchResult, summonerMatchResultQuery } from '@src/store/match/MatchState';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { isEmpty } from 'lodash';

export function TestPage2() {
  const matchResult = useRecoilValue(summonerMatchResult);
  const getMatchResult = useRecoilCallback(({ snapshot, set }) => async () => {
    try {
      const refreshId = Math.random();
      const summonerName = 'hide on bush';
      const response = await snapshot.getPromise(
        summonerMatchResultQuery({ summonerName, refreshId }),
      );
      if (isEmpty(response)) throw Error();
      set(summonerMatchResult, response);
    } catch (error) {
      console.error(`[ERROR] getMatchResult: ${error}`);
    }
  });
  const popupToggleHandler = () => {
    return getMatchResult();
  };

  console.log(matchResult);

  return (
    <RecoilTesterStyled>
      <button onClick={popupToggleHandler}>보기</button>
    </RecoilTesterStyled>
  );
}

const RecoilTesterStyled = styled.div``;