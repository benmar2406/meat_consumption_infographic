import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Sources from './components/Sources/Sources';
import Imprint from './components/Imprint/Imprint';
import DesktopVersion from "./components/DesktopVersion/DesktopVersion";
import MobileVersion from "./components/MobileVersion/MobileVersion";

function App() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);



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
              <>
                  {/*!notDesktop && */<DesktopVersion />}
                  {/*notDesktop && <MobileVersion />*/}
              </>
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
