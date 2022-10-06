import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import './Header.scss';

import { LanguageSwitcher } from 'components/LanguageSwitcher';
import { UserInfo } from 'components/UserInfo';

export const Header = () => {
  const { logout, user, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className="header">
      <Link to="/" className="header__logo">
        CleverPost
      </Link>
      <LanguageSwitcher />
      {isAuthenticated && user && (
        <UserInfo user={user} handleLogout={handleLogout} />
      )}
    </nav>
  );
};
