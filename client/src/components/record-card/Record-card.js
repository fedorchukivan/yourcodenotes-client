import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBadge
} from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';
import './record-card.css'

export default function RecordCard({ card }) {
  const { pathname } = useLocation();

  return (
  <>
    <MDBCard border='info'>
      <MDBCardBody >
        <MDBCardTitle>{card.title}</MDBCardTitle>
        <MDBCardText className='card-description'>{card.problemDescription}</MDBCardText>
        <Link to={pathname + '/' + card.id}>See more</Link>
      </MDBCardBody>
      <MDBCardFooter className='d-flex justify-content-between'>
        <div>
          {card.tags.map((tag, index) =>
            <MDBBadge pill className='mx-2' color='info' light key={index}>
              {tag}
            </MDBBadge>)
          }
        </div>
        <i className='text-secondary'>By: {card.creator}</i>
      </MDBCardFooter>
    </MDBCard>
  </>);
}