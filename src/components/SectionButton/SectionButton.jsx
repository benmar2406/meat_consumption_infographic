import React, { forwardRef } from 'react';
import { Link } from 'react-scroll';
import './SectionButton.css';

const SectionButton = forwardRef(({ buttonText, sectionLink, buttonColor }, ref) => {
    return (
        <div className="button-container">
            <Link to={sectionLink} smooth={true} duration={500}>
                <button
                    ref={ref}
                    className="section-button"
                    style={{ backgroundColor: buttonColor, transformOrigin: 'center' }}
                >
                    {buttonText}
                </button>
            </Link>
        </div>
    );
});

export default SectionButton;
