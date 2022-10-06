import { User } from '@auth0/auth0-react';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import './UserInfo.scss';

import arrowDownIcon from 'assets/icons/arrow-down.svg';
import logoutIcon from 'assets/icons/logout.svg';

interface Props {
  user: User;
  handleLogout: () => void;
}

export const UserInfo: React.FC<Props> = ({ user, handleLogout }) => {
  const intl = useIntl();

  return (
    <div className="user-info">
      <div className="logued-user">
        <div className="logued-user__name-wrapper">
          <p className="logued-user__name">{user.name}</p>
          <p className="logued-user__role">
            <FormattedMessage id="header.user-role" />
          </p>
        </div>
        <img
          src={user.picture}
          alt="dwe"
          className="logued-user__avatar"
          referrerPolicy="no-referrer"
        />

        <img
          className="logued-user__arrow-icon"
          src={arrowDownIcon}
          alt={intl.formatMessage({ id: 'icon.down-arrow-alt' })}
        />
      </div>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-menu__button" onClick={handleLogout}>
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
  );
};
