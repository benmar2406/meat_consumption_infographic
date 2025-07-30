import React from "react";
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import DevelopmentProductionCharts from '../DevelopmentProductionCharts/DevelopmentProductionCharts';
import ComparisonPoorRichGraphic from '../ComparisonPoorRichGraphic/ComparisonPoorRichGraphic';
import MeatProducedGraphic from '../MeatProducedGraphic/MeatProducedGraphic'
import ProductionTimeline from '../ProductionTimeline/ProductionTimeline'
import data from '../../data/production_global.json';
import Soil from '../Soil/Soil';
import WaterPollution from '../WaterPollution/WaterPollution';
import WaterRessources from '../WaterRessources/WaterRessources';
import RessourcesIntro from '../RessourcesIntro/RessourcesIntro';
import WaterRessourcesOneKg from '../WaterRessources/WaterRessourcesOneKg/WaterRessourcesOneKg';
import Intro from '../Intro/Intro';
import Navigation from '../Navigation/Navigation';
import FoodRessources from '../FoodRessources/FoodRessources';
import FoodRessourcesOneKg from '../FoodRessources/FoodRessourcesOneKg/FoodRessourcesOneKg'; 
import EnvironmentalImpact from '../EnvironmentalImpact/EnvironmentalImpact';
import FoodRessourcesConclusion2 from '../FoodRessources/FoodRessourcesConclusion2/FoodRessourcesConclusion2';
import ImprintLink from '../Imprint/ImprintLink';
import Emissions from '../Emissions/Emissions';
import PersonalConsumption from '../PersonalConsumption/PersonalConsumption'

const Main = ({ mobile })  => {


    return(
    <>
        <Navigation />
        <LanguageToggle/>
        <MeatProducedGraphic />
        <Intro />
        <EnvironmentalImpact />
        <Soil />
        <WaterPollution />
        <ProductionTimeline data={data}/>
        <DevelopmentProductionCharts />
        <ComparisonPoorRichGraphic />
        <RessourcesIntro />
        <Emissions />
        <WaterRessources />
        <WaterRessourcesOneKg />
        <FoodRessources />
        <FoodRessourcesOneKg />
        <FoodRessourcesConclusion2 />
        <PersonalConsumption />
        <ImprintLink/>
    </>
    )

}

export default Main;

