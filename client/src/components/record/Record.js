import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { Navigate, useParams } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { createSelector } from "@reduxjs/toolkit";
import './record.css';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBTypography } from "mdb-react-ui-kit";

const cardSelector = createSelector(
  (state) => state.cards.cards,
  (_, recordId) => recordId,
  (cards, recordId) => cards.filter(card => card.id === recordId)[0]
);

export default function Record() {
  const { recordId } = useParams();
  
  const user = useSelector(({ auth }) => auth.user);
  const card = useSelector((state) => cardSelector(state, recordId));

  if (!user) return <Navigate to={AppRoute.SIGNIN} />

  return (
  <>
    <Navigation />
  
    <main className="record-view-container">
      <MDBTypography tag='h3'>{card.title}</MDBTypography>
      <i className='text-secondary'>By: {card.creator}</i>
      <hr/>
      <div>
        {
          card.tags.map((tag, index) =>
            <MDBBadge pill className='mx-2' color='info' light key={index}>
              {tag}
            </MDBBadge>)
        }
      </div>
      <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Problem description</MDBTypography>
      <MDBTypography className="ms-3">{card.problemDescription}</MDBTypography>
      <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Solution</MDBTypography>
      <MDBTypography className="ms-3">{card.solutionDescription}</MDBTypography>
      <MDBTypography tag='h5' className="mt-3 mb-1 ms-2">Sources</MDBTypography>
      <MDBListGroup className="ms-3" light numbered style={{ minWidth: '22rem' }}>
        {
          card.sources.map(source =>
            <MDBListGroupItem key={source.id}><a href={source.link} rel="noreferrer" target="_blank">{source.name}</a></MDBListGroupItem>
          )
        }
      </MDBListGroup>
    </main>
  </>);
}