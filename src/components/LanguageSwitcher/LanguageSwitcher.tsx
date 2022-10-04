import { useIntl } from 'react-intl';
import './LanguageSwitcher.scss';

import arrowDownIcon from 'assets/icons/arrow-down.svg';
import langIcon from 'assets/icons/lang.svg';

export const LanguageSwitcher = () => {
  const intl = useIntl();

  return (
    <div className="lang-switch">
      <div className="lang-switch__button-container">
        <img src={langIcon} alt={intl.formatMessage({ id: 'icon.lang-alt' })} />
        <span>English</span>
        <img
          src={arrowDownIcon}
          alt={intl.formatMessage({ id: 'icon.logout-alt' })}
        />
      </div>

      <ul className="lang-switch__list">
        <li>
          <button className="lang-switch__list-btn">English</button>
        </li>
        <li>
          <button className="lang-switch__list-btn">Español</button>
        </li>
      </ul>
    </div>
  );
};
