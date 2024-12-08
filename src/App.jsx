import React from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Sources from './components/Sources/Sources';
import Imprint from './components/Imprint/Imprint';
import DesktopVersion from "./components/DesktopVersion/DesktopVersion";
import MobileVersion from "./components/MobileVersion/MobileVersion";
import useGetDeviceWidth from "./hooks/useGetDeviceWidth";
import { useSetLanguage } from "./hooks/useSetLanguage";

function App() {

  useSetLanguage();
  const { t } = useTranslation();

  const { notDesktop } = useGetDeviceWidth();

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
               <DesktopVersion />
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
