import './records.css'
import { Navigate } from "react-router-dom"
import AppRoute from "../../common/enums/app-route"
import RecordCard from '../record-card/Record-card'
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import { useEffect } from 'react';
import { recordsActionCreator } from '../../store/actions';


export default function OpenDB() {
  const user = useSelector(({ auth }) => auth.user);
  const records = useSelector(({ records }) => records.records);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(recordsActionCreator.getPublicRecords());
  }, [dispatch]);
  
  if (!user) return <Navigate to={AppRoute.SIGN_IN} />

  return (
    <>
      <Navigation showSearch={true} />
      <main className='records-container'>
        { records.map(record => <RecordCard record={record} key={record.id}/>) }
      </main>
    </>
  )
}