import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import './App.scss'
import HeroTestimony from "./components/HeroTestimony";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeroTestimony/>
      <HeroTestimony />
      <Newsletter/>
    </div>
  );
}

export default App;
