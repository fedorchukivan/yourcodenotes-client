import { Link } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import './navigation.css'
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Navigation({ showSearch, handleTitle, handleTag }) {
  const user = useSelector(({ auth }) => auth.user);

  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  
  const handleTitleSearch = (e) => {
    e.preventDefault();
    handleTitle(title);
    setTitle('');
    setTag('');
  }
  
  const handleTagSearch = (e) => {
    e.preventDefault();
    handleTag(tag);
    setTitle('');
    setTag('');
  }

  return (
  <ul className="navigation-container">
    { user && user.role !== 'admin' && <>
        <Link to={AppRoute.ROOT}><li className="navigation-button">Home</li></Link>
        <Link to={AppRoute.PROJECTS}><li className="navigation-button">My Projects</li></Link>
        <Link to={AppRoute.SHARED}><li className="navigation-button">Shared Projects</li></Link>
        <Link to={AppRoute.OPEN_DB}><li className="navigation-button">Open Database</li></Link>
      </>
    }
    { showSearch && 
      (<>
        <MDBInputGroup tag="form" className='d-flex w-auto p-2 ms-auto'>
          <input className='form-control' placeholder="Search by title..." aria-label="Search" type='Search' value={title} onChange={e => setTitle(e.target.value)} />
          <MDBBtn outline onClick={(e) => handleTitleSearch(e)}>Search</MDBBtn>
        </MDBInputGroup>
        <MDBInputGroup tag="form" className='d-flex w-auto p-2 ms-auto'>
          <input className='form-control' placeholder="Search by tag..." aria-label="Search" type='Search' value={tag} onChange={e => setTag(e.target.value)} />
          <MDBBtn outline onClick={(e) => handleTagSearch(e)}>Search</MDBBtn>
        </MDBInputGroup>
      </>)
    }
  </ul>);
}