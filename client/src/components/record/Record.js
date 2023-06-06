import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { Navigate, useParams } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { createSelector } from "@reduxjs/toolkit";
import './record.css';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBTypography } from "mdb-react-ui-kit";

const cardSelector = createSelector(
  (state) => state.records.records,
  (_, recordId) => recordId,
  (records, recordId) => records.filter(record => record.record_id === recordId)[0]
);

export default function Record() {
  const { recordId } = useParams();
  
  const user = useSelector(({ auth }) => auth.user);
  const record = useSelector((state) => cardSelector(state, recordId));

  if (!user) return <Navigate to={AppRoute.SIGN_IN} />

  return (
  <>
    <Navigation showSearch={false} />
  
    <main className="record-view-container">
      <MDBTypography tag='h3'>{record.title}</MDBTypography>
      <i className='text-secondary'>By: {record.creator.username}</i>
      <hr/>
      <div>
        {
          record.tags.map(tag =>
            <MDBBadge pill className='mx-2' color='info' light key={tag.tag_id}>
              {tag.name}
            </MDBBadge>)
        }
      </div>
      <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Problem description</MDBTypography>
      <MDBTypography className="ms-3">{record.problem_description}</MDBTypography>
      <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Solution</MDBTypography>
      <MDBTypography className="ms-3">{record.solution_description}</MDBTypography>
      <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Sources</MDBTypography>
      <MDBListGroup className="ms-3" light numbered style={{ minWidth: '22rem' }}>
        {
          record.sources.map(source =>
            <MDBListGroupItem key={source.source_id}><a href={source.link} rel="noreferrer" target="_blank">{source.name}</a></MDBListGroupItem>
          )
        }
      </MDBListGroup>
    </main>
  </>);
}