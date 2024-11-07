import React from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import './Imprint.css';


const Sources = () => {

    return(
        <Element name='imprint'>
            <Helmet>
                <title>1kg - Imprint</title>
            </Helmet>
            <aside>
                <section>
                    <header>
                        <h2>Imprint</h2>
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