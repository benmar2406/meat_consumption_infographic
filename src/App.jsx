import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DevelopmentProductionCharts from './components/DevelopmentProductionCharts/DevelopmentProductionCharts';
import ComparisonPoorRichGraphic from './components/ComparisonPoorRichGraphic/ComparisonPoorRichGraphic';
import MeatProducedGraphic from './components/MeatProducedGraphic/MeatProducedGraphic'
import ProductionTimeline from './components/ProductionTimeline/ProductionTimeline'
import data from './data/production_global.json';
import Soil from './components/Soil/Soil';
import WaterPollution from './components/WaterPollution/WaterPollution'
import WaterRessources from './components/WaterRessources/WaterRessources'
import RessourcesIntro from './components/RessourcesIntro/RessourcesIntro';
import WaterRessourcesOneKg from './components/WaterRessources/WaterRessourcesOneKg/WaterRessourcesOneKg';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import FoodRessources from './components/FoodRessources/FoodRessources';
import FoodRessourcesOneKg from './components/FoodRessources/FoodRessourcesOneKg/FoodRessourcesOneKg'; 
import EnvironmentalImpact from './components/EnvironmentalImpact/EnvironmentalImpact.jsx'
import FoodRessourcesConclusion1 from './components/FoodRessources/FoodRessourcesConclusion1/FoodRessourcesConclusion1.jsx'
import FoodRessourcesConclusion2 from './components/FoodRessources/FoodRessourcesConclusion2/FoodRessourcesConclusion2.jsx'
import Sources from './components/Sources/Sources'
import Imprint from './components/Imprint/Imprint'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <MeatProducedGraphic />
                <Intro />
                <EnvironmentalImpact />
                <Soil />
                <WaterPollution />
                <ProductionTimeline data={data}/>
                <DevelopmentProductionCharts />
                <ComparisonPoorRichGraphic />
                <RessourcesIntro />
                <WaterRessources />
                <WaterRessourcesOneKg />
                <FoodRessources />
                <FoodRessourcesConclusion1 />
                <FoodRessourcesOneKg />
                <FoodRessourcesConclusion2 />
              </>
            } 
          />
          <Route
            path="/sources"
            element={<Sources />}
          />
          <Route
            path="/imprint"
            element={<Imprint />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
