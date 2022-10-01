import './Header.scss';
import arrowDownIcon from 'assets/icons/arrow-down.svg';

export const Header = () => {
  return (
    <nav className="header">
      <span>CleverPost</span>
      <div className="logued-user">
        <div className="logued-user__name-wrapper">
          <p className="logued-user__name">John Doe</p>
          <p className="logued-user__role">Administrator</p>
        </div>
        <div className="logued-user__avatar" />
        <img
          className="logues-user__arrow-icon"
          src={arrowDownIcon}
          alt="Down arrow icon"
        />
      </div>
    </nav>
  );
};
