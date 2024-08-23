import './App.css';
import DevelopmentProductionCharts from './components/DevelopmentProductionCharts/DevelopmentProductionCharts';
import ComparisonPoorRichGraphic from './components/ComparisonPoorRichGraphic/ComparisonPoorRichGraphic';
import MeatProducedChart from './components/MeatProducedChart/MeatProducedChart'


function App() {

  return (
    <>
      <MeatProducedChart />
      <DevelopmentProductionCharts />
      <ComparisonPoorRichGraphic />
    </>
  )
}

export default App;
