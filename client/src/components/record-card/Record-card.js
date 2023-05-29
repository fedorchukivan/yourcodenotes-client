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

export default function RecordCard({ record }) {
  const { pathname } = useLocation();

  return (
  <>
    <MDBCard border='info'>
      <MDBCardBody >
        <MDBCardTitle>{record.title}</MDBCardTitle>
        <MDBCardText className='card-description'>{record.problemDescription}</MDBCardText>
        <Link to={pathname + '/' + record.id}>See more</Link>
      </MDBCardBody>
      <MDBCardFooter className='d-flex justify-content-between'>
        <div>
          {record.tags.map((tag, index) =>
            <MDBBadge pill className='mx-2' color='info' light key={index}>
              {tag}
            </MDBBadge>)
          }
        </div>
        <i className='text-secondary'>By: {record.creator}</i>
      </MDBCardFooter>
    </MDBCard>
  </>);
}