import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@src/layout/header/Header';
import { RouteList } from './RouteList';

const removeHeaderList: RouteList[] = [RouteList.ERROR];

export function HeaderRouter() {
  const { pathname } = useLocation();
  const hasHeader = removeHeaderList.includes(pathname as RouteList);
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'auto' });
  }, [pathname]);

  if (hasHeader) return <></>;

  return <Header />;
}
