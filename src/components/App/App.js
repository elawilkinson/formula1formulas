import React from "react";

import './App.css';
import LandingInfo from "../LandingInfo/landinginfo.js";
import RequestData from '../RequestData/requestdata.js';
import StaticRequestData from "../RequestData/staticrequestdata.js";

function App() {  
  
  return (
    <div className="App">
      <LandingInfo />
      <StaticRequestData />
      {/* <RequestData/> */}
    </div>
  );
}

export default App;
