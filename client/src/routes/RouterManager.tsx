import { MainPage } from '@src/pages/main/MainPage';
import { TestPage } from '@src/pages/Test/TestPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteList } from './RouteList';

export function RouterManager() {
  return (
    <Router>
      <Routes>
        <Route path={RouteList.TEST} element={<TestPage />} />
        <Route path={RouteList.MAIN} element={<MainPage />} />
      </Routes>
    </Router>
  );
}
