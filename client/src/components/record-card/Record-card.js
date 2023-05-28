import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBadge
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AppRoute from '../../common/enums/app-route';
import './record-card.css'

export default function RecordCard() {
  const card = {
    title: 'Card Title',
    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    tags: ['c#', 'backend', '.net'],
    creator: 'Sullivan Smith'
  }

  return (
  <>
    <MDBCard border='info'>
      <MDBCardBody >
        <MDBCardTitle>{card.title}</MDBCardTitle>
        <MDBCardText className='card-description'>{card.description}</MDBCardText>
        <Link to={AppRoute.SIGNIN}>See more</Link>
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