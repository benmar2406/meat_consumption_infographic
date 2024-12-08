import React, { createContext, useState, useEffect } from "react";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [mobile, setMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setNotDesktop(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);

    return (
        <DeviceContext.Provider value={{ mobile, setMobile }}>
            {children}
        </DeviceContext.Provider>
    );
};
