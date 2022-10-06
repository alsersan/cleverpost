import { useAuth0 } from '@auth0/auth0-react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import './Header.scss';

import hamburgerMenuIcon from 'assets/icons/hamburger.svg';
import { LanguageSwitcher } from 'components/LanguageSwitcher';
import { UserInfo } from 'components/UserInfo';

export const Header = () => {
  const intl = useIntl();
  const { logout, user, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className="header">
      <Link to="/" className="header__logo">
        CleverPost
      </Link>
      <div className="header__flex-wrapper">
        <LanguageSwitcher />
        {isAuthenticated && user && (
          <UserInfo user={user} handleLogout={handleLogout} />
        )}
      </div>
      <button className="header__hamburger-menu">
        <img
          src={hamburgerMenuIcon}
          alt={intl.formatMessage({ id: 'icon.hamburger-alt' })}
          className="header__hamburger-menu-icon"
        />
      </button>
    </nav>
  );
};
