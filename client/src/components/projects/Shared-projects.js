import { useDispatch, useSelector } from "react-redux"
import Navigation from "../navigation/Navigation";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import { projectsActionCreator } from "../../store/actions";

export default function SharedProjects() {
  const user = useSelector(({auth}) => auth.user);
  const projects = useSelector(({projects}) => projects.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(projectsActionCreator.getSharedProjects(user));
  }, [dispatch, user])

  if (!user) return <Navigate to={AppRoute.SIGN_IN} />

  return (<>
    <Navigation showSearch={false} handleTag={() => {}} handleTitle={() => {}} />
    <main>
      <div className="row mt-3">
        <div className="col-5 offset-2">
          <ul className="list-group list-group-light">
            {
              projects.map(p =>
                  <li key={p.id} className="list-group-item">
                    <Link to={AppRoute.SHARED  + '/' + p.id}>
                    {p.name}
                    </Link>
                  </li>
                )
            }
          </ul>
        </div>
      </div>
    </main>
  </>);
}