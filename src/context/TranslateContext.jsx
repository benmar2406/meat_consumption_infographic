import React, { createContext } from "react";
import { useTranslation } from 'react-i18next';


export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    
    const { t } = useTranslation(); 
    const { i18n } = useTranslation();
    const language = i18n.language;
    const formatNumber = (value) => {
        return new Intl.NumberFormat(language).format(value);
    };

    return (
        <TranslationContext.Provider value={{ t, i18n, language, formatNumber }}>
            {children}
        </TranslationContext.Provider>
    );
};