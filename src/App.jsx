import './App.css';
import DevelopmentProductionCharts from './components/DevelopmentProductionCharts/DevelopmentProductionCharts';
import ComparisonPoorRichGraphic from './components/ComparisonPoorRichGraphic/ComparisonPoorRichGraphic';
import MeatProducedGraphic from './components/MeatProducedGraphic/MeatProducedGraphic'
import ProductionTimeline from './components/ProductionTimeline/ProductionTimeline'
import data from './data/production_global.json';
import EnvironmentalImpact from './components/EnvironmentalImpact/EnvironmentalImpact';
import Soil from './components/Soil/Soil'
import WaterPollution from './components/WaterPollution/WaterPollution'
import WaterRessources from './components/WaterRessources/WaterRessources'
import RessourcesIntro from './components/RessourcesIntro/RessourcesIntro';

function App() {

  return (
    <>
      <MeatProducedGraphic />
      <ProductionTimeline data={data}/>
      <DevelopmentProductionCharts />
      <ComparisonPoorRichGraphic />
      <RessourcesIntro />
      <WaterRessources />
      <WaterPollution />
      <Soil />
    </>
  )
}

export default App;
