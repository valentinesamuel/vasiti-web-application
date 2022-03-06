import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import './App.scss'
import HeroTestimony from "./components/HeroTestimony";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Testifier from "./components/Testifier";
import testimonyData from './data/testifier-data'
import { useState } from "react";
import heroTestimonyData from "./data/hero-testifier-data"

function App() {
  let [testimonialList, setTestimonialList] = useState(testimonyData.slice(2))
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeroTestimony heroTestimony={heroTestimonyData[0]} />
      <div className="testifier-box">
        {testimonyData.map((individualTestimony, index) => {
          return <Testifier key={index} testimony={individualTestimony} />
        })}
      </div>
      
      <HeroTestimony heroTestimony={heroTestimonyData [1]} />
       
      <div className="testifier-box">
        {testimonialList.map((individualTestimony, index) => {
          return <Testifier key={index} testimony={individualTestimony} />
        })}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
