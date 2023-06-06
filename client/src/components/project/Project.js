import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import { Link, Navigate, useParams } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import AppRoute from "../../common/enums/app-route";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { projectsActionCreator } from "../../store/actions";

export default function Project() {
  const {projectId} = useParams();

  const project = useSelector(({ projects }) => projects.projects.find(p => p.project_id === projectId));
  const user = useSelector(({ auth }) => auth.user);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  if (!user) return <Navigate to={AppRoute.SIGN_IN} />

  const handleAddSection = e => {
    e.preventDefault();
    dispatch(projectsActionCreator.addSection({ project_id: projectId, title: name }));
    setName('');
  }

  const handleAddParticipant = e => {
    e.preventDefault();
    dispatch(projectsActionCreator.addUser({ project_id: projectId, email }));
    setEmail('');
  }

  const handleRemoveParticipant = email =>  dispatch(projectsActionCreator.removeUser({ project_id: projectId, email }));

  return (<>
    <Navigation showSearch={false} handleTag={() => {}} handleTitle={() => {}} />
    <main>
      <div className="row mt-3">
        <div className="col-5 offset-2">
          <h5>Project "{project.title}"</h5>
          <MDBInputGroup tag="form" className='d-flex w-auto p-2 ms-auto'>
            <input className='form-control' placeholder="Create new section..." value={name} onChange={e => setName(e.target.value)} />
            <MDBBtn outline onClick={e => handleAddSection(e)}>create</MDBBtn>
          </MDBInputGroup>
          <ul className="list-group list-group-light">
            {
              project.sections.map(s => !s.is_default ?
                  <li key={s.section_id} className="list-group-item">
                    <Link to={AppRoute.PROJECTS + '/' + projectId + '/' + s.section_id}>
                    {s.title}
                    </Link>
                  </li>
                  : <></>
                )
            }
            {
              project.sections.map(s => s.is_default ?
                  <li key={s.section_id} className="list-group-item">
                    <Link to={AppRoute.PROJECTS + '/' + projectId + '/' + s.section_id}>
                    {s.title}
                    </Link>
                  </li>
                  : <></>
                )
            }
          </ul>
        </div>
        <div className="col-3 offset-1">
          <h6 className="text-center">Participants</h6>
          <MDBInputGroup tag="form" className='d-flex w-auto p-2 ms-auto'>
            <input className='form-control' placeholder="Add user by email" value={email} onChange={e => setEmail(e.target.value)} />
            <MDBBtn outline onClick={e => handleAddParticipant(e)}>Add</MDBBtn>
          </MDBInputGroup>
          <ul className="list-group list-group-light">
            <li key={project.creator.email} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-bold">{project.creator.username}</div>
                <div className="text-muted">{project.creator.email}</div>
              </div>
              <i className="far fa-star"></i>
            </li>
            {
              project.users.map(u =>
                  <li key={u.email} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <div className="fw-bold">{u.username}</div>
                      <div className="text-muted">{u.email}</div>
                    </div>
                    <i className="fas fa-square-xmark float-end text-danger clickable" onClick={() => handleRemoveParticipant(u.email)}></i>
                  </li>
                )
            }
          </ul>
        </div>
      </div>
    </main>
  </>);
}