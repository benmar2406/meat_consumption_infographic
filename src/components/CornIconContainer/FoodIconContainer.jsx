import React from 'react';
import WheatIcon from '../../assets/img/icons/corn_color.png'
import CornIcon from '../../assets/img/icons/corn_color.png'
import './CornIconContainer.css';


const FoodIconContainer = ({
  wheatWidth,
  wheatHeight,
  minWheatHeight,
  minwheatWidth,
  maxWheatHeight,
  maxdWheatWidth,
  name
}) => {

    const url = WheatIcon

    switch(name) {
        case "wheat":  
            
        case "corn": 
            
        case "soy": 
            
        default:

    }

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
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',

      }}
    >    
    </div>
  );
};

export default FoodIconContainer;
