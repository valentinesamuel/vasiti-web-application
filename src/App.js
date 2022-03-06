import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import './App.scss'
import HeroTestimony from "./components/HeroTestimony";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeroTestimony/>
    </div>
  );
}

export default App;
