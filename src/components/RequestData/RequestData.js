import React, {useState, useEffect} from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import * as smoothscroll from "smoothscroll-polyfill";

import StatsDisplay from '../StatsDisplay/StatsDisplay.js';

function RequestData () {

    const [showRanking, setShowRanking] = useState(false);
    const [showCons, setShowCons] = useState(false);
    const [showDriver, setShowDriver] = useState(false);
    const [showMoreData, setShowMoreData] = useState(false);
    const [teamHistory, setTeamHistory] = useState([])
    const [teamListings, setTeamListings] = useState([]);
    const [driverListings, setDriverListings] = useState([]);
    const [raceListings, setRaceListings] = useState([]);
    const teamHistoryUrl = 'https://api-formula-1.p.rapidapi.com/teams';
    const constructorsUrl = 'https://api-formula-1.p.rapidapi.com/rankings/teams?season=2021';
    const driversUrl = 'https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2021';
    const raceUrl = 'https://api-formula-1.p.rapidapi.com/races?season=2021'
    
    
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

    fetch(raceUrl, getListings)
      .then(res => res.json())
      .then(json => setRaceListings(json.response))
      .catch(err => console.error('error:' + err));
  }, [])

  // This fetch request is outside of the useEffect block, as running them all together results in a 429 error response (too many requests to the server in 1 minute)
  async function getTeamHistory () {
    await fetch(teamHistoryUrl, getListings)
        .then(res => res.json())
        .then(json => setTeamHistory(json.response))
        .catch(err => console.error('error:' + err));
  }

  const handleClick = async () => {
    console.log('data')
    await getTeamHistory()
  }

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
      handleClick()
      setShowMoreData(true)
      setShowRanking(true)
      setShowCons(false)
      setShowDriver(false)
    }

    return(
        <>
            <div id="home-buttons-container">   

            {/* These buttons have anchor tags to allow them to integrate with smoothscroll        */}
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
                  raceListings={raceListings}
                  teamHistory={teamHistory}
                  showCons={showCons}
                  showDriver={showDriver} 
                  showMoreData={showMoreData}
                  />
              </div>
            ) : <></>}
        </>
    )
}

export default RequestData;