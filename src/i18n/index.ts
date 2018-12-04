import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    lng: 'en',
    react: { wait: true },
  });

export default i18n;
