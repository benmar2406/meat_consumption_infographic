import React from 'react';
import WheatIcon from '../../assets/img/icons/wheat_color.png'
import './WheatIconContainer.css';


const WheatIconContainer = ({
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
      className="water-icon-container"
      style={{
        width: wheatWidth,
        height: wheatHeight,
        minWidth: minwheatWidth,
        minHeight: minWheatHeight,
        maxWidth: maxdWheatWidth,
        maxHeight: maxWheatHeight,
        backgroundImage: WheatIcon
      }}
    >
    </div>
  );
};

export default WheatIconContainer;
