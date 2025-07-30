import MeatIcon from '/assets/img/icons/meat.png'
import './MeatIconContainer.css'

const MeatIconContainer = () => {

  return (
    <div className='meat-icon-container'>
      <img className='meat-icon' src={MeatIcon} alt="1kg of meat" />
    </div>
  );
};

export default MeatIconContainer;
