import { MainPage } from '@src/pages/main/MainPage';
import { TestPage } from '@src/pages/Test/TestPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteList } from './RouteList';
import { ErrorPage } from '@src/pages/error/ErrorPage';
import { HeaderRouter } from './HeaderRouter';
import { MainSummonerPage } from '@src/pages/mainSummoner/MainSummonerPage';

function RouterDom() {
  return (
    <Routes>
      <Route path={RouteList.MAIN} element={<MainPage />} />
      <Route path={`${RouteList.SUMMONERS}/:summonerName`} element={<MainSummonerPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path={RouteList.TEST} element={<TestPage />} />
    </Routes>
  );
}

export function RouterManager() {
  return (
    <Router>
      <HeaderRouter />
      <RouterDom />
    </Router>
  );
}
