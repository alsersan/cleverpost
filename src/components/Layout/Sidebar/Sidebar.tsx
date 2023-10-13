import './Sidebar.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';

import logoutIcon from 'assets/icons/logout.svg';
import postLogo from 'assets/icons/post.svg';
import usersLogo from 'assets/icons/users.svg';
import { LanguageSwitcher } from 'components/LanguageSwitcher';

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const intl = useIntl();
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div
      className={`sidebar ${isSidebarOpen ? 'sidebar--visible' : ''} ${
        !isAuthenticated ? 'sidebar--no-auth' : ''
      }`}>
      <nav className="sidebar-nav">
        <ul className="sidebar-nav__section-list">
          {isAuthenticated && (
            <>
              <li className="sidebar-nav__section">
                <NavLink
                  to="/posts"
                  className="sidebar-nav__link"
                  onClick={() => toggleSidebar(!isSidebarOpen)}>
                  <div className="sidebar-nav__icon-wrapper">
                    <img
                      src={postLogo}
                      alt={intl.formatMessage({ id: 'icon.post-alt' })}
                    />
                  </div>
                  <FormattedMessage id="sidebar.posts" />
                </NavLink>
              </li>
              <li className="sidebar-nav__section">
                <NavLink
                  to="/users"
                  className="sidebar-nav__link"
                  onClick={() => toggleSidebar(!isSidebarOpen)}>
                  <div className="sidebar-nav__icon-wrapper">
                    <img
                      src={usersLogo}
                      alt={intl.formatMessage({ id: 'icon.users-alt' })}
                    />
                  </div>
                  <FormattedMessage id="sidebar.users" />
                </NavLink>
              </li>
            </>
          )}
          <li className="sidebar-nav__section--mobile-only">
            <LanguageSwitcher fullWidth={true} />
          </li>
        </ul>
        <div className="sidebar-nav__footer">
          {isAuthenticated && (
            <div className="sidebar-nav__section sidebar-nav__section--mobile-only">
              <button
                className="sidebar-nav__link"
                onClick={() => {
                  toggleSidebar(!isSidebarOpen);
                  logout({ returnTo: window.location.origin });
                }}>
                <div className="sidebar-nav__icon-wrapper">
                  <img
                    className="dropdown-menu__icon"
                    src={logoutIcon}
                    alt={intl.formatMessage({ id: 'icon.logout-alt' })}
                  />
                </div>
                <FormattedMessage id="sidebar.logout" />
              </button>
            </div>
          )}
          <small className="sidebar-nav__footer-text">
            &copy; Álvaro Serrano 2023
          </small>
        </div>
      </nav>
    </div>
  );
};
