import './App.css';
import DevelopmentProductionCharts from './components/DevelopmentProductionCharts/DevelopmentProductionCharts';
import ComparisonPoorRichGraphic from './components/ComparisonPoorRichGraphic/ComparisonPoorRichGraphic';
import MeatProducedChart from './components/MeatProducedChart/MeatProducedChart'
import ProductionTimeline from './components/ProductionTimeLine/ProductionTimeLine'
import data from './data/production_global.json';


function App() {

  return (
    <>
      <MeatProducedChart />
      <ProductionTimeline data={data}/>
      <DevelopmentProductionCharts />
      <ComparisonPoorRichGraphic />
      
    </>
  )
}

export default App;
