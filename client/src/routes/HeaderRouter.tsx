import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '@src/layout/header/Header';

const HEADER_HEIGHT = 97;

export function HeaderRouter() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'auto' });
  }, [pathname]);

  return <Header />;
}
