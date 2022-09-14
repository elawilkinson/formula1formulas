import React, {useState, useEffect} from "react";

import './App.css';

import RequestData from '../RequestData/requestdata.js';
import StatsDisplay from "../StatsDisplay/statsdisplay.js";


function App() {

  const [showRanking, setShowRanking] = useState(false)
  const [listings, setListings] = useState([])
  const url = 'https://api-formula-1.p.rapidapi.com/rankings/teams?season=2021';

  const getListings = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(url, getListings)
      .then(res => res.json())
      .then(json => setListings(json.response))
      .catch(err => console.error('error:' + err));
  
  }, [])
 
  console.log(listings)


  
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
