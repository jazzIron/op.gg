import { MainPage } from '@src/pages/main/MainPage';
import { TestPage } from '@src/pages/Test/TestPage';
import { TestPage2 } from '@src/pages/Test/TestPage2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteList } from './RouteList';

export function RouterManager() {
  return (
    <Router>
      <Routes>
        <Route path={RouteList.MAIN} element={<MainPage />} />
        <Route path={RouteList.TEST} element={<TestPage />} />
        <Route path={RouteList.TEST2} element={<TestPage2 />} />
      </Routes>
    </Router>
  );
}
