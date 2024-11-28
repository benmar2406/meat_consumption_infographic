import React from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './Imprint.css';


const Sources = () => {

    const { t, i18n } = useTranslation();

    return(
        <Element name='imprint'>
            <Helmet>
                <title>1kg - {t('imprint')}</title>
            </Helmet>
            <aside>
                <section>
                    <header>
                        <h2>{t('imprint')}</h2>
                    </header>
                    <p className='imprint-text'>
                        Benedikt Martini<br/>
                        Frankfurt
                    </p>
                </section>    
            </aside>
        </Element> 

    )
}

export default Sources;