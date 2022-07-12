import React from "react";
import {Routes,Route} from "react-router-dom";
import Contact from "./routes/Contact"
import Faq from "./routes/Faq";
import Home from "./components/Home";
import PricingR from "./routes/PricingR";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/pricing" element={<PricingR />}/> 
        <Route path="/faq" element={<Faq />}/> 
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
