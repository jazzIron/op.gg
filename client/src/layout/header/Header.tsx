import styled from '@emotion/styled';
import { ICON_LIST } from '@src/components/icon';
import { SearchSummoner } from '@src/features/searchSummoner/SearchSummoner';
import { colors } from '@src/themes';
import { useNavigate } from 'react-router-dom';
import { RouteList } from '@src/routes/RouteList';

export function Header() {
  const navigate = useNavigate();
  const moveHomePage = () => navigate(RouteList.MAIN);
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <LogoWrapper onClick={moveHomePage}>
          <LogoStyled src={ICON_LIST.opggLogo} alt={'opgg_logo_img'} />
        </LogoWrapper>
        <SearchInputWrapper>
          <SearchSummoner />
        </SearchInputWrapper>
      </HeaderStyled>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 97px;
  background-color: ${colors.azure};
`;

const HeaderStyled = styled.div`
  position: relative;
  min-width: 1080px;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-around;
`;

const LogoWrapper = styled.div`
  padding-left: 24px;
  cursor: pointer;
`;
const LogoStyled = styled.img`
  width: 150px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  top: 30px;
  left: 50px;
`;
