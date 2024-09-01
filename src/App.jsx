import './App.css';
import DevelopmentProductionCharts from './components/DevelopmentProductionCharts/DevelopmentProductionCharts';
import ComparisonPoorRichGraphic from './components/ComparisonPoorRichGraphic/ComparisonPoorRichGraphic';
import MeatProducedGraphic from './components/MeatProducedGraphic/MeatProducedGraphic'
import ProductionTimeline from './components/ProductionTimeline/ProductionTimeline'
import data from './data/production_global.json';
import EnvironmentalImpact from './components/EnvironmentalImpact/EnvironmentalImpact';
import LandAllocation from './components/EnvironmentalImpact/LandAllocation/LandAllocation'

function App() {

  return (
    <>
      <LandAllocation />
      <MeatProducedGraphic />
      <ProductionTimeline data={data}/>
      <DevelopmentProductionCharts />
      <ComparisonPoorRichGraphic />
      <EnvironmentalImpact />
      
    </>
  )
}

export default App;
