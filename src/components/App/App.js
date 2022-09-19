import React from "react";

import './App.css';
import LandingInfo from "../LandingInfo/landinginfo.js";
import RequestData from '../RequestData/requestdata.js'; // *DUE TO API REQUEST LIMITS, FOR DEVELOPMENT PURPOSES: THIS LINE CAN BE COMMENTED OUT, AND STATIC DATA RETRIEVED INSTEAD. FURTHER DETAILS ON README*
// import StaticRequestData from "../RequestData/staticrequestdata.js";

function App() {  
  
  return (
    <div className="App">
      <LandingInfo />
      {/* <StaticRequestData /> */}
      <RequestData/>
    </div>
  );
}

export default App;
