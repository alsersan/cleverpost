import './Header.scss';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import arrowDownIcon from 'assets/icons/arrow-down.svg';

export const Header = () => {
  const intl = useIntl();

  return (
    <nav className="header">
      <Link to="/" className="header__logo">
        CleverPost
      </Link>
      <div className="logued-user">
        <div className="logued-user__name-wrapper">
          <p className="logued-user__name">John Doe</p>
          <p className="logued-user__role">Administrator</p>
        </div>
        <div className="logued-user__avatar" />
        <img
          className="logued-user__arrow-icon"
          src={arrowDownIcon}
          alt={intl.formatMessage({ id: 'icon.down-arrow-alt' })}
        />
      </div>
    </nav>
  );
};
