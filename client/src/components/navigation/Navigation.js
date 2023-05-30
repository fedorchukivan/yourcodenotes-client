import { Link } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import './navigation.css'
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export default function Navigation({ showSearch }) {
  const user = useSelector(({ auth }) => auth.user);
  
  return (
  <ul className="navigation-container">
    { user && user.role !== 'admin' && <>
        <Link to={AppRoute.ROOT}><li className="navigation-button">Home</li></Link>
        <Link to={AppRoute.ROOT}><li className="navigation-button">My Projects</li></Link>
        <Link to={AppRoute.ROOT}><li className="navigation-button">Shared Projects</li></Link>
        <Link to={AppRoute.OPEN_DB}><li className="navigation-button">Open Database</li></Link>
      </>
    }
    { showSearch && 
      (<>
        <MDBInputGroup tag="form" className='d-flex w-auto p-2 ms-auto'>
          <input className='form-control' placeholder="Search by title..." aria-label="Search" type='Search' />
          <MDBBtn outline onClick={(e) => { e.preventDefault(); }}>Search</MDBBtn>
        </MDBInputGroup>
        <MDBInputGroup tag="form" className='d-flex w-auto p-2 ms-auto'>
          <input className='form-control' placeholder="Search by tag..." aria-label="Search" type='Search' />
          <MDBBtn outline onClick={(e) => { e.preventDefault(); }}>Search</MDBBtn>
        </MDBInputGroup>
      </>)
    }
  </ul>);
}