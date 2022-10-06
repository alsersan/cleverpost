import { useState } from 'react';
import { useIntl } from 'react-intl';
import './LanguageSwitcher.scss';

import arrowDownIcon from 'assets/icons/arrow-down.svg';
import langIcon from 'assets/icons/lang.svg';
import { useLangSwitcherContext } from 'contexts/LangSwitcherContext';
import { languages } from 'lang/languages';
import { Language } from 'models/app/language';

interface Props {
  fullWidth?: boolean;
}

export const LanguageSwitcher: React.FC<Props> = ({ fullWidth }) => {
  const intl = useIntl();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { lang, setLang } = useLangSwitcherContext();

  const handleClick = (lang?: Language) => {
    setIsDropdownOpen(!isDropdownOpen);
    if (lang) setLang(lang);
  };

  return (
    <div className="lang-switch">
      <button
        className={`lang-switch__button-container ${
          fullWidth ? 'lang-switch__button-container--full-width' : ''
        }`}
        onClick={() => handleClick()}>
        <img src={langIcon} alt={intl.formatMessage({ id: 'icon.lang-alt' })} />
        <span>{lang.label}</span>
        <img
          src={arrowDownIcon}
          alt={intl.formatMessage({ id: 'icon.logout-alt' })}
        />
      </button>
      <ul
        className={`lang-switch__list ${
          isDropdownOpen ? 'lang-switch__list--visible' : ''
        }`}>
        {Object.values(languages).map((lang) => (
          <li key={lang.locale}>
            <button
              className="lang-switch__list-btn"
              onClick={() => handleClick(lang)}>
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
