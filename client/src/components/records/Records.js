import './records.css'
import { Link, Navigate } from "react-router-dom"
import AppRoute from "../../common/enums/app-route"
import RecordCard from '../record-card/Record-card'
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import { useEffect, useState } from 'react';
import { recordsActionCreator } from '../../store/actions';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


export default function Records() {
  const user = useSelector(({ auth }) => auth.user);
  const records = useSelector(({ records }) => records.records);

  const [titleFilter, setTitleFiler] = useState('');
  const [tagFilter, setTagFiler] = useState('');
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user) dispatch(recordsActionCreator.getUserRecords({user, titleFilter, tagFilter}));
  }, [dispatch, user, titleFilter, tagFilter]);
  
  if (!user) return <Navigate to={AppRoute.SIGN_IN} />
  else if (user.role === 'admin') return <Navigate to={AppRoute.OPEN_DB} />

  const handleDelete = (id) => {
    dispatch(recordsActionCreator.removeRecord(id));
  }

  const handleTitle = (title) => {
    setTitleFiler(title);
    if (tagFilter) setTagFiler('');
    if (user) dispatch(recordsActionCreator.getUserRecords({user, titleFilter, tagFilter}));
  }

  const handleTag = (tag) => {
    setTagFiler(tag);
    if (titleFilter) setTitleFiler('');
    if (user) dispatch(recordsActionCreator.getUserRecords({user, titleFilter, tagFilter}));
  }

  const handleClear = () => {
    setTitleFiler('');
    setTagFiler('');
    if (user) dispatch(recordsActionCreator.getUserRecords({user, titleFilter, tagFilter}));
  }

  return (
    <>
      <Navigation showSearch={true} handleTitle={handleTitle} handleTag={handleTag}/>
      <main className='records-container'>
        {
          (titleFilter || tagFilter) && 
            <div className='d-flex justify-content-between'>
              <span>Result of search by {titleFilter ? 'title' : 'tag'} "{titleFilter ? titleFilter : tagFilter}"</span>
              <button type="button" className="btn btn-outline-danger" data-mdb-ripple-color="dark" onClick={handleClear}>clear</button>
            </div>
        }
        {
          records.map(record =>
            <RecordCard
              record={record}
              key={record.id}
              deletable={true}
              handleDelete={handleDelete}
              editable={true}
              editLink={AppRoute.ROOT + AppRoute.UPDATE_RECORD + '/' + record.id}
            />)
        }
      </main>
      <Link to={AppRoute.ROOT + AppRoute.ADD_RECORD}>
        <MDBBtn floating className='add-btn'>
          <MDBIcon fab icon='plus' className='fa-2x' />
        </MDBBtn>
      </Link>
    </>
  )
}