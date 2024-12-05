  import React, { useEffect, useState, useContext } from "react";
  import { useTranslation } from 'react-i18next';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import { Helmet } from 'react-helmet';
  import { DeviceContext } from "./context/deviceContext";
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


    //check if desktpop or mobile width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { setNotDesktop, notDesktop } = useContext(DeviceContext);


      useEffect(() => {
          const handleResize = () =>  {
            setScreenWidth(window.innerWidth);
          }
          window.addEventListener('resize', handleResize);

          return () => window.removeEventListener('resize', handleResize);
      }, []);

      useEffect(() => {
        setNotDesktop(screenWidth < 900);
      }, [screenWidth, setNotDesktop]) 


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
