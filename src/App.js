
import React from "react";
import Landing from "./components/landing";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Reglogin from "./components/reglogin";
import Categorywomen from "./components/categorywomen";
import Categorymen from "./components/categorymen";
import Bags from "./components/bags";
import Sunglasses from "./components/sunglasses";
import Dress from "./components/Dress";
import Tops from "./components/Tops";
import Shirts from "./components/Shirts";
import Mjeans from "./components/mjeans";
import Wsunglass from "./components/wsunglass";
import Wbags from "./components/wbags";
import Payment from "./components/payment";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Reglogin/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/categorywomen" element={<Categorywomen/>}/>
        <Route path="/categorymen" element={<Categorymen/>}/>
        <Route path="/bags" element={<Bags/>}/>
        <Route path="/sunglasses" element={<Sunglasses/>}/>
        <Route path="/dress" element={<Dress/>}/>
        <Route path="/tops" element={<Tops/>}/>
        <Route path="/shirts" element={<Shirts/>}/>
        <Route path="/mjeans" element={<Mjeans/>}/>
        <Route path="/wsunglass" element={<Wsunglass/>}/>
        <Route path="/wbags" element={<Wbags/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
