import { useState } from 'react';
import userSVG from '../../../assets/images/user.svg';

export default function Profile() {
  const [user] = useState(() => {
    return {
      fullName: 'user',
      role: 'admin'
    }
  });

  return (<nav className="header__nav">
    <ul className="nav-header__list">
      <li className="nav-header__item" title="Profile">
        <div className="nav-header__inner profile-nav" tabIndex="0">
          <span className="visually-hidden">Profile</span>
          <img src={userSVG} alt="profile icon" />
          <ul className="profile-nav__list">
            <li className="profile-nav__item profile-nav__username">{user ? user.fullName + (user.role === 'admin' ? ' (Admin)' : '') : ''}</li>
            <li className="profile-nav__item">
              <button className="profile-nav__sign-out button" onClick={() => {}}>Sign Out</button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>);
}