import { Link } from 'react-scroll';

const SectionListElement = ({ title, link, index, onKeyDown, onLinkClick }) => {
    const isRouteLink = link.startsWith('/');

    return (
        <div
            className="section-list-element"
            style={{ top: `${90 + index * 35}px` }}
        >
            {isRouteLink ? (
                <a 
                    href={link} 
                    className="navigation-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
            ) : (
                <Link 
                    className="navigation-link" 
                    to={link} 
                    spy={true} 
                    smooth={true} 
                    duration={700}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    tabIndex="0"
                >
                    {title}
                </Link>
            )}
        </div>
    );
};

export default SectionListElement;
