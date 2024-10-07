import React from 'react';
import './WaterIconContainer.css';

const WaterIconContainer = ({
  dropWidth,
  dropHeight,
  mindropHeight,
  mindropWidth,
  maxdropHeight,
  maxdropWidth,
  altText,
  dropFill
}) => {
  return (
    <div
      className="water-icon-container"
      style={{
        width: dropWidth,
        height: dropHeight,
        minWidth: mindropWidth,
        minHeight: mindropHeight,
        maxWidth: maxdropWidth,
        maxHeight: maxdropHeight,
      }}
    >
      <svg
        className="water-icon"
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        alt={altText}
      >
        <path
        className="water-icon-path"
          d="M32 4 C20 20, 12 32, 12 44 C12 54.4934, 21.5066 64, 32 64 C42.4934 64, 52 54.4934, 52 44 C52 32, 44 20, 32 4 Z"
          fill={dropFill}
        />
      </svg>
    </div>
  );
};

export default WaterIconContainer;
