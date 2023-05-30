// import './app.css';
import Header from '../header/Header';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import Sign from '../sign/Sign';
import Records from '../records/Records';
import Record from '../record/Record';
import OpenDB from '../records/Open-db';
import RecordCreate from '../record/Record-create-form';

export default function App() {
  const [showNavigation, setShowNavigation] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === AppRoute.SIGN_IN || pathname === AppRoute.SIGNUP) {
      setShowNavigation(false);
    } else {
      setShowNavigation(true);
    }
  }, [pathname, setShowNavigation]);

  return (
    <>
      <Header showNavigation={showNavigation}/>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Records />} />
        <Route path={AppRoute.SIGN_IN} element={<Sign />} />
        <Route path={AppRoute.SIGNUP} element={<Sign />} />
        <Route path={AppRoute.OPEN_DB} element={<OpenDB />} />
        <Route path={AppRoute.ROOT + AppRoute.RECORD_ID} element={<Record />} />
        <Route path={AppRoute.OPEN_DB + AppRoute.RECORD_ID} element={<Record />} />
        <Route path={AppRoute.ROOT + AppRoute.ADD_RECORD} element={<RecordCreate sectionId={null} path={AppRoute.ROOT}/>} />
        <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.ROOT}/>} />
      </Routes>
      <Footer />
    </>
  );
}
