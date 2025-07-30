import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './Sources.css';


const Sources = () => {

    const { t, i18n } = useTranslation();

    return(
        <Element name='sources'>
            <Helmet>
                <title>1kg - {t('sources.title')}</title>
            </Helmet>
            <aside>
                <section>
                    <header>
                        <h2 className='sources-title'>Sources & Credits</h2>
                    </header>
                    <ul className='sources-list'>
                        <li><a href="https://benediktmartini.de/Sources/Environmental_Impacts.html" target="_blank">{t('sources.source1')}</a></li>
                        <li><a href="https://benediktmartini.de/Sources/Emissions_Data.html" target="_blank">{t('sources.source6')}</a></li>
                        <li><a href="https://benediktmartini.de/Sources/meat_consumption_analysis.html" target="_blank">{t('sources.source2')}</a></li>
                        <li><a href="https://benediktmartini.de/Sources/Water_Data.html" target="_blank">{t('sources.source4')}</a></li>
                        <li><a href="https://benediktmartini.de/Sources/Food_Data.html" target="_blank">{t('sources.source5')}</a></li>
                    </ul>
                    <header>
                        <h2 className='sources-title'>Icons</h2>
                    </header>
                    <ul className='sources-list'>
                        <li><a href="https://www.flaticon.com/free-icons/meat" target="_blank">Meat icons created by Chanut-is-Industries - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/man-avatar" target="_blank">Man avatar icons created by Icon mania - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/people" target="_blank">People icons created by Pixel perfect - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/money" target="_blank">Money icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/user" target="_blank">User icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/leaf" target="_blank">Leaf icons created by Pixel perfect - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/water-drop" target="_blank">Water drop icons created by Creative Stall Premium - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/cow" target="_blank">Cow icons created by PLANBSTUDIO - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/pig" target="_blank">Pig icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/soya" target="_blank">Soya icons created by Sudowoodo - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/corn" target="_blank">Corn icons created by Freepik - Flaticon</a></li>
                        <li><a href="https://www.flaticon.com/free-icons/car" target="_blank">Car icons created by Hight Quality Icons - Flaticon</a></li>
                    </ul>
                    <header>
                        <h2 className='sources-title'>Photographies</h2>
                    </header>
                    <ul className='sources-list'>
                        <li><a href="https://unsplash.com/de/fotos/aerial-view-of-two-harvesters-on-brown-field-xaSM1R157vI" target="_blank">two harvesters on brown field - Unsplash</a></li>
                        <li><a href="https://unsplash.com/de/fotos/eine-nahaufnahme-des-fells-eines-tieres-wsbO81iLCI4" target="_blank">close-up of animal fur - Unsplash</a></li>
                        <li><a href="https://unsplash.com/de/fotos/nahaufnahme-einer-rissigen-felsoberflache-pCTu_3uxn1c" target="_blank">close-up of cracked rock - Unsplash</a></li>
                        <li><a href="https://unsplash.com/de/fotos/weisses-und-schwarzes-schiff-auf-see-unter-weissen-wolken-TUJud0AWAPI" target="_blank">white and black ship at sea - Unsplash</a></li>
                        <li><a href="https://unsplash.com/de/fotos/ein-mann-in-einer-kuche-bereitet-essen-auf-einem-grill-zu-0j476dCG2T8" target="_blank">man cooking on grill in kitchen - Unsplash</a></li>
                    </ul>



                </section>    
            </aside>
        </Element> 

    )
}

export default Sources;