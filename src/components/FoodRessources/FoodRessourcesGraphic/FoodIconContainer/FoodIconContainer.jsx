import React from 'react';
import WheatIcon from '../../../../assets/img/icons/wheat_color.png';
import CornIcon from '../../../../assets/img/icons/corn_color.png';
import soyIcon from '../../../../assets/img/icons/soy_color.png';
import WheatIconRed from '../../../../assets/img/icons/wheat_color_red.png';
import CornIconRed from '../../../../assets/img/icons/corn_color_red.png';
import soyIconRed from '../../../../assets/img/icons/soy_color_red.png';
import './FoodIconContainer.css';

const FoodIconContainer = ({
  wheatWidth,
  wheatHeight,
  minWheatHeight,
  minwheatWidth,
  maxWheatHeight,
  maxdWheatWidth,
  name,
  meatColor,
  altText
}) => {

    let url = null

  if (name === 'wheat' && meatColor === false) {
    url = WheatIcon
  } else if(name === 'corn' && meatColor === false) {
    url = CornIcon
  } else if(name === 'soy' && meatColor === false) {
    url = soyIcon
  } else if(name === 'wheat' && meatColor === true) {
    url = WheatIconRed
  } else if(name === 'corn' && meatColor === true) {
    url = CornIconRed
  } else if(name === 'soy' && meatColor === true) {
    url = soyIconRed
  } 
 
  return (
    <div
      className="food-icon-container"
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
        transition: 'background-image 0.5s ease-in-out',
      }}
      alt={altText}
    >    
    </div>
  );
};

export default FoodIconContainer;
