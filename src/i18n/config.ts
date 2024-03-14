import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import globalEN from './locales/en/global.json';

const resources = {
  en: {
    global: globalEN
  }
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources
  });

export { i18n, useTranslation };
