import { useTranslation } from 'react-i18next';
import MeatIcon from '/assets/img/icons/meat.png'
import './MeatIconContainer.css'

const MeatIconContainer = () => {

  const { t } = useTranslation();

  return (
    <div className='meat-icon-container'>
      <img className='meat-icon' src={MeatIcon} alt={t('types.beef')} />
    </div>
  );
};

export default MeatIconContainer;
