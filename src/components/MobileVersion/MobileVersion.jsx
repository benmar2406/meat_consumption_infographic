import { useTranslation } from 'react-i18next';
import './MobileVersion.css';

const MobileVersion = () => {

    const { t } = useTranslation();

    return (
        <section className='mobile-headline-section'>
            <div className='mobile-headline-container' dangerouslySetInnerHTML={{__html: t('mobileWarning')}}>  
            </div>
        </section>
    );
};

export default MobileVersion;
