
import React from "react";
import Landing from "./components/landing";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Reglogin from "./components/reglogin";
import Categorywomen from "./components/categorywomen";
import Categorymen from "./components/categorymen";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/reglogin" element={<Reglogin/>}/>
        <Route path="/categorywomen" element={<Categorywomen/>}/>
        <Route path="/categorymen" element={<Categorymen/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
