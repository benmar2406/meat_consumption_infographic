import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations using http (e.g., from public/locales)
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Bind with React
  .init({
    fallbackLng: 'en', 
    supportedLngs: ['en', 'de'], 
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', 
    },
    detection: {
      order: ['navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;
