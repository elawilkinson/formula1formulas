import React, {useState} from "react";

import './App.css';
import { rankings } from "../../libs/rankings2021.js";
import RequestData from '../RequestData/requestdata.js';
import StatsDisplay from "../StatsDisplay/statsdisplay.js";


function App() {

  const [showRanking, setShowRanking] = useState(false)

  let listings = []
  let teamPos = "";
  for(let i=0; i<rankings.length; i++){
      teamPos = `#${rankings[i].position} : ${rankings[i].team.name}`
      listings.push(teamPos)
  }


  
  return (
    <div className="App">
      <RequestData listings={listings} setShowRanking={setShowRanking}/>
      {showRanking ? (
        <StatsDisplay listings={listings} setShowRanking={setShowRanking}/>
      ) : <></>}
    </div>
  );
}

export default App;
