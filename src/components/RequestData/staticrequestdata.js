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

  useEffect(() => {
      setTeamListings(teams)
      setDriverListings(drivers)
 
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
        console.log('options')
    }

    return(
        <>
            <div id="home-buttons-container">            
              <AwesomeButton type="anchor" onPress={getConsStats}> 2021 | Constructor rankings </AwesomeButton>
              <AwesomeButton type="anchor" onPress={getDriverStats}> 2021 | Driver rankings </AwesomeButton>
              <AwesomeButton type="anchor" onPress={showOptions}> Data dives </AwesomeButton>
            </div>
            {showRanking ? (
              <div id="stats-display-area">
                <StatsDisplay 
                  teamListings={teamListings} 
                  driverListings={driverListings}
                  showCons={showCons}
                  showDriver={showDriver} 
                  setShowRanking={setShowRanking}/>
              </div>
            ) : <></>}
        </>
    )
}

export default StaticRequestData;