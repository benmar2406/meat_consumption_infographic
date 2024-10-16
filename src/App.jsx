import './App.css';
import DevelopmentProductionCharts from './components/DevelopmentProductionCharts/DevelopmentProductionCharts';
import ComparisonPoorRichGraphic from './components/ComparisonPoorRichGraphic/ComparisonPoorRichGraphic';
import MeatProducedGraphic from './components/MeatProducedGraphic/MeatProducedGraphic'
import ProductionTimeline from './components/ProductionTimeline/ProductionTimeline'
import data from './data/production_global.json';
import Soil from './components/Soil/Soil'
import WaterPollution from './components/WaterPollution/WaterPollution'
import WaterRessources from './components/WaterRessources/WaterRessources'
import RessourcesIntro from './components/RessourcesIntro/RessourcesIntro';
import WaterRessourcesOneKg from './components/WaterRessources/WaterRessourcesOneKg/WaterRessourcesOneKg';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import FoodRessources from './components/FoodRessources/FoodRessources';


function App() {

  return (
    <>
      <Navigation />
      <MeatProducedGraphic />
      <Intro />
      <ProductionTimeline data={data}/>
      <DevelopmentProductionCharts />
      <ComparisonPoorRichGraphic />
      <RessourcesIntro />
      <WaterRessources />
      <WaterPollution />
      <WaterRessourcesOneKg />
      <FoodRessources />
      <Soil />
    </>
  )
}

export default App;
