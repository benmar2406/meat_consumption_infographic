import React from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import './Sources.css';


const Sources = () => {

    return(
        <Element name='sources'>
            <Helmet>
                <title>1kg - Sources</title>
            </Helmet>
            <aside>
                <section>
                    <header>
                        <h2>Sources</h2>
                    </header>
                    <ul className='sources-list'>
                        <li><a href="https://benediktmartini.de/Sources/Environmental_Impacts.html" target="_blank">Environmental Impacts</a></li>
                        <li><a href="https://benediktmartini.de/Sources/meat_consumption_analysis.html" target="_blank">Meat consumption and production</a></li>
                        <li><a href="https://benediktmartini.de/Sources/Water_Data.html" target="_blank">Ressources: Water related data</a></li>
                        <li><a href="https://benediktmartini.de/Sources/Food_Data.html" target="_blank">Ressources: Food related data</a></li>
                    </ul>
                </section>    
            </aside>
        </Element> 

    )
}

export default Sources;