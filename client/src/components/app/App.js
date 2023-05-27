// import './app.css';
import Header from '../header/Header';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import Sign from '../sign/Sign';

export default function App() {
  const [showNavigation, setShowNavigation] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === AppRoute.SIGNIN || pathname === AppRoute.SIGNUP) {
      setShowNavigation(false);
    } else {
      setShowNavigation(true);
    }
  }, [pathname, setShowNavigation]);

  return (
    <>
      <Header showNavigation={showNavigation}/>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Navigate to={AppRoute.SIGNIN}/>} />
        <Route path={AppRoute.SIGNIN} element={<Sign />} />
        <Route path={AppRoute.SIGNUP} element={<Sign />} />
        <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.SIGNIN}/>} />
      </Routes>
      <Footer />
    </>
  );
}
