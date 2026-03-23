import { Suspense } from 'react';
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navber from './Components/Navber/Navber';
import Pricing from './Components/PricingOptions/Pricing';
import ResultCharts from './Components/ResultChart/ResultCharts';

const PricingPromise = fetch('PricingData.json').then (res => res.json());

function App() {

  return (
    <>
    <header>
      <Navber />
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Pricing PricingPromise={PricingPromise}/>
      </Suspense>

      <ResultCharts />
    {/* <DaisyNav /> */}
    </header>
    </>
  )
}

export default App;
