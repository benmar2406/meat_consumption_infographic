import React from 'react';
import WheatIcon from '../../assets/img/icons/corn_color.png'
import './CornIconContainer.css';


const CornIconContainer = ({
  wheatWidth,
  wheatHeight,
  minWheatHeight,
  minwheatWidth,
  maxWheatHeight,
  maxdWheatWidth,
  altText
}) => {
  return (
    <div
      className="wheat-icon-container"
      style={{
        width: wheatWidth,
        height: wheatHeight,
        minWidth: minwheatWidth,
        minHeight: minWheatHeight,
        maxWidth: maxdWheatWidth,
        maxHeight: maxWheatHeight,
        backgroundImage: `url(${WheatIcon})`,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',

      }}
    >    
    </div>
  );
};

export default CornIconContainer;
