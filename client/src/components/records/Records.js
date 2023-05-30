import './records.css'
import { Link, Navigate } from "react-router-dom"
import AppRoute from "../../common/enums/app-route"
import RecordCard from '../record-card/Record-card'
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import { useEffect } from 'react';
import { recordsActionCreator } from '../../store/actions';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


export default function Records() {
  const user = useSelector(({ auth }) => auth.user);
  const records = useSelector(({ records }) => records.records);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user) dispatch(recordsActionCreator.getUserRecords(user));
  }, [dispatch, user]);
  
  if (!user) return <Navigate to={AppRoute.SIGN_IN} />
  else if (user.role === 'admin') return <Navigate to={AppRoute.OPEN_DB} />

  const handleDelete = (id) => {
    dispatch(recordsActionCreator.removeRecord(id));
  }

  return (
    <>
      <Navigation showSearch={true}/>
      <main className='records-container'>
        { records.map(record => <RecordCard record={record} key={record.id} deletable={true} handleDelete={handleDelete}/>) }
      </main>
      <Link to={AppRoute.ROOT + AppRoute.ADD_RECORD}>
        <MDBBtn floating className='add-btn'>
          <MDBIcon fab icon='plus' className='fa-2x' />
        </MDBBtn>
      </Link>
    </>
  )
}