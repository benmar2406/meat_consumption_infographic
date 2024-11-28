import React from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './Sources.css';


const Sources = () => {

    const { t, i18n } = useTranslation();

    return(
        <Element name='sources'>
            <Helmet>
                <title>1kg - {t('sources.title')}</title>
            </Helmet>
            <aside>
                <section>
                    <header>
                        <h2>Sources</h2>
                    </header>
                    <ul className='sources-list'>
                        <li><a href="https://benediktmartini.de/Sources/Environmental_Impacts.html" target="_blank">{t('sources.source1')}</a></li>
                        <li><a href="https://benediktmartini.de/Sources/meat_consumption_analysis.html" target="_blank">{t('sources.source2')}</a></li>
                        <li><a href="https://benediktmartini.de/Sources/Water_Data.html" target="_blank">{t('sources.source4')}</a></li>
                        <li><a href="https://benediktmartini.de/Sources/Food_Data.html" target="_blank">{t('sources.source5')}</a></li>
                    </ul>
                </section>    
            </aside>
        </Element> 

    )
}

export default Sources;