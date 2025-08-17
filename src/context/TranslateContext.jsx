import { createContext } from "react";
import { useTranslation } from 'react-i18next';


export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    
    const { t } = useTranslation(); 
    const { i18n } = useTranslation();
    const language = i18n.language;


    return (
        <TranslationContext.Provider value={{ t, i18n, language }}>
            {children}
        </TranslationContext.Provider>
    );
};