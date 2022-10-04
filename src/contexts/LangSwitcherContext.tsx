import { ReactNode, createContext, useContext, useState } from 'react';

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
  const [lang, setLang] = useState<Language>(() => {
    const locale = navigator.language;
    const language = locale.split(/[-_]/)[0] || 'en';
    const lang = languages[language] || languages['en'];
    return lang;
  });

  const value = { lang, setLang };

  return (
    <LangSwitcherContext.Provider value={value}>
      {children}
    </LangSwitcherContext.Provider>
  );
};

const useLangSwitcherContext = () => useContext(LangSwitcherContext);

export { LangSwitcherProvider, useLangSwitcherContext };
