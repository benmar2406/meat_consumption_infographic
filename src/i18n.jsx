import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations using http (e.g., from public/locales)
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Bind with React
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'de'], // Supported languages
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Translation files path
    },
    detection: {
      order: ['navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;
