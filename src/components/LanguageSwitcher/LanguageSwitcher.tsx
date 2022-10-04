import { useIntl } from 'react-intl';
import './LanguageSwitcher.scss';

import arrowDownIcon from 'assets/icons/arrow-down.svg';
import langIcon from 'assets/icons/lang.svg';
import { useLangSwitcherContext } from 'contexts/LangSwitcherContext';
import { languages } from 'lang/languages';

export const LanguageSwitcher = () => {
  const intl = useIntl();
  const { lang, setLang } = useLangSwitcherContext();

  return (
    <div className="lang-switch">
      <div className="lang-switch__button-container">
        <img src={langIcon} alt={intl.formatMessage({ id: 'icon.lang-alt' })} />
        <span>{lang.label}</span>
        <img
          src={arrowDownIcon}
          alt={intl.formatMessage({ id: 'icon.logout-alt' })}
        />
      </div>
      <ul className="lang-switch__list">
        {Object.values(languages).map((lang) => (
          <li key={lang.locale}>
            <button
              className="lang-switch__list-btn"
              onClick={() => setLang(lang)}>
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
