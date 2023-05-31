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
import Projects from '../projects/Projects';
import Project from '../project/Project';
import ProjectRecords from '../records/Project-records';
import SharedProjects from '../projects/Shared-projects';
import SharedProject from '../project/Shared-project';
import SharedProjectRecords from '../records/Shared-records';
import RecordEdit from '../record/Record-edit-form';

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
        <Route path={AppRoute.PROJECTS} element={<Projects />} />
        <Route path={AppRoute.SHARED} element={<SharedProjects />} />
        <Route path={AppRoute.PROJECT} element={<Project />} />
        <Route path={AppRoute.SHARED_PROJECT} element={<SharedProject />} />
        <Route path={AppRoute.SECTION} element={<ProjectRecords />} />
        <Route path={AppRoute.SHARED_SECTION} element={<SharedProjectRecords />} />
        <Route path={AppRoute.ROOT + AppRoute.RECORD_ID} element={<Record />} />
        <Route path={AppRoute.OPEN_DB + AppRoute.RECORD_ID} element={<Record />} />
        <Route path={AppRoute.SECTION + AppRoute.RECORD_ID} element={<Record />} />
        <Route path={AppRoute.SHARED_SECTION + AppRoute.RECORD_ID} element={<Record />} />
        <Route path={AppRoute.ROOT + AppRoute.ADD_RECORD} element={<RecordCreate path={AppRoute.ROOT}/>} />
        <Route path={AppRoute.SECTION + AppRoute.ADD_RECORD} element={<RecordCreate path={AppRoute.PROJECTS}/>} />
        <Route path={AppRoute.SHARED_SECTION + AppRoute.ADD_RECORD} element={<RecordCreate path={AppRoute.SHARED}/>} />
        <Route path={AppRoute.ROOT + AppRoute.UPDATE_RECORD + AppRoute.RECORD_ID} element={<RecordEdit path={AppRoute.ROOT}/>} />
        <Route path={AppRoute.SECTION + AppRoute.UPDATE_RECORD + AppRoute.RECORD_ID} element={<RecordEdit path={AppRoute.PROJECTS}/>} />
        <Route path={AppRoute.SHARED_SECTION + AppRoute.UPDATE_RECORD + AppRoute.RECORD_ID} element={<RecordEdit path={AppRoute.SHARED}/>} />
        <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.ROOT}/>} />
      </Routes>
      <Footer />
    </>
  );
}
