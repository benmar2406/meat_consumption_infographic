import React, { createContext, useState, useEffect } from "react";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [notDesktop, setNotDesktop] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setNotDesktop(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);

    return (
        <DeviceContext.Provider value={{ notDesktop, setNotDesktop }}>
            {children}
        </DeviceContext.Provider>
    );
};
