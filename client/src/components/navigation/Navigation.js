import { Link } from "react-router-dom";
import AppRoute from "../../common/enums/app-route";
import './navigation.css'

export default function Navigation() {

  return (
  <ul className="navigation-container">
    <Link to={AppRoute.ROOT}><li className="navigation-button">My Projects</li></Link>
    <Link to={AppRoute.ROOT}><li className="navigation-button">Shared Projects</li></Link>
    <Link to={AppRoute.ROOT}><li className="navigation-button">Open Database</li></Link>
  </ul>);
}