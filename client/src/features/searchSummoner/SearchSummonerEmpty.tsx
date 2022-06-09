import styled from '@emotion/styled';

export function SearchSummonerEmpty() {
  return (
    <SearchSummonerEmptyWrapper>
      <h2>OP.GG에 등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.</h2>
      <h3>잘못된 서버로 검색하셨나요? OP.GG가 서비스하고 있는 다른 지역으로 검색해보세요.</h3>
    </SearchSummonerEmptyWrapper>
  );
}

const SearchSummonerEmptyWrapper = styled.div`
  padding-top: 50px;
  line-height: 2;
  padding-bottom: 22px;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #dbe0e4;
  > h2 {
    font-size: 24px;
    text-align: center;
    color: #202d37;
  }
  > h3 {
    margin-top: 36px;
    font-size: 12px;
    font-weight: normal;
    color: #202d37;
  }
`;
