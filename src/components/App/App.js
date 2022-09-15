import React from "react";

import './App.css';
import LandingInfo from "../LandingInfo/landinginfo.js";
import RequestData from '../RequestData/requestdata.js';

function App() {  
  
  return (
    <div className="App">
      <LandingInfo />
      <RequestData/>
    </div>
  );
}

export default App;
