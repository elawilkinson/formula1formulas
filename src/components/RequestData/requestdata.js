import React, {useState, useEffect} from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import * as smoothscroll from "smoothscroll-polyfill";

import StatsDisplay from "../StatsDisplay/statsdisplay.js";

function RequestData () {

    const [showRanking, setShowRanking] = useState(false);
    const [showCons, setShowCons] = useState(false);
    const [showDriver, setShowDriver] = useState(false);
    const [showMoreData, setShowMoreData] = useState(false)
    const [teamListings, setTeamListings] = useState([]);
    const [driverListings, setDriverListings] = useState([]);
    const constructorsUrl = 'https://api-formula-1.p.rapidapi.com/rankings/teams?season=2021';
    const driversUrl = 'https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2021';
    
    smoothscroll.polyfill();

  const getListings = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(constructorsUrl, getListings)
      .then(res => res.json())
      .then(json => setTeamListings(json.response))
      .catch(err => console.error('error:' + err));

      fetch(driversUrl, getListings)
      .then(res => res.json())
      .then(json => setDriverListings(json.response))
      .catch(err => console.error('error:' + err));
  
  }, [])

    function getConsStats(){
        setShowRanking(true)
        setShowCons(true)
        setShowDriver(false)
        setShowMoreData(false)
    }

    function getDriverStats(){
      setShowRanking(true)
      setShowCons(false)
      setShowDriver(true)
      setShowMoreData(false)
  }

    function showDatasetOptions(){
      setShowMoreData(true)
      setShowRanking(true)
      setShowCons(false)
      setShowDriver(false)
    }

    return(
        <>
            <div id="home-buttons-container">            
              <a href="#stats-display-area">          
                  <AwesomeButton type="anchor" onPress={getConsStats}> <span className="data-buttons"> 2021 | Constructor rankings </span> </AwesomeButton>
                </a>
                <a href="#stats-display-area">   
                  <AwesomeButton type="anchor" onPress={getDriverStats}> <span className="data-buttons"> 2021 | Driver rankings </span> </AwesomeButton>
                </a>
                <a href="#stats-display-area">     
                  <AwesomeButton type="anchor" onPress={showDatasetOptions}> <span className="data-buttons"> Data dives </span> </AwesomeButton>
                </a> 
            </div>
            {showRanking ? (
              <div id="stats-display-area">
                <StatsDisplay 
                  teamListings={teamListings} 
                  driverListings={driverListings}
                  showCons={showCons}
                  showDriver={showDriver} 
                  showMoreData={showMoreData}
                  setShowRanking={setShowRanking}/>
              </div>
            ) : <></>}
        </>
    )
}

export default RequestData;