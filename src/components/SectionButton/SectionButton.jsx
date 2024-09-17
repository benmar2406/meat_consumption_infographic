import React, { useRef } from 'react';
import { useInView } from 'framer-motion'
import "./SectionButton.css";
import Arrow from '../../assets/img/icons/down.png'
import { Link } from 'react-scroll';

const SectionButton = ({ buttonText, sectionLink }) => {

    const buttonRef = useRef()
    const buttonInView = useInView(buttonRef, { triggerOnce: true, threshold: 0.1 })
    
    return(
        <Link to={sectionLink} smooth={true} duration={500}>
            <button
                ref={buttonRef}
                className='section-button'
                style={{
                    opacity: buttonInView ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                }}
            >
            {buttonText}
                <span>
                    <img className="button-arrow" src={Arrow}/>
                </span>
            
            </button>
        </Link>
)}

export default SectionButton;