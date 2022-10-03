import './Sidebar.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import postLogo from 'assets/icons/post.svg';
import usersLogo from 'assets/icons/users.svg';

export const Sidebar = () => {
  const intl = useIntl();

  return (
    <div className="sidebar">
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
    </div>
  );
};
