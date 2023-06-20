import { useDispatch, useSelector } from "react-redux"
import Navigation from "../navigation/Navigation";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { projectsActionCreator } from "../../store/actions";
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";

export default function Projects() {
  const user = useSelector(({auth}) => auth.user);
  const projects = useSelector(({projects}) => projects.projects);

  const [name, setName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(projectsActionCreator.getUserProjects(user));
  }, [dispatch, user])

  if (!user) return <Navigate to={AppRoute.SIGN_IN} />

  const handleAddProject = e => {
    e.preventDefault();
    dispatch(projectsActionCreator.addProject({title:name}));
    setName('');
  }

  const handleDelete = id => {
    dispatch(projectsActionCreator.deleteProject(id));
  }

  return (<>
    <Navigation showSearch={false} handleTag={() => {}} handleTitle={() => {}} />
    <main>
      <div className="row mt-3">
        <div className="col-5 offset-2">
          <MDBInputGroup tag="form" className='d-flex w-auto p-2 ms-auto'>
            <input className='form-control' placeholder="Create new project..." value={name} onChange={e => setName(e.target.value)} />
            <MDBBtn outline onClick={e => handleAddProject(e)}>create</MDBBtn>
          </MDBInputGroup>
          <ul className="list-group list-group-light">
            {
              projects.map(p =>
                  <li key={p.project_id} className="list-group-item">
                    <Link to={AppRoute.PROJECTS  + '/' + p.project_id}>
                    {p.title}
                    </Link>
                    <i className="fas fa-square-xmark float-end text-danger clickable" onClick={() => handleDelete(p.project_id)}></i>
                  </li>
                )
            }
          </ul>
        </div>
      </div>
    </main>
  </>);
}