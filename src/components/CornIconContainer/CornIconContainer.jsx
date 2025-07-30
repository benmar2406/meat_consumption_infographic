import CornIcon from '/assets/img/icons/corn_color.png'
import './CornIconContainer.css';


const CornIconContainer = ({
  cornWidth, 
  cornHeight, 
  minCornHeight, 
  minCornWidth, 
  maxCornHeight, 
  maxCornWidth
}) => {
  return (
    <div
      className="corn-icon-container"
      style={{
        width: cornWidth,
        height: cornHeight,
        minWidth: minCornWidth,
        minHeight: minCornHeight,
        maxWidth: maxCornWidth,
        maxHeight: maxCornHeight,
        backgroundImage: `url(${CornIcon})`,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',

      }}
    >    
    </div>
  );
};

export default CornIconContainer;
