import { useTranslation } from 'react-i18next';

const NavigationButton = ({ onClick, navIsOpen, onKeyDown }) => {

    const { t } = useTranslation();
    
    return(
        <div 
            className={`navigation-button ${navIsOpen ? 'active' : ''}`}
            onClick={onClick}
            role="button"
            tabIndex="0"
            aria-label={navIsOpen ? t('navigation.ariaOpen') : t('navigation.ariaClose')}
            aria-controls='section-list'
            onKeyDown={onKeyDown}
        >
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
        </div>
    )
}

export default NavigationButton;