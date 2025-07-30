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
                aria-pressed={i18n.language === 'en' ? true : false}
                aria-label='Language: English'
                >EN
            </button> 
            <span aria-hidden="true"> / </span>    
            <button 
                className={`language-button ${i18n.language === 'de' ? 'active' : ''}`}
                onClick={() => changeLanguage('de')}
                disabled={i18n.language === 'de'}
                aria-pressed={i18n.language === 'de' ? true : false}
                aria-label='Sprache: Deutsch'
                >DE
            </button>
        </div>
    )
}

export default LanguageToggle;