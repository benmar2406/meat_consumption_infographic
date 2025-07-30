import './EmissionIconContainer.css';
import emissionIcon from '/assets/img/icons/cloud.png'
import emissionIconGreen from '/assets/img/icons/cloud_green.png'

const EmissionIconContainer = ({
  emissionIconWidth, 
  emissionIconHeight, 
  minemissionIconbHeight, 
  maxemissionIconHeight, 
  maxemissionIconWidth,
  meat
}) => {
  return (
    <div
      className="emission-icon-container"
      style={{
        width: emissionIconWidth,
        height: emissionIconHeight,
        minWidth: minemissionIconbHeight,
        minHeight: minemissionIconbHeight,
        maxWidth: maxemissionIconWidth,
        maxHeight: maxemissionIconHeight,
      }}
    >
      <img 
        className='emission-icon' 
        src={meat ? emissionIcon : emissionIconGreen}  
        alt="1kg of kg CO₂e" 
      />
    </div>
  );
};

export default EmissionIconContainer;
