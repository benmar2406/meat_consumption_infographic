import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DeviceProvider } from './context/deviceContext'; 
import App from './App.jsx'
import './index.css'
import './i18n'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeviceProvider>
      <App />
    </DeviceProvider>
  </StrictMode>,
)
