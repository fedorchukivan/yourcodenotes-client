import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppRoute from "../../common/enums/app-route";
import './header.css'
import Profile from "./profile/Profile";

export default function Header({ showNavigation }) {
  return (<header className="header">
    <div className="header__inner">
      <Link to={AppRoute.ROOT} className="header__logo">YourCodeNotes</Link>
      { showNavigation && <Profile /> }
    </div>
  </header>);
}

Header.propTypes = {
  showNavigation: PropTypes.bool.isRequired
}
