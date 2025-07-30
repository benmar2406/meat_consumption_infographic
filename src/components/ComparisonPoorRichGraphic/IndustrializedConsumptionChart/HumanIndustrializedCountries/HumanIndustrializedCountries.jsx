import { useTranslation } from 'react-i18next';
import Human from '/assets/img/icons/human_rich.png'

const HumanIndustrializedCountries = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="info-box">
      <img className='icon' src={Human} alt="human-icon"/>
        <p className='info-text info-text-rich'>{t('comparisonPoorRich.descriptionHighHigher')}</p>
      </div>
  );
};
  
export default HumanIndustrializedCountries;
  