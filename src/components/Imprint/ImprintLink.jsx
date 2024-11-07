import React from 'react';
import { Link } from 'react-router-dom';
import './Imprint.css';


const Sources = () => {

    return(
        <footer>
        <Link 
            to="/imprint" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='imprint-link'
            >Imprint
        </Link>
    </footer>

    )
}

export default Sources;