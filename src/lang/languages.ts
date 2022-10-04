import { Language } from 'models/app/language';

import messages_en from './en.json';
import messages_es from './es.json';

export const languages: { [key: string]: Language } = {
  en: {
    locale: 'en-US',
    label: 'English',
    language: 'en'
  },
  es: {
    locale: 'es-ES',
    label: 'Español',
    language: 'es'
  }
};

export interface MessageOptions {
  en: typeof messages_en;
  es: typeof messages_es;
}

export const messages: MessageOptions = {
  en: messages_en,
  es: messages_es
};
