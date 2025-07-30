import WheatIcon from '/assets/img/icons/wheat_color.png'
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
      className="wheat-icon-container"
      style={{
        width: wheatWidth,
        height: wheatHeight,
        minWidth: minwheatWidth,
        minHeight: minWheatHeight,
        maxWidth: maxdWheatWidth,
        maxHeight: maxWheatHeight,
        backgroundImage: `url(${WheatIcon})`,
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: 'cover',

      }}
    >    
    </div>
  );
};

export default WheatIconContainer;
