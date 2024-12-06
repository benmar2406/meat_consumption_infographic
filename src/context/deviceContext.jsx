import React, { createContext, useState } from "react";

const DeviceContext = createContext(0); 

const DeviceProvider = ({ children }) => {
    const [notDesktop, setNotDesktop] = useState(false);

  return (
    <DeviceContext.Provider value={{ notDesktop, setNotDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceProvider };
