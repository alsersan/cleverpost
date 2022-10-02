import './Sidebar.scss';
import usersLogo from 'assets/icons/users.svg';
import postLogo from 'assets/icons/post.svg';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-nav__section-list">
          <li className="sidebar-nav__section">
            <a href="" className="sidebar-nav__link">
              <div className="sidebar-nav__icon-wrapper">
                <img src={postLogo} alt="Post icon" />
              </div>
              Posts
            </a>
          </li>
          <li className="sidebar-nav__section">
            <a href="" className="sidebar-nav__link">
              <div className="sidebar-nav__icon-wrapper">
                <img src={usersLogo} alt="Users icon" />
              </div>
              Users
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
