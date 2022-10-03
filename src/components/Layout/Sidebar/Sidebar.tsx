import './Sidebar.scss';
import { Link } from 'react-router-dom';

import postLogo from 'assets/icons/post.svg';
import usersLogo from 'assets/icons/users.svg';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-nav__section-list">
          <li className="sidebar-nav__section">
            <Link to="/posts" className="sidebar-nav__link">
              <div className="sidebar-nav__icon-wrapper">
                <img src={postLogo} alt="Post icon" />
              </div>
              Posts
            </Link>
          </li>
          <li className="sidebar-nav__section">
            <Link to="/users" className="sidebar-nav__link">
              <div className="sidebar-nav__icon-wrapper">
                <img src={usersLogo} alt="Users icon" />
              </div>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
