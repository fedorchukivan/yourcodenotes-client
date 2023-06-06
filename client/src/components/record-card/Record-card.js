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

export default function RecordCard({ record, deletable, handleDelete, editable, editLink }) {
  const { pathname } = useLocation();

  return (
  <>
    <MDBCard border='info'>
      <MDBCardBody >
        <MDBCardTitle>{record.title}
          { deletable && <i className="fas fa-square-xmark float-end text-danger clickable" onClick={() => handleDelete(record.record_id)}></i> }
          { editable &&
            <Link to={editLink}>
              <i className="fas fa-pencil float-end me-1"></i>
            </Link>
          }
        </MDBCardTitle>
        <MDBCardText className='card-description'>{record.problem_description}</MDBCardText>
        <Link to={pathname + '/' + record.record_id}>See more</Link>
      </MDBCardBody>
      <MDBCardFooter className='d-flex justify-content-between'>
        <div>
          {record.tags.map(tag =>
            <MDBBadge pill className='mx-2' color='info' light key={tag.tag_id}>
              {tag.name}
            </MDBBadge>)
          }
        </div>
        <i className='text-secondary'>By: {record.creator.username}</i>
      </MDBCardFooter>
    </MDBCard>
  </>);
}