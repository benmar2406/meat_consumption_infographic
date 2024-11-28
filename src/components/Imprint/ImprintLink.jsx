import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Imprint.css';


const Sources = () => {

    const { t, i18n } = useTranslation();

    return(
        <footer>
        <Link 
            to="/imprint" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='imprint-link'
            >{t('imprint')}
        </Link>
    </footer>

    )
}

export default Sources;