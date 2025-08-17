import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSetLanguage } from "./hooks/useSetLanguage";
import './App.css';
import Sources from './components/Sources/Sources';
import Imprint from './components/Imprint/Imprint';
import Main from "./components/main/Main";

function App() {

  useSetLanguage();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
          <title>{t('intro.subtitle')}</title>
      </Helmet>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
               <Main />
            } 
          />
          <Route
            path="/sources"
            element={<Sources />}
          />
          <Route
            path="/imprint"
            element={<Imprint />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
