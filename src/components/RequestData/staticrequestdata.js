import React, {useState, useEffect} from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import StatsDisplay from "../StatsDisplay/statsdisplay.js";
import { teams } from '../../libs/rankings2021.js';
import { drivers } from '../../libs/drivers.js';

function StaticRequestData () {

    const [showRanking, setShowRanking] = useState(false);
    const [showCons, setShowCons] = useState(false);
    const [showDriver, setShowDriver] = useState(false);
    const [teamListings, setTeamListings] = useState([]);
    const [driverListings, setDriverListings] = useState([]);
    const [showMoreData, setShowMoreData] = useState(false)

  useEffect(() => {
      setTeamListings(teams)
      setDriverListings(drivers)
 
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

    function showOptions(){
      setShowMoreData(true)
      setShowRanking(true)
      setShowCons(false)
      setShowDriver(false)
    }

    return(
        <>
            <div id="home-buttons-container"> 
              <a href="#stats-display-area">          
                <AwesomeButton type="anchor" onPress={getConsStats}> <span className="data-buttons" > 2021 | Constructor rankings </span> </AwesomeButton>
              </a>
              <a href="#stats-display-area">   
                <AwesomeButton type="anchor" onPress={getDriverStats}> <span className="data-buttons" > 2021 | Driver rankings </span> </AwesomeButton>
              </a>
              <a href="#stats-display-area">     
                <AwesomeButton type="anchor" onPress={showOptions}> <span className="data-buttons" >Data dives</span> </AwesomeButton>
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

export default StaticRequestData;