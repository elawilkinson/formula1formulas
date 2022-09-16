import React, {useState, useEffect} from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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
    }

    function getDriverStats(){
      setShowRanking(true)
      setShowCons(false)
      setShowDriver(true)
  }

    function showOptions(){
        setShowMoreData(true)
    }

    return(
        <>
            <div id="home-buttons-container">            
              <AwesomeButton  type="anchor" onPress={getConsStats}> <span className="home-data-options"> 2021 | Constructor rankings </span> </AwesomeButton>
              <AwesomeButton  type="anchor" onPress={getDriverStats}> <span className="home-data-options"> 2021 | Driver rankings</span>  </AwesomeButton>
              <AwesomeButton type="anchor" onPress={showOptions}> <span className="home-data-options"> Data dives </span> </AwesomeButton>
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