import { ReactNode, createContext, useContext } from 'react';

import { useLocalStorageState } from 'hooks/useLocalStorageState';
import { languages } from 'lang/languages';
import { Language } from 'models/app/language';

interface LangSwitcherContextInterface {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
}

const LangSwitcherContext = createContext({} as LangSwitcherContextInterface);

interface Props {
  children: ReactNode;
}

const LangSwitcherProvider: React.FC<Props> = ({ children }) => {
  const [lang, setLang] = useLocalStorageState<Language>(
    'preferredLang',
    () => {
      const locale = navigator.language;
      const language = locale.split(/[-_]/)[0] || 'en';
      const lang = languages[language] || languages['en'];
      return lang;
    }
  );

  const value = { lang, setLang };

  return (
    <LangSwitcherContext.Provider value={value}>
      {children}
    </LangSwitcherContext.Provider>
  );
};

const useLangSwitcherContext = () => useContext(LangSwitcherContext);

export { LangSwitcherProvider, useLangSwitcherContext };
