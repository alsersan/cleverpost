import './Sidebar.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import postLogo from 'assets/icons/post.svg';
import usersLogo from 'assets/icons/users.svg';

interface Props {
  isSidebarOpen: boolean;
}

export const Sidebar: React.FC<Props> = ({ isSidebarOpen }) => {
  const intl = useIntl();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div className={`sidebar ${isSidebarOpen ? 'sidebar--visible' : ''}`}>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav__section-list">
              <li className="sidebar-nav__section">
                <Link to="/posts" className="sidebar-nav__link">
                  <div className="sidebar-nav__icon-wrapper">
                    <img
                      src={postLogo}
                      alt={intl.formatMessage({ id: 'icon.post-alt' })}
                    />
                  </div>
                  <FormattedMessage id="sidebar.posts" />
                </Link>
              </li>
              <li className="sidebar-nav__section">
                <Link to="/users" className="sidebar-nav__link">
                  <div className="sidebar-nav__icon-wrapper">
                    <img
                      src={usersLogo}
                      alt={intl.formatMessage({ id: 'icon.users-alt' })}
                    />
                  </div>
                  <FormattedMessage id="sidebar.users" />
                </Link>
              </li>
            </ul>
          </nav>
          <small className="sidebar__footer">&copy; Álvaro Serrano 2022</small>
        </div>
      )}
    </>
  );
};
