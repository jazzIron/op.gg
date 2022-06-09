import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorPageStyled>
      <ErrorPageTitleWrapper>페이지 정보를 찾을 수 없습니다.</ErrorPageTitleWrapper>
      <ErrorPageDescriptionWrapper>
        페이지 URL을 체크하거나 이전 페이지로 돌아가세요.
      </ErrorPageDescriptionWrapper>
      <ErrorPageLogoWrapper>
        <img
          src="https://s-lol-web.op.gg/images/site/error/img-404@2x.png?v=1654691863724"
          alt="site_error_img"
        />
      </ErrorPageLogoWrapper>
      <ErrorActionWrapper>
        <button onClick={() => navigate(-1)}>이전 페이지</button>
        <a href="/">홈</a>
      </ErrorActionWrapper>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const ErrorPageTitleWrapper = styled.div`
  line-height: 32px;
  font-size: 24px;
  font-weight: bold;
`;

const ErrorPageDescriptionWrapper = styled.div`
  margin-top: 24px;
  font-size: 15px;
  white-space: pre-line;
  > a {
    color: #5383e8;
    text-decoration: underline;
  }
`;

const ErrorPageLogoWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  > img {
    width: 80%;
  }
`;

const ErrorActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
  > button {
    display: inline-block;
    min-width: 94px;
    height: 40px;
    line-height: 38px;
    padding: 0 15px;
    font-size: 14px;
    background: #5383e8;
    color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid;
    border-color: #5383e8;
  }

  > a {
    display: inline-block;
    min-width: 94px;
    height: 40px;
    line-height: 38px;
    padding: 0 15px;
    font-size: 14px;
    background: #5383e8;
    color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid;
    border-color: #5383e8;
    text-align: center;
  }
`;
