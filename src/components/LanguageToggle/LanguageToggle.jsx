import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css'

const LanguageToggle = () => {

    const { i18n } = useTranslation(); 

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng); 
    };

    return(
        <div className='language-toggle-container'>
            <button
                className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                disabled={i18n.language === 'en'}
                >EN
            </button> 
            <span aria-hide="true"> / </span>    
            <button 
                className={`language-button ${i18n.language === 'de' ? 'active' : ''}`}
                onClick={() => changeLanguage('de')}
                disabled={i18n.language === 'de'}
                >DE
            </button>
        </div>
    )
}

export default LanguageToggle;