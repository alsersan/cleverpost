import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import './Header.scss';

import arrowDownIcon from 'assets/icons/arrow-down.svg';
import logoutIcon from 'assets/icons/logout.svg';
import { LanguageSwitcher } from 'components/LanguageSwitcher';

export const Header = () => {
  const intl = useIntl();
  const { logout } = useAuth0();

  return (
    <nav className="header">
      <Link to="/" className="header__logo">
        CleverPost
      </Link>
      <LanguageSwitcher />
      <div className="header__menu-wrapper">
        <div className="logued-user">
          <div className="logued-user__name-wrapper">
            <p className="logued-user__name">John Doe</p>
            <p className="logued-user__role">
              <FormattedMessage id="header.user-role" />
            </p>
          </div>
          <div className="logued-user__avatar" />
          <img
            className="logued-user__arrow-icon"
            src={arrowDownIcon}
            alt={intl.formatMessage({ id: 'icon.down-arrow-alt' })}
          />
        </div>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-menu__button"
              onClick={() => logout({ returnTo: window.location.origin })}>
              <div className="dropdown-menu__icon-wrapper">
                <img
                  className="dropdown-menu__icon"
                  src={logoutIcon}
                  alt={intl.formatMessage({ id: 'icon.logout-alt' })}
                />
              </div>
              <FormattedMessage id="header.logout" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
