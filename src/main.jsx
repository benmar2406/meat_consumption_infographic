import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DeviceProvider } from './context/deviceContext.jsx';
import { TranslationProvider } from './context/TranslateContext.jsx';
import App from './App.jsx';
import './index.css';
import './i18n'; 

createRoot(document.getElementById('root')).render(
  <DeviceProvider>
  <TranslationProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TranslationProvider>
  </DeviceProvider>
)
